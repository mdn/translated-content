---
title: WebGLRenderingContext.blendEquation()
slug: Web/API/WebGLRenderingContext/blendEquation
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.blendEquation()`** 方法用于将 RGB 混合方程和阿尔法混合方程设置为单个方程。

混合方程式确定新像素如何与 {{domxref("WebGLFramebuffer")}} 中的像素组合。

## 语法

```plain
void gl.blendEquation(mode);
```

### 参数

- `mode`

  - : {{domxref("GLenum")}} 指定源和目标颜色的组合方式。必须是：

    - `gl.FUNC_ADD`: 源 + 目的地（默认值），
    - `gl.FUNC_SUBTRACT`: 源 - 目的地，
    - `gl.FUNC_REVERSE_SUBTRACT`: 目的地 - 源
    - 当使用 {{domxref("EXT_blend_minmax")}} 扩展名时：

      - `ext.MIN_EXT`: 最小的源和目的地，
      - `ext.MAX_EXT`: 最大源和目的地。

    - 当使用 {{domxref("WebGL2RenderingContex","WebGL 2 上下文","",1)}} 时，可以使用以下值：

      - `gl.MIN`: 最小的源和目的地，
      - `gl.MAX`: 最大源和目的地。

### 异常

如果模式不是三个可能的值之一，则会抛出 gl.INVALID_ENUM 错误。

### 返回值

None.

## 示例

要设置混合方程式，请使用：

```js
gl.blendEquation(gl.FUNC_ADD);
gl.blendEquation(gl.FUNC_SUBTRACT);
gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
```

要获得混合方程，请查询返回 gl.FUNC_ADD，gl.FUNC_SUBTRACT，gl.FUNC_REVERSE_SUBTRACT 或 {{domxref("EXT_blend_minmax")}} 的 BLEND_EQUATION，BLEND_EQUATION_RGB 和 BLEND_EQUATION_ALPHA 常量：ext.MIN_EXT 或 ext.MAX_EXT。

```js
gl.getParameter(gl.BLEND_EQUATION_RGB) === gl.FUNC_ADD;
// true

gl.getParameter(gl.BLEND_EQUATION_ALPHA) === gl.FUNC_ADD;
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
- {{domxref("EXT_blend_minmax")}}
