---
title: "Window: afterprint イベント"
short-title: afterprint
slug: Web/API/Window/afterprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

**`afterprint`** イベントは、関連する文書の印刷が開始されたか、印刷プレビューが閉じた後に発生します。

{{domxref("Window.beforeprint_event", "beforeprint")}} および `afterprint` イベントを使用すると、印刷が開始される前にページのコンテンツを変更し（例えば、バナーを除去するなど）、そして印刷が完了した後にそれらの変更を元に戻すことができます。一般的には、CSS の [`@media print`](/ja/docs/Web/CSS/Guides/Media_queries/Using#メディア種別を対象にする)アットルールを使用することを推奨しますが、場合によってはこれらのイベントを使用する必要があることがあります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("afterprint", (event) => { })

onafterprint = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` の使用例:

```js
window.addEventListener("afterprint", (event) => {
  console.log("After print");
});
```

`onafterprint` イベントハンドラープロパティの使用例:

```js
window.onafterprint = (event) => {
  console.log("After print");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/beforeprint_event", "beforeprint")}}
