---
title: WebGLRenderingContext：blendColor() 方法
slug: Web/API/WebGLRenderingContext/blendColor
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.blendColor()`** 方法用于设置源和目标混合因子。

## 语法

```js-nolint
blendColor(red, green, blue, alpha)
```

### 参数

- `red`
  - : {{domxref("WebGL_API/Types", "GLclampf")}}，表示红色分量，范围为 0 到 1。默认值为 0。
- `green`
  - : {{domxref("WebGL_API/Types", "GLclampf")}}，表示绿色分量，范围为 0 到 1。默认值为 0。
- `blue`
  - : {{domxref("WebGL_API/Types", "GLclampf")}}，表示蓝色分量，范围为 0 到 1。默认值为 0。
- `alpha`
  - : {{domxref("WebGL_API/Types", "GLclampf")}}，表示 alpha 分量（透明度），范围为 0 到 1。默认值为 0。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

要设置混合颜色，请使用：

```js
gl.blendColor(0, 0.5, 1, 1);
```

要获取混合颜色，可以查询 `BLEND_COLOR` 常量，它会返回一个 {{jsxref("Float32Array")}}。

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
