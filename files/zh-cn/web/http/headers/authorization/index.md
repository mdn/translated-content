---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

HTTP **`Authorization`** 请求标头用于提供服务器验证用户代理身份的凭据，允许访问受保护的资源。

**`Authorization`** 标头通常在用户代理首次尝试请求受保护的资源（没有携带凭据）之后发送的，但并不总是发送。服务器响应一条 {{HTTPStatus("401")}} `Unauthorized` 信息，其中包含至少一个 {{HTTPHeader("WWW-Authenticate")}} 标头。该标头表示哪些身份验证的方案可用于访问资源（以及客户端使用它们时需要的额外的信息）。用户代理应该从这些提供的身份验证方案中选择它支持的最安全的身份验证方案，并提示用户提供凭据，然后重新获取资源（包含 **`Authorization`** 标头中编码的凭据）。

> **备注：** 此标头是[通用的 HTTP 认证框架](/zh-CN/docs/Web/HTTP/Authentication#通用的_http_认证框架)的一部分。它可以与许多[身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)一起使用。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Authorization: <auth-scheme> <authorization-parameters>
```

Basic 身份验证

```http
Authorization: Basic <credentials>
```

Digest 身份验证

```http
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## 指令

- `<auth-scheme>`

  - : [身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)定义了凭据如何编码。一些常见的类型是（不区分大小写）：[`Basic`](/zh-CN/docs/Web/HTTP/Authentication#basic_验证方案)、`Digest`、`Negotiate` 和 `AWS4-HMAC-SHA256`。

    > **备注：** 有关更多信息/选项，请参阅 [HTTP 身份验证 > 身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)

除 `<auth-scheme>` 外，其余指令特定于每个[身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)。通常，你需要检查这些方案的相关规范（下面列出了一小部分方案的要点）。

### Basic

- \<credentials>

  - : 凭据，根据指定的方案编码。

    > **备注：** 有关编码算法的信息，请参阅以下示例：{{HTTPHeader("WWW-Authenticate")}}、[HTTP 身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)和相关规范。

### Digest

- \<response>
  - : 证明用户知道该密码，它是该密码的十六进制数字字符串形式。该算法对用户名和密码、realm、cnonce、qop、nc 等进行编码。它在规范中进行了详细描述。
- `username`
  - : 带引号的字符串，其中包含指定 `realm` 的用户名，可以是纯文本，也可以是十六进制表示的哈希编码。如果名称包含字段中不允许的字符，则可以使用 `username*` 替换它（而不是“同时包含两者”）。
- `username*`
  - : 使用 RFC5987 中定义的扩展符号格式化的用户名。只有当名称无法在 `username` 中编码并且 `userhash` 设置为 `"false"` 时，才应使用此字段。
- `uri`
  - : _有效的请求 URI_。有关更多信息，请参阅规范。
- `realm`
  - : 请求的用户名/密码的 realm（同样，应该与所请求资源中对应的 {{HTTPHeader("WWW-Authenticate")}} 响应中的值相匹配）。
- `opaque`
  - : 所请求资源中对应的 {{HTTPHeader("WWW-Authenticate")}} 响应中的值。
- `algorithm`
  - : 用于计算 digest 的算法。必须是所请求资源的 {{HTTPHeader("WWW-Authenticate")}} 响应中支持的算法。
- `qop`
  - : 指示应用于消息的*保护质量*的令牌。必须与在 {{HTTPHeader("WWW-Authenticate")}} 响应中，为被请求的资源指定的集合中的一个值匹配。
    - `"auth"`：身份验证
    - `"auth-int"`：有完整保护的身份验证
- `cnonce`
  - : 客户端提供的带引号的 ASCII 字符串值。客户端和服务器都使用它来提供相互身份验证，提供一些消息完整性保护，并避免“选择明文攻击”。有关更多信息，请参阅规范。
- `nc`
  - : 随机数。客户端发送当前 `cnonce` 值（包括当前请求）的请求的十六进制计数。服务器可以使用重复的 `nc` 值来识别重放请求。
- `userhash` {{optional_inline}}
  - : 如果用户名已经被哈希运算，则为 `"true"`。默认情况下是 `"false"`。

## 示例

### Basic 身份验证

对于 `"Basic"` 身份验证，凭据首先将用户名和密码使用一个冒号（`aladdin:opensesame`）相结合，然后将生成的字符串编码为 [`base64`](/zh-CN/docs/Glossary/Base64)（`YWxhZGRpbjpvcGVuc2VzYW1l`）。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **警告：** {{Glossary("Base64")}} 编码很容易被解码，以得到原始的名称和密码，所以 Basic 身份验证是完全不安全的。当时用身份验证时，总是推荐使用 {{Glossary("HTTPS")}}，而在使用 `Basic` 身份验证时，更是如此。

有关如何配置 Apache 或 Nginx 服务器，以通过 HTTP basic 身份验证保护你的网站，请参见 [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}、{{HTTPStatus("407")}}
