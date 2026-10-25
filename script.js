const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Demo quote form: opens an email draft. Replace this with a form provider before launch.
document.getElementById('quoteForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Free quote request — ${data.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not supplied'}\nService: ${data.get('service')}\n\nProject details:\n${data.get('details')}`
  );
  const message = document.getElementById('formMessage');
  message.textContent = 'Your email app should open with the request prepared. Add your real business email in the website setup before publishing.';
  // Replace hello@example.com with the business email address before launch.
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
});
