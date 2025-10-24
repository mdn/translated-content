---
title: WebGL2RenderingContext：uniform[1234][uif][v]() 方法
slug: Web/API/WebGL2RenderingContext/uniform
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGL2RenderingContext.uniform[1234][uif][v]()`** 方法指定了 uniform 变量的值。

> [!NOTE]
> `ui` 指*无符号整数*，`i` 指*整数*，`f` 指*浮点数*，而 `v` 则指*向量*。并不是所有的组合都是有效的：`u` 不能与 `f` 组合。详见下方语法表格。等价的正则表达式：`uniform[1234](u?i|f)v?`

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

- `location`
  - : 一个包含了要修改的 uniform 属性的位置的 {{domxref("WebGLUniformLocation")}} 对象。
- `data`、`v0`、`v1`、`v2`、`v3`
  - : 要被应用到 uniform 变量中的新值。可能的类型：
    - {{jsxref("Number")}}：用于无符号整数值（具有 `ui` 的方法）、整数值（具有 `i` 的方法）或浮点数（具有 `f` 的方法）。
    - {{jsxref("Uint32Array")}}：用于无符号整数向量方法（具有 `uiv` 的方法）。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.uniform()")}}
