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

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay());

    // 一旦カレンダーをクリア
    calendarBody.innerHTML = '';
    
    const visibleMonths = new Set();
    const fragment = document.createDocumentFragment();

    for (let week = 0; week < 4; week++) {
      const row = document.createElement('tr');
      for (let i = 0; i < 7; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + week * 7 + i);

        // 月表示のための情報を収集
        visibleMonths.add(d.getMonth() + 1);

        const cell = document.createElement('td');
        cell.textContent = d.getDate();

        // クラスを動的に追加
        if (d.toDateString() === todayStr) {
          cell.classList.add('today');
        }
        cell.classList.add(isClosed(d) ? 'closed' : 'open');

        row.appendChild(cell);
      }
      fragment.appendChild(row);
    }
    
    calendarBody.appendChild(fragment);

    // 月表示の更新
    const months = [...visibleMonths];
    if (months.length === 1) {
      monthLabel.textContent = `（${months[0]}月）`;
    } else {
      monthLabel.textContent = `（${months[0]}月〜${months[1]}月）`;
    }
  }

  // 修正点3: ナビゲーションのトグル機能
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('active', !isExpanded);
    });
  }

  // ページの読み込みが完了したらカレンダーを生成
  updateCalendar();
});