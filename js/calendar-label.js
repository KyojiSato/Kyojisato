document.addEventListener('DOMContentLoaded', function () {
  const label = document.getElementById("calendar-month-label");
  if (label) {
    const today = new Date();
    const start = new Date(today);
    start.setDate(start.getDate() - start.getDay());

    const visibleDates = [];
    for (let i = 0; i < 28; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      visibleDates.push(d.getMonth() + 1);
    }

    const months = [...new Set(visibleDates)];
    label.textContent =
      months.length === 1
        ? `（${months[0]}月）`
        : `（${months[0]}月〜${months[1]}月）`;
  }
});