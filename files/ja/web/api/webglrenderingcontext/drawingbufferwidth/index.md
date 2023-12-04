---
title: "WebGLRenderingContext: drawingBufferWidth プロパティ"
short-title: drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.drawingBufferWidth`** は読み取り専用のプロパティで、現在の描画バッファーの実際の幅を表します。これは、このコンテキストに関連付けられた {{HTMLElement("canvas")}} 要素の `width` 属性と一致すべきですが、実装がリクエストされた幅を提供できない場合は異なるかもしれません。

## 値

数値です。

## 例

この {{HTMLElement("canvas")}} 要素があったとします。

```html
<canvas id="canvas"></canvas>
```

以下の行で描画バッファーの幅を取得することができます。

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferWidth; // 300
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
