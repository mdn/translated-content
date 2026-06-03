---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
---

在 HTTP 协议中， **308 Permanent Redirect**（永久重定向）是表示重定向的响应状态码，说明请求的资源已经被永久的移动到了由 {{HTTPHeader("Location")}} 首部指定的 URL 上。浏览器会进行重定向，同时搜索引擎也会更新其链接（用 SEO 的行话来说，意思是“链接汁”（link juice）被传递到了新的 URL）。

在重定向过程中，请求方法和消息主体不会发生改变，然而在返回 {{HTTPStatus("301")}} 状态码的情况下，请求方法有时候会被客户端错误地修改为 {{HTTPMethod("GET")}} 方法。

> [!NOTE]
> 一些 Web 应用可能会将 308 Permanent Redirect 以一种非标准的方式使用以及用作其他用途。例如，Google Drive 会使用 308 Resume Incomplete 状态码来告知客户端文件上传终止且不完整。[\[1\]](https://developers.google.cn/drive/api/guides/manage-uploads)

## 状态

```plain
308 Permanent Redirect
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
