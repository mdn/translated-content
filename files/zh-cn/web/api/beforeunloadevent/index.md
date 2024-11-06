---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
---

{{APIRef}}

**`beforeunload`** 事件触发于 window、document 和它们的资源即将卸载时。

当事件属性 `returnValue` 被赋值为非空字符串时，会弹出一个对话框，让用户确认是否离开页面（示例如下）。否则，事件被静默处理。一些浏览器实现仅在框架或内置框架接收到用户手势或交互时才显示对话框。在 [浏览器兼容性](#浏览器兼容性) 中查看更多信息。

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## 示例

```js
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\\o/";
});

//等同于
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});
```

基于 Webkit 的浏览器没有遵循该弹窗规范。以下是一个基本跨浏览器运行的例子。

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\\o/";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage; //Webkit, Safari, Chrome etc.
});
```

## 浏览器兼容性

{{Compat}}

## 参见

- [`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)
- [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event)
- [`load`](/zh-CN/docs/Web/API/Window/load_event)
- [`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event)
- [`unload`](/zh-CN/docs/Web/API/Window/unload_event)
- [卸载文档 — 提示卸载文档](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
