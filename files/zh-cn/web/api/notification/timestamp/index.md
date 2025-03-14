---
title: Notification：timestamp 属性
slug: Web/API/Notification/timestamp
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`timestamp`** 只读属性返回一个数字。此属性通过 {{domxref("Notification.Notification"," Notification()")}} 构造函数的 `timestamp` 选项指定。

通知的时间戳可以表示创建通知的事件的时间（自 1970 年 1 月 1 日 00:00:00 UTC 时间以来的毫秒数），或者它可以是你希望与通知相关联的任意时间戳。例如，一个即将召开的会议的时间戳可以设置在未来，而一条错过的消息的时间戳可以设置在过去。

## 值

一个表示时间戳的数字，以 {{Glossary("Unix time", "Unix 时间")}}形式按毫秒为单位给出。

## 示例

以下代码片段会触发一条通知；首先创建一个简单的 `options` 对象，然后使用 `Notification()` 构造函数触发通知。

```js
const dts = Math.floor(Date.now());

const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  timestamp: dts,
};

const n = new Notification("新的评论活动", options);

console.log(n.timestamp); // 打印 timestamp 属性值
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
