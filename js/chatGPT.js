const toggleButton = document.querySelector('.toggle-button');
 const linkTag = document.querySelector('link');

 toggleButton.addEventListener('click', function() {
   if (linkTag.getAttribute('href') === 'css/chatGPT1.css') {
     linkTag.setAttribute('href', 'css/chatGPT2.css');
   } else {
     linkTag.setAttribute('href', 'css/chatGPT1.css');
   }
});