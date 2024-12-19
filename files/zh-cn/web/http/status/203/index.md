---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
---

{{HTTPSidebar}}

在 HTTP 协议中，响应状态码 **`203 Non-Authoritative Information`** 表示请求已经成功被响应，但是获得的负载与源头服务器的状态码为 {{HTTPStatus("200")}} (`OK`) 的响应相比，经过了拥有转换功能的 {{Glossary("Proxy server", "proxy")}}（代理服务器）的修改。

The `203` 状态码有点类似于 {{HTTPHeader("Warning")}} 首部的 [`214`](/zh-CN/docs/Web/HTTP/Headers/Warning#warning_codes)（Transformation Applied）警告码，后者的优势在于可以应用于任何状态码的响应之中。

## 状态

```plain
203 Non-Authoritative Information
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
