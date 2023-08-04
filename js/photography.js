const slideshow = document.getElementById('slideshow');
var slideshow_pos = slideshow.getBoundingClientRect().left;

window.addEventListener('resize', () => {
  slideshow_pos = slideshow.getBoundingClientRect().left;
});

const images = slideshow.children;
let shown = 0;

document.getElementById('next-btn').addEventListener('click', e => {
  shown = (shown + 1) % images.length;

  slideshow.scrollBy({
    left: images[shown].getBoundingClientRect().left - slideshow_pos,
    behavior: 'smooth',
  });
});

document.getElementById('prev-btn').addEventListener('click', e => {
  shown = shown > 0 ? shown - 1 : images.length - 1;

  slideshow.scrollBy({
    left: images[shown].getBoundingClientRect().left - slideshow_pos,
    behavior: 'smooth',
  });
});
