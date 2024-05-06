---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{securecontext_header}}{{Deprecated_header}}{{Non-standard_header}}

> **警告：** 在[草案第 8 版](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-08)中，该标头已被从规范中移除。

**`Accept-CH-Lifetime`** 标头由服务器设置，用于指定其通过使用 {{HTTPHeader("Accept-CH")}} 指定的[客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)标头在客户端的后续请求中应被包含的持续时间。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

> **备注：** 客户端提示只能在安全源（通过 TLS 协议）上访问。为了确保客户端提示能够可靠地发送，在所有安全请求中应持久化保存 {{HTTPHeader("Accept-CH")}} 和 {{HTTPHeader("Accept-CH-Lifetime")}} 标头信息。

## 语法

```http
Accept-CH-Lifetime: <age>
```

## 示例

```http
Accept-CH: Viewport-Width
Accept-CH-Lifetime: 86400
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}
