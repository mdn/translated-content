---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
---

**WebGLShaderPrecisionFormat** 接口是[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，它表示通过调用{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}返回信息的信息。

## 属性

- {{domxref("WebGLShaderPrecisionFormat.rangeMin")}}
  - : 以 2 为底的最小值的绝对值的对数。
- {{domxref("WebGLShaderPrecisionFormat.rangeMax")}}
  - : 可以表示的最大值的绝对值的底数为 2 的对数。
- {{domxref("WebGLShaderPrecisionFormat.precision")}}
  - : 可以表示的精度位的数目。对于整数类型，这个值总是 0。

## 示例

`WebGLShaderPrecisionFormat` 对象通过{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} 方法来返回。

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
