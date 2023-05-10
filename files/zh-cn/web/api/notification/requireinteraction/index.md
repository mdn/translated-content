---
title: Notification.requireInteraction
slug: Web/API/Notification/requireInteraction
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`requireInteraction`** 属性是只读属性，它返回一个 {{jsxref("Boolean")}}（布尔值），指示在用户点击或关闭通知前，通知应该保持活动状态，而不是自动关闭。

> **备注：** 此属性可以在创建通知时通过在 {{domxref("Notification.Notification()")}} 构造器的 options 参数接收的对象上设置 `requireInteraction` 属性为 `true` 来进行设置

## 语法

```js
function spawnNotification(theTitle,theBody,shouldRequireInteraction) {
  var options = {
      body: theBody, //通知正文
      requireInteraction: shouldRequireInteraction //在此处设置 requireInteraction
  }
  var n = new Notification(theTitle,options);
}
```

### 值

{{jsxref("Boolean")}}（布尔值）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
