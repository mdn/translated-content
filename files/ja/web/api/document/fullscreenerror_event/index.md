---
title: "Document: fullscreenerror イベント"
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef}}

`fullscreenerror` イベントは、ブラウザーが全画面モードに移行できないときに発生します。

[`fullscreenchange` イベント](/ja/docs/Web/API/Document/fullscreenchange_event) イベントと同様、二つの `fullscreenerror` イベントが発行されます。 1 つ目はモード切替に失敗した {{domxref("Element")}} へ送られ、 2 つ目はその要素を所有する {{domxref("Document")}} へ送られます。

全画面モードへの切り替えに失敗する理由については、[全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)を参照してください。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("fullscreenerror", (event) => {});

onfullscreenerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("an error occurred changing into fullscreen");
  console.log(event);
}

document.addEventListener("fullscreenerror", handleError);
// or
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベント
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
