---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
---

{{APIRef("WebGL")}}

**WebContextEvent** 接口属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，同时也是生成用来对 WebGL 渲染上下文作响应的事件接口。

## 继承

**此接口从它的父接口 {{domxref("Event")}}继承属性和方法。**

{{InheritanceDiagram}}

## 属性

**此接口从它的父接口 {{domxref("Event")}}继承属性。**

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : 一个包含事件额外信息的只读属性。

## 方法

_此接口本身并没有定义任何方法，而是从它的父接口 {{domxref("Event")}} 继承方法。_

## 示例

使用 {{domxref("WEBGL_lose_context")}} 插件，你可以模拟 {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}} 和 {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}} 事件：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextlost",
  function (e) {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").loseContext();

// 记录了 "webglcontextlost" 类型的 WebGLContextEvent 事件
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
- 事件：[webglcontextlost](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [webglcontextrestored](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [webglcontextcreationerror](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
