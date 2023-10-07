---
title: WebGLProgram
slug: Web/API/WebGLProgram
---

{{APIRef("WebGL")}}

**WebGLProgram** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，它由两个{{domxref("WebGLShader")}}s（webgl 着色器）组成，分别为顶点着色器和片元着色器（两种着色器都是采用 GLSL 语言编写的）。创建一个 **WebGLProgram** 需要调用 GL 上下文的{{domxref("WebGLRenderingContext.createProgram", "createProgram()")}} 方法，然后调用{{domxref("WebGLRenderingContext.attachShader", "attachShader()")}}方法附加上着色器，之后你才能将它们连接到一个可用的程序。

WebGLProgram 的创建过程请参考下面的代码：

```js
var program = gl.createProgram();

// 添加预先存在的着色器
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "WebGL program 不能编译。\n\n" + info;
}
```

查看 {{domxref("WebGLShader")}} api 了解更多关于创建以上例子中的`顶点着色器`和`片元着色器`的信息。

## 示例

### 使用着色器程序

着色器程序在使用的过程中要分为几步，包括告知 GPU 来使用这段着色器程序，绑定合适的数据缓冲区，配置相关选项，最终把图像绘制到屏幕上。

```js
// Use the program
gl.useProgram(program);

// Bind existing attribute data
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Draw a single triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### 删除着色器程序

如果在连接着色器程序的过程中发生了错误，或者你希望删除一个已经存在的着色器程序，你可以调用代码 {{domxref("WebGLRenderingContext.deleteProgram()")}}，这将释放连接着色器程序的内存。

```js
gl.deleteProgram(program);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
