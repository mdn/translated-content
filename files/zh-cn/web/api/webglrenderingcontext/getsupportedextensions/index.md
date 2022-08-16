---
title: WebGLRenderingContext.getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
---
{{APIRef("WebGL")}}

这个 **WebGLRenderingContext.getSupportedExtensions()** 方法返回一个所有的支持[**WebGL**](/zh-CN/docs/Web/API/WebGL_API) 扩展的列表。

## 语法

```
gl.getSupportedExtensions();
```

### 返回值

一个字符串 {{jsxref("Array")}} 数组，包含所有支持 WebGL 的扩展。

## 示例代码

```js
var canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

var extensions = gl.getSupportedExtensions();
// Array [ "ANGLE_instanced_arrays", "EXT_blend_minmax", ... ]
```

浏览 {{domxref("WebGLRenderingContext.getExtension()")}} 方法得到一个特定的扩展对象。

## WebGL 扩展

所有 WebGL API 扩展都被注册在 [WebGL Extension Registry](https://www.khronos.org/registry/webgl/extensions/) 中。当前的扩展是：

{{page("en-US/docs/Web/API/WebGL_API", "Extension_interfaces")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.WebGLRenderingContext.getSupportedExtensions")}}

## 浏览其他相关资源

- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](http://webglreport.com)
