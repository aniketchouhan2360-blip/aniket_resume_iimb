/* ==========================================
   ANIKET CHOUHAN — script.js
   ========================================== */

/* ── CURSOR ── */
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  setTimeout(() => {
    cursorTrail.style.left = mx + 'px';
    cursorTrail.style.top  = my + 'px';
  }, 80);
});

document.querySelectorAll('a, button, .port-card, .tl-card, .edu-card, .bento-cell, .ct-tile').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '24px';
    cursor.style.height = '24px';
    cursorTrail.style.width  = '56px';
    cursorTrail.style.height = '56px';
    cursorTrail.style.borderColor = 'rgba(201,153,58,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
    cursorTrail.style.width  = '36px';
    cursorTrail.style.height = '36px';
    cursorTrail.style.borderColor = 'rgba(201,153,58,0.5)';
  });
});

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 1800);
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ── NAV SCROLL EFFECT ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '0.7rem 5%';
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    nav.style.padding = '1.1rem 5%';
    nav.style.boxShadow = 'none';
  }
});

/* ── ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--gold)';
    }
  });
});

/* ── SMOOTH ANCHOR LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
