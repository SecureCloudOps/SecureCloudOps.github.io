const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const commandButton = document.getElementById('commandButton');
const commandOverlay = document.getElementById('commandOverlay');
const copyEmail = document.getElementById('copyEmail');

// Storage can be unavailable in privacy modes. Navigation must still work.
try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
} catch { /* The default theme remains usable without persistence. */ }

function updateThemeLabel() {
  themeToggle.setAttribute('aria-label', `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} theme`);
}
updateThemeLabel();
themeToggle.hidden = false;
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateThemeLabel();
  try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Optional persistence. */ }
});

if (typeof commandOverlay.showModal === 'function') {
  commandButton.hidden = false;
  commandButton.addEventListener('click', () => commandOverlay.showModal());
  document.getElementById('closeMenu').addEventListener('click', () => commandOverlay.close());
  commandOverlay.addEventListener('click', (event) => {
    if (event.target === commandOverlay) commandOverlay.close();
  });
  commandOverlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      commandOverlay.close();
      const target = document.querySelector(link.getAttribute('href'));
      target?.setAttribute('tabindex', '-1');
      target?.focus({ preventScroll: true });
    });
  });
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (commandOverlay.open) commandOverlay.close();
      else commandOverlay.showModal();
    }
  });
}

copyEmail.hidden = false;
let copyTimer;
copyEmail.addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('mohamed0395@gmail.com');
    copyEmail.textContent = 'Email copied';
    status.textContent = 'Email address copied to clipboard.';
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyEmail.textContent = 'Copy email'; }, 2200);
  } catch {
    status.textContent = 'Copy unavailable. Select the email address below, or use the email link.';
    copyEmail.textContent = 'Select email below';
  }
});
