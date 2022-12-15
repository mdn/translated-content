---
title: WebGLRenderingContext.clearDepth()
slug: Web/API/WebGLRenderingContext/clearDepth
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的**`WebGLRenderingContext.clearDepth()`** 方法用于设置深度缓冲区的深度清除值。

这个深度清除值的设定，是为了调用{{domxref("WebGLRenderingContext.clear", "clear()")}} 的时候使用，这个值的范围是 0 到 1。

## 语法

```plain
void gl.clearDepth(depth);
```

### 参数

- `depth`
  - : 类型：{{domxref("GLclampf")}}。深度值的设定，是当清除深度缓冲区的时候使用。默认值为 1。

### 返回值

None.

## 样例

```js
gl.clearDepth(0.5);
```

若要获取当前深度清除值，查询`DEPTH_CLEAR_VALUE` 常量。

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
