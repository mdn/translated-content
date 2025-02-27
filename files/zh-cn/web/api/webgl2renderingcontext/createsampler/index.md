---
title: WebGL2RenderingContext.createSampler()
slug: Web/API/WebGL2RenderingContext/createSampler
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 定义的 **`WebGL2RenderingContext.createSampler()`** 方法用于创建并初始化 {{domxref("WebGLSampler")}} 对象。

## 句法

```plain
WebGLSampler gl.createSampler();
```

### 参数

无。

### 返回值

{{domxref("WebGLSampler")}} 对象。

## 例子

`gl` 必须是 {{domxref("WebGL2RenderingContext")}} 类型。WebGL 1 不支持 `WebGLSampler` 对象。

```js
var sampler = gl.createSampler();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLSampler")}}
