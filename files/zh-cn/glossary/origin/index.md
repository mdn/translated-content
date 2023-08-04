---
title: 源（Origin）
slug: Glossary/Origin
---

{{GlossarySidebar}}

Web 内容的**源**由用于访问它的 {{Glossary("URL")}} 的*方案*（协议）、_主机名_（域名）和*端口*定义。只有当协议、主机和端口都匹配时，两个对象才具有相同的源。

某些操作仅限于同源内容，但可以使用 {{Glossary("CORS")}} 解除这个限制。

## 示例

由于它们具有相同的协议（`http`）和主机名（`example.com`），以下两个地址是同源的。注意不同文件路径与是否同源无关：

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

服务器默认从 80 端口传送 HTTP 内容，所以以下两个地址同源：

- `http://Example.com:80`
- `http://example.com`

由于协议不同，以下两个地址不属于同源：

- `http://example.com/app1`
- `https://example.com/app2`

由于主机名不同，以下几个地址不属于同源：

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

由于端口不同，以下几个地址不属于同源：

- `http://example.com`
- `http://example.com:8080`

## 参见

- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。
- {{Glossary("Site")}}
- [HTML 规范：源](https://html.spec.whatwg.org/multipage/origin.html#origin)
