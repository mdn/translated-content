---
title: Notification：silent 属性
slug: Web/API/Notification/silent
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}

{{domxref("Notification")}} 接口的 **`silent`** 只读属性指定通知是否应当保持静默，即无论设备设置如何，都不发出声音或振动。该属性在{{domxref("Notification.Notification","Notification()")}} 构造函数的 `silent` 选项中指定。

## 值

一个布尔值。默认值是 `false`；设为 `true` 将使通知静音。

## 示例

以下代码片段旨在触发静默通知；创建一个简单的 `options` 对象，然后调用 {{DOMxRef("Notification.Notification","Notification()")}} 构造函数触发通知。

```js
const options = {
  body: "您提交的代码收到了 3 条新的审阅意见。",
  silent: true,
};

const n = new Notification("新评论活动", options);

console.log(n.silent); // "true"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
