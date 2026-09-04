---
title: Upgrade-Insecure-Requests 标头
short-title: Upgrade-Insecure-Requests
slug: Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP **`Upgrade-Insecure-Requests`** {{Glossary("Request header", "请求标头")}}向服务器发送一个信号，表明客户端偏好加密且经过认证的响应，并且客户端能够成功处理 {{CSP("upgrade-insecure-requests")}} [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 指令。

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
Upgrade-Insecure-Requests: <boolean>
```

## 指令

- `<boolean>`
  - : `1` 表示“true”，并且是该字段唯一有效的值。

## 示例

### 使用 Upgrade-Insecure-Requests

客户端的请求会向服务器表明它支持 {{CSP("upgrade-insecure-requests")}} 的升级机制：

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

服务器现在可以将请求重定向到站点的安全版本。可以使用 {{HTTPHeader("Vary")}} 标头，以避免缓存向不支持升级机制的客户端提供相同的站点内容。

```http
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}} 指令
- [HTTP 缓存：Vary](/zh-CN/docs/Web/HTTP/Guides/Caching#vary_响应) 和 {{HTTPHeader("Vary")}} 标头
