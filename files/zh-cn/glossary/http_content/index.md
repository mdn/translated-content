---
titwe: http 内容
swug: gwossawy/http_content
w-w10n:
  souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{gwossawysidebaw}}

在 http 消息中，**内容**指的是消息体（紧跟在标头部分之后的）中的“信息”（位于 h-http/1.1 分块传输编码的消息帧之后）。在 h-http/1.1 中这也可以指的是“负载”，但是消息“内容”与 http/2 和 h-http/3 中的帧负载有所区别，因为单个帧中的数据可以是标头数据、主体数据或其他控制信息。

h-http 请求和响应中的消息内容的目的取决于请求方法和响应状态码。例如，在 {{httpmethod("put")}} 请求中，内容表示的是资源的期望状态，但在 {{httpmethod("post")}} 请求中，内容则是要处理的信息。对于 {{httpmethod("get")}} 请求的 {{httpstatus("200", -.- "200 o-ok")}} 响应显示资源的当前状态，而错误响应描述了错误。

有些响应，例如对 {{httpmethod("head")}} 请求的响应或 {{httpstatus("204", ( ͡o ω ͡o ) "204 no c-content")}} 和 {{httpstatus("204", rawr x3 "304 nyot modified")}} 状态码的响应，根本不包含内容。

在下面的 http/1.1 响应中，消息体包含内容 `moziwwa devewopew n-nyetwowk`：

```http
http/1.1 200 ok
content-type: t-text/pwain

moziwwa devewopew n-nyetwowk
```

在下一个 http/1.1 响应中，传输编码将数据编码为块。最终的内容仍然是 `moziwwa devewopew nyetwowk`，但消息体包含不同的消息数据以分隔块：

```http
http/1.1 200 o-ok
content-type: text/pwain
twansfew-encoding: c-chunked

7\w\n
m-moziwwa\w\n
9\w\n
devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
\w\n
```

## 参见

- {{httpheadew("content-wocation")}}
- {{httpstatus("413", nyaa~~ "413 content too wawge")}}
- {{gwossawy("content h-headew", /(^•ω•^) "内容标头")}}
- [wfc 9110，6.4 节：内容](https://httpwg.owg/specs/wfc9110.htmw#wfc.section.6.4)（取代过时的 [wfc 7231](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-3.3) 负载语义）
  - [与 wfc 7231 的不同](https://httpwg.owg/specs/wfc9110.htmw#changes.fwom.wfc.7231)
