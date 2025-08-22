# 営業カレンダー JSロジック変更点

## 🔄 更新日: 2025-08-08

---

## ✅ 概要

営業カレンダーの判定ロジックを、以下の営業日ルールに合わせて変更しました：

- **営業日**：木曜・金曜・土曜・日曜
- **休業日**：月曜・火曜・水曜
- **特定休業日**：`closedDates = []` に追加可能（将来的な例外日対応）

---

## 🔧 技術的変更内容

- `calendar-render.js` にて、営業日判定ロジックを関数化：
  ```js
  function isClosed(d) {
    return [1, 2, 3].includes(d.getDay()) || closedDates.includes(d.getDate());
  }

  function isOpen(d) {
    return !isClosed(d);
  }
  ```
- `.closed` または `.open` クラスを付与して、CSSで営業/休業の視覚的区別が可能に
- `.sunday`（日曜）には引き続き赤字表示クラスを適用

---

## 📁 対象ファイル

- `js/calendar-render.js`（新ファイル: `calendar-render-updated.js`）

---

## ✏️ 今後の拡張候補

- `closedDates` に月・日単位で配列を追加して個別休業日を明示
- 祝日APIやGoogle Calendar連携による自動休業日取得
- 営業時間表示や営業中バッジ対応など