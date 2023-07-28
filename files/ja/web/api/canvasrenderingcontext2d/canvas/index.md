---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
---

{{APIRef}}

**`CanvasRenderingContext2D.canvas`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) の一部で、このコンテキストに関連付けられた {{domxref("HTMLCanvasElement")}} オブジェクトへの読み取り専用の参照です。 {{HTMLElement("canvas")}} に関連づけられていない場合は {{jsxref("null")}} になることがあります。

## 構文

```js
ctx.canvas;
```

## 例

この {{HTMLElement("canvas")}} 要素があるとします。

```html
<canvas id="canvas"></canvas>
```

`CanvasRenderingContext2D` の中にある canvas 要素への参照は、 `canvas` プロパティから取得することができます。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}} インターフェイス
- [キャンバス API](/ja/docs/Web/API/Canvas_API)
