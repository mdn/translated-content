---
title: Request：clone() 方法
slug: Web/API/Request/clone
l10n:
  sourceCommit: 5045ba92ac9503b2a00ec85efae4b7d613a64b58
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Request")}} 接口的 **`clone()`** 方法创建当前 `Request` 对象的副本。

与底层 {{domxref("ReadableStream.tee")}} API 类似，克隆的 `Response` 的 {{domxref("Request.body", "body")}} 会根据两个主体中消费速度更快的消费者来触发背压，且未读取的数据会在内部入队到消费速度较慢的主体中，没有任何限制或背压。从数据流构造 `Request` 并将其 `clone` 时要小心。

如果请求体已被使用，`clone()` 就会抛出 {{jsxref("TypeError")}}。实际上，`clone()` 存在的主要原因是允许主体对象的多次使用（当它们只能使用一次时）。

如果你打算修改请求，可能更倾向于使用 {{domxref("Request")}} 构造函数。

## 语法

```js-nolint
clone()
```

### 参数

无。

### 返回值

{{domxref("Request")}} 对象，它是调用了 `clone()` 的 `Request` 的完整副本。

## 示例

在以下代码片段中，我们使用 {{domxref("Request.Request", "Request()")}} 构造函数创建了一个新的请求（请求同一目录下的一个图像文件），然后克隆了该请求。

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // 请求的副本现已存储在 newRequest 中。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
