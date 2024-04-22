---
title: WebGLRenderingContext.getExtension()
slug: Web/API/WebGLRenderingContext/getExtension
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getExtension()`** 方法可以启用一个 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 扩展。

## 语法

```plain
gl.getExtension(name);
```

### 参数

- name
  - : 以 {{jsxref("String")}} 形式表示的需要启用的 WebGL 扩展的名称。

### 返回值

一个 WebGL 扩展对象。如果扩展名称（区分大小写）与 {{domxref("WebGLRenderingContext.getSupportedExtensions")}} 中的任何结果都不匹配，则只会返回 {{jsxref("null")}} 。

## 示例

当一个 WebGL 扩展被启用后，就可以使用该扩展提供的方法、属性和常量。

```js
var canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

gl.getExtension("WEBGL_lose_context").loseContext();
```

## WebGL 扩展

WebGL API 的扩展在 [WebGL Extension Registry](https://www.khronos.org/registry/webgl/extensions/) 定义。目前支持的扩展在[这里](/zh-CN/docs/Web/API/WebGL_API#扩展)列出

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- [webglreport.com](http://webglreport.com)
