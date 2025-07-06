---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Access-Control-Allow-Headers`** 响应标头中用于响应包含了 {{HTTPHeader("Access-Control-Request-Headers")}} 的{{glossary("preflight request", "预检请求")}}，以指示在实际请求中可以使用哪些 HTTP 标头。

如果请求中包含 {{HTTPHeader("Access-Control-Request-Headers")}} 标头，那么此响应标头是必需的。

> [!NOTE]
> {{glossary("CORS-safelisted_request_header", "列入 CORS 白名单的请求标头")}}始终被允许，通常无需在 `Access-Control-Allow-Headers` 中列出（除非有必要绕过白名单的[额外限制](/zh-CN/docs/Glossary/CORS-safelisted_request_header#额外限制)）。

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
  </tbody>
</table>

## 语法

```http
Access-Control-Allow-Headers: [<header-name>[, <header-name>]*]
Access-Control-Allow-Headers: *
```

## 指令

- `<header-name>`
  - : 支持的请求标头名称。此标头可以列出任意数量的请求标头，用逗号分隔。
- `*`（通配符）
  - : “`*`”值仅在无凭证的请求（即不包含 [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 或 HTTP 认证信息的请求）中视为特殊的通配符值。在带有凭证的请求中，它被当作字面意义的标头名称“`*`”处理，不具有特殊语义。请注意，在 {{HTTPHeader("Authorization")}} 标头不能被泛化处理，始终需要明确列出。

## 示例

### 自定义标头

以下是一个 `Access-Control-Allow-Headers` 标头可能的样子。它表明服务器支持名为 `X-Custom-Header` 的自定义标头（除了{{glossary("CORS-safelisted_request_header", "列入 CORS 白名单的请求标头")}}之外）。

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### 多个标头

此示例展示了 `Access-Control-Allow-Headers` 如何指定支持多个标头的情况。

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### 绕过额外限制

尽管{{glossary("CORS-safelisted_request_header", "列入 CORS 白名单的请求标头")}}始终被允许，并且通常无需在 `Access-Control-Allow-Headers` 中列出，但无论如何列出它们都将绕过适用的[额外限制](/zh-CN/docs/Glossary/CORS-safelisted_request_header#额外限制)。

```http
Access-Control-Allow-Headers: Accept
```

### 预检请求示例

让我们来看一个涉及 `Access-Control-Allow-Headers` 的{{glossary("preflight request", "预检请求")}}的示例。

#### 请求

首先看请求。预检请求是一个使用 {{HTTPMethod("OPTIONS")}} 方法的请求，它包含预检请求头中的三个部分的某些组合：{{HTTPHeader("Access-Control-Request-Method")}}、{{HTTPHeader("Access-Control-Request-Headers")}} 和 {{HTTPHeader("Origin")}}。

下面的预检请求告知服务器，我们想要发送一个 CORS `GET` 请求，并且该请求携带着 {{HTTPHeader("Access-Control-Request-Headers")}} 中列出的标头（即 {{HTTPHeader("Content-Type")}} 和 `x-requested-with`）。

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: Content-Type, x-requested-with
Origin: https://foo.bar.org
```

#### 响应

如果由预检请求指示的 CORS 请求被授权，服务器将使用一个消息响应预检请求，该消息表明允许的源、方法和标头。如下所示，{{HTTPHeader("Access-Control-Allow-Headers")}} 包含了所请求的标头信息。

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

如果请求的方法不被支持，服务器将响应一个错误。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
