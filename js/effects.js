document.addEventListener('DOMContentLoaded', () => {
  // BURGER MENU
  function toggleMenu() {
    const overlay = document.getElementById('overlay');
    const burgerMenu = document.querySelector('.burger-menu');

    if (overlay.style.display === 'block') {
      overlay.style.animation = 'slideOutRight 750ms ease forwards';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 750);
    } else {
      overlay.style.display = 'block';
      overlay.style.animation = 'slideInRight 750ms ease forwards';
    }

    burgerMenu.classList.toggle('active');
  }

  document.querySelector('.burger-menu').addEventListener('click', toggleMenu);
  document.getElementById('overlay').addEventListener('click', toggleMenu);

  // BACK TO TOP ARROW
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const interval = setInterval(() => {
      wrapper.scrollLeft -= 50; // Adjust the speed here
      if (wrapper.scrollLeft <= 0) {
        clearInterval(interval);
      }
    }, 10);
  }

  document.getElementById('backToTopBtn').addEventListener('click', backToTop);

  window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // HORIZONTAL SCROLL
  const wrapper = document.querySelector('.wrapper');
  const homeSections = document.querySelectorAll(
    '.home_section--wrapper .wrapper .home_section--2, .home_section--wrapper .wrapper .home_section--3, .home_section--wrapper .wrapper .home_section--4'
  );
  let startHorizontalScroll = false;
  let reverseScroll = false;
  let allowReverseScroll = false;

  const observerOptions = {
    root: null,
    threshold: 1.0,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === homeSections[0] && reverseScroll) {
          startHorizontalScroll = false;
          reverseScroll = false;
          allowReverseScroll = false;
        } else if (entry.target === homeSections[homeSections.length - 1]) {
          reverseScroll = true;
        } else if (entry.target === homeSections[0]) {
          startHorizontalScroll = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  homeSections.forEach((section) => observer.observe(section));

  const reverseObserverOptions = {
    root: null,
    threshold: 1.0,
  };

  const reverseObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === homeSections[homeSections.length - 1]) {
          allowReverseScroll = true;
        } else if (entry.target === homeSections[0]) {
          startHorizontalScroll = true;
        } else if (entry.target === homeSections[1]) {
          allowReverseScroll = false;
        }
      }
    });
  };

  const reverseObserver = new IntersectionObserver(
    reverseObserverCallback,
    reverseObserverOptions
  );

  homeSections.forEach((section) => reverseObserver.observe(section));

  window.addEventListener('wheel', (event) => {
    if (startHorizontalScroll && event.deltaY !== 0 && !reverseScroll) {
      event.preventDefault();
      wrapper.scrollLeft += event.deltaY;
    } else if (reverseScroll && allowReverseScroll && event.deltaY < 0) {
      event.preventDefault();
      wrapper.scrollLeft -= event.deltaY;
      const firstSectionVisible =
        homeSections[1].getBoundingClientRect().top < window.innerHeight;
      if (firstSectionVisible) {
        reverseScroll = false;
        startHorizontalScroll = true;
      }
    }
  });

  // Ensure manual scroll back completes correctly
  window.addEventListener('scroll', () => {
    const firstSectionVisible =
      homeSections[0].getBoundingClientRect().top >= 0;
    if (!firstSectionVisible) {
      startHorizontalScroll = true;
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
