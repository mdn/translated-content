---
title: 实体标头
slug: Glossary/Entity_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

> [!WARNING]
> 当前的 HTTP/1.1 规范中不再提及实体、实体标头和实体主体。这中的有些字段现在被称为{{glossary("Representation header", "表示标头")}}。

实体标头是描述了一个 HTTP 消息有效载荷（即关于消息主体的元数据）的 {{glossary("HTTP_header", "HTTP 标头")}}。实体标头包括 {{HTTPHeader("Content-Length")}}、{{HTTPHeader("Content-Language")}}、{{HTTPHeader("Content-Encoding")}}、{{HTTPHeader("Content-Type")}} 和 {{HTTPHeader("Expires")}} 等。实体标头可能同时存在于 HTTP 请求和响应信息中。

在下面的例子中，{{HTTPHeader("Content-Length")}} 是实体标头，而 {{HTTPHeader("Host")}} 和 {{HTTPHeader("User-Agent")}} 是请求标头。

```plain
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## 参见

- {{Glossary("Representation header", "表示标头")}}
