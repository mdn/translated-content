---
title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

**`Set-Cookie`** HTTP 响应标头用于将 cookie 由服务器发送到用户代理，以便用户代理在后续的请求中可以将其发送回服务器。要发送多个 cookie，则应在同一响应中发送多个 **`Set-Cookie`** 标头。

> [!WARNING]
> 根据 Fetch 规范，`Set-Cookie` 是一个[禁止修改的响应标头](https://fetch.spec.whatwg.org/#forbidden-response-header-name)，对应的响应在被暴露给前端代码前，[必须滤除](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)这一响应标头，即浏览器会阻止前端 JavaScript 代码访问该标头。

更多信息请查阅指南：[使用 HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)。

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
      <th scope="row">{{Glossary("Forbidden response header name", "禁止修改的响应标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// 可以同时有多个属性，例如：
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## 属性

- `<cookie-name>=<cookie-value>`
  - : 定义 cookie 的名称和值。cookie 的定义以一个名称/值对开始。

    `<cookie-name>` 可以包含除了控制字符（{{Glossary("ASCII")}} 字符 0 至 31，以及 ASCII 字符 127）和分隔符（空格、制表符和以下字符：`( ) < > @ , ; : \ " / [ ] ? = { }`）之外的任何 US-ASCII 字符。

    `<cookie-value>` 可以选择包裹在双引号中。支持除了控制字符（ASCII 字符 0 至 31，以及 ASCII 字符 127）、{{glossary("Whitespace", "空白字符")}}、双引号、逗号、分号以及反斜杠之外的任意 US-ASCII 字符。

    **编码**：许多实现会对 cookie 值进行 [URL 编码](https://zh.wikipedia.org/wiki/百分号编码)。但是按照 RFC 规范，这不是必须的。不过 URL 编码有助于满足 `<cookie-value>` 对允许使用的字符的要求。

    > [!NOTE]
    > 一些 `<cookie-name>` 具有特殊的语义：
    >
    > **`__Secure-` 前缀**：以 `__Secure-` 为前缀的 cookie（连接符是前缀的一部分），必须与 `secure` 标志一同设置，同时必须应用于安全页面（HTTPS）。
    >
    > **`__Host-` 前缀**：以 `__Host-` 为前缀的 cookie，必须与 `secure` 标志一同设置，必须应用于安全页面（HTTPS），也禁止指定 domain 属性（也就不会发送给子域名），同时 path 属性的值必须为 `/`。

- `Domain=<domain-value>` {{optional_inline}}
  - : 指定 cookie 可以送达的主机。

    只能将值设置为当前域名或更高级别的域名（除非是公共后缀）。设置域名将会使 cookie 对指定的域名及其所有子域名可用。

    若缺省，则此属性默认为当前文档 URL 的主机（不包括子域名）。

    与之前的规范不同，域名（`.example.com`）的前导点号会被忽略。

    多个主机/域名的值是*不*被允许的，但如果*指定*了一个域名，则其子域名也总会被包含。

- `Expires=<date>` {{optional_inline}}
  - : 以 HTTP 日期时间戳形式指定的 cookie 的最长有效时间。参见 {{HTTPHeader("Date")}} 以了解要求的格式。

    如果没有指定，那么会是一个**会话期 cookie**。会话在客户端被关闭时结束，这意味着会话期 cookie 会在彼时被移除。

    > [!WARNING]
    > 然而，很多 Web 浏览器支持*会话恢复*特性，这可以使浏览器保留所有的标签，然后在重新打开浏览器的时候将其还原。与此同时，cookie 也会恢复，就跟从来没有关闭浏览器一样。

    如果设置了 `Expires` 日期，其截止时间与*客户端*相关，而非服务器的时间。

- `HttpOnly` {{optional_inline}}
  - : 阻止 JavaScript 通过 {{domxref("Document.cookie")}} 属性访问 cookie。注意，设置了 `HttpOnly` 的 cookie 仍然会通过 JavaScript 发起的请求发送。例如，调用 {{domxref("XMLHttpRequest.send()")}} 或 {{domxref("fetch()")}}。其用于防范跨站脚本攻击（{{Glossary("Cross-site_scripting", "XSS")}}）。
- `Max-Age=<number>` {{optional_inline}}
  - : 在 cookie 过期之前需要经过的秒数。秒数为 0 或负值将会使 cookie 立刻过期。假如同时设置了 `Expires` 和 `Max-Age` 属性，那么 `Max-Age` 的优先级更高。
- `Partitioned` {{optional_inline}}{{experimental_inline}}
  - : 表示应使用分区存储来存储 cookie。有关更多详细信息，请参见[具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)。
- `Path=<path-value>` {{optional_inline}}
  - : 表示浏览器要发送该 `Cookie` 标头时，请求的 URL 中所*必须*存在的路径。

    正斜杠（`/`）字符可以解释为目录分隔符，且子目录也满足匹配的条件。例如，如果 `path=/docs`，那么
    - 请求路径 `/docs`、`/docs/`、`/docs/Web/` 和 `/docs/Web/HTTP` 都满足匹配条件。
    - 请求路径 `/`、`/docsets` 或者 `/fr/docs` 则不满足匹配条件。

- `SameSite=<samesite-value>` {{optional_inline}}
  - : 控制 cookie 是否随跨站请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（{{Glossary("CSRF")}}）。

    可选的属性值有：
    - `Strict`
      - : 这意味浏览器仅对同一站点的请求发送 cookie，即请求来自设置 cookie 的站点。如果请求来自不同的域名或协议（即使是相同域名），则携带有 `SameSite=Strict` 属性的 cookie 不会被发送。
    - `Lax`
      - : 这意味着 cookie 不会在跨站请求中被发送，如：加载图像或框架（frame）的请求。但 cookie 在用户从外部站点导航到源站时，cookie 也会被发送（例如，访问一个链接）。这是 `SameSite` 属性未被设置时的默认行为。
    - `None`
      - : 这意味着浏览器在跨站和同站请求中均会发送 cookie。在设置这一属性值时，必须同时设置 `Secure` 属性，就像这样：`SameSite=None; Secure`。如果未设置 `Secure`，则会出现以下错误：

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > [`Secure`](#secure) cookie 仅在使用 HTTPS 协议发送加密请求时才会被发送到服务器。请注意，非安全站点（`http:`）无法为 cookie 设置 `Secure` 指令，因此也无法使用 `SameSite=None`。

- `Secure` {{optional_inline}}
  - : 表示仅当请求通过 `https:` 协议（localhost 不受此限制）发送时才会将该 cookie 发送到服务器，因此其更能够抵抗[中间人](/zh-CN/docs/Glossary/MitM)攻击。

    > [!NOTE]
    > 不要假设 `Secure` 会阻止所有的对 cookie 中敏感信息（会话密钥、登录信息，等等）的访问。携带这一属性的 cookie 在不设置 `HttpOnly` 属性的情况下仍能从客户端的硬盘或是从 JavaScript 中访问及更改。
    >
    > 非安全站点（`http:`）不能在 cookie 中设置 `Secure` 属性（从 Chrome 52 和 Firefox 52 开始）。当 `Secure` 属性由 localhost 设置时，`https:` 的要求会被忽略（从 Chrome 89 和 Firefox 75 开始）。

## 示例

### 会话期 cookie

**会话期 cookie** 会在客户端关闭时被移除。若 cookie 不设置 `Expires` 或 `Max-Age` 属性，则其为会话期 cookie。

```http
Set-Cookie: sessionId=38afes7a8
```

### 持久化 cookie

**持久化 cookie** 不会在客户端关闭时失效，而是在特定的日期（`Expires`）或者经过一段特定的时间（`Max-Age`）之后才会失效。

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### 无效域名

如果 cookie 的域名不包含设置该域名的服务器，则其[应该被用户代理拒绝](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3)。

以下的 cookie 如果是由托管在 `originalcompany.com` 上的服务器设置的，则会被拒绝：

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

服务器尝试为其域名的子域名设置的 cookie 也会被拒绝。

以下的 cookie 假如是由托管在 `example.com` 上的服务器设置的，则会被拒绝：

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie 前缀

仅在使用了安全（HTTPS）来源，并同时设置 `secure` 属性时才能使用名称中包含 `__Secure-` 或 `__Host-` 前缀的 cookie。

另外，假如 cookie 以 `__Host-` 为前缀，那么 path 属性的值必须为 `/`（表示主机的任何路径），且不能含有 `Domain` 属性。

> [!WARNING]
> 对于不支持 cookie 前缀的客户端，无法保证这些附加的条件成立，所以带前缀的 cookie 将始终被接受。

```http
// 当响应来自安全来源（HTTPS）时，二者都会被接受
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// 缺少 Secure 属性，会被拒绝
Set-Cookie: __Secure-id=1

// 缺少 Path=/ 属性，会被拒绝
Set-Cookie: __Host-id=1; Secure

// 由于设置了 Domain 属性，会被拒绝
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

### 分区 cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> 分区 cookie 必须设置 `Secure` 和 `Path=/`。此外，建议在设置分区 cookie 时使用 `__Host` 前缀，以使其绑定到主机名而不是可注册的域名。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性说明

- 从 Chrome 52 和 Firefox 52 开始，非安全站点（`http:`）无法在 cookie 中设置 `Secure` 属性。

## 参见

- [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [SameSite Cookie 说明](https://web.developers.google.cn/articles/samesite-cookies-explained)（web.developers.google.cn 博客）
