// BURGER MENU
function toggleMenu() {
  const overlay = document.getElementById('overlay');
  const burgerMenu = document.querySelector('.burger-menu');

  // Toggle overlay display
  if (overlay.style.display === 'block') {
    overlay.style.animation = 'slideOutRight 750ms ease forwards';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 750);
  } else {
    overlay.style.display = 'block';
    overlay.style.animation = 'slideInRight 750ms ease forwards';
  }

  // Toggle burger icon animation
  burgerMenu.classList.toggle('active');
}

// BACK TO TOP ARROW
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  // Reset horizontal scrolling
  const wrapper = document.querySelector('.wrapper');
  wrapper.scrollLeft = 0;
}

// Show back-to-top button when scrolling down
window.addEventListener('scroll', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

//HORIZONTAL SCROLL
