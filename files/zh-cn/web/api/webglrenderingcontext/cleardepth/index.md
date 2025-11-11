---
title: WebGLRenderingContext：clearDepth() 方法
slug: Web/API/WebGLRenderingContext/clearDepth
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.clearDepth()`** 方法指定深度缓冲区的清除值。

指定调用 {{domxref("WebGLRenderingContext.clear", "clear()")}} 方法时使用的深度值。该值被限制在 0 到 1 之间。

## 语法

```js-nolint
clearDepth(depth)
```

### 参数

- `depth`
  - : {{domxref("WebGL_API/Types", "GLclampf")}}。指定清除深度缓冲区时使用的深度值。默认值为 1。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
gl.clearDepth(0.5);
```

查询 `DEPTH_CLEAR_VALUE` 常量以获取当前深度清除值。

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
