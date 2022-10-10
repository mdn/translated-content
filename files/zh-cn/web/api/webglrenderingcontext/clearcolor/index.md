---
title: WebGLRenderingContext.clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.clearColor()`** 方法用于设置清空颜色缓冲时的颜色值。

这指定调用 {{domxref("WebGLRenderingContext.clear", "clear()")}} 方法时使用的颜色值。这些值在 0 到 1 的范围间。

## 句法

```plain
void gl.clearColor(red, green, blue, alpha);
```

### 参数

- `red`
  - : 一个 {{domxref("GLclampf")}} 类型的值，指定清除缓冲时的红色值。默认值：0。
- `green`
  - : 一个 {{domxref("GLclampf")}} 类型的值，指定清除缓冲时的绿色值。默认值：0。
- `blue`
  - : 一个 {{domxref("GLclampf")}} 类型的值，指定清除缓冲时的蓝色值。默认值：0。
- `alpha`
  - : 一个 {{domxref("GLclampf")}} 类型的值，指定清除缓冲时的不透明度。默认值：0。

### 返回值

无。

## 示例

```js
gl.clearColor(1, 0.5, 0.5, 3);
```

要获取当前的清除颜色，传入 `COLOR_CLEAR_VALUE` 常量，返回 {{jsxref("Float32Array")}}。

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
