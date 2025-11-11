---
title: WebGLRenderingContext：isProgram() 方法
slug: Web/API/WebGLRenderingContext/isProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.isProgram()`** 方法将在传递的 {{domxref("WebGLProgram")}} 参数有效时返回 `true`，否则返回 `false`。

## 语法

```js-nolint
isProgram(program)
```

### 参数

- `program`
  - : 要检查的 {{domxref("WebGLProgram")}}。

### 返回值

一个表示程序（program）是否有效的 {{domxref("WebGL_API/Types", "GLboolean")}} 值。

## 示例

### 检查 program

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const program = gl.createProgram();

// …

gl.isProgram(program);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
