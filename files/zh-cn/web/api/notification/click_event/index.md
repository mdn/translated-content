---
title: Notification：click 事件
slug: Web/API/Notification/click_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`click`** 事件在用户点击显示的 {{domxref("Notification")}} 时候触发。

默认的事件行为是将焦点移动到与通知相关[浏览上下文](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context)的视口上。如果你不想要默认行为，请在事件对象上调用 {{domxref("Event/preventDefault", "preventDefault()")}}。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## 事件类型

一个通用 {{domxref("Event")}}。

## 示例

在下面这个例子中，我们使用 onclick 处理器来监听点击通知的事件，并在新窗口（通过包含一个参数 `'_blank'`）打开一个页面：

```js
notification.onclick = (event) => {
  event.preventDefault(); // 阻止浏览器聚焦于 Notification 的标签页
  window.open("http://www.mozilla.org", "_blank");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Notification")}}
- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
