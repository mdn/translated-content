---
title: Notification：silent 属性
slug: Web/API/Notification/silent
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`silent`** read-only property of the
{{domxref("Notification")}} interface specifies whether the notification should be
silent, i.e., no sounds or vibrations should be issued, regardless of the device
settings. This is specified in the `silent` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## 值

A boolean value. `false` is the default; `true` makes
the notification silent.

## 示例

The following snippet is intended to fire a silent notification; a simple
`options` object is created, and then the notification is fired using the
{{DOMxRef("Notification.Notification","Notification()")}} constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  silent: true,
};

const n = new Notification("New review activity", options);

console.log(n.silent); // "true"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
