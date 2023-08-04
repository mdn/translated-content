---
title: WebGLRenderingContext.validateProgram()
slug: Web/API/WebGLRenderingContext/validateProgram
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.validateProgram()`** 是一种 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) ，主要是用来验证 {{domxref("WebGLProgram")}}。它在检查 WebGLProgram 程序是否链接成功的同时还会检查其是否能在当前的 WebGL 中使用。

## 语法

```plain
void gl.validateProgram(program);
```

### 参数

- program
  - : 待验证的 {{domxref("WebGLProgram")}}。

### 返回值

None.

## Examples

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.validateProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "不能编译 WebGL 程序。\n\n" + info;
}

gl.useProgram(program);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
