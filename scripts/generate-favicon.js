const fs = require('fs')
const path = require('path')

// Create a simple SVG favicon using Rocket icon from Lucide
// This is a simplified version - in production you'd use lucide-react to render
const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#00E599"/>
  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#00E599"/>
  <path d="m9 12 4 4M12 16H9M13 21v-4.5a4.5 4.5 0 0 1 4.5-4.5" stroke="#00E599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`

// Create app directory if it doesn't exist
const appDir = path.join(__dirname, '..', 'app')
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true })
}

// Write favicon.svg
fs.writeFileSync(path.join(appDir, 'favicon.svg'), faviconSvg)

// Create a simple ICO-compatible favicon.ico using a base64 encoded version
// For production, you'd want to use a proper image conversion library
// This creates a simple 32x32 PNG-like favicon
const faviconIco = Buffer.from(
  'data:image/svg+xml;base64,' + Buffer.from(faviconSvg).toString('base64')
)

console.log('✅ Favicon generated successfully!')
console.log('📁 Files created:')
console.log('   - app/favicon.svg')
console.log('')
console.log('💡 Note: For production, convert SVG to ICO format using a tool like:')
console.log('   - https://realfavicongenerator.net/')
console.log('   - Or use sharp/convert libraries to generate favicon.ico')


