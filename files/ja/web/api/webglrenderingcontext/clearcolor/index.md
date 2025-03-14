---
title: WebGLRenderingContext.clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.clearColor()`** メソッドは、カラーバッファーの消去に使われる色の値を指定します。

この指定は {{domxref("WebGLRenderingContext.clear", "clear()")}} メソッドを呼んだときに使用される色です。値は 0 から 1 に丸められます。

## 構文

```
void gl.clearColor(red, green, blue, alpha);
```

### 引数

- `red`
  - : 赤色を指定する {{domxref("GLclampf")}} で、カラーバッファーの消去に使われます。既定値は 0 です。
- `green`
  - : 緑色を指定する {{domxref("GLclampf")}} で、カラーバッファーの消去に使われます。既定値は 0 です。
- `blue`
  - : 青色を指定する {{domxref("GLclampf")}} で、カラーバッファーの消去に使われます。既定値は 0 です。
- `alpha`
  - : アルファ (不透明度) を指定する {{domxref("GLclampf")}} で、カラーバッファーの消去に使われます。既定値は 0 です。

### 返り値

ありません。

## 例

```js
gl.clearColor(1, 0.5, 0.5, 3);
```

現在の消去に使われる色を取得するには、`COLOR_CLEAR_VALUE` 定数で問い合わせると {{jsxref("Float32Array")}} を返します。

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
