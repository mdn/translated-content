---
title: WebGLRenderingContext：deleteShader() 方法
slug: Web/API/WebGLRenderingContext/deleteShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.deleteShader()`** 方法用于将给定的 {{domxref("WebGLShader")}} 对象标记为删除状态。当着色器不再使用时，它将被删除。如果着色器已经被删除，则此方法不会产生任何效果，当着色器被垃圾回收器销毁时，{{domxref("WebGLShader")}} 会被自动标记为删除状态。

## 语法

```js-nolint
deleteShader(shader)
```

### 参数

- `shader`
  - : 需要被删除的 {{domxref("WebGLShader")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 删除一个着色器

```js
gl.deleteShader(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
