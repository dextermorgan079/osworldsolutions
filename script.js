
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (btn) {
    btn.addEventListener('click', () => item.classList.toggle('active'));
  }
});
const elements = document.querySelectorAll('.fade-up');

  window.addEventListener('scroll', () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  });

});
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
