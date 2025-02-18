---
title: 507 Insufficient Storage
slug: Web/HTTP/Status/507
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

HTTP **`507 Insufficient Storage`** [服务端错误响应](/zh-CN/docs/Web/HTTP/Status#server_error_responses)状态码表示由于服务器没有足够的可用存储空间来成功完成请求，因此无法执行操作。

此状态码最初用于基于 Web 的分布式编写与版本控制（{{Glossary("WebDAV")}}）的上下文中，但后来被推广到其他用例，用于描述服务器资源耗尽的情况。此错误的常见原因可能包括服务器目录可用空间不足、操作所需的可用内存（RAM）不足，或达到内部限制（例如应用程序特定的内存限制等）。导致此错误的请求不一定需要包含内容，因为该请求可能是在成功时会在服务器上创建资源的请求。

此问题被认为是临时性的，与 {{HTTPStatus("413", "413 Content Too Large")}} 不同，后者表示客户端请求过大，无法被服务器处理，无论服务器资源是否受限。

## 状态

```http
507 Insufficient Storage
```

## 示例

### 507 响应表示存储问题

以下请求尝试将文件上传到存储空间不足的服务器。服务器返回一个 `507` 响应，表示其资源已耗尽：

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: image/jpeg
Content-Length: 123456

[JPG 文件数据]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>存储空间不足</h1>
  <p>服务器无法存储包含的资源以完成请求。</p>
  <p>请稍后再试。</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
