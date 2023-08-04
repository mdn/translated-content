---
title: WebGLRenderingContext.isShader()
slug: Web/API/WebGLRenderingContext/isShader
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`WebGLRenderingContext.isShader()`** 方法，在传入的 {{domxref("WebGLShader")}} 有效时返回 `true` ，否则返回 `false` 。

## 语法

```plain
GLboolean gl.isShader(shader);
```

### 参数

- shader
  - : 需要校验的 {{domxref("WebGLShader")}}

### 返回值

用来表明 shader 是否有效的 {{domxref("GLboolean")}} 对象

## 示例

### 校验一个 Shader

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var shader = gl.createShader(gl.VERTEX_SHADER);

// ...

gl.isShader(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
