---
title: "TextMetrics: alphabeticBaseline プロパティ"
short-title: alphabeticBaseline
slug: Web/API/TextMetrics/alphabeticBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

`alphabeticBaseline` は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、`double` 型であり、{{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで示された水平線から、行ボックスのアルファベット用ベースラインまでの距離を CSS ピクセル単位で返します。

## 例

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // TextMetrics オブジェクトを返す

text.alphabeticBaseline; // -0;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics")}}
