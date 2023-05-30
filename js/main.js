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
function createHSLString(hsl) {
  return `hsl(${hsl[0]}deg, ${hsl[1]}%, ${hsl[2]}%)`;
}

const hsl1 = [
  Math.floor(Math.random() * 360),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

const hsl2 = [
  Math.floor(Math.random() * 360),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

document.body.style.background = `linear-gradient(${createHSLString(
  hsl1
)}, ${createHSLString(hsl2)})`;

document.body.style.backgroundAttachment = 'fixed';

// setInterval(() => {
//   hsl1[0] += 1;
//   hsl2[0] -= 1;

//   document.body.style.background = `linear-gradient(${createHSLString(
//     hsl1
//   )}, ${createHSLString(hsl2)})`;
// }, 150);

// opacity animation
const elements = document.getElementsByClassName('opacity');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.opacity = 1;
}
