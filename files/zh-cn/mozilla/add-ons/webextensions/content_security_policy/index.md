---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
page-type: guide
---

{{AddonSidebar}}

使用WebExtensions APIs开发的扩展，默认情况下有一个内容安全策略（CSP）适用于它们。这限制了它们可以加载代码的来源，如[\<script>](/zh-CN/docs/Web/HTML/Element/script)，并禁止潜在的不安全做法，如使用[`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 。这篇文章简要地解释了什么是CSP，默认策略是什么，它对一个扩展意味着什么，以及一个扩展如何改变默认CSP。

[Content Security Policy](/zh-CN/docs/Web/HTTP/CSP)（CSP）是一种避免网站意外执行包含有恶意的内容的机制。网站通过使用服务端发送的 HTTP 标头指定 CSP。CSP 主要关注指定各种内容的合法来源，如脚本和嵌入式插件。例如，网站可以使用它来告诉浏览器应该只执行来自网站自身的 JavaScript，而不应该执行其他来源的脚本。CSP 还可以指导浏览器禁止潜在危险行为，如 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)的使用。

和网页一样，插件可以加载其他来源的内容。例如浏览器的弹出窗口可以指定为一个 HTML 文档，它同样可以包含不同来源的 JavaScript 和 CSS，就像一个普通的网页一样。

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
  </head>

  <body>

    <!--Some HTML content here-->

    <!--
      Include a third-party script.
      See also https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity.
    -->
    <script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous">
    </script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>

</html>
```

和网站相比，插件可以访问特权 API，因此一旦它们被恶意代码破坏，风险就更大。因此：

- 插件默认运行在一个相当严格的安全策略下。参考 [default content security policy](/zh-CN/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy).
- 插件的作者可以通过使用 manifest.json 中的 `content_security_policy` 关键词改变这种默认策略，但是允许的策略仍然有一定的限制。参考 [`content_security_policy`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## 默认内容安全策略

对插件的默认内容安全策略如下：

```
"script-src 'self'; object-src 'self';"
```

While for extensions using Manifest V3, the default content security policy is:

```
"script-src 'self'; upgrade-insecure-requests;"
```

这会被应用在任何没有明确在 manifest.json 中的[`content_security_policy`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) 项设置自己的内容安全策略的插件中。它有以下几种效果：

- [你只能将本地的 \<script> 和 \<object> 资源加载到插件中。](/zh-CN/Add-ons/WebExtensions/Content_Security_Policy#Location_of_script_and_object_resources)
- [插件无法将字符串转换为 JavaScript 执行。](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_和_friends)
- [内联 JavaScript 不会被执行。](/zh-CN/Add-ons/WebExtensions/Content_Security_Policy#Inline_JavaScript)
- [WebAssembly cannot be used by default.](#webassembly)
- [Insecure network requests are upgraded in Manifest V3.](#upgrade_insecure_network_requests_in_manifest_v3)

### script 和 object 资源的位置

在默认 CSP 下你只能加载相对插件来说本地的 [\<script>](/zh-CN/docs/Web/HTML/Element/script) 和 [\<object>](/zh-CN/docs/Web/HTML/Element/object) 资源。

例如，假设插件文档中存在这样一条语句：

```html
 <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

这不会加载请求的资源：它会安静地失败，并且你所期望看到的任何来自该资源的对象都不会出现。对于这种情况有两种解决办法：

- 下载该资源，打包进你的插件，然后引用它。
- 使用 [`content_security_policy`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) 允许你所需要的资源。

> **Note:** If your modified CSP allows remote script injection, your extension will get rejected from addons.mozilla.org (AMO) during the review. For more information, see details about [security best practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() 和 friends

默认 CSP 下插件不被允许像 JavaScript 一样执行字符串。这意味着以下情况都被禁止：

```js
eval("console.log('some output');");
```

```js
window.setTimeout("alert('Hello World!');", 500);
```

```js
var f = new Function("console.log('foo');");
```

### 内联 JavaScript

默认 CSP 下内联 JavaScript 不被执行。这不仅不允许将 JavaScript 直接放在 `<script>` 标签中间，也不允许内联事件句柄。即以下内容被禁止：

```html
<script>console.log("foo");</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

如果你正在使用类似 `<body onload="main()">` 的代码在页面加载时运行你的脚本，请使用监听器监听[DOMContentLoaded](/zh-CN/docs/Web/Events/DOMContentLoaded) 或者 [load](/zh-CN/docs/Web/Events/load) 代替。

### WebAssembly

Extensions wishing to use [WebAssembly](/zh-CN/docs/WebAssembly) require `'wasm-unsafe-eval'` to be specified in the `script-src` directive.

From Firefox 102 and Chrome 103, `'wasm-unsafe-eval'` can be included in the [`content_security_policy`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key to enable the use of WebAssembly in extensions.

Manifest V2 extensions in Firefox can use WebAssembly without `'wasm-unsafe-eval'` in their CSP for backward compatibility. However, this behavior isn't guaranteed, see [Firefox bug 1770909](https://bugzil.la/1770909). Extensions using WebAssembly are therefore encouraged to declare `'wasm-unsafe-eval'` in their CSP.

For Chrome, extensions cannot use WebAssembly in version 101 or earlier. In 102, extensions can use WebAssembly (the same behavior as Firefox 101 and earlier). From version 103, extensions can use WebAssembly if they include `'wasm-unsafe-eval'` in the `content_security_policy` in the manifest key.

### Upgrade insecure network requests in Manifest V3

Extensions should use `https:` and `wss:` when communicating with external servers. To encourage this as the standard behavior, the default Manifest V3 CSP includes the {{CSP("upgrade-insecure-requests")}} directive. This directive automatically upgrades network requests to `http:` to use `https:`.

While requests are automatically updated, it is still recommended to use `https:`-URLs in the extension's source code where possible. In particular, entries in the [`host_permissions` section of manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) should start with `https://` or `*://` instead of only `http://`.

Manifest V3 Extensions that need to make `http:` or `ws:` requests can opt out of this behavior by overriding the default CSP using the [`content_security_policy`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key with a policy that excludes the `upgrade-insecure-requests` directive. However, to comply with the [security requirements](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) of the Add-on Policies, all user data must be transmitted securely.

## CSP for content scripts

In Manifest V2, content scripts have no CSP.
As of Manifest V3, content scripts share the default CSP as extensions. It is currently not possible to specify a separate CSP for content scripts ([source](https://bugzil.la/1581611#c10)).

The extent to which the CSP controls loads from content scripts varies by browser.
In Firefox, JavaScript features such as eval are restricted by the extension CSP. Generally, most DOM-based APIs are subjected to the CSP of the web page.
In Chrome, many DOM APIs are covered by the extension CSP instead of the web page's CSP ([crbug 896041](https://crbug.com/896041)).
