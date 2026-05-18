---
title: "Window: beforeprint イベント"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

**`beforeprint`** イベントは、関連する文書が印刷される直前や、印刷プレビューが開く直前に発生します。

{{domxref("Window.afterprint_event", "afterprint")}} および `beforeprint` イベントを使用すると、印刷が開始される前にページのコンテンツを変更し（例えば、バナーを除去するなど）、そして印刷が完了した後にそれらの変更を元に戻すことができます。一般的には、CSS の [`@media print`](/ja/docs/Web/CSS/Guides/Media_queries/Using#メディア種別を対象にする)アットルールを使用することを推奨しますが、場合によってはこれらのイベントを使用する必要があることがあります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("beforeprint", (event) => { })

onbeforeprint = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` の使用例:

```js
window.addEventListener("beforeprint", (event) => {
  console.log("Before print");
});
```

`onbeforeprint` イベントハンドラープロパティの使用例:

```js
window.onbeforeprint = (event) => {
  console.log("Before print");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/afterprint_event", "afterprint")}}
