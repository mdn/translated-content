---
title: 通用标头
slug: Glossary/General_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**通用标头**是一个过时的术语，其用于指代同时适用于请求和响应的消息，而不适用于内容本身的 {{glossary('Header', 'HTTP 标头')}}（适用于内容的标头称为{{glossary("entity header", "实体标头")}}）。取决于应用的上下文环境，通用标头可以是{{glossary("Response header", "响应标头")}}或者{{glossary("request header", "请求标头")}}（例如，{{HTTPheader("Cache-Control")}}）。

> [!NOTE]
> 当前版本的 HTTP/1.1 规范没有明确地划定“通用标头”这一类别。根据上下文，这些标头现在被简单地称为{{glossary("Response header", "响应标头")}}或{{glossary("request header", "请求标头")}}。
