---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
---

在 HTTP 协议中，响应状态码 **`203 Non-Authoritative Information`** 表示请求已经成功被响应，但是获得的负载与源头服务器的状态码为 {{HTTPStatus("200")}}（`OK`）的响应相比，经过了拥有*转换功能的*[_代理_](/zh-CN/docs/Glossary/Proxy_server)的修改。

此状态代码的目的是允许转换代理更改了成功响应时通知客户端，因为这可能会影响后续内容的决策。对消息的转换可能意味着修改标头，以表明资源来自镜像或备份，但也可能意味着以客户端期望的方式修改内容。这些修改可能包括恶意软件过滤、格式转码、隐私过滤，或向客户端提供有关未来请求的其他提示。

`203` 状态码有点类似于 {{HTTPHeader("Warning")}} 标头的 [`214`](/zh-CN/docs/Web/HTTP/Reference/Headers/Warning#警告码) `Transformation Applied` 警告码，后者的优势在于可以应用于任何状态码的响应之中。

## 状态

```http
203 Non-Authoritative Information
```

## 示例

### 接收过滤后的消息响应

在这个示例中，用户向 `example.com` 发送了一个获取 ID 为 `123` 的内容的 `GET` 请求。

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

代理根据已知不安全附件的恶意软件过滤规则更改了消息。该响应内容已被修改，`attachment_url` 的值被替换为带有过滤信息的链接：

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 113

{
  "comment": "查看我的简历！",
  "attachment_url": "https://example.com/attachment-unavailable-faq"
}
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server", "代理服务器")}}
- {{HTTPHeader("Warning")}}
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
