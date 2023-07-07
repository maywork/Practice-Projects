const navbar = document.querySelector('.navbar');

var lastScrollPos = 0;

window.addEventListener('scroll', () => {
  var scrollTop = window.pageYOffset;

  if (scrollTop > lastScrollPos) {
    navbar.style.transition = 'all .3s ease';
    navbar.style.transform = 'translateY(-1000%)'; 
  } else {
    navbar.style.transition = 'all .3s ease';
    navbar.style.transform = 'translateY(0)';
  }
  // lastScrollPos = scrollTop;
});