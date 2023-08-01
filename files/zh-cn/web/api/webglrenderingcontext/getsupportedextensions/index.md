---
title: WebGLRenderingContext.getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getSupportedExtensions()`** 方法返回一个所有的支持 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 扩展的列表。

## 语法

```js-nolint
getSupportedExtensions()
```

### 参数

无。

### 返回值

一个字符串{{jsxref("Array", "数组", "", "true")}}，包含所有支持 WebGL 的扩展。

## 示例

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

const extensions = gl.getSupportedExtensions();
// Array [ 'ANGLE_instanced_arrays', 'EXT_blend_minmax', … ]
```

参见用于获得一个特定的扩展对象的 {{domxref("WebGLRenderingContext.getExtension()")}} 方法。

## WebGL 扩展

所有 WebGL API 扩展都被注册在 [WebGL Extension Registry](https://www.khronos.org/registry/webgl/extensions/) 中。当前的扩展在[这里](/zh-CN/docs/Web/API/WebGL_API#扩展)列出。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com)
