const elements = document.getElementsByClassName('opacity')
for (let i = 0; i < elements.length; i++) {
  elements[i].style.opacity = 1
}

type(
  document.getElementById('header'),
  'projects'
)