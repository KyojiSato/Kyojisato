document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
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
});
document.addEventListener('DOMContentLoaded', function () {
  // もとのメニュー開閉
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  // 📅 カレンダー生成
  const calendarBody = document.querySelector('#dynamic-calendar tbody');
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - dayOfWeek); // 今週の日曜

  for (let week = 0; week < 4; week++) {
    const row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + week * 7 + i);

      const cell = document.createElement('td');
      cell.textContent = d.getDate();

      if (d.getDay() === 6) {
        cell.classList.add('sunday');
      }

      if (d.getDay() === 5) {
        if ([17, 31].includes(d.getDate())) {
          cell.classList.add('closed'); // 土曜だけど休業日
        } else {
          cell.classList.add('open'); // 営業土曜
        }
      }

      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
});
