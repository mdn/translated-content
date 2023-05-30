---
title: Notification：data 属性
slug: Web/API/Notification/data
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`data` 只读属性是 {{domxref("Notification")}} 的接口，当它作为构造函数的 option 可选项之一时，返回结构化的 Notification 的 data 数据。

当你创建 Notification 时，notification 使用的数据可以使任意类型。

{{domxref("Notification")}} 接口的只读属性 `data` 返回一个结构化的通知的数据，其在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `data` 选项中被指定。

通知的数据可以是任意你希望与通知关联的数据。

## 值

结构化的克隆数据

## 示例

以下代码段会触发一个 notification。一个简单的 `options` 对象被创建，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("New review activity", options);

console.log(n.data); // 打印 data 对象
```

## 参见

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
