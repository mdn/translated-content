---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
---

{{APIRef("WebGL")}}

**WebGLActiveInfo**是[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，并且代表了调用 {{domxref("WebGLRenderingContext.getActiveAttrib()")}} 和{{domxref("WebGLRenderingContext.getActiveUniform()")}} 这两个方法后传回的信息。

## 属性值

- {{domxref("WebGLActiveInfo.name")}}
  - : 请求变量的只读名称。
- {{domxref("WebGLActiveInfo.size")}}
  - : 请求变量的只读尺寸。
- {{domxref("WebGLActiveInfo.type")}}
  - : 请求变量的只读类型。

## 示例

`WebGLActiveInfo` 对象可以通过以下方式返回：

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}

```js
WebGLActiveInfo? getActiveAttrib(WebGLProgram? program, GLuint index);
WebGLActiveInfo? getActiveUniform(WebGLProgram? program, GLuint index);
WebGLActiveInfo? getTransformFeedbackVarying(WebGLProgram? program, GLuint index)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参见

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
