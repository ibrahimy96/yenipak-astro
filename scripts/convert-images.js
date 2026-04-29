import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images/products');

// Get all PNG files
const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png'));

console.log(`Found ${files.length} PNG files to convert...`);

files.forEach(file => {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
  
  console.log(`Converting ${file} to WebP...`);
  
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`✓ Converted ${file} to WebP`))
    .catch(err => console.error(`✗ Error converting ${file}:`, err));
});
