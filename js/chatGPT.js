const toggleButton = document.querySelector('.toggle-button');
const linkTag = document.querySelector('link');

const currentCss = localStorage.getItem('css') || 'css/chatGPT1.css';

linkTag.setAttribute('href', currentCss);

toggleButton.addEventListener('click', function() {
  if (linkTag.getAttribute('href') === 'css/chatGPT1.css') {
    linkTag.setAttribute('href', 'css/chatGPT2.css');
    localStorage.setItem('css', 'css/chatGPT2.css');
  } else {
    linkTag.setAttribute('href', 'css/chatGPT1.css');
    localStorage.setItem('css', 'css/chatGPT1.css');
  }
});
