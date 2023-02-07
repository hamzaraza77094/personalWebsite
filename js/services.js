const toggleButton = document.querySelector('.toggle-button');
 const linkTag = document.querySelector('link');

 toggleButton.addEventListener('click', function() {
   if (linkTag.getAttribute('href') === 'css/services1.css') {
     linkTag.setAttribute('href', 'css/services2.css');
   } else {
     linkTag.setAttribute('href', 'css/services1.css');
   }
});