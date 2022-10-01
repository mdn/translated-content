---
title: Origin
slug: Glossary/Origin
original_slug: Glossary/源
---

Web 内容的源由用于访问它的{{Glossary("URL")}} 的方案 (协议)，主机 (域名) 和端口定义。只有当方案，主机和端口都匹配时，两个对象具有相同的起源。

某些操作仅限于同源内容，而可以使用 [CORS](/zh-CN/docs/Glossary/CORS) 解除这个限制。

## 同源的例子

same origin because same scheme (`http`) and host (`example.com`)

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

same origin because a server delivers HTTP content through port 80 by default

- `http://Example.com:80`
- `http://example.com`

## 不同源的例子

different schemes

- `http://example.com/app1`
- `https://example.com/app2`

different hosts

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

different ports

- `http://example.com`
- `http://example.com:8080`

## 了解更多

详细信息，请看[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。
