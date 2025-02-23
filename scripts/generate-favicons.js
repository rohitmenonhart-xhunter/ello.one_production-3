import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  const logoPath = join(__dirname, '../public/logo.svg');
  const outputDir = join(__dirname, '../public');

  // Read the SVG file
  const logoBuffer = await fs.readFile(logoPath);

  // Generate favicon PNGs
  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512
  };

  for (const [filename, size] of Object.entries(sizes)) {
    const padding = size >= 180 ? Math.floor(size * 0.1) : 0; // 10% padding for larger icons
    const background = size >= 180 ? { r: 0, g: 0, b: 0, alpha: 1 } : { r: 0, g: 0, b: 0, alpha: 0 };

    await sharp(logoBuffer)
      .resize(size - (padding * 2), size - (padding * 2), {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background
      })
      .toFile(join(outputDir, filename));

    console.log(`Generated ${filename}`);
  }

  // Generate social media images
  const socialSizes = {
    'og-image.png': { width: 1200, height: 630 },
    'twitter-image.png': { width: 1200, height: 600 }
  };

  for (const [filename, dimensions] of Object.entries(socialSizes)) {
    const { width, height } = dimensions;
    const logoHeight = Math.floor(height * 0.2); // 20% of height
    const logoWidth = logoHeight; // Maintain aspect ratio
    const textSize = 60;

    // Create a new image with black background
    const image = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    });

    // Add the logo
    const resizedLogo = await sharp(logoBuffer)
      .resize(logoWidth, logoHeight, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Create text overlay using SVG
    const textSvg = `
      <svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ffffff"/>
            <stop offset="100%" style="stop-color:#939090"/>
          </linearGradient>
        </defs>
        <text 
          x="${width/2}" 
          y="${height/2}" 
          font-family="Helvetica Neue" 
          font-weight="200" 
          font-size="${textSize}px" 
          fill="url(#textGradient)" 
          text-anchor="middle" 
          alignment-baseline="middle"
        >
          ello.one
        </text>
      </svg>
    `;

    // Composite logo and text
    await image
      .composite([
        {
          input: resizedLogo,
          left: Math.floor(width * 0.2),
          top: Math.floor((height - logoHeight) / 2)
        },
        {
          input: Buffer.from(textSvg),
          left: 0,
          top: 0
        }
      ])
      .toFile(join(outputDir, filename));

    console.log(`Generated ${filename}`);
  }

  console.log('All images generated successfully!');
}

generateFavicons().catch(console.error); 