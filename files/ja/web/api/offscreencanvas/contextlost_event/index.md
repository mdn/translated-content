---
title: "OffscreenCanvas: contextlost イベント"
short-title: contextlost
slug: Web/API/OffscreenCanvas/contextlost_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Canvas API")}}

**`contextlost`** は `OffscreenCanvas` インターフェイスのイベントで、ブラウザーが [`OffscreenCanvasRenderingContext2D`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) コンテキストが失われたことを検出すると発行されます。
コンテキストは、関連付けられた GPU ドライバのクラッシュ、アプリケーションのメモリー不足、といった具合に、いくつかの理由で失われることがあります。

既定では、ユーザーエージェントはコンテキストの復元を試み、その後 [`contextrestored` イベント](/ja/docs/Web/API/OffscreenCanvas/contextrestored_event)を発行します。
ユーザーコードは、イベント処理中に [`Event.preventDefault()`](/ja/docs/Web/API/Event/preventDefault) を呼び出すことで、コンテキストの復元を防ぐことができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("contextlost", (event) => { })

oncontextlost = (event) => { }
```

## イベント型

汎用的な {{domxref("Event")}} です。

## 例

下記のコードは、`contextlost` イベントを検出します。

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

// 描画などを行う

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

コンテキストが復元されないようにするには、イベントハンドラーのコードを次のように変更します。

```js
canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`OffScreenCanvas: contextrestored` イベント](/ja/docs/Web/API/OffscreenCanvas/contextrestored_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextlost` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event)
