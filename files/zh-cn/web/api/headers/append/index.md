---
title: Headers.append()
slug: Web/API/Headers/append
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

在一个`Headers`对象内部，{{domxref("Headers")}}接口的 **`append()`** 方法可以追加一个新值到已存在的 headers 上，或者新增一个原本不存在的 header。

{{domxref("Headers.set")}} 和 `append()` 两者之间的不同之处在于当指定 header 是已经存在的并且允许接收多个值时，{{domxref("Headers.set")}}会重写此值为新值，而`append()`会追加到值序列的尾部。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{Glossary("Forbidden_request_header", "禁止修改的请求标头")}}和{{Glossary("Forbidden_response_header_name", "禁止修改的响应标头")}}。

## 语法

```js-nolint
append(name, value)
```

### 参数

- `name`
  - : 要追加给 `Headers` 对象的 HTTP 标头名称。
- `value`
  - : 要追加的 HTTP 标头值。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

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

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
