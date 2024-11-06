---
title: WebGLRenderingContext.useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.useProgram()`** 方法将定义好的{{domxref("WebGLProgram")}} 对象添加到当前的渲染状态中。

## 语法

```plain
void gl.useProgram(program);
```

### 参数

- program
  - : 需要添加的{{domxref("WebGLProgram")}}对象

### 返回参数

无。

## 示例

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
