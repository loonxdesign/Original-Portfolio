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

// HYBRID SCROLL
document.addEventListener('DOMContentLoaded', () => {
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical', // default direction
  });

  scroller.on('scroll', (args) => {
    // Dynamically adjust scroll direction based on the visibility of specific sections
    if (
      args.currentElements['home_section--2'] ||
      args.currentElements['home_section--3'] ||
      args.currentElements['home_section--4']
    ) {
      // Assuming these elements have been set to scroll horizontally in your HTML with data attributes
      scroller.update({ direction: 'horizontal' });
    } else {
      scroller.update({ direction: 'vertical' });
    }
  });
});

/* // BURGER MENU
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

// HORIZONTAL SCROLL
// Get the wrapper element
const wrapper = document.querySelector('.wrapper');

// Event listener for vertical scroll
window.addEventListener('wheel', (event) => {
  // Check if the wrapper is fully visible
  const wrapperRect = wrapper.getBoundingClientRect();
  const isWrapperFullyVisible =
    wrapperRect.top >= 0 &&
    wrapperRect.left >= 0 &&
    wrapperRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    wrapperRect.right <=
      (window.innerWidth || document.documentElement.clientWidth);

  // If the wrapper is fully visible, scroll horizontally
  if (isWrapperFullyVisible && event.deltaY !== 0) {
    event.preventDefault();
    wrapper.scrollLeft += event.deltaY;
  }
}); 
 */
