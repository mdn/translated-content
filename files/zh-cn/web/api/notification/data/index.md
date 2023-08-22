---
title: Notification：data 属性
slug: Web/API/Notification/data
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`data`** 只读属性返回一个在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `data` 选项中指定的、结构化的通知的数据。

通知的数据可以是任意你希望与通知关联的数据。

## 值

一个结构化的克隆数据。

## 示例

以下代码段会触发一条通知。一个简单的 `options` 对象被创建，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "您提交的代码收到了 3 条新的审阅意见。",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("新评论活动", options);

console.log(n.data); // 打印 data 对象
```

## 参见

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
