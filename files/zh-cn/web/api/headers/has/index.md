---
title: Headers：has() 方法
slug: Web/API/Headers/has
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

{{domxref("Headers")}} 接口的 **`has()`** 方法返回一个布尔值来声明一个 `Headers` 对象是否包含特定的标头。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{Glossary("Forbidden_request_header", "禁止修改的请求标头")}}和{{Glossary("Forbidden_response_header_name", "禁止修改的响应标头")}}。

## 语法

```js-nolint
has(name)
```

### 参数

- `name`
  - : 你要测试的 HTTP 标头的名称。如果给出的名称不是合法的 HTTP 标头名称，将抛出 {{jsxref("TypeError")}}。

### 返回值

一个布尔值。

## 示例

创建一个空的 `Headers` 对象非常简单：

```js
const myHeaders = new Headers(); // 当前为空
```

你可以使用 {{domxref("Headers.append")}} 来添加一个标头，然后使用 `has()` 方法来测试是否添加成功：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // 返回 true
myHeaders.has("Accept-Encoding"); // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
