---
title: XMLHttpRequest.getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.getAllResponseHeaders()** 方法返回所有的响应头，以 {{Glossary('CRLF')}} 分割的字符串，或者 `null` 如果没有收到任何响应。 **注意：** 对于复合请求（multipart requests），这个方法返回当前请求的头部，而不是最初的请求的头部。

```plain
DOMString getAllResponseHeaders();
```

## 语法

```plain
var headers = XMLHttpRequest.getAllResponseHeaders();
```

### 参数

无

### 返回值

一个原始的 Header 头例子：

```plain
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

每一行通过\r\n 来进行分割。

## 例子

```plain
var request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {

    // Get the raw header string
    var headers = request.getAllResponseHeaders();

    // Convert the header string into an array
    // of individual headers
    var arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
    var headerMap = {};
    arr.forEach(function (line) {
      var parts = line.split(': ');
      var header = parts.shift();
      var value = parts.join(': ');
      headerMap[header] = value;
    });
  }
```

上面的代码执行后，你可以：

```plain
var contentType = headerMap["content-type"];
```

上面的变量 `contentType` 可以获取到 HTTP header 里的 `content-type` 字段值。
