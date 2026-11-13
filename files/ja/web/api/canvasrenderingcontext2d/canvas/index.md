---
title: "CanvasRenderingContext2D: canvas プロパティ"
short-title: canvas
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.canvas`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) の一部で、このコンテキストに関連付けられた {{domxref("HTMLCanvasElement")}} オブジェクトへの読み取り専用の参照です。
{{HTMLElement("canvas")}} に関連づけられていない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になることがあります。

## 値

{{domxref("HTMLCanvasElement")}} オブジェクトです。

## 例

この {{HTMLElement("canvas")}} 要素があるとします。

```html
<canvas id="canvas"></canvas>
```

`CanvasRenderingContext2D` の中にある canvas 要素への参照は、 `canvas` プロパティから取得することができます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}} インターフェイス
- [キャンバス API](/ja/docs/Web/API/Canvas_API)
