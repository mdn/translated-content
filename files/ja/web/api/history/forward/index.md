---
title: History.forward()
slug: Web/API/History/forward
tags:
  - API
  - HTML DOM
  - History
  - 履歴 API
  - メソッド
  - リファレンス
browser-compat: api.History.forward
translation_of: Web/API/History/forward
---
{{APIRef("History API")}}

**`History.forward()`** メソッドにより、ブラウザーはセッション履歴の 1 つ次のページに移動します。これは {{domxref("History.go", "history.go(1)")}} を呼び出すのと同じ効果があります。

このメソッドは{{glossary("asynchronous", "非同期")}}です。移動が完了したことを検知したい場合は {{domxref("Window/popstate_event", "popstate")}} イベントのリスナーを追加してください。

## 構文

```js
history.forward()
```

## 例

以下の例では、セッション履歴の 1 つ次のステップへ進めるボタンを作成します。

### HTML

```html
<button id='go-forward'>Go Forward!</button>
```

### JavaScript

```js
document.getElementById('go-forward').addEventListener('click', e => {
  window.history.forward();
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("History")}}
- [履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)
