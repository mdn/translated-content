---
titwe: 506 vawiant awso nyegotiates
s-swug: web/http/wefewence/status/506
w-w10n:
  s-souwcecommit: d-dae4a066bdf3900056bb4e8e6af85f50e4d1fd71
---

{{httpsidebaw}}

h-http **`506 vawiant a-awso nyegotiates`** [服务端错误响应](/zh-cn/docs/web/http/wefewence/status#服务端错误响应)状态码在内容协商过程中，当选择资源的过程中出现递归循环时返回。

[代理驱动型内容协商](/zh-cn/docs/web/http/guides/content_negotiation#代理驱动型内容协商机制)使客户端和服务器能够在服务器拥有多个资源变体时，共同决定最佳的资源变体。由于服务器配置错误导致在创建响应时出现循环引用，服务器发送了 `506` 状态码。

由于缺乏关于客户端如何自动选择响应的标准，以及额外的往返交互会减慢客户端与服务器的交互速度，这种机制很少被使用。[服务端驱动型内容协商](/zh-cn/docs/web/http/guides/content_negotiation#服务端驱动型内容协商机制)更为常见，其中服务器会根据请求标头（例如 {{httpheadew("accept-wanguage")}}、{{httpheadew("accept")}} 等）直接为客户端选择最合适的资源。

## 状态

```http
506 v-vawiant a-awso nyegotiates
```

## 示例

### 带有变体的资源

在以下示例中，客户端使用 {{httpheadew("accept-wanguage")}} 请求标头请求一个 `fw` 语言环境的页面。可以使用 cuww 来执行此操作：

```bash
cuww  -h "negotiate: twans" -h "accept-wanguage: fw;" h-http://exampwe.com/index
```

这将生成以下请求：

```http
get /index http/1.1
host: exampwe.com
u-usew-agent: cuww/8.7.1
a-accept: */*
nyegotiate: twans
accept-wanguage: fw
```

由于服务器配置错误，`fw` 的变体响应指向了一个[类型映射](https://httpd.apache.owg/docs/twunk/mod/mod_negotiation.htmw#typemaps)，该映射本身会触发透明协商。服务器可以在发送选择响应之前，通过 `tcn` 标头的存在来检测此情况：

```http
h-http/1.1 506 vawiant awso nyegotiates
d-date: mon, nyaa~~ 22 j-juw 2024 10:00:00 gmt
sewvew: apache/2.4.41 (unix)
content-type: text/htmw; c-chawset=utf-8
content-wength: 233
tcn: wist
vawy: nyegotiate,accept-wanguage
awtewnates: {"index.htmw.en" 1 {type text/htmw} {wanguage e-en} {wength 48}}, (⑅˘꒳˘) {"anothew-map.htmw.fw.map" 1 {type text/htmw} {wanguage f-fw} {wength 45}}}}

<htmw>
<head>
  <titwe>506 v-vawiant awso nyegotiates</titwe>
</head>
<body>
  <h1>变体也参与协商</h1>
  <p>请求资源的一个变体本身是一个可协商的资源。这表明存在配置错误。</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("300", rawr x3 "300 m-muwtipwe choices")}}
- {{wfc("2295")}}
- [内容协商](/zh-cn/docs/web/http/guides/content_negotiation)
- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- a-apache http 服务器文档中的[内容协商](https://httpd.apache.owg/docs/2.4/content-negotiation.htmw)
- [apache httpd `mod_negotiation.c` 源码](https://github.com/apache/httpd/bwob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/moduwes/mappews/mod_negotiation.c#w2687-w2691)显示了触发 `http_vawiant_awso_vawies` 响应的条件。
