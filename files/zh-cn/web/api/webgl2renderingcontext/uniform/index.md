---
title: WebGL2RenderingContext.uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的**`WebGL2RenderingContext.uniform[1234][uif][v]()`** 方法提供了 uniform（es）变量的详细值

> **备注：** `ui` _意为无符号整数_, `i` _意为整数，_`f` _意为浮点数_, 并且 `v` _意为矢量。_
> 并不是所有的组合都是有效的：`u` 不能是 `f`的组合。详见下方语法表格。用 正则表达式概括语法：`uniform[1234](u?i|f)v?`

## 语法

```js-nolint
uniform1ui(location, v0)
uniform2ui(location, v0, v1)
uniform3ui(location, v0, v1, v2)
uniform4ui(location, v0, v1, v2, v3)

uniform1fv(location, data)
uniform1fv(location, data, srcOffset)
uniform1fv(location, data, srcOffset, srcLength)

uniform2fv(location, data)
uniform2fv(location, data, srcOffset)
uniform2fv(location, data, srcOffset, srcLength)

uniform3fv(location, data)
uniform3fv(location, data, srcOffset)
uniform3fv(location, data, srcOffset, srcLength)

uniform4fv(location, data)
uniform4fv(location, data, srcOffset)
uniform4fv(location, data, srcOffset, srcLength)

uniform1iv(location, data)
uniform1iv(location, data, srcOffset)
uniform1iv(location, data, srcOffset, srcLength)

uniform2iv(location, data)
uniform2iv(location, data, srcOffset)
uniform2iv(location, data, srcOffset, srcLength)

uniform3iv(location, data)
uniform3iv(location, data, srcOffset)
uniform3iv(location, data, srcOffset, srcLength)

uniform4iv(location, data)
uniform4iv(location, data, srcOffset)
uniform4iv(location, data, srcOffset, srcLength)

uniform1uiv(location, data)
uniform1uiv(location, data, srcOffset)
uniform1uiv(location, data, srcOffset, srcLength)

uniform2uiv(location, data)
uniform2uiv(location, data, srcOffset)
uniform2uiv(location, data, srcOffset, srcLength)

uniform3uiv(location, data)
uniform3uiv(location, data, srcOffset)
uniform3uiv(location, data, srcOffset, srcLength)

uniform4uiv(location, data)
uniform4uiv(location, data, srcOffset)
uniform4uiv(location, data, srcOffset, srcLength)
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
