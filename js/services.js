const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/services1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/services1.css') {
    linkTag.setAttribute('href', 'css/services1.css');
    localStorage.setItem('css', 'css/services2.css');
  } else {
    linkTag.setAttribute('href', 'css/services1.css');
    localStorage.setItem('css', 'css/services1.css');
  }
});
