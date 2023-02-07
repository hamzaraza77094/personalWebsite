const toggleButton = document.querySelector('.toggle-button');
 const linkTag = document.querySelector('link');

 toggleButton.addEventListener('click', function() {
   if (linkTag.getAttribute('href') === 'css/index1.css') {
     linkTag.setAttribute('href', 'css/index2.css');
   } else {
     linkTag.setAttribute('href', 'css/index1.css');
   }
});