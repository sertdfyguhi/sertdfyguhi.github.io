function type(el, text, min = 55, max = 110) {
  let i = 0;

  function loop() {
    el.textContent += text[i];
    i++;

    if (i == text.length) return;
    setTimeout(loop, Math.floor(Math.random() * (max - min)) + min);
  }

  loop();
}

// random gradient bg
function createRGBString(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const rgb1 = [
  Math.floor(Math.random() * 360),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

const rgb2 = [
  Math.floor(Math.random() * 360),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

document.body.style.background = `linear-gradient(${createRGBString(
  rgb1
)}, ${createRGBString(rgb2)})`;

document.body.style.backgroundAttachment = 'fixed';

// opacity animation
const elements = document.getElementsByClassName('opacity');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.opacity = 1;
}
