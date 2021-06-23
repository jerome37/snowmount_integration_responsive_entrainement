const image = document.querySelector('.image-box');
const content = document.querySelector('.portfolio-content');

image.addEventListener('mouseover', function () {
  const open = JSON.parse(image.getAttribute('aria-expanded'));
  image.setAttribute('aria-expanded', !open);
  content.hidden = !content.hidden;

  if (!content.hidden) {
    content.querySelector('button').focus();
  }
});