document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;

  // アクセシビリティ属性
  toggle.setAttribute('aria-controls', 'mobile-nav');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'メニュー');

  function toggleMenu() {
    const opened = nav.classList.toggle('active');
    toggle.classList.toggle('active', opened);
    toggle.setAttribute('aria-expanded', String(opened));
  }

  // クリック/キーボードで開閉
  toggle.addEventListener('click', toggleMenu);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
});
