const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const commandButton = document.getElementById('commandButton');
const commandOverlay = document.getElementById('commandOverlay');
const copyEmail = document.getElementById('copyEmail');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeToggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
});

function setPalette(open) {
  if (!commandOverlay) return;
  commandOverlay.hidden = !open;
}

commandButton?.addEventListener('click', () => setPalette(true));
commandOverlay?.addEventListener('click', (event) => {
  if (event.target === commandOverlay) setPalette(false);
});
commandOverlay?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setPalette(false)));

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    setPalette(commandOverlay?.hidden ?? true);
  }
  if (event.key === 'Escape') setPalette(false);
});

copyEmail?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('mohamed0395@gmail.com');
    const original = copyEmail.textContent;
    copyEmail.textContent = 'Email copied';
    setTimeout(() => { copyEmail.textContent = original; }, 1600);
  } catch {
    window.location.href = 'mailto:mohamed0395@gmail.com';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const typed = document.querySelector('.typed');
if (typed) {
  const text = typed.dataset.text || '';
  let index = 0;
  const timer = setInterval(() => {
    typed.textContent = text.slice(0, index++);
    if (index > text.length) clearInterval(timer);
  }, 36);
}
