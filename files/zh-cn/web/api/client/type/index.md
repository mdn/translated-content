---
title: Client：type 属性
short-title: type
slug: Web/API/Client/type
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("Client")}} 接口的 **`type`** 只读属性表示 service worker 正在控制的客户端类型。

## 值

一个表示客户端类型的字符串。取值可以是以下之一：

- `"window"`
- `"worker"`
- `"sharedworker"`

## 示例

```js
// service worker 客户端（例如文档）
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    // 注意这是 ServiceWorker.postMessage 版本
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = (e) => {
      resolve(e.data);
    };
  });
}

// 正在控制的 service worker
self.addEventListener("message", (e) => {
  // e.source 是一个客户端对象
  e.source.postMessage(`你好！你的消息是：${e.data}`);
  // 也把 type 值发回给客户端
  e.source.postMessage(e.source.type);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
