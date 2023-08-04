---
title: Clients.matchAll()
slug: Web/API/Clients/matchAll
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("Clients")}} 接口的 **`matchAll()`** 方法返回 service worker {{domxref("Client")}} 对象列表的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) . 包含 `options` 参数以返回域与关联的 service worker 的域相同所有 service worker 的 clients. 如果未包含 options，该方法仅返回由 service worker 控制的 service worker clients.

## 语法

```js
ServiceWorkerClients.matchAll(options).then(function (clients) {
  // do something with your clients list
});
```

### 参数

- `options {{optional_inline}}`

  - : 一个 options 对象，允许您为匹配操作设置选项。可用选项包括：

    - `includeUncontrolled`: {{domxref("Boolean")}} — 如果设置为`true`, 匹配操作将返回与当前服务工作者共享相同源的所有服务工作者客户端。否则，它仅返回由当前服务工作者控制的服务工作者客户端。默认值为`false`.
    - `type`: 设置想要匹配的 clients 类型。可用值包括 `window`, `worker`, `sharedworker`, 和 `all`. 默认是 `all`.

### 返回值

resolve 为一个 {{domxref("Client")}} 对象数组的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) . 在 Chrome 46/Firefox 54 以及更高版本中，该方法以最近关注的顺序返回 clients , 根据规范更正。

## 示例

```js
clients.matchAll(options).then(function (clientList) {
  for (var i = 0; i < clients.length; i++) {
    if (clientList[i].url === "index.html") {
      clients.openWindow(clientList[i]);
      // or do something else involving the matching client
    }
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
