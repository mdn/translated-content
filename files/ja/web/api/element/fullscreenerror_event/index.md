---
title: "Element: fullscreenerror イベント"
short-title: fullscreenerror
slug: Web/API/Element/fullscreenerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

**`fullscreenerror`** イベントは、ブラウザーが全画面モードに切り替えることができなかったときに発生します。

[`fullscreenchange` イベント](/ja/docs/Web/API/Element/fullscreenchange_event) イベントと同様に、2 つの `fullscreenerror` イベントが発生します。1 つ目はモード切替に失敗した {{domxref("Element")}} に送られ、2 つ目はその要素を含む {{domxref("Document")}} に送られます。

全画面モードへの切り替えが失敗する理由の一部は、 [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)をお読みください。

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
  console.error("an error occurred changing into fullscreen");
  console.log(event);
}

requestor.addEventListener("fullscreenerror", handleError);
// or
requestor.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`fullscreenchange`](/ja/docs/Web/API/Element/fullscreenchange_event)
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
