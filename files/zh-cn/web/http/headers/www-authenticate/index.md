---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
---

{{HTTPSidebar}}

HTTP **`WWW-Authenticate`** 响应标头定义了 [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)的方法（“质询”），它用于获取特定资源的访问权限。

> [!NOTE]
> 该标头是[通用的 HTTP 认证框架](/zh-CN/docs/Web/HTTP/Authentication#通用的_http_认证框架)的一部分，可用于多种[身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)。每个“质询”都列出了服务器支持的方案以及为该方案类型添加的额外参数。

使用 [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)的服务器将以 {{HTTPStatus("401")}} `Unauthorized` 响应去响应受保护资源的请求。该响应必须包含至少一个 `WWW-Authenticate` 标头和至少一个{{Glossary("challenge","质询")}}，以指示使用哪些身份验证方案访问资源（以及每个特定方案的任意额外的数据）。

一个 `WWW-Authenticate` 标头中允许多个质询，并且一个响应中允许多个 `WWW-Authenticate` 标头。服务器也可以在其他的响应消息中包含 `WWW-Authenticate` 标头，以指示提供的凭据可能会影响响应。

客户端在接收 `WWW-Authenticate` 标头之后，通常会提示用户接收凭据，然后重新请求资源。这个新的请求会使用 {{HTTPHeader("Authorization")}} 标头向服务器提供凭据，并针对所选择的“质询”身份验证方法进行合适的编码。客户端应该选择它理解的最安全的质询（注意，在某些情况下，“最安全”方法是有争议的）。

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

至少指定一个质询。可以在多个标头或者单独的标头中指定多个质询，以逗号分隔：

```http
// Challenges specified in single header
WWW-Authenticate: challenge1, ..., challengeN

// Challenges specified in multiple headers
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

单个质询有着以下的格式。请注意，这些方案的 token（`<auth-scheme>`）是强制性的。`realm`、`token68` 以及其他参数的存在依赖于所选方案的定义。

```http
// Possible challenge formats (scheme dependent)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

例如，[Basic 身份验证](/zh-CN/docs/Web/HTTP/Authentication#basic_验证方案)允许可选的 `realm` 和 `charset` 密钥，但是并不支持 `token68`。

```http
WWW-Authenticate: Basic
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## 指令

- `<auth-scheme>`

  - : [身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)。一些更常见的类型是（不区分大小写）：[`Basic`](/zh-CN/docs/Web/HTTP/Authentication#basic_验证方案)、`Digest`、`Negotiate` 和 `AWS4-HMAC-SHA256`。

    > [!NOTE]
    > 更多信息和选项，请参见 [HTTP 身份验证 > 身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)

- **realm=**\<realm> {{optional_inline}}
  - : 描述受保护区域的字符串。realm 允许服务器对它受保护的区域进行区分（如果允许支持这种划分方案），并通知用户需要哪个特定的用户名/密码。如果未指定 realm，客户端通常会显示格式化的主机名。
- `<token68>` {{optional_inline}}
  - : 一个 token，可能对某些方案有用。该 token 允许使用 66 个未保留的 URI 字符以及其他的一些字符。根据规范，它可以支持 base64、base64url、base32 或者 base16（十六进制）编码，有或者没有填充，但是不包括空格。

除了 `<auth-scheme>` 和关键字 `realm`，authorization 参数特定于每个[身份验证方案](/zh-CN/docs/Web/HTTP/Authentication#身份验证方案)。总的来说，你将需要为这些检查相关的规范（下面列出了一小部分方案的关键字）。

### Basic

- `<realm>` {{optional_inline}}
  - : 见上方。
- `charset="UTF-8"` {{optional_inline}}
  - : 当提交用户名和密码时，告诉客户端服务器的首选编码方案。仅允许的值是不区分大小写的“UTF-8”字符串。这与 realm 字符串的编码无关。

### Digest

- `<realm>` {{optional_inline}}
  - : 一个指示要使用的用户名/密码的字符串。至少应该包括主机名，但是可能指示具有访问权限的用户或组。
- `domain` {{optional_inline}}
  - : 一个带引号，以空格分隔的 URI 前缀列表，定义了可以使用身份验证信息的所有位置。如果未指定此关键字，则可以在 web 根目录的任意位置使用身份验证信息。
- `nonce`
  - : 一个服务器指定的带引号的字符串，在每次的 401 响应期间，服务器可以使用它去验证指定的凭据。这必须是在每次 401 响应时唯一的生成，并且可以更频繁地重新生成（例如，允许一个摘要仅使用一次）。该规范包含有关生成此值算法的建议。nonce 值对客户端是不透明的。
- `opaque`
  - : 一个服务器指定的带引号的字符串，应在 {{HTTPHeader("Authorization")}} 中原封不动的返回。这对客户端是不透明的。建议服务器包含 Base64 或十六进制数据。
- `stale` {{optional_inline}}
  - : 一个不区分大小写的标志，指示客户端之前的请求因 `nonce` 太旧了（过期）而被拒绝。如果为 `true`，则可以使用新的 `nonce` 加密相同用户名/密码重试请求。如果它是任意其他的值，那么用户名/密码无效，并且必须向用户重新请求。
- `algorithm` {{optional_inline}}
  - : algorithm 被用于产生一个摘要。有效的非会话值是：`"MD5"`（如果未指定，则是默认）、`"SHA-256"`、`"SHA-512"`。有效的会话值是：`"MD5-sess"`、`"SHA-256-sess"`、`"SHA-512-sess"`。
- `qop`
  - : 带引号的字符串，表示服务器支持的保护程度。这必须提供，并且必须忽略无法识别的选项。
    - `"auth"`：身份验证
    - `"auth-int"`：有完整保护的身份验证
- `charset="UTF-8"` {{optional_inline}}
  - : 当提交用户名和密码时，告诉客户端服务器的首选编码方案。仅允许的值是不区分大小写的“UTF-8”字符串。
- `userhash` {{optional_inline}}
  - : 服务器可能指定为 `"true"`，以指示它支持用户名哈希（默认是 `"false"`）。

## 示例

### Basic 身份验证

仅支持 basic 身份验证的服务器，可能有如下所示的 `WWW-Authenticate` 响应标头：

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

用户代理接收到该标头，首先将提示用户输入他们的用户名和密码，然后重新请求资源：这次在 {{HTTPHeader("Authorization")}} 标头中会包含（编码的）凭据。{{HTTPHeader("Authorization")}} 标头看起来可能像这样。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

对于 `"Basic"` 身份验证，凭据的构造方式是，首先将用户名和密码与冒号组合（`aladdin:opensesame`），然后将结果字符串编码为 [`base64`](/zh-CN/docs/Glossary/Base64)（`YWxhZGRpbjpvcGVuc2VzYW1l`）。

> [!NOTE]
> 有关如何配置 Apache 或 Nginx 服务器以使用 HTTP 基本身份验证密码保护你站点的示例，另请参阅 [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)。

### 使用 SHA-256 和 MD5 的 Digest 身份验证

> [!NOTE]
> 该示例取自 {{RFC("7616")}}“HTTP Digest Access Authentication”（在规范中的其他示例，展示了 `SHA-512`、`charset` 和 `userhash` 的使用）。

客户端试图访问“`http://www.example.org/dir/index.html`”处的文档，该文档受到 digest 身份验证的保护。这个文档的用户名是“Mufsas”，并且它的密码是“Circle of Life”（注意，每个单词之间的单个空格）。

客户端第一次请求该文档时，不会发送 {{HTTPHeader("Authorization")}} 标头字段。在这里，服务器使用 HTTP 401 消息响应，其中包括对它支持的每个摘要算法的质询，按照其优先顺序（`SHA256`，然后是 `MD5`）。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

客户端提示用户输入他们的用户名和密码，然后响应一个新的请求，该请求在 {{HTTPHeader("Authorization")}} 标头字段中对凭据进行加密。如果客户端选择 MD5 摘要，则 {{HTTPHeader("Authorization")}} 标头字段看起来可能像如下这样：

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="8ca523f5e9506fed4657c9700eebdbec",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

如果客户端选择 SHA-256 摘要，则 {{HTTPHeader("Authorization")}} 标头看起来可能像以下这样：

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="753927fa0e85d155564e2e272a28d1802ca10daf449
        6794697cf8db5856cb6c1",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 身份验证](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}、{{HTTPStatus("407")}}
