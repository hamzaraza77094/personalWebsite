const toggleButton = document.querySelector('.toggle-button');
 const linkTag = document.querySelector('link');

 toggleButton.addEventListener('click', function() {
   if (linkTag.getAttribute('href') === 'css/projects1.css') {
     linkTag.setAttribute('href', 'css/projects2.css');
   } else {
     linkTag.setAttribute('href', 'css/projects1.css');
   }
});