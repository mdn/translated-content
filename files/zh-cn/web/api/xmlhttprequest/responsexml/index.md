---
title: XMLHttpRequest.responseXML
slug: Web/API/XMLHttpRequest/responseXML
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.responseXML** 属性是一个只读值，它返回一个包含请求检索的 HTML 或 XML 的{{domxref("Document")}}，如果请求未成功，尚未发送，或者检索的数据无法正确解析为 XML 或 HTML，则为 null。默认是当作“text / xml”来解析。当 {{domxref("XMLHttpRequest.responseType", "responseType")}} 设置为“document”并且请求已异步执行时，响应将被当作“text / html”来解析。`responseXML` 对于任何其他类型的数据以及 [`data:` URLs](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 为 null。

> **备注：** `responseXML` 在这个属性的历史堪称神器，它可以同时在 HTML 和 XML 中工作

如果服务器没有明确指出 {{HTTPHeader("Content-Type")}} 头是 `"text/xml"` 还是 `"application/xml"`, 你可以使用{{domxref("XMLHttpRequest.overrideMimeType()")}} 强制 `XMLHttpRequest` 解析为 XML。

## 语法

```
var data = XMLHttpRequest.responseXML;
```

### 值

{{domxref("Document")}} 中包含从 {{domxref("XMLHttpRequest")}} 中收到的 HTML 节点或解析后的 XML 节点，也可能是在没有收到任何数据或数据类型错误的情况下返回的 null。

### 例外

- `InvalidStateError`
  - : {{domxref("XMLHttpRequest.responseType", "responseType")}} 既不是 `"document"` 也不是空字符串 (接收的数据应是 XML 或 HTML)。

## 示例

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// 如果已指明，responseType 必须是空字符串或 "document"
xhr.responseType = "document";

// overrideMimeType() 用来强制解析 response 为 XML
xhr.overrideMimeType("text/xml");

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseXML);
    }
  }
};

xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequest.response")}}
- {{domxref("XMLHttpRequest.responseType")}}
