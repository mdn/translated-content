---
title: WebGLRenderingContext.viewport()
slug: Web/API/WebGLRenderingContext/viewport
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.viewport()`** 方法，用来设置视口，即指定从标准设备到窗口坐标的 x、y 仿射变换。

## 语法

```plain
void gl.viewport(x, y, width, height);
```

### 参数

- `x`
  - : {{domxref("GLint")}}，用来设定视口的左下角水平坐标。默认值：0。
- `y`
  - : {{domxref("GLint")}}，用来设定视口的左下角垂直坐标。默认值：0。
- width
  - : 非负数{{domxref("Glsizei")}}，用来设定视口的宽度。默认值：canvas 的宽度。
- height
  - : 非负数{{domxref("Glsizei")}}，用来设定视口的高度。默认值：canvas 的高度。

### 返回值

None.

### 异常错误

只要宽度或高度有一个为负值，`gl.INVALID_VALUE` 错误将被抛出。

## 样例

当你第一次创建 WebGL 上下文的时候，视口的大小将和 `canvas` 的大小是匹配的。然而，如果你重新改变了 `canvas` 的大小，你需要告诉 WebGL 上下文设定新的视口。在这里，你可以使用 `gl.viewport`。

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

视口的宽度和高度的设定范围是依赖于底层如何实现的。如果你要获取这个范围，你可以查询`MAX_VIEWPORT_DIMS` 常量，它将返回 {{jsxref("Int32Array")}}。

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// e.g. Int32Array[16384, 16384]
```

如果要获取当前的视口，则可以查询`VIEWPORT` 常量。

```js
gl.getParameter(gl.VIEWPORT);
// e.g. Int32Array[0, 0, 640, 480]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.scissor()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
