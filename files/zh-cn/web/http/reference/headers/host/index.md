---
title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

HTTP **`Host`** {{Glossary("request header", "请求标头")}}指定了接收请求的服务器的主机名和端口号。

如果没有包含端口，则默认使用请求服务的端口（例如，HTTPS URL 默认为 `443`，HTTP URL 默认为 `80`）。

所有 HTTP/1.1 请求消息中都必须发送一个 `Host` 标头字段。如果 HTTP/1.1 请求消息中缺少标头字段或包含多个 `Host` 标头字段，可能会发送 {{HTTPStatus("400", "400 Bad Request")}} 状态码。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Host: <host>:<port>
```

## 指令

- `<host>`
  - : 服务器的域名（用于虚拟主机）。
- `<port>` {{optional_inline}}
  - : 服务器监听的 TCP 端口号。

## 示例

```http
Host: developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
