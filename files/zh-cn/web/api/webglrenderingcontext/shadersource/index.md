---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`WebGLRenderingContext.shaderSource()`** 方法用于设置 {{domxref("WebGLShader")}} 着色器（顶点着色器及片元着色器）的 GLSL 程序代码。

## 语法

```plain
void gl.shaderSource(shader, source);
```

### 参数

- shader
  - : 用于设置程序代码的 {{domxref("WebGLShader")}}（着色器对象）。
- source
  - : 包含 GLSL 程序代码的字符串。

### 返回值

None.

## 示例

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
