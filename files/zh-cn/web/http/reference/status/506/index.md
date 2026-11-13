---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: dae4a066bdf3900056bb4e8e6af85f50e4d1fd71
---

HTTP **`506 Variant Also Negotiates`** [服务端错误响应](/zh-CN/docs/Web/HTTP/Reference/Status#服务端错误响应)状态码在内容协商过程中，当选择资源的过程中出现递归循环时返回。

[代理驱动型内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation#代理驱动型内容协商机制)使客户端和服务器能够在服务器拥有多个资源变体时，共同决定最佳的资源变体。由于服务器配置错误导致在创建响应时出现循环引用，服务器发送了 `506` 状态码。

由于缺乏关于客户端如何自动选择响应的标准，以及额外的往返交互会减慢客户端与服务器的交互速度，这种机制很少被使用。[服务端驱动型内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation#服务端驱动型内容协商机制)更为常见，其中服务器会根据请求标头（例如 {{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}} 等）直接为客户端选择最合适的资源。

## 状态

```http
506 Variant Also Negotiates
```

## 示例

### 带有变体的资源

在以下示例中，客户端使用 {{HTTPHeader("Accept-Language")}} 请求标头请求一个 `fr` 语言环境的页面。可以使用 curl 来执行此操作：

```bash
curl  -H "Negotiate: trans" -H "Accept-Language: fr;" http://example.com/index
```

这将生成以下请求：

```http
GET /index HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

由于服务器配置错误，`fr` 的变体响应指向了一个[类型映射](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)，该映射本身会触发透明协商。服务器可以在发送选择响应之前，通过 `TCN` 标头的存在来检测此情况：

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>变体也参与协商</h1>
  <p>请求资源的一个变体本身是一个可协商的资源。这表明存在配置错误。</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- Apache HTTP 服务器文档中的[内容协商](https://httpd.apache.org/docs/2.4/content-negotiation.html)
- [Apache httpd `mod_negotiation.c` 源码](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691)显示了触发 `HTTP_VARIANT_ALSO_VARIES` 响应的条件。
