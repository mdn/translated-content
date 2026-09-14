---
title: XMLHttpRequest：getAllResponseHeaders() 方法
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
l10n:
  sourceCommit: 99b2676da42700bafbb3189449a30b00e727e2c5
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} 的 **`getAllResponseHeaders()`** 方法以字符串形式返回所有响应标头，各个响应标头之间以 {{Glossary('CRLF')}} 分隔；如果尚未收到响应，则返回 `null`。

如果发生网络错误，则返回一个空字符串。

> [!NOTE]
> 对于多部分请求，此方法返回的是*当前*部分的响应标头，而不是原始通道的响应标头。

## 语法

```js-nolint
getAllResponseHeaders()
```

### 参数

无。

### 返回值

一个字符串，表示响应中的所有响应标头（字段名为 `Set-Cookie` 的除外），各项之间以 {{Glossary('CRLF')}} 分隔；如果尚未收到响应，则返回 `null`。若发生网络错误，则返回空字符串。

原始响应标头字符串的格式示例如下：

```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```

每一行都以回车和换行符（`\r\n`）结尾。它们用作分隔符，将各个响应标头分隔开。

> [!NOTE]
> 在现代浏览器中，按照最新规范，返回的响应标头名称都是小写的。

## 示例

此示例在请求的 {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} 事件中检查响应标头。代码展示了如何获取原始响应标头字符串、如何将其转换为单个响应标头的数组，以及如何再将该数组转换为一个从响应标头名称映射到对应值的对象。

```js
const request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = () => {
  if (request.readyState === request.HEADERS_RECEIVED) {
    // 获取原始响应标头字符串
    const headers = request.getAllResponseHeaders();

    // 将响应标头字符串转换为单个响应标头的数组
    const arr = headers.trim().split(/[\r\n]+/);

    // 创建一个从响应标头名称映射到其值的对象
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      headerMap[header] = value;
    });
  }
};
```

完成这些步骤后，你就可以例如这样使用它：

```js
const contentType = headerMap["content-type"];
```

这会将 {{httpheader("Content-Type")}} 响应标头的值赋值给变量 `contentType`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- 设置请求标头：{{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
