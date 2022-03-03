// background gradient
const rgb1 = [
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256)
]

const rgb2 = [
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256)
]

document.body.style.background = `linear-gradient(90deg, rgb(${rgb1.join(', ')}), rgb(${rgb2.join(', ')}))`

// typing
const el = document.getElementById('name')
const text = 'sertdfyguhi'
let i = 0

function loop() {
  el.innerText += text[i]
  i++

  if (i == text.length) return
  setTimeout(loop, Math.floor(Math.random() * 55) + 55)
}

loop()