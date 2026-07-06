/* ==========================================
   DAPUR KARAENG LU'MU – INTERACTION SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- STICKY NAVBAR & BACK TO TOP ---
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollPos > 50);
    }

    if (backToTop) {
      backToTop.classList.toggle('visible', scrollPos > 300);
    }

    // Subtle parallax on floating shapes
    const shapes = document.querySelector('.floating-shapes');
    if (shapes) {
      shapes.style.transform = `translateY(${scrollPos * 0.04}px)`;
    }

    updateActiveLink();
  }, { passive: true });

  // Smooth scroll back to top when clicked
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- ACTIVE LINK UPDATE ---
  const sections = document.querySelectorAll('section, footer');
  const navLinksList = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let currentSectionId = 'beranda';
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const id = section.getAttribute('id');
        if (id) currentSectionId = id;
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}` || (currentSectionId === 'cta' && href === '#beranda')) {
        link.classList.add('active');
      }
    });
  }

  // --- SCROLL REVEAL ANIMATION ---
  const revealSelectors = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-zoom';
  const revealElements = document.querySelectorAll(revealSelectors);

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  // Run once initially
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // --- TESTIMONIALS SLIDER ---
  const track = document.getElementById('testimoniTrack');
  const cards = document.querySelectorAll('.testi-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('testiDots');

  if (track && cards.length > 0) {
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth;
    let gap = 24; // matches gap in CSS track

    // Responsive items count
    const getItemsPerScreen = () => {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    };

    const getMaxIndex = () => {
      return Math.max(0, cards.length - getItemsPerScreen());
    };

    // Generate indicator dots
    const updateDots = () => {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const totalDots = getMaxIndex() + 1;
      
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('testi-dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          slideTo(currentIndex);
        });
        dotsContainer.appendChild(dot);
      }
    };

    const slideTo = (index) => {
      cardWidth = cards[0].offsetWidth;
      const offset = index * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      
      // Update active state of dots
      const dots = document.querySelectorAll('.testi-dot');
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Handle button states
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === getMaxIndex();
    };

    // Events
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
          currentIndex++;
          slideTo(currentIndex);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          slideTo(currentIndex);
        }
      });
      prevBtn.disabled = true; // Initial state
    }

    // Auto update on window resize
    window.addEventListener('resize', () => {
      currentIndex = Math.min(currentIndex, getMaxIndex());
      slideTo(currentIndex);
      updateDots();
    });

    // Keyboard navigation
    const sliderEl = document.getElementById('testimoniSlider');
    if (sliderEl) {
      sliderEl.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          currentIndex--;
          slideTo(currentIndex);
        }
        if (e.key === 'ArrowRight' && currentIndex < getMaxIndex()) {
          currentIndex++;
          slideTo(currentIndex);
        }
      });
    }

    // Initialize slider
    updateDots();
    slideTo(0);
  }

  // --- FAQ ACCORDION ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const answer = btn.nextElementSibling;
      const isOpen = parent.classList.contains('open');

      // Close all other FAQ items first
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-answer').classList.remove('open');
      });

      // If it wasn't open, open it
      if (!isOpen) {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

});

