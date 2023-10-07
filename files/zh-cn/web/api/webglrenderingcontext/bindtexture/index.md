---
title: WebGLRenderingContext.bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.bindTexture()`** 方法将给定的 {{domxref("WebGLTexture")}} 绑定到目标（绑定点）。

## 语法

```plain
void gl.bindTexture(target, texture);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定绑定点（目标）。可能的值：

    - `gl.TEXTURE_2D`: 二维纹理。
    - `gl.TEXTURE_CUBE_MAP`: 立方体映射纹理。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 时，可以使用以下值：

      - `gl.TEXTURE_3D`: 三维纹理。
      - `gl.TEXTURE_2D_ARRAY`: 二维数组纹理。

- texture
  - : 要绑定的 {{domxref("WebGLTexture")}} 对象。

### 返回值

无。

### 异常

如果目标不是 gl.TEXTURE_2D，gl.TEXTURE_CUBE_MAP，gl.TEXTURE_3D 或 gl.TEXTURE_2D_ARRAY，则会抛出 gl.INVALID_ENUM 错误。

## 示例

### 绑定纹理

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### 获取当前绑定

要检查当前纹理绑定，请查询 gl.TEXTURE_BINDING_2D 或 gl.TEXTURE_BINDING_CUBE_MAP 常量。

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
