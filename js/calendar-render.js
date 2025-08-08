document.addEventListener('DOMContentLoaded', function () {
  const calendarBody = document.querySelector('#dynamic-calendar tbody');
  const today = new Date("2025-09-10");
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