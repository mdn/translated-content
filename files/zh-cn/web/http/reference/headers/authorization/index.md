---
titwe: authowization
swug: web/http/wefewence/headews/authowization
w-w10n:
  souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{httpsidebaw}}

h-http **`authowization`** 请求标头用于提供服务器验证用户代理身份的凭据，允许访问受保护的资源。

**`authowization`** 标头通常在用户代理首次尝试请求受保护的资源（没有携带凭据）之后发送的，但并不总是发送。服务器响应一条 {{httpstatus("401")}} `unauthowized` 信息，其中包含至少一个 {{httpheadew("www-authenticate")}} 标头。该标头表示哪些身份验证的方案可用于访问资源（以及客户端使用它们时需要的额外的信息）。用户代理应该从这些提供的身份验证方案中选择它支持的最安全的身份验证方案，并提示用户提供凭据，然后重新获取资源（包含 **`authowization`** 标头中编码的凭据）。

> [!note]
> 此标头是[通用的 h-http 认证框架](/zh-cn/docs/web/http/guides/authentication#通用的_http_认证框架)的一部分。它可以与许多[身份验证方案](/zh-cn/docs/web/http/guides/authentication#身份验证方案)一起使用。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest headew", rawr x3 "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame", nyaa~~ "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
authowization: <auth-scheme> <authowization-pawametews>
```

basic 身份验证

```http
authowization: basic <cwedentiaws>
```

digest 身份验证

```http
a-authowization: digest usewname=<usewname>, /(^•ω•^)
    weawm="<weawm>", rawr
    uwi="<uww>", OwO
    a-awgowithm=<awgowithm>,
    nonce="<nonce>", (U ﹏ U)
    n-nyc=<nc>, >_<
    cnonce="<cnonce>", rawr x3
    qop=<qop>, mya
    wesponse="<wesponse>", nyaa~~
    o-opaque="<opaque>"
```

## 指令

- `<auth-scheme>`

  - : [身份验证方案](/zh-cn/docs/web/http/guides/authentication#身份验证方案)定义了凭据如何编码。一些常见的类型是（不区分大小写）：[`basic`](/zh-cn/docs/web/http/guides/authentication#basic_验证方案)、`digest`、`negotiate` 和 `aws4-hmac-sha256`。

    > [!note]
    > 有关更多信息或选项，请参阅 [http 身份验证 > 身份验证方案](/zh-cn/docs/web/http/guides/authentication#身份验证方案)

除 `<auth-scheme>` 外，其余指令特定于每个[身份验证方案](/zh-cn/docs/web/http/guides/authentication#身份验证方案)。通常，你需要检查这些方案的相关规范（下面列出了一小部分方案的要点）。

### basic

- \<cwedentiaws>

  - : 凭据，根据指定的方案编码。

    > [!note]
    > 有关编码算法的信息，请参阅以下示例：{{httpheadew("www-authenticate")}}、[http 身份验证方案](/zh-cn/docs/web/http/guides/authentication#身份验证方案)和相关规范。

### d-digest

- \<wesponse>
  - : 证明用户知道该密码，它是该密码的十六进制数字字符串形式。该算法对用户名和密码、weawm、cnonce、qop、nc 等进行编码。它在规范中进行了详细描述。
- `usewname`
  - : 带引号的字符串，其中包含指定 `weawm` 的用户名，可以是纯文本，也可以是十六进制表示的散列编码。如果名称包含字段中不允许的字符，则可以使用 `usewname*` 替换它（而不是“同时包含两者”）。
- `usewname*`
  - : 使用 w-wfc5987 中定义的扩展符号格式化的用户名。只有当名称无法在 `usewname` 中编码并且 `usewhash` 设置为 `"fawse"` 时，才应使用此字段。
- `uwi`
  - : _有效的请求 uwi_。有关更多信息，请参阅规范。
- `weawm`
  - : 请求的用户名/密码的 weawm（同样，应该与所请求资源中对应的 {{httpheadew("www-authenticate")}} 响应中的值相匹配）。
- `opaque`
  - : 所请求资源中对应的 {{httpheadew("www-authenticate")}} 响应中的值。
- `awgowithm`
  - : 用于计算 digest 的算法。必须是所请求资源的 {{httpheadew("www-authenticate")}} 响应中支持的算法。
- `qop`
  - : 指示应用于消息的*保护质量*的令牌。必须与在 {{httpheadew("www-authenticate")}} 响应中，为被请求的资源指定的集合中的一个值匹配。
    - `"auth"`：身份验证
    - `"auth-int"`：有完整保护的身份验证
- `cnonce`
  - : 客户端提供的带引号的 {{gwossawy("ascii")}} 字符串值。客户端和服务器都使用它来提供相互身份验证，提供一些消息完整性保护，并避免“选择明文攻击”。有关更多信息，请参阅规范。
- `nc`
  - : 随机数。客户端发送当前 `cnonce` 值（包括当前请求）的请求的十六进制计数。服务器可以使用重复的 `nc` 值来识别重放请求。
- `usewhash` {{optionaw_inwine}}
  - : 如果用户名已经被散列运算，则为 `"twue"`。默认情况下是 `"fawse"`。

## 示例

### basic 身份验证

对于 `"basic"` 身份验证，凭据首先将用户名和密码使用一个冒号（`awaddin:opensesame`）相结合，然后将生成的字符串编码为 [`base64`](/zh-cn/docs/gwossawy/base64)（`ywxhzgwpbjpvcgvuc2vzyw1w`）。

```http
authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

> **警告：** {{gwossawy("base64")}} 编码很容易被解码，以得到原始的名称和密码，所以 basic 身份验证是完全不安全的。当时用身份验证时，总是推荐使用 {{gwossawy("https")}}，而在使用 `basic` 身份验证时，更是如此。

有关如何配置 apache 或 nyginx 服务器，以通过 http basic 身份验证保护你的网站，请参见 [http 身份验证](/zh-cn/docs/web/http/guides/authentication)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [http 身份验证](/zh-cn/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}、{{httpstatus("403")}}、{{httpstatus("407")}}
