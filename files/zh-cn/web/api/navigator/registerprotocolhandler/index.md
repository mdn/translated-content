---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** 的方法 **`registerProtocolHandler()`** 让 web 站点为自身注册用于打开或处理特定 URL 方案（又名协议）的能力。

举个例子，此 API 允许 Web 邮件站点打开 `mailto:` URL，或让 VoIP 站点打开 `tel:` URL。

## 语法

```
navigator.registerProtocolHandler(scheme, url, title);
```

> **备注：** 最近更新为 `navigator.registerProtocolHandler(scheme, url)`, 但目前没有浏览器支持该版本。

### 参数

- `scheme`
  - : 一个包含站点希望处理的协议的字符串。例如，你可以通过传入 `"sms"` 来注册处理 SMS 文本信息链接。
- `url`

  - : 处理器的 URL，string 类型。这个字符串应该包含一个"%s"的占位符，其会被将要受理的文档的 [escaped](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 链接所替换。这个链接（译者按：指将要受理的文档的 escaped 链接，也就是替换占位符的字符串）可能是一个真实的 URL，或者是一个电话号码，邮件地址之类的。

    > **备注：** 这个处理器的 URL 必须以 `http` 或者 `https` 协议标记作为开头，最好是 `https` ，以满足一些浏览器出于安全考虑的要求。

- `title` {{Deprecated_Inline}}

  - : 一个用户可理解的处理器标题。标题会展示给用户，例如弹出对话框“允许这个站点处理 \[scheme] 链接吗？”或者在浏览器设置中列出注册的处理器时。

    > **备注：** 出于欺骗的考虑，标题已从规范中删除，但当前所有的浏览器仍要求使用该标题。建议始终设置标题，因为支持更新规范的浏览器很可能会向后兼容，并且仍接受标题（但不使用它）。

### 异常

- 指定了一个非法的协议标记，例如一个浏览器自身的标记（`https:`, `about:` 等）。
- 处理器 URL 的 [origin](/zh-CN/docs/Glossary/Origin) 与调用这个 API 的页面的 origin 不匹配。
- 浏览器要求这个函数由安全的上下文调用。
- 浏览器要求处理器的 URL 使用 HTTPS 协议。

- `SecurityError`
  - : 用户代理阻止了处理器的注册。这可能是由于：
- `SyntaxError`
  - : 在指定的协议处理地址的字符串中缺失了 `%s` 占位符。

## 允许的协议标记

出于安全考虑，`registerProtocolHandler()` 严格限制了允许注册的协议标记。以 `web+` 作为前缀的方式可以注册一个自定义的标记协议，至少要有 5 个字符的长度 (包括 `web+` 前缀)，而且只能使用小写的 ASCII 字母作为名称。例如 `web+burger` ，如下面的[示例](#示例)所示。

除此之外，还可以使用下文所列的白名单中的协议标记：

- `bitcoin`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `mms`
- `news`
- `nntp`
- `openpgp4fpr`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

## 示例

如果您的网站是 `https://www.google.com/`，则可以为其注册一个协议处理程序来处理 `web+burger:`链接，如下所示：

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://www.google.com/?uri=%s",
  "Burger handler",
);
```

这将创建一个处理程序，该处理程序允许使用 `web+burger:` 链接将用户发送到您的网站，并将访问的 Burger URL 插入`%s`占位符。

该脚本必须从与处理程序 URL 相同的源运行（因此， `https://www.google.com/`上的任何页面），并且处理程序 URL 必须为 `http`或 `https`。

将通知用户您的代码要求注册协议处理程序，以便他们可以决定是否允许它。有关 `https://www.google.com/`上的示例，请参见以下屏幕截图：

![](protocolregister.png)

> **备注：** "[Register a webmail service as mailto handler](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window)" 展示了如何从跨平台组件对象模块 (XPCOM) 中做到这一切。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web-based protocol handlers](/zh-CN/docs/Web-based_protocol_handlers)
- [RegisterProtocolHandler Enhancing the Federated Web](http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
- [Web Application APIs - Custom scheme and content handlers - Whitelisted schemes](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#whitelisted-scheme)
- [Register a webmail service as mailto handler](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window) shows how to do `registerProtocolHandler` from XPCOM scope.
- [XPCOM Interface Reference > nsIWebContentHandlerRegistrar > registerContentHandler](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#registerProtocolHandler) - This shows how to use this function XPCOM scope
