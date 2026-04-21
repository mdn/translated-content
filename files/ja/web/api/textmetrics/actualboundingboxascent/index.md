---
title: "TextMetrics: actualBoundingBoxAscent プロパティ"
short-title: actualBoundingBoxAscent
slug: Web/API/TextMetrics/actualBoundingBoxAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`actualBoundingBoxAscent`** は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、`double` 型であり、{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で示された水平線から、テキストの描画に使用される境界矩形の上端までの距離を CSS ピクセル単位で返します。

## 例

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // TextMetrics オブジェクトを返す

text.actualBoundingBoxAscent; // 8;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics")}}
