---
title: WebGLRenderingContext：vertexAttrib[1234]f[v]() 方法
slug: Web/API/WebGLRenderingContext/vertexAttrib
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.vertexAttrib[1234]f[v]()`** 方法用于为通用顶点属性指定常量值。

## 语法

```js-nolint
vertexAttrib1f(index, v0)
vertexAttrib2f(index, v0, v1)
vertexAttrib3f(index, v0, v1, v2)
vertexAttrib4f(index, v0, v1, v2, v3)

vertexAttrib1fv(index, value)
vertexAttrib2fv(index, value)
vertexAttrib3fv(index, value)
vertexAttrib4fv(index, value)
```

### 参数

- `index`
  - : {{domxref("WebGL_API/Types", "GLuint")}} 类型，指定了待修改顶点属性的位置。
- `v0, v1, v2, v3`
  - : 浮点数类型 {{jsxref("Number")}}，用于设置顶点属性的值。
- `value`
  - : {{jsxref("Float32Array")}} 类型，用于设置顶点属性值的浮点向量。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const a_foobar = gl.getAttribLocation(shaderProgram, "foobar");
//either set each component individually:
gl.vertexAttrib3f(a_foobar, 10.0, 5.0, 2.0);
//or provide a Float32Array:
const floatArray = new Float32Array([10.0, 5.0, 2.0]);
gl.vertexAttrib3fv(a_foobar, floatArray);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
