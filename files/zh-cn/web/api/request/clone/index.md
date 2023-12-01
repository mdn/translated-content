---
title: Request.clone()
slug: Web/API/Request/clone
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口中的**`clone()`** 方法可以创建一个当前`Request` 对象的副本。

如果响应体{{domxref("Body")}}已经被使用过，那么 `clone()` 会抛出一个 {{jsxref("TypeError")}}。实际上，`clone()` 的主要作用就是支持 {{domxref("Body")}} 对象的多次使用

## 语法

```js
var newRequest = request.clone();
```

### 参数

无。

### 返回值

{{domxref("Request")}} 对象，也就是 `Request` 的完整拷贝

## 示例

在下面的代码中，我们使用 {{domxref("Request.Request()")}} 构造函数创建了一个新的 request 对象 (请求当前文件夹中的一个图片文件)，然后拷贝了这个 `request` 对象。

```js
var myRequest = new Request("flowers.jpg");
var newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
