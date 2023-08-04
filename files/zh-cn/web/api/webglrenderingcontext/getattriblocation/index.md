---
title: WebGLRenderingContext.getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getAttribLocation()`** 方法返回了给定{{domxref("WebGLProgram")}}对象中某属性的下标指向位置。

## 语法

```plain
GLint gl.getAttribLocation(program, name);
```

### 参数

- program
  - : 一个包含了属性参数的{{domxref("WebGLProgram")}} 对象。
- name
  - : 需要获取下标指向位置的 {{domxref("DOMString")}} 属性参数名

### 返回值

表明属性位置的下标 {{domxref("GLint")}} 数字，如果找不到该属性则返回 -1。

## 示例

```js
gl.getAttribLocation(program, "vColor");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
