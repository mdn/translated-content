---
title: Using WebGL extensions
slug: Web/API/WebGL_API/Using_Extensions
---

{{WebGLSidebar}}

WebGL，像它的姐妹 API (OpenGL and OpenGL ES)，支持使用扩展（extensions）。一份完整的扩展列表可在 [khronos webgl extension registry](http://www.khronos.org/registry/webgl/extensions/)。

> **备注：** 不像别的 GL APIs，在 webGL 中 , 扩展只有在明确需要的情况下才会加载。

## 规范扩展名，供应商前缀和首选项

扩展（extensions）在未被官方正式制定为标准前，某些浏览器厂商可能会支持 WebGL 扩展 (but only when they are in draft stage)。这样的话，扩展的名字应该加上相应的厂商前缀 (`MOZ_`, `WEBKIT_`, etc.)，否则这个扩展只能在浏览器切换了偏好设置的前提下生效。

If you wish to work with the bleeding edge of extensions, and want to keep working on upon ratification (assuming, of course, that the extension doesn't change in incompatible ways), that you query the canonical extension name as well as the vendor extension name. For instance:

```js
var ext = (
  gl.getExtension('OES_vertex_array_object') ||
  gl.getExtension('MOZ_OES_vertex_array_object') ||
  gl.getExtension('WEBKIT_OES_vertex_array_object')
);
```

Note that, vendor prefix have been discouraged more and more and thus most browser implement experimental extensions behind a feature flag rather than vendor prefix.

The feature flags are:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in Chromium based browsers (Chrome, Opera).

## 命名约定

WebGL extensions are prefixed with "ANGLE", "OES", "EXT" or "WEBGL". These prefixes reflect origin and intent:

- ANGLE\_: Extensions that are written by the [ANGLE library](https://en.wikipedia.org/wiki/ANGLE_%28software%29) authors.
- OES\_: Extensions that mirror functionality from OpenGL ES or OpenGL API extensions approved by the respective architecture review boards.
- EXT\_: Extensions that mirror other OpenGL ES or OpenGL API extensions.
- WEBGL\_: Extensions that are WebGL-specific and intended to be compatible with multiple web browsers. It should also be used for extensions which originated with the OpenGL ES or OpenGL APIs, but whose behavior has been significantly altered.

## 查询可用的扩展程序

The WebGL context supports querying what extensions are available.

```js
var available_extensions = gl.getSupportedExtensions();
```

The {{domxref("WebGLRenderingContext.getSupportedExtensions()")}} method returns an array of strings, one for each supported extension.

## 扩展列表

The current extensions are:

{{page("en-US/docs/Web/API/WebGL_API", "Extensions")}}

## 启用一个扩展

Before an extension can be used it has to be enabled using {{domxref("WebGLRenderingContext.getExtension()")}}. For example:

```js
var float_texture_ext = gl.getExtension('OES_texture_float');
```

The return value is `null` if the extension is not supported, or an extension object otherwise.

## 扩展对象

If an extension defines specific symbols or functions that are not available in the core specification of WebGL, they will be available on the extension object returned by the call to `gl.getExtension()`.

## 参见

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](http://webglreport.com)
