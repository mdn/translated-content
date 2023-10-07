---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

响应标头 **`Set-Cookie`** 被用来由服务器端向用户代理发送 cookie，所以用户代理可在后续的请求中将其发送回服务器。服务器要发送多个 cookie，则应该在同一响应中发送多个 **`Set-Cookie`** 标头。

> **警告：** 根据 Fetch 规范，`Set-Cookie` 是一个[禁止的响应标头](https://fetch.spec.whatwg.org/#forbidden-response-header-name)，对应的响应在被暴露给前端代码前，[必须滤除](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)这一响应标头，即浏览器会阻止前端 JavaScript 代码访问 `Set-Cookie` 标头。

更多信息请查阅这篇指南：[HTTP cookie](/zh-CN/docs/Web/HTTP/Cookies)。

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
      <th scope="row">{{Glossary("Forbidden response header name", "禁止的响应标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## 指令

- `<cookie-name>=<cookie-value>`

  - : 一个 cookie 开始于一个名称/值对：

    - `<cookie-name>` 可以是除了控制字符、空格或制表符之外的任何 US-ASCII 字符。同时不能包含以下分隔字符：`( ) < > @ , ; : \ " / [ ] ? = { }`。
    - `<cookie-value>` 是可选的，如果存在的话，那么需要包含在双引号里面。支持除了控制字符、{{glossary("Whitespace", "空格")}}、双引号、逗号、分号以及反斜线之外的任意 US-ASCII 字符。

    **关于编码**：许多应用会对 cookie 值按照 URL 编码规则进行编码，但是按照 RFC 规范，这不是必须的。不过满足规范中对于 `<cookie-value>` 所允许使用的字符的要求是有用的。

    > **备注：** 一些 `<cookie-name>` 具有特殊的语义：
    >
    > **`__Secure-` 前缀**：以 `__Secure-` 为前缀的 cookie（其中连接符是前缀的一部分），必须与 `secure` 属性一同设置，同时必须应用于安全页面（即使用 HTTPS 访问的页面）。
    >
    > **`__Host-` 前缀**：以 `__Host-` 为前缀的 cookie，必须与 `secure` 属性一同设置，必须应用于安全页面（即使用 HTTPS 访问的页面），也禁止设置 domain 属性（也就不会发送给子域），同时 path 属性的值必须为 `/`。

- `Expires=<date>` {{optional_inline}}

  - : cookie 的最长有效时间，形式为符合 HTTP-date 规范的时间戳。参见 {{HTTPHeader("Date")}} 可以获取详细信息。

    如果没有设置这个属性，那么表示这是一个**会话期 cookie**。一个会话结束于客户端被关闭时，这意味着会话期 cookie 在彼时会被移除。

    > **警告：** 然而，很多 Web 浏览器支持会话恢复功能，这个功能可以使浏览器保留所有的 tab 标签，然后在重新打开浏览器的时候将其还原。与此同时，cookie 也会恢复，就跟从来没有关闭浏览器一样。

    如果设置了 `Expires` 属性，其截止时间与*客户端*相关，而非服务器的时间。

- `Max-Age=<number>` {{optional_inline}}
  - : 在 cookie 失效之前需要经过的秒数。秒数为 0 或 -1 将会使 cookie 直接过期。假如 `Expires` 和 `Max-Age` 属性均存在，那么 `Max-Age` 的优先级更高。
- `Domain=<domain-value>` {{optional_inline}}

  - : 指定 cookie 可以送达的主机名。

    假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。

    与之前的规范不同的是，域名（`.example.com`）之前的点号会被忽略。

    多个主机/域名的值是*不*被允许的，但如果指定了一个域，则其子域也会被包含。

- `Path=<path-value>` {{optional_inline}}

  - : 指定一个 URL 路径，这个路径*必须*出现在要请求的资源的路径中才可以发送 `Cookie` 标头。

    字符 `/` 可以解释为文件目录分隔符，此目录的下级目录也满足匹配的条件（例如，如果 `path=/docs`，那么

    - `/docs`、`/docs/`、`/docs/Web/` 和 `/docs/Web/HTTP` 都满足匹配条件。
    - `/`、`/docsets` 或者 `/fr/docs` 则不满足匹配条件。

- `Secure` {{optional_inline}}

  - : 一个带有安全属性的 cookie 只有在请求使用 `https:` 协议（localhost 不受此限制）的时候才会被发送到服务器。以阻止[中间人](/zh-CN/docs/Glossary/MitM)攻击。

    > **备注：** 不要假设 `Secure` 会阻止所有的对 cookie 中敏感信息（session key、登录信息，等等）的访问。携带这一属性的 cookie 在不设置 `HttpOnly` 的情况下仍能从客户端的硬盘或是从 JavaScript 中访问。
    >
    > 非安全站点（`http:`）已经不能在 cookie 中设置 `Secure` 属性了（在 Chrome 52 和 Firefox 52 中新引入的限制）。对于 Firefox，`Secure` 属性的 `https:` 限制会在域为 localhost 时被忽略（从 Firefox 75 开始）。

- `HttpOnly` {{optional_inline}}
  - : 用于阻止 JavaScript 通过 {{domxref("Document.cookie")}} 属性访问 cookie。注意，设置了 `HttpOnly` 的 cookie 在 JavaScript 初始化的请求中仍然会被发送。例如，调用 {{domxref("XMLHttpRequest.send()")}} 或 {{domxref("fetch()")}}。其用于防范跨站脚本攻击（{{Glossary("Cross-site_scripting", "XSS")}}）。
- `SameSite=<samesite-value>` {{optional_inline}}

  - : 允许服务器设定一则 cookie 不随着跨站请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（{{Glossary("CSRF")}}）。

    可选的属性值有：

    - `Strict`

      - : 这意味浏览器仅对同一站点的请求发送 `cookie`，即请求来自设置 cookie 的站点。如果请求来自不同的域或协议（即使是相同域），则携带有 `SameSite=Strict` 属性的 cookie 将不会被发送。

    - `Lax`

      - : 这意味着 cookie 不会在跨站请求中被发送，如：加载图像或 frame 的请求。但 cookie 在用户从外部站点导航到源站时，cookie 也将被发送（例如，跟随一个链接）。这是 `SameSite` 属性未被设置时的默认行为。

    - `None`

      - : 这意味着浏览器会在跨站和同站请求中均发送 cookie。在设置这一属性值时，必须同时设置 `Secure` 属性，就像这样：`SameSite=None; Secure`。

      > **备注：** 与 [SameSite Cookie](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 相关的标准作了如下变动：
      >
      > 1. `SameSite` 属性未被指定时，其默认行为是 `SameSite=Lax`。在过去，若未指定，所有的 cookie 均会被发送。
      > 2. 现在，携带 `SameSite=None` 属性的 cookie 必须同时设置 `Secure` 属性（换句话说，其仅能用于安全上下文）
      > 3. 来自同一域的 cookie 若使用了不同的协议（`http:` 或 `HTTPS:`），将不再被视为来自同一站点。
      >
      > 参见[浏览器兼容性](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#浏览器兼容性)表以了解不同浏览器的实线情况（行：“`SameSite`: Defaults to `Lax`”、“`SameSite`: Secure context required”和“`SameSite`: URL scheme-aware ("schemeful")”）。

## 示例

### 会话期 cookie

**会话期 cookie** 将会在客户端关闭时被移除。会话期 cookie 不设置 `Expires` 或 `Max-Age` 属性。

```
Set-Cookie: sessionId=38afes7a8
```

### 持久化 cookie

**持久化 cookie** 不会在客户端关闭时失效，而是在特定的日期（`Expires`）或者经过一段特定的时间之后（`Max-Age`）才会失效。

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### 非法域

属于特定域的 cookie，假如域名不能涵盖原始服务器的域名，那么[应该被用户代理拒绝](https://tools.ietf.org/html/rfc6265#section-4.1.2.3)。

以下的 cookie 假如是被域名为 `originalcompany.com` 的服务器设置的，则会被拒绝：

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

服务器尝试为其域名的子域名设置的 cookie 也会被拒绝。

以下的 cookie 假如是被域名为 `example.com` 的服务器设置的，则会被拒绝：

```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie 前缀

名称中包含 `__Secure-` 或 `__Host-` 前缀的 cookie，只可以应用在使用了安全连接（HTTPS）的域中，需要同时设置 `secure` 属性。

另外，假如 cookie 以 `__Host-` 为前缀，那么 path 属性的值必须为 `/`（表示整个站点），且不能含有 `Domain` 属性。

> **警告：** 对于不支持 cookie 前缀的客户端，无法保证这些附加的条件成立，所以 cookie 总是被接受的。

```
// 当响应来自于一个安全域（HTTPS）的时候，二者都可以被客户端接受
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// 缺少 Secure 指令，会被拒绝
Set-Cookie: __Secure-id=1

// 缺少 Path=/ 指令，会被拒绝
Set-Cookie: __Host-id=1; Secure

// 由于设置了 domain 属性，会被拒绝
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 关于兼容性的注意事项

- 从 Chrome 52 和 Firefox 52 开始，非安全站点（`http:`）已经不能在 cookie 中设置 `Secure` 属性了。

## 参见

- [HTTP cookie](/zh-CN/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [SameSite cookie](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)
