---
title: WebGLRenderingContext.uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.uniformMatrix[234]fv()`** メソッドは、行列の値をユニフォームの値に指定します。

このメソッドの 3 つのバージョン (`uniformMatrix2fv()`, `uniformMatrix3fv()`, と `uniformMatrix4fv()`) は、入力値として 2 要素, 3 要素, 4 要素のベクトルをそれぞれ取ります。

## 構文

```
WebGLRenderingContext.uniformMatrix2fv(location, transpose, value);
WebGLRenderingContext.uniformMatrix3fv(location, transpose, value);
WebGLRenderingContext.uniformMatrix4fv(location, transpose, value);
```

### 引数

- `location`
  - : 変更するユニフォーム属性の位置を含むオブジェクト {{domxref("WebGLUniformLocation")}}。この位置は {{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}} を用いて入手されます。
- `transpose`
  - : 行列を転置するかどうか指定する {{domxref("GLboolean")}}。`false` でなければならない。
- `value`
  - : {{jsxref("Float32Array")}} か `GLfloat` 値の並び。

### 返り値

`undefined`

## 例

```js
gl.uniformMatrix2fv(loc, false, [2, 1, 2, 2]);
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.uniform()")}}
- {{domxref("WebGL2RenderingContext.uniformMatrix()")}} – これらのメソッドの WebGL 2 版。
