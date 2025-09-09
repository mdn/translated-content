---
title: Headers：get() 方法
slug: Web/API/Headers/get
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

{{domxref("Headers")}} 接口的 **`get()`** 方法返回一个字节字符串，其中包含一个具有给定名称的 `Headers` 对象中的标头的所有值。如果请求的标头不存在于 `Headers` 对象中，则返回 `null`。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{Glossary("Forbidden_request_header", "禁止修改的请求标头")}}和{{Glossary("Forbidden_response_header_name", "禁止修改的响应标头")}}。

## 语法

```js-nolint
get(name)
```

### 参数

- `name`
  - : 从 `Headers` 对象中需要检索的 HTTP 标头名，如果 HTTP 标头中不存在指定名称，则会抛出一个 {{jsxref("TypeError")}}。名称是不分大小写的。

### 返回值

一个 {{jsxref("String")}} 序列，代表检索到的标头的值，如果未设置该标头，则为 `null`。

## 示例

创建一个空的 `Headers` 对象非常简单：

```js
const myHeaders = new Headers(); // 当前为空
myHeaders.get("Not-Set"); // 返回 null
```

可以通过 `get()` 方法来获取 header 中的值：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // 返回“image/jpeg”
```

如果标头有多个相关值，字节字符串将按照添加到标头对象的顺序包含所有值：

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // 返回“deflate, gzip”
myHeaders
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // 返回 [ "deflate", "gzip" ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
