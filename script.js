
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
