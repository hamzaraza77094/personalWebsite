const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/index1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/index1.css') {
    linkTag.setAttribute('href', 'css/index1.css');
    localStorage.setItem('css', 'css/index2.css');
  } else {
    linkTag.setAttribute('href', 'css/index1.css');
    localStorage.setItem('css', 'css/index1.css');
  }
});
