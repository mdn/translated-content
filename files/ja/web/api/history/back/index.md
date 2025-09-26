---
title: "History: back() メソッド"
short-title: back()
slug: Web/API/History/back
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("History API")}}

**`History.back()`** メソッドは、ブラウザーにセッション履歴内で 1 つ前のページに戻らせます。

これは {{domxref("History.go", "history.go(-1)")}} を呼び出すのと同じ効果があります。 1 つ前のページがない場合、このメソッド呼び出しは何もしません。

このメソッドは{{glossary("asynchronous", "非同期")}}です。移動が完了したときを検知したい場合は {{domxref("Window/popstate_event", "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nolint
back()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の短い例では、ページ上のボタンを押すとセッション履歴内の 1 つ前の項目に移動します。

### HTML

```html
<button id="go-back">Go back!</button>
```

### JavaScript

```js
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("History")}}
- [履歴 API の操作](/ja/docs/Web/API/History_API/Working_with_the_History_API)
