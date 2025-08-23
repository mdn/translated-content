---
title: WebGLRenderingContext：linkProgram() 方法
slug: Web/API/WebGLRenderingContext/linkProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

{{domxref("WebGLRenderingContext")}} 接口的 **`linkProgram()`** 方法链接给定的{{domxref("WebGLProgram")}}，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程。

## 语法

```js-nolint
linkProgram(program)
```

### 参数

- `program`
  - : 一个用于链接的 {{domxref("WebGLProgram")}}。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const program = gl.createProgram();

// 附加预先存在的着色器
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`无法编译 WebGL 程序。\n\n${info}`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
