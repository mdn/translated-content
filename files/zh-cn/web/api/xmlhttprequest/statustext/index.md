---
title: XMLHttpRequest：statusText 属性
short-title: statusText
slug: Web/API/XMLHttpRequest/statusText
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest.statusText`** 只读属性返回一个包含由 HTTP 服务器返回的响应状态消息的字符串。与表示数值状态码的 [`XMLHttpRequest.status`](/zh-CN/docs/Web/API/XMLHttpRequest/status) 不同，此属性包含响应状态的*文本*，例如“OK”或“Not Found”。如果请求的 [`readyState`](/zh-CN/docs/Web/API/XMLHttpRequest/readyState) 处于 `UNSENT` 或 `OPENED` 状态，则 `statusText` 的值将为空字符串。

如果服务器响应未明确指定状态文本，`statusText` 将采用默认值“OK”。

> [!NOTE]
> 通过 HTTP/2 连接的响应其状态消息将始终为空字符串，因为 HTTP/2 不支持状态消息。

## 值

字符串。

## 示例

```js
const xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = () => {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = () => {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 状态码](/zh-CN/docs/Web/HTTP/Reference/Status)列表
- [HTTP](/zh-CN/docs/Web/HTTP)
- [WHATWG Fetch 动态标准](https://fetch.spec.whatwg.org/#concept-response-status-message)
