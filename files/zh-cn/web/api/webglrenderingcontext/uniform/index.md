---
title: WebGLRenderingContext.uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.uniform[1234][fi][v]()`** 方法指定了 uniform 变量的值。所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。

> [!NOTE]
> 这里描述的许多函数都扩展了 WebGL 2 接口，可在以下地址查看 {{domxref("WebGL2RenderingContext.uniform","WebGL2RenderingContext.uniform[1234][uif][v]()")}}。

## 语法

```js-nolint
uniform1f(location, v0)
uniform1fv(location, value)
uniform1i(location, v0)
uniform1iv(location, value)

uniform2f(location, v0, v1)
uniform2fv(location, value)
uniform2i(location, v0, v1)
uniform2iv(location, value)

uniform3f(location, v0, v1, v2)
uniform3fv(location, value)
uniform3i(location, v0, v1, v2)
uniform3iv(location, value)

uniform4f(location, v0, v1, v2, v3)
uniform4fv(location, value)
uniform4i(location, v0, v1, v2, v3)
uniform4iv(location, value)
```

### 参数

- `location`
  - : {{domxref("WebGLUniformLocation")}} 对象包含了将要修改的 uniform 属性位置。
- `value, v0, v1, v2, v3`
  - : 新的值将被用于 uniform 变量。可能的类型：
    - 浮点值 {{jsxref("Number")}}(方法名跟"f").
    - 浮点数组 (例如 {{jsxref("Float32Array")}} 或 {{jsxref("Array")}} 的数组) 用于浮点型向量方法 (方法名跟 "fv").
    - 整型值 {{jsxref("Number")}} (方法名跟"i").
    - 整型数组{{jsxref("Int32Array")}} 用于整型向量方法 (方法名跟 "iv").

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
gl.uniform1f(u_alpha, 0.8);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
