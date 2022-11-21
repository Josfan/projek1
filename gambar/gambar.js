// Dapatkan semua gambar
image_array = [
  'anya.png',
  'aqua.png',
  'chloe.png',
  'gura.png',
  'iofi.png',
  'kaela.png',
  'kobo.png',
  'moona.png',
  'mythia.png',
  'ollie.png',
  'reine.png',
  'risu.png',
  'sakamata.png',
  'udin.png',
  'zeta.png'
]

function get_random_image(){
  // Dapatkan indeks acak
  random_index = Math.floor(Math.random() * image_array.length);

  // Dapatkan gambar di random_index
  selected_image = image_array[random_index]

  // Menampilkan gambar
  document.getElementById('image_shower').src = `./img/${selected_image}`
}
