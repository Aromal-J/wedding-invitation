import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const imagesDir = './public/images';
const outputDir = './public/images-optimized';

async function optimizeImages() {
  try {
    const files = await readdir(imagesDir);
    
    console.log('🖼️  Optimizing images...\n');
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = join(imagesDir, file);
        // Convert to .jpg extension
        const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, '.jpg');
        const outputPath = join(outputDir, outputFile);
        
        console.log(`Processing: ${file}`);
        
        await sharp(inputPath)
          .resize(1920, null, { // Max width 1920px, maintain aspect ratio
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ 
            quality: 82, // Good quality, much smaller size
            progressive: true,
            mozjpeg: true
          })
          .toFile(outputPath);
        
        const stats = await sharp(outputPath).metadata();
        console.log(`✅ Saved: ${outputFile} (${Math.round(stats.size / 1024)} KB)\n`);
      }
    }
    
    console.log('✨ All images optimized! Check the images-optimized folder.');
    console.log('\n📝 Next steps:');
    console.log('1. Delete the old images folder');
    console.log('2. Rename images-optimized to images');
    console.log('3. Commit and push the changes');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();
