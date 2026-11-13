---
title: Early-Data 标头
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{SeeCompatTable}}

HTTP **`Early-Data`** {{Glossary("request header", "请求标头")}}由某个中间者设置来表示请求已在 [TLS 早期数据](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)中传送，且表示某个中间者理解 {{HTTPStatus("425", "425 Too Early")}} 状态码。

如果客户端最近与服务器交互过，早期数据（也称为零往返时间[（0-RTT）数据](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)）允许客户端在连接的第一个往返中向服务器发送数据，而无需等待 TLS [握手](/zh-CN/docs/Glossary/TCP_handshake)完成。这减少了客户端和服务器之间重复连接的延迟，但具有安全隐患，因为早期数据容易受到重放攻击。

`Early-Data` 标头**不**由请求的发起者设置（例如，浏览器）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Early-Data: 1
```

## 示例

### 携带 Early-Data 标头的 GET 请求

希望使用早期数据的客户端可以在发送 TLS `ClientHello` 后立即发送 HTTP 请求。在早期数据中发送请求意味着客户端愿意在收到 {{HTTPStatus("425", "425 Too Early")}} 状态码时重试请求，因此不包括 `Early-Data` 标头：

```http
GET /resource HTTP/1.1
Host: example.com
```

如果中间者在与其客户端完成 TLS 握手之前转发请求，则会将其发送，并将 `Early-Data` 标头设置为 `1`：

```http
GET /resource HTTP/1.1
Host: example.com
Early-Data: 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("425", "425 Too Early")}}
- [0-RTT 重放攻击](https://www.rfc-editor.org/rfc/rfc8446#appendix-E.5)
