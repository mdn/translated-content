---
title: WebGLRenderingContext.blendColor()
slug: Web/API/WebGLRenderingContext/blendColor
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.blendColor()`** 方法用于设置源和目标混合因子。

## 语法

```plain
void gl.blendColor(red, green, blue, alpha);
```

### 参数

- `red`
  - : {{domxref("GLclampf")}} 红色分量的范围为 0 到 1。
- `green`
  - : {{domxref("GLclampf")}} 红色分量的范围为 0 到 1。
- blue
  - : {{domxref("GLclampf")}} 红色分量的为 0 到 1。
- alpha
  - : {{domxref("GLclampf")}} 组件（透明度）的范围在 0 到 1。

### 返回值

None.

## 示例

要设置混合颜色，请使用：

```js
gl.blendColor(0, 0.5, 1, 1);
```

要获得混合颜色，请查询返回 {{jsxref("Float32Array")}} 的 BLEND_COLOR 常量。

```js
gl.getParameter(gl.BLEND_COLOR);
// Float32Array[0, 0.5, 1, 1]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
