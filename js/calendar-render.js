document.addEventListener('DOMContentLoaded', function () {
  const closedDates = []; // 特定日休業用（将来追加用）

  function isClosed(d) {
    return [1, 2, 3].includes(d.getDay()) || closedDates.includes(d.getDate());
  }

  function isOpen(d) {
    return !isClosed(d);
  }

  const calendarBody = document.querySelector('#dynamic-calendar tbody');
  const today = new Date();
  const todayStr = today.toDateString(); // 本日判定用
  const dayOfWeek = today.getDay();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - dayOfWeek); // 今週日曜スタート

  for (let week = 0; week < 4; week++) {
    const row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + week * 7 + i);

      const cell = document.createElement('td');
      cell.textContent = d.getDate();

      if (d.toDateString() === todayStr) {
        cell.classList.add('today');
      }

      if (isClosed(d)) {
        cell.classList.add('closed');
      } else {
        cell.classList.add('open');
      }

      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
});