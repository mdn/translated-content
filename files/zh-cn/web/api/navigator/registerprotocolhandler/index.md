---
title: Navigator：registerProtocolHandler() 方法
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** 的 **`registerProtocolHandler()`** 方法让 web 站点为自身注册用于打开或处理特定 URL 方案（又名协议）的能力。

举个例子，此 API 允许 Web 邮件站点打开 `mailto:` URL，或让 VoIP 站点打开 `tel:` URL。

要注册协议处理器，网站在调用 `registerProtocolHandler()` 时传入要注册的协议和模板 URL。

在用户激活使用来注册的协议的链接时，浏览器会将激活链接的 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 插入到处理器注册时提供的 URL 模板中，并将当前页面导航到生成的 URL。

浏览器可能会要求用户确认是否允许页面处理该协议，无论是在注册协议时还是在用户激活链接时。

## 语法

```js-nolint
registerProtocolHandler(scheme, url)
```

### 参数

- `scheme`

  - : 一个包含站点希望处理的协议的方案字符串。

    其可能是一个自定义方案，此时方案的名称：

    - 以 `web+` 开始
    - 在 `web+` 前缀之后至少包含一个字母
    - 仅包含小写的 {{Glossary("ASCII")}} 字母。

    否则，方案必须是以下值之一：

    - `bitcoin`
    - `ftp`
    - `ftps`
    - `geo`
    - `im`
    - `irc`
    - `ircs`
    - `magnet`
    - `mailto`
    - `matrix`
    - `mms`
    - `news`
    - `nntp`
    - `openpgp4fpr`
    - `sftp`
    - `sip`
    - `sms`
    - `smsto`
    - `ssh`
    - `tel`
    - `urn`
    - `webcal`
    - `wtai`
    - `xmpp`

- `url`

  - : 一个包含处理器 URL 的字符串。该 URL 必须包含 `%s`（作为占位符），其会被将要处理且[经过转义的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL 所替换。

    处理器 URL 必须使用 `https` 方案，并且必须与尝试注册处理器的网页具有相同的{{glossary("origin", "来源")}}。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `SecurityError` {{domxref("DOMException")}}

  - : 用户代理阻止了注册。这可能是由于：

    - 注册方案（协议）无效，例如是浏览器自身所处理的方案（`https:`、`about:` 等）。
    - 处理器 URL 的{{Glossary("origin", "来源")}}与调用该 API 的页面的来源不匹配。
    - 处理器 URL 的方案不是 `https`。

- `SyntaxError` {{domxref("DOMException")}}
  - : 处理器 URL 中缺失占位符 `%s`。

## 示例

### 为 mailto 协议注册处理器

网页使用非 `https` 协议来链接资源是非常常见的。例如，`mailto:` 协议。当 Web 作者想要为用户提供一个直接通过网页发送电子邮件的便捷方式时，可以使用 `mailto` 链接：

```html
<a href="mailto:webmaster@example.com">Web 管理员</a>
```

当链接被激活时，浏览器应该启动默认的桌面应用程序来处理电子邮件。你可以认为这是一个*基于桌面平台*协议处理器。

基于 Web 的协议处理器允许基于 Web 的应用程序参与这一过程。例如，`mail.example.org` 上的电子邮件 Web 应用程序可以使用以下代码注册来处理 `mailto` 链接：

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

此后，当用户点击网站上的 `mailto` 链接时，浏览器将（可能要求浏览器进行确认）导航到 `https://mail.example.org/?to=mailto:webmaster@example.com`。此页面可以解析 URL 参数来提取地址，并使用此地址来初始化电子邮件。

### 为自定义协议注册处理器

在这个示例中，页面使用以下代码来注册 `web+burger` 协议的处理器：

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

随后，用户访问包含如下链接的页面：

```html
<a href="web+burger:cheeseburger">芝士汉堡</a>
```

如果用户激活了 `web+burger` 链接，浏览器将（可能要求浏览器进行确认）导航到 `https://burgers.example.org/?burger=web+burger:cheeseburger`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
