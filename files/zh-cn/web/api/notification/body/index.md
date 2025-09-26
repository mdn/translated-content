---
title: Notification：body 属性
slug: Web/API/Notification/body
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`body`** 只读属性指示通知的正文字符串，该字符串在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `body` 选项中指定。

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

  console.log(n.body);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
