---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
---

{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.send()`** 方法用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。`XMLHttpRequest.send()` 方法接受一个可选的参数，其作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。

如果没有使用 {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}} 方法设置 {{HTTPHeader("Accept")}} 头部信息，则会发送带有 `"* / *"` 的{{HTTPHeader("Accept")}} 头部。

> [!NOTE]
> 请注意不要使用一个简单的 ArrayBuffer 对象作为参数，ArrayBuffer 已经不再是 AJAX 规范的一部分，请改用 ArrayBufferView（有关信息请参考兼容性列表。）

## 语法

```js-nolint
send()
send(body)
```

### 参数

- `body` {{optional_inline}}

  - : 在 XHR 请求中要发送的数据体。可以是：

    - 可以为 {{domxref("Document")}}, 在这种情况下，它在发送之前被序列化。
    - 为 `XMLHttpRequestBodyInit`, 从 [per the Fetch spec](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) （规范中）可以是 {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, 或者 {{domxref("USVString")}} 对象。
    - `null`

    如果 body 没有指定值，则默认值为 `null`。

### 返回值

`undefined`.

### 例外

| Exception           | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `InvalidStateError` | `send()` has already been invoked for the request, and/or the request is complete. |
| `NetworkError`      | The resource type to be fetched is a Blob, and the method is not `GET`.            |

```js
XMLHttpRequest.send();
XMLHttpRequest.send(ArrayBuffer data);
XMLHttpRequest.send(ArrayBufferView data);
XMLHttpRequest.send(Blob data);
XMLHttpRequest.send(Document data);
XMLHttpRequest.send(DOMString? data);
XMLHttpRequest.send(FormData data);
```

如果发送的数据是 Document 对象，需要在发送之前将其序列化。当发送一个 Document 对象时，Firefox 3 之前的版本都是使用 UTF-8 编码发送请求的；FireFox 3 则使用由 `body.xmlEncoding` 指定的编码格式正确的发送文档，但如果未指定编码格式，则使用 UTF-8 编码格式发送。

如果是一个 nsIInputStream 接口，它必须与 nsIUploadChannel 的 `setUploadStream()` 方法兼容。在这种情况下，将 Content-Length 的头部添加到请求中，它的值则使用 nsIInputStream 接口的 `available()` 方法获取。任何报头包括在数据流顶部的都会被当做报文主体。所以，应该在发送请求即调用 `send()` 方法之前使用[`setRequestHeader()`](#setrequestheader) 方法设置 Content-Type 头部来指定数据流的 MIME 类型。

发送二进制内容的最佳方法（如上传文件）是使用一个与 `send()` 方法结合的 [ArrayBufferView](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 或者 [Blobs](/zh-CN/docs/Web/API/Blob)

## 案例：GET

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.onload = function () {
  // 请求结束后，在此处写处理代码
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## 案例：POST

```js
var xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);

//发送合适的请求头信息
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
  // 请求结束后，在此处写处理代码
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
