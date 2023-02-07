const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/projects1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/projects1.css') {
    linkTag.setAttribute('href', 'css/projects1.css');
    localStorage.setItem('css', 'css/projects2.css');
  } else {
    linkTag.setAttribute('href', 'css/projects1.css');
    localStorage.setItem('css', 'css/projects1.css');
  }
});
