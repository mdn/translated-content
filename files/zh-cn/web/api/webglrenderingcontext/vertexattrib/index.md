---
title: WebGLRenderingContext.vertexAttrib[1234]f[v]()
slug: Web/API/WebGLRenderingContext/vertexAttrib
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.vertexAttrib[1234]f[v]()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的方法，可以为顶点 attibute 变量赋值。

## 语法

```plain
void gl.vertexAttrib1f(index, v0);
void gl.vertexAttrib2f(index, v0, v1);
void gl.vertexAttrib3f(index, v0, v1, v2);
void gl.vertexAttrib4f(index, v0, v1, v2, v3);

void gl.vertexAttrib1fv(index, value);
void gl.vertexAttrib2fv(index, value);
void gl.vertexAttrib3fv(index, value);
void gl.vertexAttrib4fv(index, value);
```

### Parameters

- `index`
  - : {{domxref("GLuint")}} 类型，指定了待修改顶点 attribute 变量的存储位置。
- `v0, v1, v2, v3`
  - : 浮点数类型{{jsxref("Number")}}，用于设置顶点 attibute 变量的各分量值。
- `value`
  - : {{jsxref("Float32Array")}} 类型，用于设置顶点 attibute 变量的向量值。

### 返回值

无。

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

## 相关链接

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
