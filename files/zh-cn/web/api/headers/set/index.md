---
title: Headers：set() 方法
slug: Web/API/Headers/set
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

{{domxref("Headers")}} 接口的 **`set()`** 方法为 `Headers` 对象中已存在的标头设置新值，或在标头不存在的情况下添加该标头。

`set()` 和 {{domxref("Headers.append")}} 的不同之处在于：如果指定的标头已经存在且其可以接受多个值，`set()` 会使用新值覆盖已存在的值，而 {{domxref("Headers.append")}} 将新值追加到值集合的末尾。

由于安全因素，某些标头只能被用户代理控制。这类标头包括{{Glossary("Forbidden_header_name", "禁止修改的标头")}}和{{Glossary("Forbidden_response_header_name", "禁止修改的响应标头")}}。

## 语法

```js-nolint
set(name, value)
```

### 参数

- `name`
  - : 你想要为其设置新值的 HTTP 标头的名称。如果给定名称不属于 HTTP 标头的名称，那么该方法会抛出 {{jsxref("TypeError")}}。
- `value`
  - : 你想要设置的新值。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

创建一个空的 `Headers` 对象很简单：

```js
const myHeaders = new Headers(); // 目前为空
```

你可以使用 {{domxref("Headers.append")}} 方法来添加标头，然后使用 `set()` 来为这个标头设置新值。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

如果指定的标头不存在，那么 `set()` 会创建它，并将其值设置为指定值。如果指定的标头存在且其可以接受多个值，那么 `set()` 方法将会使用新值覆盖已有的值：

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // 返回“gzip”
```

如果你想要将新值追加到已有的值中（而不是覆盖它），那么你需要使用 {{domxref("Headers.append")}} 方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
