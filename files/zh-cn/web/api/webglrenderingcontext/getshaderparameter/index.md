---
title: WebGLRenderingContext.getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getShaderParameter()`** 返回给定的着色器信息

## 语法

```js-nolint
getShaderParameter(shader, pname)
```

### 参数

- shader
  - : 需要获取信息的着色器对象
- pname
  - : 指定要查询的信息属性名称，值：
    - `gl.DELETE_STATUS`:标示着色器是否被删除，删除（**GL_TRUE**）未删除（**GL_FALSE**）.
    - `gl.COMPILE_STATUS`: 标示着色器是否编译成功，是（**GL_TRUE**）不是（**GL_FALSE**）
    - `gl.SHADER_TYPE`: 标示着色器类型，是顶点着色器 (`gl.VERTEX_SHADER`) 还是片段着色器 (`gl.FRAGMENT_SHADER`)

### 返回值

返回对应着色器属性信息

## 例子

```js
gl.getShaderParameter(shader, gl.SHADER_TYPE);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
