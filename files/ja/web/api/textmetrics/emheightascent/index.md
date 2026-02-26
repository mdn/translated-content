---
title: "TextMetrics: emHeightAscent プロパティ"
short-title: emHeightAscent
slug: Web/API/TextMetrics/emHeightAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

`emHeightAscent` は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、{{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで示された水平線から、行ボックスの em 矩形の上端までの距離を CSS ピクセル単位で返します。

## 値

A number, in CSS pixels.

## 例

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // TextMetrics オブジェクトを返す

text.emHeightAscent; // 7.59765625;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics")}}
