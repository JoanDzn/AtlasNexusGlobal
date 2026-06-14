const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '..', 'img');

if (!fs.existsSync(imgDir)) {
  console.error(`La carpeta img no existe en: ${imgDir}`);
  process.exit(1);
}

fs.readdir(imgDir, (err, files) => {
  if (err) {
    console.error(`Error al leer la carpeta img:`, err);
    process.exit(1);
  }

  // Filtrar archivos PNG y JPG
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  if (imageFiles.length === 0) {
    console.log('No se encontraron imágenes PNG o JPG para optimizar.');
    return;
  }

  console.log(`Encontradas ${imageFiles.length} imágenes. Iniciando optimización a WebP...`);

  let completedCount = 0;

  imageFiles.forEach(file => {
    const inputPath = path.join(imgDir, file);
    const outputFileName = path.basename(file, path.extname(file)) + '.webp';
    const outputPath = path.join(imgDir, outputFileName);

    sharp(inputPath)
      .webp({ quality: 80 }) // 80 es una excelente relación calidad/peso para web
      .toFile(outputPath)
      .then(info => {
        const inputSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(2);
        const outputSizeKB = (info.size / 1024).toFixed(2);
        const reduction = ((1 - (info.size / fs.statSync(inputPath).size)) * 100).toFixed(1);
        console.log(`✅ Optimizado: ${file} (${inputSizeKB} KB) -> ${outputFileName} (${outputSizeKB} KB) [Reducción del ${reduction}%]`);
        
        completedCount++;
        if (completedCount === imageFiles.length) {
          console.log('\n🎉 ¡Optimización de imágenes completada con éxito!');
        }
      })
      .catch(error => {
        console.error(`❌ Error al optimizar ${file}:`, error);
      });
  });
});
