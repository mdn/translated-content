---
title: WebGLRenderingContext.deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
---

{{APIRef("WebGL")}}**`WebGLRenderingContext.deleteShader()`** 用于删除一个参数提供的 {{domxref("WebGLShader")}}对象。如果该{{domxref("WebGLShader")}}对象已经被删除，该方法不会有任何作用。

## Syntax

```plain
void gl.deleteShader(shader);
```

### 参数

- shader
  - : 需要被删除的 {{domxref("WebGLShader")}} 对象

### 返回值

None.

## 示例

### 删除一个着色器

```js
gl.deleteShader(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他相关

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
