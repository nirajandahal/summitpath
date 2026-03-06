/* nav.js — include on every page */
document.addEventListener('DOMContentLoaded', function () {

  // Scroll shadow on navbar
  window.addEventListener('scroll', function () {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    var st = document.getElementById('scroll-top');
    if (st) st.classList.toggle('visible', window.scrollY > 400);
  });

  // Hamburger toggle
  var toggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Mobile destinations accordion
  var destToggle = document.getElementById('mobileDestToggle');
  var destMenu   = document.getElementById('mobileDestMenu');
  if (destToggle && destMenu) {
    destToggle.addEventListener('click', function (e) {
      e.preventDefault();
      destMenu.classList.toggle('open');
      destToggle.classList.toggle('open');
    });
  }

  // Highlight active nav link based on current page filename
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(function (link) {
    if (link.dataset.page === current) link.classList.add('active');
  });

  // FAQ accordion (used on faq.html)
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item    = q.parentElement;
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Contact form (used on contact.html)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name  = document.getElementById('f-name').value.trim();
      var email = document.getElementById('f-email').value.trim();
      var msg   = document.getElementById('f-msg').value.trim();
      if (!name || !email || !msg) {
        alert('Please fill in all required fields.');
        return;
      }
      alert('Thank you, ' + name + '! Your inquiry has been received. We\'ll reply within 24 hours.');
      form.reset();
    });
  }

  // Scroll-to-top button
  var scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
