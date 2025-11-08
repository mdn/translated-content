---
title: WebGLRenderingContext.clear()
slug: Web/API/WebGLRenderingContext/clear
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.clear()`** 方法使用预设值来清空缓冲。

预设值可以使用 {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}} 、 {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}} 或 {{domxref("WebGLRenderingContext.clearStencil", "clearStencil()")}} 设置。

裁剪、抖动处理和缓冲写入遮罩会影响 `clear()` 方法。

## 句法

```plain
void gl.clear(mask);
```

### 参数

- `mask`
  - : 一个用于指定需要清除的缓冲区的 {{domxref("GLbitfield")}} 。可能的值有：
    - `gl.COLOR_BUFFER_BIT //颜色缓冲区`
    - `gl.DEPTH_BUFFER_BIT //深度缓冲区`
    - `gl.STENCIL_BUFFER_BIT //模板缓冲区`

### 错误抛出

如果 mask 不是以上列出的值，会抛出 `gl.INVALID_ENUM` 错误。

### 返回值

无

## 示例

`clear()` 方法可接受复合值，

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

要获得当前的清除值，传入 `COLOR_CLEAR_VALUE`、`DEPTH_CLEAR_VALUE` 或 `STENCIL_CLEAR_VALUE` 常量。

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
