---
title: "TextMetrics: actualBoundingBoxRight プロパティ"
short-title: actualBoundingBoxRight
slug: Web/API/TextMetrics/actualBoundingBoxRight
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

`actualBoundingBoxRight` は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、`double` 型であり、指定されたテキストの境界矩形の右端から、{{domxref("CanvasRenderingContext2D.textAlign")}} プロパティで与えられる配置点までの、ベースラインに平行な距離を CSS ピクセル単位で返します。

## 例

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // TextMetrics オブジェクトを返す

text.actualBoundingBoxRight; // 15.633333333333333;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics")}}
