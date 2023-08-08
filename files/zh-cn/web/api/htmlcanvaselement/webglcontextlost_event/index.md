---
title: "HTMLCanvasElement: webglcontextlost event"
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
---

{{APIRef}}

如果浏览器检测到与 {{domxref("WebGLRenderingContext")}}对象关联的图形缓冲区已丢失，则会触发[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`webglcontextlost`** 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">冒泡</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">可取消</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">继承</th>
      <td>{{domxref("WebGLContextEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理程序属性</th>
      <td>none</td>
    </tr>
  </tbody>
</table>

## 例子

在 {{domxref("WEBGL_lose_context")}} 扩展的帮助下，您可以模拟 `webglcontextlost` 事件：

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

//WEBGL_lose_context 是 webgl 是属于 WebGLAPI 的一个扩展 API，它提供一组方法用来模拟一个 WebGLRenderingContext 上下文的丢失和恢复。
gl.getExtension("WEBGL_lose_context").loseContext();

// "webglcontextlost" event is logged.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
