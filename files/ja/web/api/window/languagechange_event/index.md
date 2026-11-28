---
title: "Window: languagechange イベント"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

**`languagechange`** イベントは、ユーザーの推奨言語が変更されたときにグローバルスコープオブジェクトに発生します。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用します。

```js-nolint
addEventListener("languagechange", (event) => { })
```

または、このインターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラープロパティの使用)に代入します。

```js-nolint
onlanguagechange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## イベントハンドラーの別名

`Window` インターフェイスに加えて、イベントハンドラーのプロパティ `onlanguagechange` は次のターゲットでも利用できます。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

`languagechange` イベントは、{{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドで使用できます。

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

または、`onlanguagechange` イベントハンドラープロパティを使用できます（ただし、これにより、すでに `onlanguagechange` を使用して追加されたほかのイベントリスナーが置換されます）。

```js
window.onlanguagechange = (event) => {
  console.log("languagechange event detected!");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
