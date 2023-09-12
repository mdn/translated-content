---
title: "History: forward() メソッド"
short-title: forward()
slug: Web/API/History/forward
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("History API")}}

**`History.forward()`** メソッドにより、ブラウザーはセッション履歴の 1 つ次のページに移動します。これは {{domxref("History.go", "history.go(1)")}} を呼び出すのと同じ効果があります。

このメソッドは{{glossary("asynchronous", "非同期")}}です。移動が完了したことを検知したい場合は {{domxref("Window/popstate_event", "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nolint
forward()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の例では、セッション履歴の 1 つ次のステップへ進めるボタンを作成します。

### HTML

```html
<button id="go-forward">Go Forward!</button>
```

### JavaScript

```js
document.getElementById("go-forward").addEventListener("click", (e) => {
  history.forward();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("History")}}
- {{domxref("Window/popstate_event", "popstate")}}
- [履歴 API の操作](/ja/docs/Web/API/History_API/Working_with_the_History_API)
