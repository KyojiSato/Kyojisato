document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggle.classList.toggle('active'); // ←これを追加
  });
});
