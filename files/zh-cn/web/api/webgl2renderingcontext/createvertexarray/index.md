---
title: WebGL2RenderingContext.createVertexArray()
slug: Web/API/WebGL2RenderingContext/createVertexArray
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`WebGL2RenderingContext.createVertexArray()`**方法创建并初始化（creates and initializes）一个 {{domxref("WebGLVertexArrayObject")}} 的对象 (object) ，它代表一个指向顶点数组数据的顶点数组对象（vertex array object (VAO) ），并为不同的顶点数据集提供名称。

## 语法

```js-nolint
createVertexArray()
```

### 参数

没有参数

### 返回值

一个{{domxref("WebGLVertexArrayObject")}}对象 代表 一个顶点数组对象 (VAO) ，该对象指向顶点数据。

## 示例

```js
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// ...
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// ...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLVertexArrayObject")}}
- {{domxref("bindVertexArray")}}
