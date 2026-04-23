---
title: WebGLRenderingContext.cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.cullFace()`** 指定正面和/或背面多边形是否可以剔除。

## 语法

```plain
void gl.cullFace(mode);
```

### 参数

- `mode`
  - : {{domxref("GLenum")}} 指定适合进行剔除的面是正面还是背面。默认值是 `gl.BACK`. 可能的值有：
    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### 返回值

None.

## 示例

多边形剔除功能默认不开启。想要开启这个功能，使用{{domxref("WebGLRenderingContext.enable", "enable()")}} 和 {{domxref("WebGLRenderingContext.disable", "disable()")}} 方法，传入参数`gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

需要 `CULL_FACE_MODE` 常量来检查当前多边形剔除模式。

```js
gl.getParameter(gl.CULL_FACE_MODE) === gl.FRONT_AND_BACK;
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.frontFace()")}}
