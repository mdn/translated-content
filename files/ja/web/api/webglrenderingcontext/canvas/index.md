---
title: "WebGLRenderingContext: canvas プロパティ"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.canvas`** プロパティは、コンテキストに関連付けられた {{domxref("HTMLCanvasElement")}} または {{domxref("OffscreenCanvas")}} オブジェクトへの読み取り専用の参照です。また、 {{HTMLElement("canvas")}} 要素や {{domxref("OffscreenCanvas")}} オブジェクトに関連付けられていない場合、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になる可能性があります。

## 構文

```js-nolint
gl.canvas
```

### 返値

{{domxref("HTMLCanvasElement")}} または {{domxref("OffscreenCanvas")}} オブジェクトか、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) のいずれか。

## 例

### canvas 要素

この {{HTMLElement("canvas")}} 要素があるとします。

```html
<canvas id="canvas"></canvas>
```

`WebGLRenderingContext` から `canvas` プロパティを使用して、参照を取得することができます。

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### オフスクリーンキャンバス

実験的な {{domxref("OffscreenCanvas")}} オブジェクトを使用した例です。

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
gl.canvas; // OffscreenCanvas
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}} インターフェイス
