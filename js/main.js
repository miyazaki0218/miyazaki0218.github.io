// ===== 探す =====
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav a');
const toTop = document.querySelector('.to-top');
const reveals = document.querySelectorAll('.js-reveal');

// ===== ハンバーガーメニュー =====
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuBtn.classList.remove('is-open');
    nav.classList.remove('is-open');
  });
});

// ===== スクロール =====
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }

  if (window.scrollY > 400) {
    toTop.classList.add('is-show');
  } else {
    toTop.classList.remove('is-show');
  }
});

// ===== スクロールで出てくる =====
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(function (el) {
  observer.observe(el);
});
