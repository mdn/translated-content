---
title: WebGLRenderingContext.clear()
slug: Web/API/WebGLRenderingContext/clear
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.clear()`** メソッドは、バッファーをプリセット値で消去します。

プリセット値は、{{domxref("WebGLRenderingContext.clearColor", "clearColor()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}} や {{domxref("WebGLRenderingContext.clearStencil", "clearStencil()")}} で設定可能です。

シザーボックス、ディザリング、バッファー書き込みマスクは `clear()` メソッドに影響します。

## 構文

```
void gl.clear(mask);
```

### 引数

- `mask`
  - : 消去されるバッファーを示す {{domxref("GLbitfield")}} のビット論理和マスクです。以下の値を取ることができます。
    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### 返り値

ありません。

### 例外

_mask_ が記載した値のうちどれでもない場合、`gl.INVALID_ENUM` エラーがスローされます。

## 例

`clear()` メソッドは複数の値を受け入れることができます。

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

現在の消去する値を取得するには、`COLOR_CLEAR_VALUE`, `DEPTH_CLEAR_VALUE`, や `STENCIL_CLEAR_VALUE` 定数で問い合わせます。

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
