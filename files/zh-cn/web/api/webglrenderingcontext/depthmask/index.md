---
title: WebGLRenderingContext.depthMask()
slug: Web/API/WebGLRenderingContext/depthMask
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.depthMask()`** 方法设置是否启用写入深度缓冲。

## 语法

```plain
void gl.depthMask(flag);
```

### 参数

- `flag`
  - : 一个 {{domxref("GLboolean")}} ，用于设置是否启用写入深度缓冲。默认值：true，表示启用写入。

### 返回值

无。

## 例子

```js
gl.depthMask(false);
```

要获得当前的深度遮罩值，传入 `DEPTH_WRITEMASK` 常量，返回 {{jsxref("Boolean")}}.

```js
gl.getParameter(gl.DEPTH_WRITEMASK);
// false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("WebGLRenderingContext.colorMask()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
