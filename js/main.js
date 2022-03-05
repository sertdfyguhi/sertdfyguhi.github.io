function type(el, text, min=55, max=110) {
  let i = 0

  function loop() {
    el.textContent += text[i]
    i++

    if (i == text.length) return
    setTimeout(loop, Math.floor(Math.random() * (max - min)) + min)
  }

  loop()
}

// random gradient bg
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

document.body.style.background = `linear-gradient(0deg, rgb(${rgb1.join(', ')}), rgb(${rgb2.join(', ')}))`