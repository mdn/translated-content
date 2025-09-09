---
title: WebGLRenderingContext.depthFunc()
slug: Web/API/WebGLRenderingContext/depthFunc
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.depthFunc()`** 方法，指定将输入像素深度与当前深度缓冲区值进行比较的函数。

## 语法

```plain
void gl.depthFunc(func);
```

### 参数

- `func`
  - : 是一个指定深度比较函数的 {{domxref("GLenum")}}，它设置像素将被绘制的条件。默认值是 `gl.LESS`。可能的值是：
    - `gl.NEVER`（永不通过）
    - `gl.LESS`（如果传入值小于深度缓冲值，则通过）
    - `gl.EQUAL`（如果传入值等于深度缓冲区值，则通过）
    - `gl.LEQUAL`（如果传入值小于或等于深度缓冲区值，则通过）
    - `gl.GREATER`（如果传入值大于深度缓冲区值，则通过）
    - `gl.NOTEQUAL`（如果传入的值不等于深度缓冲区值，则通过）
    - `gl.GEQUAL`（如果传入值大于或等于深度缓冲区值，则通过）
    - `gl.ALWAYS`（总是通过）

### 返回值

无。

## 示例

深度测试默认是禁用的。要启用或禁用深度测试，请使用带有参数 `gl.DEPTH_TEST` 的 {{domxref("WebGLRenderingContext.enable", "enable()")}} 和 {{domxref("WebGLRenderingContext.disable", "disable()")}} 方法。

```js
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.NEVER);
```

要检查当前深度函数，请查询 `DEPTH_FUNC` 常量。

```js
gl.getParameter(gl.DEPTH_FUNC) === gl.NEVER;
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.enable()")}}
