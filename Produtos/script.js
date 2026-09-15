window.addEventListener('scroll', function() {
  const header = document.getElementById('meu-header');
  
  if (window.scrollY > 150) {
    header.classList.add('rolado');
  } else {
    header.classList.remove('rolado');
  }
});