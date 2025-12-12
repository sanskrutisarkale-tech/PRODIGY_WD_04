const btn = document.getElementById('themeToggle');
const root = document.body;
const saved = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', saved);

btn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

/* small helper: smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});