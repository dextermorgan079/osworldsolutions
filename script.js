
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (btn) {
    btn.addEventListener('click', () => item.classList.toggle('active'));
  }
});
