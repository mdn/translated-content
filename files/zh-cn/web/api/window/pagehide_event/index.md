---
title: "Window: 页面隐藏事件 (pagehide event)"
slug: Web/API/Window/pagehide_event
---

{{APIRef("HTML DOM")}}

当浏览器在显示与会话历史记录不同的页面的过程中隐藏当前页面时，**`pagehide`**(页面隐藏) 事件会被发送到一个{{domxref("Window")}} 。例如，当用户单击浏览器的“后退”按钮时，当前页面在显示上一页之前会收到一个`pagehide`(页面隐藏) 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles(冒泡)</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable(可取消)</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface(接口)</th>
      <td>{{domxref("PageTransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property(事件处理程序属性)</th>
      <td>{{domxref("Window.onpagehide", "onpagehide")}}</td>
    </tr>
  </tbody>
</table>

## 例子

在此示例中，建立了一个事件处理程序以监视 `pagehide` (页面隐藏) 事件，并在持久保存页面以进行可能的重用时执行特殊处理。

```js
window.addEventListener(
  "pagehide",
  (event) => {
    if (event.persisted) {
      /* the page isn't being discarded, so it can be reused later */
    }
  },
  false,
);
```

这也可以使用 {{domxref("Window")}} 上的 {{domxref("Window.onpagehide", "onpagehide")}} 事件处理程序属性来编写：

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- The {{domxref("Window.pageshow_event", "pageshow")}} event
