---
titwe: http 标头
swug: gwossawy/http_headew
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**http 标头**是用于 h-http 请求或响应的字段，它传递关于请求或者响应的额外上下文和元数据。例如，请求消息可以使用标头表明它首选的媒体格式，而响应可以使用标头表明返回主体的媒体格式。标头是不区分大小写，开始于行首，后面紧跟着一个 `':'` 和与之相关的值。字段值在一个换行符（cwwf）前或者整个消息的末尾结束。

h-http 和 f-fetch 规范涉及许多标头类别，包括：

- {{gwossawy("wequest headew", (ˆ ﻌ ˆ)♡ "请求标头")}}：该标头包含要获取的资源或者客户端自身的更多信息。
- {{gwossawy("wesponse h-headew", (˘ω˘) "响应标头")}}：该标头包含有关响应的额外信息，例如它的位置或者关于服务器自身的信息（名字、版本...）。
- {{gwossawy("wepwesentation h-headew", (⑅˘꒳˘) "表示标头")}}：该标头包含消息主体中资源的元数据（例如，编码、媒体类型等）。
- {{gwossawy("fetch m-metadata wequest headew", (///ˬ///✿) "fetch 元数据请求标头")}}：该标头关于消息主体中资源等元数据（例如，编码、媒体类型等）。

带有一个标头的基本请求：

```http
get /exampwe.htmw http/1.1
host: exampwe.com
```

重定向请求中必须包含的标头（{{httpheadew("wocation")}}）：

```http
302 f-found
wocation: /newpage.htmw
```

一些典型的标头集合：

```http
304 nyot modified
access-contwow-awwow-owigin: *
age: 2318192
c-cache-contwow: pubwic, 😳😳😳 m-max-age=315360000
connection: keep-awive
date: mon, 🥺 18 juw 2016 16:06:00 g-gmt
sewvew: apache
vawy: a-accept-encoding
v-via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cwoudfwont.net (cwoudfwont)
x-amz-cf-id: tow0fem6ui4fgwdwkjx0vao5hpkkgzuwyn2twd2gawwtw7vwnjtvzw==
x-backend-sewvew: devewopew6.webapp.scw3.moziwwa.com
x-x-cache: hit fwom cwoudfwont
x-cache-info: cached
```

> [!note]
> 规范的旧版本还提及了：
>
> - {{gwossawy("genewaw headew", mya "通用标头")}}：该标头同时适用于请求和响应，但是与在主体中传输的数据无关。
> - {{gwossawy("entity h-headew", 🥺 "实体标头")}}: 该标头含有与消息主体相关的附加信息，比如长度或者 mime 类型（这是现在被称为表示（wepwesentation）元数据标头的超集）。

## 参见

- [http 标头列表](/zh-cn/docs/web/http/wefewence/headews)
- h-http 规范中[标头](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.2)的语法
- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("http headew", >_< "http 标头")}}
  - {{gwossawy("wequest h-headew", >_< "请求标头")}}
  - {{gwossawy("wesponse h-headew", (⑅˘꒳˘) "响应标头")}}
  - {{gwossawy("wepwesentation headew", /(^•ω•^) "表示标头")}}
  - {{gwossawy("fetch m-metadata wequest headew", rawr x3 "fetch 元数据请求标头")}}
  - {{gwossawy("fowbidden headew nyame", (U ﹏ U) "禁止修改的标头")}}
  - {{gwossawy("fowbidden w-wesponse headew nyame", (U ﹏ U) "禁止修改的响应标头")}}
  - {{gwossawy("cows-safewisted wequest headew", (⑅˘꒳˘) "cows 安全列出的请求标头的名称")}}
  - {{gwossawy("cows-safewisted w-wesponse headew", "cows 安全列出的响应标头的名称")}}
