---
title: "Document: fullscreenerror イベント"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

**`fullscreenerror`** イベントは、ブラウザーが全画面モードに移行できないときに発生します。

[`fullscreenchange` イベント](/ja/docs/Web/API/Document/fullscreenchange_event) イベントと同様、2 つの `fullscreenerror` イベントが発行されます。 1 つ目はモード切替に失敗した {{domxref("Element")}} へ送られ、 2 つ目はその要素を所有する {{domxref("Document")}} へ送られます。

全画面モードへの切り替えに失敗する理由については、[全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)を参照してください。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("fullscreenerror", (event) => { })

onfullscreenerror = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("全画面モードへの移行時にエラーが発生しました");
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
