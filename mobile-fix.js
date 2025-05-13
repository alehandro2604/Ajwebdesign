// Mobile compatibility fixes
document.addEventListener('DOMContentLoaded', function() {
  console.log('Mobile fix script loaded');
  
  // Force all animation elements to be visible initially
  const animatedElements = document.querySelectorAll(
    'h1, h2, h3, p, .cta-btn, .service-card, .project-card, .stagger-item, ' +
    '.text-reveal, .services-grid, .projects-showcase, .fade-in-section, ' +
    '.stagger-container, .skill-item, .timeline-item, .education-item'
  );
  
  animatedElements.forEach(el => {
    // Set initial visibility but allow GSAP to animate
    el.style.opacity = '0.01';  // Almost invisible but not 0
    el.style.visibility = 'visible';
    el.style.display = el.tagName.toLowerCase() === 'div' ? 'block' : '';
  });
  
  // Ensure nav is visible
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.display = 'flex';
    nav.style.opacity = '1';
    nav.style.visibility = 'visible';
  }
  
  // Adjust Three.js canvas for mobile
  const threeDElements = document.querySelectorAll('#hero-3d, #about-3d, #projects-3d, #contact-3d');
  if (window.isMobile) {
    threeDElements.forEach(el => {
      if (el) {
        el.style.opacity = '0.5';
        el.style.height = '100%';
        el.style.width = '100%';
        el.style.position = 'absolute';
        el.style.zIndex = '-1';
      }
    });
  }
  
  // Ensure GSAP is available and working
  if (typeof gsap !== 'undefined') {
    console.log('GSAP is loaded and available');
    window.gsapDisabled = false;
  } else {
    console.error('GSAP not loaded!');
  }
});