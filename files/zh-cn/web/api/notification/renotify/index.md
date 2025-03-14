---
title: Notification：renotify 属性
slug: Web/API/Notification/renotify
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`renotify`** 只读属性指定在新通知替换旧通知后是否应当通知用户，在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `renotify` 选项中指定。

## 值

一个布尔值。默认值为 `false`；设为 `true` 将会使通知重新通知用户。

## 示例

以下代码片段用于在一个通知被替换以后触发重新向用户发送通知；它创建一个简单的 `options` 对象，然后调用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  renotify: true,
};

const n = new Notification("新评论活动", options);

console.log(n.renotify); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
