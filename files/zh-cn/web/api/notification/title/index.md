---
title: Notification：title 属性
slug: Web/API/Notification/title
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`title`** read-only property of the
{{domxref("Notification")}} interface indicates the title of the notification, as
specified in the `title` parameter of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## 值

A string.

## 示例

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };

  const n = new Notification(theTitle, options);

  console.log(n.title);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
