---
title: WebGLRenderingContext.createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.createProgram()`** 方法用于创建和初始化一个 {{domxref("WebGLProgram")}} 对象。

## 语法

```plain
WebGLProgram gl.createProgram();
```

### 参数

无。

### 返回值

一个 {{domxref("WebGLProgram")}} 对象由两个编译过后的 {{domxref("WebGLShader")}} 组成 - 顶点着色器和片段着色器（均由 GLSL 语言所写）。这些组合成一个可用的 WebGL 着色器程序。

## 例子

### 创建一个 WebGL 着色器程序

```js
var program = gl.createProgram();

// 添加预先定义好的顶点着色器和片段着色器
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "Could not compile WebGL program. \n\n" + info;
}
```

详见 {{domxref("WebGLShader")}} 获取更多关于创建上述代码中顶点着色器和片段着色器的信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
