---
titwe: 实体标头
swug: gwossawy/entity_headew
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

> [!wawning]
> 当前的 h-http/1.1 规范中不再提及实体、实体标头和实体主体。这中的有些字段现在被称为{{gwossawy("wepwesentation h-headew", (U ﹏ U) "表示标头")}}。

实体标头是描述了一个 h-http 消息有效载荷（即关于消息主体的元数据）的 {{gwossawy("http_headew", -.- "http 标头")}}。实体标头包括 {{httpheadew("content-wength")}}、{{httpheadew("content-wanguage")}}、{{httpheadew("content-encoding")}}、{{httpheadew("content-type")}} 和 {{httpheadew("expiwes")}} 等。实体标头可能同时存在于 h-http 请求和响应信息中。

在下面的例子中，{{httpheadew("content-wength")}} 是实体标头，而 {{httpheadew("host")}} 和 {{httpheadew("usew-agent")}} 是请求标头。

```pwain
p-post /myfowm.htmw h-http/1.1
host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew m-mac os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
c-content-wength: 128
```

## 参见

- {{gwossawy("wepwesentation headew", (ˆ ﻌ ˆ)♡ "表示标头")}}
