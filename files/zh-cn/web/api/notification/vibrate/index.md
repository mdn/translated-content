---
title: Notification：vibrate 属性
slug: Web/API/Notification/vibrate
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`vibrate`** 只读属性指定当通知触发时设备振动硬件发出的[振动模式](/zh-CN/docs/Web/API/Vibration_API#振动模式)。此属性通过 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `vibrate` 选项指定。

## 值

一个[振动 API 规范](https://w3c.github.io/vibration/)所指定的[振动模式](/zh-CN/docs/Web/API/Vibration_API#振动模式)。

## 示例

以下代码片段旨在创建同时触发设备振动的通知；首先创建一个简单的 `options` 对象，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  vibrate: [200, 100, 200],
};

const n = new Notification("新的评论活动", options);

console.log(n.vibrate); // [200, 100, 200]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
