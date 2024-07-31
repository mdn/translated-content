---
title: Notification：icon 属性
slug: Web/API/Notification/icon
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`icon`** 只读属性包含将作为通知的一部分显示的图标的 URL，在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `icon` 选项中指定。

## 值

一个字符串。

## 示例

在我们的 [To-do list app](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[查看实时运行示例](https://mdn.github.io/dom-examples/to-do-notifications/)），我们使用 {{domxref("Notification.Notification","Notification()")}} 构造函数触发通知，并将参数传递给它以指定我们想要的 body、icon 和 title。

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
