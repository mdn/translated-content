---
title: Notification：icon 属性
slug: Web/API/Notification/icon
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}}的只读属性**icon**使得包含`icon`的 URL 被显示成通知的一部分，如同指定{{domxref("Notification.Notification","Notification()")}}构造函数中`icon`的属性。

{{domxref("Notification")}} 接口的只读属性 **`icon`** 包含要作为通知的一部分显示的图标的 URL，在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `icon` 选项中指定。

## 值

一个字符串。

## 示例

在此[示例](https://github.com/mdn/emogotchi)中，当我们想要发出一个通知时，我们运行一个简单的 `spawnNotification() 函数`——这是传递参数来指定我们想要的主体、图标和标题，然后它创建必要的`options`对象，并使用{{domxref("Notification.Notification","Notification()")}}构造函数来触发通知。

在我们的 [To-do list app](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[view the app running live](https://mdn.github.io/dom-examples/to-do-notifications/)），我们使用 {{domxref("Notification.Notification","Notification()")}} 构造函数触发通知，并将参数传递给它以指定我们想要的 body、icon 和 title。

In our [To-do list app](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view the app running live](https://mdn.github.io/dom-examples/to-do-notifications/)), we use the {{domxref("Notification.Notification","Notification()")}}
constructor to fire a notification, passing it arguments to specify the body, icon and
title we want.

```js
const notification = new Notification("To do list", {
  body: text,
  icon: img,
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
