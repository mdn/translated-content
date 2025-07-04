---
title: WebGLRenderingContext.drawArrays()
slug: Web/API/WebGLRenderingContext/drawArrays
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.drawArrays()`** メソッドは、配列データからプリミティブを描画します。

## 構文

```
void gl.drawArrays(mode, first, count);
```

### 引数

- `mode`
  - : 描画するプリミティブの種類を指定する {{domxref("GLenum")}}。以下の値を取ることができます。
    - `gl.POINTS`: 単一の点を描画します。
    - `gl.LINE_STRIP`: 次の線へと直線を描画します。
    - `gl.LINE_LOOP`: 次の線へと直線を描画し、最後の頂点は最初のものに接続します。
    - `gl.LINES`: 頂点 2 つごとに、その間に線を描画します。
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: 頂点 3 つの集まりごとに、三角形を描画します。

- first
  - : 頂点ベクトルの配列の開始インデックスを指定する {{domxref("GLint")}}。
- count
  - : 描画されるインデックスの数を指定する {{domxref("GLsizei")}}。

### 返り値

ありません。

### 例外

- `mode` が許容された値のどれでもない場合、`gl.INVALID_ENUM` エラーがスローされます。
- `first` や `count` が負数の場合、`gl.INVALID_VALUE` エラーがスローされます。
- `gl.CURRENT_PROGRAM` が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の場合、`gl.INVALID_OPERATION` エラーがスローされます。

## 例

```js
gl.drawArrays(gl.POINTS, 0, 8);
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
