---
title: WebGLRenderingContext.linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
---

{{APIRef("WebGL")}}
{{domxref("WebGLRenderingContext")}} 接口的**linkProgram()**方法链接给定的{{domxref("WebGLProgram")}}，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程。

## 语法

```plain
void gl.linkProgram(program);
```

### 参数

- program
  - : 一个用于链接的 {{domxref("WebGLProgram")}} 。

### 返回值

None.

## 例子

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw new Error("Could not compile WebGL program. \n\n" + info);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
