// Universal fix for both mobile and desktop
(function() {
  // Execute immediately
  console.log('Universal fix running immediately');
  
  // Force all elements to be visible
  function forceVisibility() {
    const allElements = document.querySelectorAll('body *');
    allElements.forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
    
    // Specifically target common animation targets
    const animatedElements = document.querySelectorAll(
      'h1, h2, h3, p, .cta-btn, .service-card, .project-card, .stagger-item, ' +
      '.text-reveal, .services-grid, .projects-showcase, .fade-in-section, ' +
      '.stagger-container, .skill-item, .timeline-item, .education-item, nav, ' +
      '.hero-content, .about-content, .projects-grid, .contact-container'
    );
    
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
      
      // For grid/flex containers
      if (getComputedStyle(el).display.includes('grid') || getComputedStyle(el).display.includes('flex')) {
        el.style.display = getComputedStyle(el).display;
      } else if (el.tagName.toLowerCase() === 'div') {
        el.style.display = 'block';
      }
    });
    
    // Ensure nav is visible
    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.display = 'flex';
      nav.style.opacity = '1';
      nav.style.visibility = 'visible';
      nav.style.zIndex = '1000';
    }
  }
  
  // Run immediately
  forceVisibility();
  
  // Run again when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - ensuring visibility');
    forceVisibility();
    
    // Run animations if GSAP is available
    if (typeof gsap !== 'undefined') {
      console.log('GSAP available - running animations');
      
      // Simple fade-in for all sections
      gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
          opacity: 0.5,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            once: true
          }
        });
      });
    }
  });
  
  // Run one more time after everything is loaded
  window.addEventListener('load', function() {
    console.log('Window loaded - final visibility check');
    forceVisibility();
    
    // Force refresh ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  });
})();