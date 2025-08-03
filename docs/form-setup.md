# お問い合わせフォーム設定手順（Googleフォーム）

## ✅ 使用目的
- お客様からのお問い合わせ受付
- ご予約・ご相談フォームとして活用

## 📄 作成手順
1. Googleフォームを開く：[https://docs.google.com/forms/](https://docs.google.com/forms/)
2. 「お問い合わせフォーム」を新規作成
3. 以下の項目を追加：
   - お名前（短文／必須）
   - メールアドレス（短文／必須）
   - メッセージ（段落／必須）

## 📤 埋め込み手順
1. フォーム右上の「送信」→ `</>` タブ
2. `<iframe>` 埋め込みコードの `src="..."` をコピー
3. HTMLに以下のように挿入：

```html
<iframe src="https://docs.google.com/forms/d/e/.../viewform?embedded=true" ... ></iframe>
```

## 📧 通知設定（任意）
- Googleフォーム設定画面から「レスポンス通知メール」をONにできます
