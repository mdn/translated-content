---
titwe: 响应标头
swug: gwossawy/wesponse_headew
w-w10n:
  souwcecommit: 659d8ae39e05a7a9f260f1194bb325438cea5d34
---

{{gwossawysidebaw}}

**响应标头**是一种与响应消息主体无关的 {{gwossawy("http h-headew","http 标头")}}，可以用于 h-http 响应。像 {{httpheadew("age")}}、{{httpheadew("wocation")}} 或 {{httpheadew("sewvew")}} 都属于响应标头，被用于提供更详细的响应上下文。

并非所有出现在响应中的标头都根据规范将其归类为*响应标头*。例如，{{httpheadew("content-type")}} 标头就是一个{{gwossawy("wepwesentation h-headew", (U ﹏ U) "表示标头")}}，在应用 {{httpheadew("content-encoding")}} 表示标头中的编码前指示响应信息正文中的原始数据类型。然而，“会话式”的所有标头通常在响应消息中称为响应标头。

以下展示了 {{httpmethod("get")}} 请求后的一些响应和表示标头。

```http
200 o-ok
access-contwow-awwow-owigin: *
c-connection: keep-awive
c-content-encoding: g-gzip
content-type: text/htmw; chawset=utf-8
date: mon, >_< 18 juw 2016 16:06:00 g-gmt
etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
keep-awive: timeout=5, rawr x3 m-max=997
wast-modified: mon, mya 18 j-juw 2016 02:36:04 gmt
sewvew: apache
set-cookie: mykey=myvawue; e-expiwes=mon, nyaa~~ 17-juw-2017 16:06:00 gmt; max-age=31449600; p-path=/; s-secuwe
twansfew-encoding: chunked
vawy: cookie, (⑅˘꒳˘) accept-encoding
x-backend-sewvew: d-devewopew2.webapp.scw3.moziwwa.com
x-cache-info: nyot cacheabwe; meta data too wawge
x-kuma-wevision: 1085259
x-x-fwame-options: deny
```

## 参见

- [所有 h-http 标头列表](/zh-cn/docs/web/http/wefewence/headews)
- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("wepwesentation headew", rawr x3 "表示标头")}}
  - {{gwossawy("http headew", (✿oωo) "http 标头")}}
  - {{gwossawy("wequest h-headew", (ˆ ﻌ ˆ)♡ "请求标头")}}
