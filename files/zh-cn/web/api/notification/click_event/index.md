---
title: Notification.onclick
slug: Web/API/Notification/click_event
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}} 接口的 onclick 属性指定一个事件侦听器来接收 {{event("click")}} 事件。

当用户点击一个显示的{{domxref("Notification")}}时，会发生这些事件。

## Syntax

```plain
Notification.onclick = function(event) { ... };
```

该方法的默认行为是将焦点移到与该通知相关联的 [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) 的窗口。如果你不希望这样，可以在 event 对象上调用 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault).

## Examples

在下面这个例子中，我们使用 onclick 处理程序来监听点击通知的事件，并在新窗口 (通过包含一个参数`'_blank'`) 打开一个页面：

```js
notification.onclick = function(event) {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('http://www.mozilla.org', '_blank');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
