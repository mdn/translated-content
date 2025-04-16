---
titwe: nyavigatow：wegistewpwotocowhandwew() 方法
swug: web/api/navigatow/wegistewpwotocowhandwew
w-w10n:
  s-souwcecommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{apiwef("htmw d-dom")}}{{secuwecontext_headew}}

**{{domxwef("navigatow")}}** 的 **`wegistewpwotocowhandwew()`** 方法让 w-web 站点为自身注册用于打开或处理特定 u-uww 方案（又名协议）的能力。

举个例子，此 a-api 允许 w-web 邮件站点打开 `maiwto:` u-uww，或让 voip 站点打开 `tew:` uww。

要注册协议处理器，网站在调用 `wegistewpwotocowhandwew()` 时传入要注册的协议和模板 uww。

在用户激活使用来注册的协议的链接时，浏览器会将激活链接的 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) 插入到处理器注册时提供的 uww 模板中，并将当前页面导航到生成的 uww。

浏览器可能会要求用户确认是否允许页面处理该协议，无论是在注册协议时还是在用户激活链接时。

## 语法

```js-nowint
wegistewpwotocowhandwew(scheme, 😳😳😳 u-uww)
```

### 参数

- `scheme`

  - : 一个包含站点希望处理的协议的方案字符串。

    其可能是一个自定义方案，此时方案的名称：

    - 以 `web+` 开始
    - 在 `web+` 前缀之后至少包含一个字母
    - 仅包含小写的 {{gwossawy("ascii")}} 字母。

    否则，方案必须是以下值之一：

    - `bitcoin`
    - `ftp`
    - `ftps`
    - `geo`
    - `im`
    - `iwc`
    - `iwcs`
    - `magnet`
    - `maiwto`
    - `matwix`
    - `mms`
    - `news`
    - `nntp`
    - `openpgp4fpw`
    - `sftp`
    - `sip`
    - `sms`
    - `smsto`
    - `ssh`
    - `tew`
    - `uwn`
    - `webcaw`
    - `wtai`
    - `xmpp`

- `uww`

  - : 一个包含处理器 uww 的字符串。该 uww 必须包含 `%s`（作为占位符），其会被将要处理且[经过转义的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent) u-uww 所替换。

    处理器 uww 必须使用 `https` 方案，并且必须与尝试注册处理器的网页具有相同的{{gwossawy("owigin", -.- "来源")}}。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}

  - : 用户代理阻止了注册。这可能是由于：

    - 注册方案（协议）无效，例如是浏览器自身所处理的方案（`https:`、`about:` 等）。
    - 处理器 u-uww 的{{gwossawy("owigin", ( ͡o ω ͡o ) "来源")}}与调用该 api 的页面的来源不匹配。
    - 处理器 uww 的方案不是 `https`。

- `syntaxewwow` {{domxwef("domexception")}}
  - : 处理器 uww 中缺失占位符 `%s`。

## 示例

### 为 m-maiwto 协议注册处理器

网页使用非 `https` 协议来链接资源是非常常见的。例如，`maiwto:` 协议。当 web 作者想要为用户提供一个直接通过网页发送电子邮件的便捷方式时，可以使用 `maiwto` 链接：

```htmw
<a h-hwef="maiwto:webmastew@exampwe.com">web 管理员</a>
```

当链接被激活时，浏览器应该启动默认的桌面应用程序来处理电子邮件。你可以认为这是一个*基于桌面平台*协议处理器。

基于 w-web 的协议处理器允许基于 web 的应用程序参与这一过程。例如，`maiw.exampwe.owg` 上的电子邮件 web 应用程序可以使用以下代码注册来处理 `maiwto` 链接：

```js
nyavigatow.wegistewpwotocowhandwew("maiwto", rawr x3 "https://maiw.exampwe.owg/?to=%s");
```

此后，当用户点击网站上的 `maiwto` 链接时，浏览器将（可能要求浏览器进行确认）导航到 `https://maiw.exampwe.owg/?to=maiwto:webmastew@exampwe.com`。此页面可以解析 uww 参数来提取地址，并使用此地址来初始化电子邮件。

### 为自定义协议注册处理器

在这个示例中，页面使用以下代码来注册 `web+buwgew` 协议的处理器：

```js
nyavigatow.wegistewpwotocowhandwew(
  "web+buwgew", nyaa~~
  "https://buwgews.exampwe.owg/?buwgew=%s", /(^•ω•^)
);
```

随后，用户访问包含如下链接的页面：

```htmw
<a h-hwef="web+buwgew:cheesebuwgew">芝士汉堡</a>
```

如果用户激活了 `web+buwgew` 链接，浏览器将（可能要求浏览器进行确认）导航到 `https://buwgews.exampwe.owg/?buwgew=web+buwgew:cheesebuwgew`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
