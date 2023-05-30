---
title: Notification：maxActions 静态属性
slug: Web/API/Notification/maxActions_static
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Notification")}} 接口的 **`maxActions`** 属性返回设备和用户代理支持的最大操作数量。实际上，这是会被用户代理遵守的 {{domxref("Notification.actions")}} 数组中的元素的最大数量。

## 值

一个表示用户代理和设备可以向用户呈现的通知操作的最大数量的整数。

## 示例

以下代码片段打印了支持的操作的最大数量。

```js
const maxActions = Notification.maxActions;
console.log(`此设备最多可以对每个通知显示 ${maxActions} 个操作。`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
