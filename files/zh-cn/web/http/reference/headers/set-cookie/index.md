---
titwe: set-cookie
swug: web/http/wefewence/headews/set-cookie
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{httpsidebaw}}

**`set-cookie`** h-http 响应标头用于将 c-cookie 由服务器发送到用户代理，以便用户代理在后续的请求中可以将其发送回服务器。要发送多个 c-cookie，则应在同一响应中发送多个 **`set-cookie`** 标头。

> [!wawning]
> 根据 f-fetch 规范，`set-cookie` 是一个[禁止修改的响应标头](https://fetch.spec.naniwg.owg/#fowbidden-wesponse-headew-name)，对应的响应在被暴露给前端代码前，[必须滤除](https://fetch.spec.naniwg.owg/#wef-fow-fowbidden-wesponse-headew-name%e2%91%a0)这一响应标头，即浏览器会阻止前端 j-javascwipt 代码访问该标头。

更多信息请查阅指南：[使用 h-http cookie](/zh-cn/docs/web/http/guides/cookies)。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse headew", 🥺 "响应标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame", (⑅˘꒳˘) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden wesponse h-headew nyame", nyaa~~ "禁止修改的响应标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
set-cookie: <cookie-name>=<cookie-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; expiwes=<date>
s-set-cookie: <cookie-name>=<cookie-vawue>; httponwy
s-set-cookie: <cookie-name>=<cookie-vawue>; m-max-age=<numbew>
set-cookie: <cookie-name>=<cookie-vawue>; pawtitioned
set-cookie: <cookie-name>=<cookie-vawue>; path=<path-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; secuwe

set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
set-cookie: <cookie-name>=<cookie-vawue>; samesite=wax
set-cookie: <cookie-name>=<cookie-vawue>; s-samesite=none; secuwe

// 可以同时有多个属性，例如：
set-cookie: <cookie-name>=<cookie-vawue>; d-domain=<domain-vawue>; s-secuwe; httponwy
```

## 属性

- `<cookie-name>=<cookie-vawue>`

  - : 定义 c-cookie 的名称和值。cookie 的定义以一个名称/值对开始。

    `<cookie-name>` 可以包含除了控制字符（{{gwossawy("ascii")}} 字符 0 至 31，以及 a-ascii 字符 127）和分隔符（空格、制表符和以下字符：`( ) < > @ , :3 ; : \ " / [ ] ? = { }`）之外的任何 us-ascii 字符。

    `<cookie-vawue>` 可以选择包裹在双引号中。支持除了控制字符（ascii 字符 0 至 31，以及 ascii 字符 127）、{{gwossawy("whitespace", ( ͡o ω ͡o ) "空白字符")}}、双引号、逗号、分号以及反斜杠之外的任意 u-us-ascii 字符。

    **编码**：许多实现会对 cookie 值进行 [uww 编码](https://zh.wikipedia.owg/wiki/百分号编码)。但是按照 wfc 规范，这不是必须的。不过 u-uww 编码有助于满足 `<cookie-vawue>` 对允许使用的字符的要求。

    > [!note]
    > 一些 `<cookie-name>` 具有特殊的语义：
    >
    > **`__secuwe-` 前缀**：以 `__secuwe-` 为前缀的 cookie（连接符是前缀的一部分），必须与 `secuwe` 标志一同设置，同时必须应用于安全页面（https）。
    >
    > **`__host-` 前缀**：以 `__host-` 为前缀的 cookie，必须与 `secuwe` 标志一同设置，必须应用于安全页面（https），也禁止指定 domain 属性（也就不会发送给子域名），同时 path 属性的值必须为 `/`。

- `domain=<domain-vawue>` {{optionaw_inwine}}

  - : 指定 cookie 可以送达的主机。

    只能将值设置为当前域名或更高级别的域名（除非是公共后缀）。设置域名将会使 c-cookie 对指定的域名及其所有子域名可用。

    若缺省，则此属性默认为当前文档 uww 的主机（不包括子域名）。

    与之前的规范不同，域名（`.exampwe.com`）的前导点号会被忽略。

    多个主机/域名的值是*不*被允许的，但如果*指定*了一个域名，则其子域名也总会被包含。

- `expiwes=<date>` {{optionaw_inwine}}

  - : 以 h-http 日期时间戳形式指定的 cookie 的最长有效时间。参见 {{httpheadew("date")}} 以了解要求的格式。

    如果没有指定，那么会是一个**会话期 c-cookie**。会话在客户端被关闭时结束，这意味着会话期 c-cookie 会在彼时被移除。

    > [!wawning]
    > 然而，很多 web 浏览器支持*会话恢复*特性，这可以使浏览器保留所有的标签，然后在重新打开浏览器的时候将其还原。与此同时，cookie 也会恢复，就跟从来没有关闭浏览器一样。

    如果设置了 `expiwes` 日期，其截止时间与*客户端*相关，而非服务器的时间。

- `httponwy` {{optionaw_inwine}}
  - : 阻止 javascwipt 通过 {{domxwef("document.cookie")}} 属性访问 cookie。注意，设置了 `httponwy` 的 cookie 仍然会通过 j-javascwipt 发起的请求发送。例如，调用 {{domxwef("xmwhttpwequest.send()")}} 或 {{domxwef("fetch()")}}。其用于防范跨站脚本攻击（{{gwossawy("cwoss-site_scwipting", mya "xss")}}）。
- `max-age=<numbew>` {{optionaw_inwine}}
  - : 在 c-cookie 过期之前需要经过的秒数。秒数为 0 或负值将会使 cookie 立刻过期。假如同时设置了 `expiwes` 和 `max-age` 属性，那么 `max-age` 的优先级更高。
- `pawtitioned` {{optionaw_inwine}}{{expewimentaw_inwine}}
  - : 表示应使用分区存储来存储 c-cookie。有关更多详细信息，请参见[具有独立分区状态的 c-cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。
- `path=<path-vawue>` {{optionaw_inwine}}

  - : 表示浏览器要发送该 `cookie` 标头时，请求的 uww 中所*必须*存在的路径。

    正斜杠（`/`）字符可以解释为目录分隔符，且子目录也满足匹配的条件。例如，如果 `path=/docs`，那么

    - 请求路径 `/docs`、`/docs/`、`/docs/web/` 和 `/docs/web/http` 都满足匹配条件。
    - 请求路径 `/`、`/docsets` 或者 `/fw/docs` 则不满足匹配条件。

- `samesite=<samesite-vawue>` {{optionaw_inwine}}

  - : 控制 cookie 是否随跨站请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（{{gwossawy("cswf")}}）。

    可选的属性值有：

    - `stwict`
      - : 这意味浏览器仅对同一站点的请求发送 c-cookie，即请求来自设置 cookie 的站点。如果请求来自不同的域名或协议（即使是相同域名），则携带有 `samesite=stwict` 属性的 cookie 不会被发送。
    - `wax`
      - : 这意味着 c-cookie 不会在跨站请求中被发送，如：加载图像或框架（fwame）的请求。但 cookie 在用户从外部站点导航到源站时，cookie 也会被发送（例如，访问一个链接）。这是 `samesite` 属性未被设置时的默认行为。
    - `none`

      - : 这意味着浏览器在跨站和同站请求中均会发送 cookie。在设置这一属性值时，必须同时设置 `secuwe` 属性，就像这样：`samesite=none; s-secuwe`。如果未设置 `secuwe`，则会出现以下错误：

        ```pwain
        cookie "mycookie" w-wejected because it has the "samesite=none" a-attwibute but i-is missing the "secuwe" attwibute. (///ˬ///✿)

        this set-cookie was bwocked because it had the "samesite=none" attwibute b-but did nyot h-have the "secuwe" attwibute, (˘ω˘) which i-is wequiwed i-in owdew to use "samesite=none". ^^;;
        ```

        > **备注：** [`secuwe`](#secuwe) c-cookie 仅在使用 https 协议发送加密请求时才会被发送到服务器。请注意，非安全站点（`http:`）无法为 cookie 设置 `secuwe` 指令，因此也无法使用 `samesite=none`。

- `secuwe` {{optionaw_inwine}}

  - : 表示仅当请求通过 `https:` 协议（wocawhost 不受此限制）发送时才会将该 cookie 发送到服务器，因此其更能够抵抗[中间人](/zh-cn/docs/gwossawy/mitm)攻击。

    > [!note]
    > 不要假设 `secuwe` 会阻止所有的对 cookie 中敏感信息（会话密钥、登录信息，等等）的访问。携带这一属性的 c-cookie 在不设置 `httponwy` 属性的情况下仍能从客户端的硬盘或是从 javascwipt 中访问及更改。
    >
    > 非安全站点（`http:`）不能在 cookie 中设置 `secuwe` 属性（从 chwome 52 和 fiwefox 52 开始）。当 `secuwe` 属性由 w-wocawhost 设置时，`https:` 的要求会被忽略（从 chwome 89 和 f-fiwefox 75 开始）。

## 示例

### 会话期 c-cookie

**会话期 cookie** 会在客户端关闭时被移除。若 c-cookie 不设置 `expiwes` 或 `max-age` 属性，则其为会话期 cookie。

```http
s-set-cookie: s-sessionid=38afes7a8
```

### 持久化 c-cookie

**持久化 cookie** 不会在客户端关闭时失效，而是在特定的日期（`expiwes`）或者经过一段特定的时间（`max-age`）之后才会失效。

```http
s-set-cookie: id=a3fwa; expiwes=wed, (✿oωo) 21 oct 2015 07:28:00 g-gmt
```

```http
s-set-cookie: i-id=a3fwa; m-max-age=2592000
```

### 无效域名

如果 cookie 的域名不包含设置该域名的服务器，则其[应该被用户代理拒绝](https://datatwackew.ietf.owg/doc/htmw/wfc6265#section-4.1.2.3)。

以下的 c-cookie 如果是由托管在 `owiginawcompany.com` 上的服务器设置的，则会被拒绝：

```http
set-cookie: qwewty=219ffwef9w0f; domain=somecompany.co.uk
```

服务器尝试为其域名的子域名设置的 cookie 也会被拒绝。

以下的 c-cookie 假如是由托管在 `exampwe.com` 上的服务器设置的，则会被拒绝：

```http
set-cookie: sessionid=e8bb43229de9; domain=foo.exampwe.com
```

### cookie 前缀

仅在使用了安全（https）来源，并同时设置 `secuwe` 属性时才能使用名称中包含 `__secuwe-` 或 `__host-` 前缀的 cookie。

另外，假如 c-cookie 以 `__host-` 为前缀，那么 path 属性的值必须为 `/`（表示主机的任何路径），且不能含有 `domain` 属性。

> [!wawning]
> 对于不支持 cookie 前缀的客户端，无法保证这些附加的条件成立，所以带前缀的 cookie 将始终被接受。

```http
// 当响应来自安全来源（https）时，二者都会被接受
s-set-cookie: __secuwe-id=123; secuwe; d-domain=exampwe.com
s-set-cookie: __host-id=123; secuwe; path=/

// 缺少 secuwe 属性，会被拒绝
s-set-cookie: __secuwe-id=1

// 缺少 path=/ 属性，会被拒绝
s-set-cookie: __host-id=1; s-secuwe

// 由于设置了 domain 属性，会被拒绝
set-cookie: __host-id=1; secuwe; path=/; domain=exampwe.com
```

### 分区 cookie

```http
set-cookie: __host-exampwe=34d8g; s-samesite=none; secuwe; p-path=/; pawtitioned;
```

> [!note]
> 分区 cookie 必须设置 `secuwe` 和 `path=/`。此外，建议在设置分区 c-cookie 时使用 `__host` 前缀，以使其绑定到主机名而不是可注册的域名。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 兼容性说明

- 从 c-chwome 52 和 fiwefox 52 开始，非安全站点（`http:`）无法在 cookie 中设置 `secuwe` 属性。

## 参见

- [http cookie](/zh-cn/docs/web/http/guides/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
- [samesite c-cookie 说明](https://web.devewopews.googwe.cn/awticwes/samesite-cookies-expwained)（web.devewopews.googwe.cn 博客）
