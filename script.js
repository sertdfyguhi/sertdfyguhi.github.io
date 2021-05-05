const gradients = [
  ['#4CA1AF', '#C4E0E5'],
  ['#4B79A1', '#283E51'],
  ['#2980b9', '#2c3e50'],
  ['#4DA0B0', '#D39D38'],
  ['#1e3c72', '#2a5298'],
  ['#6a3093', '#a044ff'],
  ['#00C9FF', '#92FE9D'],
  ['#f46b45', '#eea849'],
  ['#fc00ff', '#00dbde'],
  ['#2c3e50', '#3498db'],
  ['#525252', '#3d72b4'],
  ['#D1913C', '#FFD194'],
  ['#136a8a', '#267871'],
  ['#FEAC5E', '#4BC0C8'],
  ['#d649d1', '#d69949'],
]

function gradient() {
  const rn = Math.floor(Math.random() * gradients.length);
  document.body.style.background = `linear-gradient(90deg, ${gradients[rn][0]}, ${gradients[rn][1]})`
}

gradient()
