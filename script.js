
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (btn) {
    btn.addEventListener('click', () => item.classList.toggle('active'));
  }
});
/* =========================
   FADE-IN ON SCROLL SCRIPT
========================= */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < windowHeight - 80) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
