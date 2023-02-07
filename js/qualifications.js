const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/qualifications1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/qualifications1.css') {
    linkTag.setAttribute('href', 'css/qualifications1.css');
    localStorage.setItem('css', 'css/qualifications2.css');
  } else {
    linkTag.setAttribute('href', 'css/qualifications1.css');
    localStorage.setItem('css', 'css/qualifications1.css');
  }
});
