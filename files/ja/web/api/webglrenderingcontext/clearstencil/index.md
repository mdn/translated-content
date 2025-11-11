---
title: WebGLRenderingContext.clearStencil()
slug: Web/API/WebGLRenderingContext/clearStencil
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.clearStencil()`** メソッドは、ステンシルバッファーを消去する値を指定します。

この指定は、{{domxref("WebGLRenderingContext.clear", "clear()")}} メソッドを呼ぶときに使用されるステンシルの値です。

## 構文

```
void gl.clearStencil(s);
```

### 引数

- `s`
  - : インデックスを指定する {{domxref("GLint")}} で、ステンシルバッファーの消去に使用される値です。既定値は 0 です。

### 返り値

ありません。

## 例

```js
gl.clearStencil(1);
```

現在のステンシルを消去する値を取得するには、`STENCIL_CLEAR_VALUE` 定数で問い合わせます。

```js
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
// 1
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
