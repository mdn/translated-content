---
title: WebGLRenderingContext.isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.isContextLost()`** 方法返回一个{{jsxref("Boolean")}} 标记 WebGL 的上下文是否已经丢失。

## 语法

```plain
gl.isContextLost();
```

### 返回值

{{jsxref("Boolean")}}。如果上下文丢失则返回 true，否则返回 false。

## 样例

比如，当检查程序链接成功时，你也可以检查是否上下文已经丢失。

```js
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS) && !gl.isContextLost()) {
  var info = gl.getProgramInfoLog(program);
  console.log("Error linking program:\n" + info);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- The {{domxref("WebGLContextEvent")}} signals changes in the context state.
