const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/about1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/about1.css') {
    linkTag.setAttribute('href', 'css/about1.css');
    localStorage.setItem('css', 'css/about2.css');
  } else {
    linkTag.setAttribute('href', 'css/about1.css');
    localStorage.setItem('css', 'css/about1.css');
  }
});
