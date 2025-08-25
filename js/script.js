document.addEventListener('DOMContentLoaded', function () {
  const closedDates = []; // 特定日休業用（将来追加用）

  // 修正点1: 日付判定関数を統合
  function isClosed(date) {
    // 曜日判定：日曜日(0)、月曜日(1)、火曜日(2)を休業日とする
    const isWeekdayClosed = [1, 2, 3].includes(date.getDay());
    // 特定日判定
    const isSpecificDateClosed = closedDates.includes(date.getDate());
    return isWeekdayClosed || isSpecificDateClosed;
  }

  // 修正点2: 月表示とカレンダー描画を1つの関数に統合

function updateCalendar() {
  const calendarBody = document.querySelector('#dynamic-calendar tbody');
  const monthLabel = document.getElementById('calendar-month-label');
  const today = new Date();
  const todayStr = today.toDateString();

  // 今週の日曜を開始日
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay());

  // 今週＋4週 = 5週分（35日）
  const totalDays = 7 * 5;

  calendarBody.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const visibleMonths = new Set();

  for (let day = 0; day < totalDays; ) {
    const row = document.createElement('tr');
    for (let i = 0; i < 7; i++, day++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + day);

      // 月情報を収集
      visibleMonths.add(d.getMonth() + 1);

      // td を生成
      const cell = document.createElement('td');
      cell.textContent = d.getDate();

      // 本日判定
      if (d.toDateString() === todayStr) {
        cell.classList.add('today');
      }

      // 営業/休業判定
      if (isClosed(d)) {
        cell.classList.add('closed');
      } else {
        cell.classList.add('open');
      }

      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  calendarBody.appendChild(fragment);

  // 月ラベルを更新
  const months = [...visibleMonths].sort((a, b) => a - b);
  monthLabel.textContent =
    months.length === 1
      ? `（${months[0]}月）`
      : `（${months[0]}月〜${months[months.length - 1]}月）`;
}




  // ページの読み込みが完了したらカレンダーを生成
updateCalendar();

});  