---
title: WebGL2RenderingContext.beginTransformFeedback()
slug: Web/API/WebGL2RenderingContext/beginTransformFeedback
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGL2RenderingContext.beginTransformFeedback()`** 方法开始一个变换回传（Transform Feedback）操作。

## 语法

```plain
void gl.beginTransformFeedback(primitiveMode);
```

### 参数

- `primitiveMode`
  - : A {{domxref("GLenum")}} specifying the output type of the primitives that will be recorded into the buffer objects that are bound for transform feedback. 可能的值：
    - `gl.POINTS`
    - `gl.LINES`
    - `gl.TRIANGLES`

### 返回值

无。

## 示例

```js
var transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
gl.beginTransformFeedback(gl.TRIANGLES);
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLTransformFeedback")}}
