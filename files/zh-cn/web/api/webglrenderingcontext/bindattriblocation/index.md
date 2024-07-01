---
title: WebGLRenderingContext.bindAttribLocation()
slug: Web/API/WebGLRenderingContext/bindAttribLocation
---

{{APIRef("WebGL")}}

WebGL API 的 **`WebGLRenderingContext.bindAttribLocation()`** 方法将通用顶点索引绑定到属性变量。

## 语法

```plain
void gl.bindAttribLocation(program, index, name);
```

### 参数

- `program`
  - : 要绑定的{{domxref("WebGLProgram")}} 对象。
- `index`
  - : {{domxref("GLuint")}} 指定要绑定的通用顶点的索引。
- `name`
  - : {{domxref("DOMString")}}指定要绑定到通用顶点索引的变量的名称。该名称不能以“webgl\_”或“\_webgl\_”开头，因为这些名称将保留供 WebGL 使用。

### 返回值

无。

## 示例

```plain
gl.bindAttribLocation(program, colorLocation, 'vColor');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
