---
title: XMLHttpRequest.responseType
slug: Web/API/XMLHttpRequest/responseType
---

{{APIRef('XMLHttpRequest')}}

{{DOMxRef("XMLHttpRequest")}} 属性 **`responseType`** 是一个枚举字符串值，用于指定响应中包含的数据类型。

它还允许作者更改响应类型。如果将 `responseType` 的值设置为空字符串，则会使用 `text` 作为默认值。

## 语法

```js
var type = XMLHttpRequest.responseType;

XMLHttpRequest.responseType = type;
```

### 值

{{JSxRef("Global_Objects/String")}} 类型的值，指定响应包含的数据类型。它可以采用以下值：

- `""`
  - : 空的 `responseType` 字符串与默认类型 `"text"` 相同。
- `"arraybuffer"`
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是一个包含二进制数据的 JavaScript {{JSxRef("ArrayBuffer")}}。
- `"blob"`
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是一个包含二进制数据的 {{DOMxRef("Blob")}} 对象。
- `"document"`
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是一个 {{Glossary("HTML")}} {{DOMxRef("Document")}} 或 {{Glossary("XML")}} {{DOMxRef("XMLDocument")}}，根据接收到的数据的 MIME 类型而定。请参阅 [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)，了解有关使用 XHR 获取 HTML 内容的更多信息。
- `"json"`
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是通过将接收到的数据内容解析为 {{Glossary("JSON")}} 而创建的 JavaScript 对象。
- `"text"`
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是 {{DOMxRef("DOMString")}} 对象中的文本。
- `"ms-stream"` {{non-standard_inline}}
  - : {{DOMxRef("XMLHttpRequest.response", "response")}} 是流式下载的一部分；此响应类型仅允许用于下载请求，并且仅受 Internet Explorer 支持。

> [!NOTE]
> 将 `responseType` 设置为特定值时，作者应确保服务器实际发送的响应与该格式兼容。如果服务器返回的数据与设置的 `responseType` 不兼容，则 {{DOMxRef("XMLHttpRequest.response", "response")}} 的值将为`null` .

### 异常

- `InvalidAccessError`
  - : 试图更改 `XMLHttpRequest` 的 `responseType`，该值处于同步模式但不在 {{DOMxRef("Worker")}} 中。有关其他详细信息，请参阅下面的 [同步 XHR 限制](#synchronous_xhr_restrictions)。

## 使用说明

### 同步 XHR 限制

你不能在同步`XMLHttpRequest` 中更改 `responseType` 的值，除非请求属于 {{DOMxRef("Worker")}}。此限制部分旨在帮助确保同步操作不会用于阻塞浏览器主线程的大型事务，从而阻碍用户体验。

XHR 请求默认是异步的；它们仅通过在调用 {{DOMxRef("XMLHttpRequest.open", "open()")}} 时将 `false` 作为可选`async` 参数的值传递来置于同步模式。

### Worker 中的限制

在 {{DOMxRef("Worker")}} 中尝试将 `responseType` 的值设置为 `document` 时会被忽略。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- 响应数据：{{domxref("XMLHttpRequest.response", "response")}}、
  {{domxref("XMLHttpRequest.responseText", "responseText")}} 和 {{domxref("XMLHttpRequest.responseXML", "responseXML")}}
