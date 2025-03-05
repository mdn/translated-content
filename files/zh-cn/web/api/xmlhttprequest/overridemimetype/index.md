---
title: XMLHttpRequest.overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
---

{{APIRef("XMLHttpRequest API")}}

XMLHttpRequest 的 **`overrideMimeType`** 方法是指定一个 MIME 类型用于替代服务器指定的类型，使服务端响应信息中传输的数据按照该指定 MIME 类型处理。例如强制使流方式处理为"text/xml"类型处理时会被使用到，即使服务器在响应头中并没有这样指定。此方法必须在 send 方法之前调用方为有效。

## Syntax

```plain
XMLHttpRequest.overrideMimeType(mimeType)
```

### Parameters

- `mimeType`
  - : 一个 {{domxref("DOMString")}} 指定具体的 MIME 类型去代替有服务器指定的 MIME 类型。如果服务器没有指定类型，那么 `XMLHttpRequest` 将会默认为 `"text/xml"`.

### Return value

`undefined`.

## Example

这个样例指定 Content-Type 为“text/plain",为接受的数据重写 ContentType

> [!NOTE]
> 如果服务器没有指定一个[`Content-Type`](/zh-CN/docs/Web/HTTP/Headers/Content-Type) 头，{{domxref("XMLHttpRequest")}} 默认 MIME 类型为`"text/xml"`. 如果接受的数据不是有效的 XML，将会出现格”格式不正确“的错误。你能够通过调用 `overrideMimeType()` 指定各种类型来避免这种情况。

```js
// Interpret the received data as plain text

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback, false);
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
