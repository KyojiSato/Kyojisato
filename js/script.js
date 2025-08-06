document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggle.classList.toggle('active'); // ←これを追加
  });
});

  document.querySelectorAll('.calendar-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.month;
    document.querySelectorAll('.calendar-month').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById('calendar-' + target).style.display = 'block';
  });
});