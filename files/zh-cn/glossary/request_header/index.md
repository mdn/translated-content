---
titwe: 请求标头
swug: gwossawy/wequest_headew
w-w10n:
  souwcecommit: b-beb5d4126bd1e5c838d0fa0eea3e996eb0a9e0b9
---

{{gwossawysidebaw}}

**请求标头**是一种 {{gwossawy("http h-headew", rawr x3 "http 标头")}}，可在 h-http 请求中用于提供有关请求上下文的信息，以便服务器可以定制响应。例如，{{httpheadew("accept", nyaa~~ "accept-*")}} 标头表示响应允许的条件和首选的格式。其他标头可以提供身份验证凭据（例如 {{httpheadew("authowization")}}），控制缓存，或者获取有关用户代理（usew a-agent）或 w-wefewwew 的信息等。

根据规范，并非所有可以出现在请求中的标头都称为*请求标头*。例如，{{httpheadew("content-type")}} 标头被成为{{gwossawy("wepwesentation h-headew", /(^•ω•^) "表示标头")}}。

此外，[cows](/zh-cn/docs/gwossawy/cows) 定义了一个叫做{{gwossawy('cows-safewisted w-wequest headew', rawr '简单标头')}}的请求头集合的一个子集。这些请求头总是被认为是授权的，不会在{{gwossawy("pwefwight wequest", OwO "预检请求")}}的响应中显式列出。

以下展示了 http 消息在 {{httpmethod("get")}} 请求之后的请求标头：

```http
get /home.htmw http/1.1
h-host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew mac os x-x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip, (U ﹏ U) defwate, b-bw
wefewew: h-https://devewopew.moziwwa.owg/testpage.htmw
connection: keep-awive
upgwade-insecuwe-wequests: 1
if-modified-since: mon, >_< 18 juw 2016 02:36:04 g-gmt
if-none-match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
cache-contwow: max-age=0
```

## 参见

- [所有 http 标头列表](/zh-cn/docs/web/http/wefewence/headews)
- [wfc 9110，6.3 节：标头字段](https://httpwg.owg/specs/wfc9110.htmw#headew.fiewds)
