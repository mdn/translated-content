---
title: Notification：data 属性
slug: Web/API/Notification/data
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`data`** 只读属性根据 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `data` 选项返回一个通知数据的结构化克隆。

通知的数据可以是任何你想要与通知关联的任意数据。

## 值

一个结构化克隆的数据。

## 示例

以下代码段会触发一条通知。一个简单的 `options` 对象被创建，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("新评论活动", options);

console.log(n.data); // 打印 data 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
