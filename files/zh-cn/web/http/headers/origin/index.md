---
title: Origin
slug: Web/HTTP/Headers/Origin
tags:
  - HTTP
  - Reference
  - Request header
  - header
  - origin
translation_of: Web/HTTP/Headers/Origin
---
{{HTTPSidebar}}

请求标头 **`Origin`** 表示了请求的{{glossary("origin", "来源")}}（协议、主机、端口）。例如，如果一个用户代理需要请求一个页面中包含的资源，或者执行脚本中的 HTTP 请求（fetch），那么该页面的来源（origin）就可能被包含在这次请求中。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 语法

```
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## 指令

- `null`
  - : 请求的来源是“隐私敏感”的，或者是 HTML 规范定义的*不透明来源*（具体情况在[描述](#描述)部分列出）。
- `<scheme>`
  - : 请求所使用的协议，通常是 HTTP 协议或者它的安全版本（HTTPS 协议）。
- `<hostname>`
  - : 源站的域名或 IP 地址。
- `<port>` {{optional_inline}}
  - : 服务器正在监听的端口号。缺省为服务的默认端口（对于 HTTP 请求而言，默认端口为 80）。

## 描述

`Origin` 标头与 {{HTTPHeader("Referer")}} 标头类似，但前者不会暴露 URL 的 path 部分，而且其可以为 `null` 值。其用于为源站的请求提供“安全上下文”，除非源站的信息敏感或不必要的。

从广义上讲，用户代理会在以下情况中添加 {{httpheader("Origin")}} 请求标头：

- {{Glossary("CORS", "跨源")}}请求。
- 除 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 以外的[同源](/zh-CN/docs/Web/Security/Same-origin_policy)请求（即它会被添加到同源的 {{HTTPMethod("POST")}}、{{HTTPMethod("OPTIONS")}}、{{HTTPMethod("PUT")}}、{{HTTPMethod("PATCH")}} 和 {{HTTPMethod("DELETE")}} 请求中）。

除上述规则外，还有一些特殊情况。例如，在 [no-cors 模式](/zh-CN/docs/Web/API/Request/mode#属性值)下的跨源 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 请求不会发送 `Origin` 标头。

`Origin` 标头在以下情况中（不完整）会被设置为 `null`：

- 请求来源的协议不是 `http`、`https`、`ftp`、`ws`、`wss` 或 `gopher` 中的任意一个（如：`blob`、`file` 和 `data`）。
- 跨源的图像或媒体，包括：`<img>`、`<video>` 和 `<audio>` 元素。
- 属于以下几种文档类型的：使用 `createDocument()` 创建的、通过 `data:` URL 生成的或没有创建者的浏览上下文的。
- 跨源重定向。
- 没有为 sandbox 属性设置 `allow-same-origin` 值的 iframe。
- 响应（response）是网络错误。

> **备注：** 了解更详细的关于其值何时为 `null` 的清单，请参见 Stack Overflow：[When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/a/42242802/)。

## 示例

```http
Origin: https://developer.mozilla.org
```

```http
Origin: http://developer.mozilla.org:80
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
- [浏览器在何时会发送 Origin 请求标头？又会在何时将其设置为 null？](https://stackoverflow.com/a/42242802/)（Stack Overflow）
