---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
---

{{APIRef("WebGL")}}

**WebGLUniformLocation** 接口是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，在一个着色器程序中表示一个统一变量的位置。

## 说明

`WebGLUniformLocation` 对象未定义任何属于自己并能直接访问其内容的方法和属性。在使用 `WebGLUniformLocation` 对象时，{{domxref("WebGLRenderingContext")}} 的方法是有用的：

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
- {{domxref("WebGLRenderingContext.uniform()")}}

## 示例

### 获取一个统一位置

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

var location = gl.getUniformLocation(WebGLProgram, "uniformName");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
