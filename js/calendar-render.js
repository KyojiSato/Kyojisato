// js/calendar-render.js
document.addEventListener('DOMContentLoaded', function () {
  // ===== 設定 =====
  // 休業曜日（0=日,1=月,...6=土）例：月水休み → [1,3]
  const closedWeekdays = [1, 2, 3];
  // 特定日休業（同月表示を想定。15日休みなら [15]）
  const closedDates = [];

  // ラッパー取得
  const calendarSection = document.getElementById('calendar');
  if (!calendarSection) return;

  // 既存テーブルが無ければ生成
  let table = document.getElementById('dynamic-calendar');
  if (!table) {
    table = document.createElement('table');
    table.className = 'calendar';
    table.id = 'dynamic-calendar';
    table.innerHTML = `
      <thead>
        <tr>
          <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    calendarSection.appendChild(table);
  }

  const tbody = table.querySelector('tbody') || table.appendChild(document.createElement('tbody'));

  // 今日基準で「今週日曜」から4週分の開始日
  const today = new Date();
  const todayStr = today.toDateString();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay());

  // 補助関数
  const isClosed = (d) => closedWeekdays.includes(d.getDay()) || closedDates.includes(d.getDate());

  // ---- tbody を組み立てて一括挿入（高速＆クリーン）----
  let html = '';
  for (let w = 0; w < 4; w++) {
    html += '<tr>';
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + w * 7 + i);

      const isToday = d.toDateString() === todayStr;
      const closed = isClosed(d);
      const cls = (isToday ? 'today ' : '') + (closed ? 'closed' : 'open');
      const state = isToday ? '本日' : (closed ? '休業日' : '営業日');

      html += `<td class="${cls}" title="${state}" aria-label="${state}">${d.getDate()}</td>`;
    }
    html += '</tr>';
  }
  tbody.innerHTML = html;

  // 月ラベルがあれば（別JSのままでOK）:contentReference[oaicite:3]{index=3}
  // ここでは触らずそのまま。必要があればこのファイル内で更新も可能です。
});
