---
title: WebGL2RenderingContext.bindBufferBase()
slug: Web/API/WebGL2RenderingContext/bindBufferBase
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGL2RenderingContext.bindBufferBase()`** 方法将一个 {{domxref("WebGLBuffer")}} 绑定到某个点 (`target`) 的特定的 `index`上。

## 语法

```plain
void gl.bindBufferBase(target, index, buffer);
```

### 参数

- `target`
  - : {{domxref("Glenum")}} 指定绑定操作的目标。可能的值：
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : {{domxref("GLuint")}} 指定目标（`target`）的 index。
- `buffer`
  - : 绑定到目标点（`target`）的 {{domxref("WebGLBuffer")}} 。

### 返回值

无。

## 示例

```js
gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
