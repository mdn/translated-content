---
title: XMLHttpRequest：overrideMimeType() 方法
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} 方法 **`overrideMimeType()`** 指定在解释请求中传输的数据时，使用不同于服务器所提供的 MIME 类型。

例如，这可用于强制将流按 `"text/xml"` 处理并解析，即使服务器并未如此报告。此方法必须在调用 {{domxref("XMLHttpRequest.send", "send()")}} 之前调用。

## 语法

```js-nolint
overrideMimeType(mimeType)
```

### 参数

- `mimeType`
  - : 一个字符串，指定用于替代服务器所指定类型的 MIME 类型。如果服务器未指定类型，`XMLHttpRequest` 会假定为 `"text/xml"`。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

本示例将 MIME 类型指定为 `"text/plain"`，从而覆盖服务器为所接收数据声明的类型。

> [!NOTE]
> 如果服务器未提供 [`Content-Type`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Type) 标头，{{domxref("XMLHttpRequest")}} 会假定 MIME 类型为 `"text/xml"`。如果内容不是有效的 XML，则会发生“XML Parsing Error: not well-formed”错误。你可以通过调用 `overrideMimeType()` 指定其他类型来避免此问题。

```js
// 将接收到的数据解释为纯文本

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback);
req.open("get", url);
req.send();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequest.responseType")}}
