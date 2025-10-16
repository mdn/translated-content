---
title: "OffscreenCanvas: contextrestored イベント"
short-title: contextrestored
slug: Web/API/OffscreenCanvas/contextrestored_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Canvas API")}}

**`contextrestored`** は {{domxref("OffscreenCanvas")}} インターフェイスのイベントで、ブラウザーが[前回失われた](/ja/docs/Web/API/OffscreenCanvas/contextlost_event) [`OffscreenCanvasRenderingContext2D`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) コンテキストを復元した場合に発行されます。

このイベントを受信した後、コンテキストの状態を再描画、リソースの再取得、および再初期化することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("contextrestored", (event) => { })

oncontextrestored = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下のコード断片は、コンテキストの復元イベントを検出します。

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

canvas.addEventListener(
  "contextrestored",
  (e) => {
    console.log(e);
    // redrawCanvas() 等を呼び出す
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`OffscreenCanvas: contextlost` イベント](/ja/docs/Web/API/OffscreenCanvas/contextlost_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextrestored` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event)
