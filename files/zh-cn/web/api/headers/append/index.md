---
title: Headers.append()
slug: Web/API/Headers/append
---

{{APIRef("Fetch")}}

在一个`Headers`对象内部，{{domxref("Headers")}}接口的 **`append()`** 方法可以追加一个新值到已存在的 headers 上，或者新增一个原本不存在的 header。

{{domxref("Headers.set")}} 和 `append()` 两者之间的不同之处在于当指定 header 是已经存在的并且允许接收多个值时，{{domxref("Headers.set")}}会重写此值为新值，而`append()`会追加到值序列的尾部。

因为安全性原因，一些 headers 仅受用户代理控制。包括{{Glossary("Forbidden_header_name", "forbidden header names", 1)}}和{{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}。

## 语法

```js-nolint
append(name, value)
```

### 参数

- _name_
  - : 要追加给 Headers 对象的 HTTP header 名称。
- _value_
  - : 要追加给 Headers 对象的 HTTP header 值。

### 返回

Void.

## 例程

创建一个空的 Headers 对象：

```js
var myHeaders = new Headers(); // Currently empty
```

可以通过 append() 方法添加 header:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

如果指定 header 不存在，`append()`将会添加这个 header 并赋值 . 如果指定 header 已存在并允许有多个值，`append()`将会把指定值添加到值队列的末尾。

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.getAll("Accept-Encoding"); // Returns [ "deflate", "gzip" ]
```

要使用新值覆盖旧值，请使用{{domxref("Headers.set")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
