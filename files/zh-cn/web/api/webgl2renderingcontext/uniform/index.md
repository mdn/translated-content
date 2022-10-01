---
title: WebGL2RenderingContext.uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的**`WebGL2RenderingContext.uniform[1234][uif][v]()`** 方法提供了 uniform（es）变量的详细值

> **备注：** `ui` _意为无符号整数_, `i` _意为整数，_`f` _意为浮点数_, 并且 `v` _意为矢量。_
> 并不是所有的组合都是有效的：`u` 不能是 `f`的组合。详见下方语法表格。用 正则表达式概括语法：`uniform[1234](u?i|f)v?`

## 语法

```
void gl.uniform1ui(location, v0);
void gl.uniform2ui(location, v0, v1);
void gl.uniform3ui(location, v0, v1, v2);
void gl.uniform4ui(location, v0, v1, v2, v3);
void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);
```

### 参数

- location
  - : 一个 {{domxref("WebGLUniformLocation")}} 对象包含了本地 uniform 属性的修改。
- `value, v0, v1, v2, v3`

  - : 一个新的值被应用到 uniform 变量当中。合理情况：

    - {{jsxref("Number")}} 如果是无符号整数值 (则用 `ui`方法),如果是整数值 (则用 `i`方法), 如果是浮点数 (则用`f`方法).
    - {{jsxref("Uint32Array")}} 用于无符号整数向量（矢量）方法 (则用`uiv`方法).

### 返回值

没有返回值

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 详见

- {{domxref("WebGLRenderingContext.uniform()")}}
