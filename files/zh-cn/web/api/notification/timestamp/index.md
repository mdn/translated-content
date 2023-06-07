---
title: Notification：timestamp 属性
slug: Web/API/Notification/timestamp
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`timestamp`** read-only property of the
{{domxref("Notification")}} interface returns a number, as
specified in the `timestamp` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The notification's timestamp can represent the time, in milliseconds since 00:00:00 UTC
on 1 January 1970, of the event for which the notification was created, or it can be an
arbitrary timestamp that you want associated with the notification. For example, a
timestamp for an upcoming meeting could be set in the future, whereas a timestamp for a
missed message could be set in the past.

## 值

A number representing a timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds.

## 示例

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
const dts = Math.floor(Date.now());

const options = {
  body: "Your code submission has received 3 new review comments.",
  timestamp: dts,
};

const n = new Notification("New review activity", options);

console.log(n.timestamp); // Logs the timestamp
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
