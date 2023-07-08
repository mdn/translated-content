---
title: Notification：title 属性
slug: Web/API/Notification/title
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`title`** 只读属性指示通知的标题。此属性通过 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `title` 参数指定。

## 值

一个字符串。

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
