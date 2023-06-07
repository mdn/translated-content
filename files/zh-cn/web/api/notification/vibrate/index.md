---
title: Notification：vibrate 属性
slug: Web/API/Notification/vibrate
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The `vibrate` read-only property of the {{domxref("Notification")}}
interface specifies a [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns)
for the device's vibration hardware to emit when the notification fires. This is
specified in the `vibrate` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## 值

A [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns), as specified in the [Vibration API spec](https://w3c.github.io/vibration/).

## 示例

The following snippet is intended to create a notification that also triggers a device
vibration; a simple `options` object is created, and then the notification is
fired using the `Notification()` constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  vibrate: [200, 100, 200],
};

const n = new Notification("New review activity", options);

console.log(n.vibrate); // "[200, 100, 200]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
