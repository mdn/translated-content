---
title: Chrome 不兼容情况
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---

{{AddonSidebar}}

使用 WebExtension API 构建的扩展旨在与 Chrome 和 Opera 扩展兼容：尽可能为这些浏览器编写的扩展应该在 Firefox 上运行，并且只需进行极少的更改。

但是，Firefox 目前仅支持 Chrome 和 Opera 支持的有限功能和 API。我们正在努力增加更多的支持，但许多功能尚未得到支持，我们可能永远不会支持某些功能。

## JavaScript APIs

### 回调与 chrome.\* 命名空间

在 Chrome 中，扩展通过使用 `chrome` 命名空间来访问私有 JavaScript API：

```js
chrome.browserAction.setIcon({ path: "path/to/icon.png" });
```

WebExtensions 通过使用 `browser` 命名空间来访问等价的 API：

```js
browser.browserAction.setIcon({ path: "path/to/icon.png" });
```

许多 API 是异步的。在 Chrome 中，异步的 API 使用回调来返回值，使用 {{WebExtAPIRef("runtime.lastError")}} 来与传达错误：

```js
function logCookie(c) {
  if (chrome.extension.lastError) {
    console.error(chrome.extension.lastError);
  } else {
    console.log(c);
  }
}

chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

在 WebExtensions 中应使用 [promises](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 来访问等价的 API：

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

### Firefox 支持 `chrome` 和 `browser` 命名空间

为了帮助移植，Firefox 的 WebExtension 实现支持 `chrome` 与回调和 `browser` 与 promise。这意味着许多 Chrome 扩展无须修改就能在 Firefox 上运行。然而并不是 WebExtension 标准的一部分，也许不会被所有兼容 WebExtension 的浏览器支持。

如果你在编写 WebExtension 时确实要用到 `browser` 和 promise，我们也开发了 polyfill 来保证扩展可以在 Chrome 里运行：<https://github.com/mozilla/webextension-polyfill>.

### 部分受支持的 API

页面 [JavaScript API 的浏览器支持情况](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 包含了介绍受 Firefox 任意程度支持的 API 的兼容性表格。若对 API 的支持存在须要注意的事项，并标有星号“\*”，且在 API 的参考页面会介绍注意事项。

这些表格由 [在 GitHub 上以 JSON 文件存储的兼容性数据](https://github.com/mdn/browser-compat-data)生成。

本节剩余部分介绍了表格未涵盖的兼容性问题。

#### notifications

- For `notifications.create(), with the "basic"` [`type`](/zh-CN/Add-ons/WebExtensions/API/notifications/TemplateType), `iconUrl` is optional in Firefox. It is required in Chrome.
- Notifications are cleared immediately when the user clicks on them. This is not the case in Chrome.
- If you call `notifications.create()` more than once in rapid succession, Firefox may end up not displaying any notification at all. Waiting to make subsequent calls until within the `chrome.notifications.create() callback` function is not a sufficiently long delay to prevent this from happening.

#### proxy

- This API is completely different to the design of the Chrome API. With Chrome's API an extension can register a PAC file, but can also define explicit proxying rules. Since this is also possible using the extended PAC files, this API only supports the PAC file approach. Because this API is incompatible with the Chrome `proxy` API, this API is only available through the `browser` namespace.

#### tabs

- In Firefox, relative URLs passed into `tabs.executeScript()` or `tabs.insertCSS()` are resolved relative to the current page URL. In Chrome, these URLs are resolved relative to the add-on's base URL. To work cross-browser, you can specify the path as an absolute URL, starting at the add-on's root, like this:

  ```html
  /path/to/script.js
  ```

- 在 Firefox 中，用 `tabs.query()` 根据 URL 查询标签页需要有`"tabs"` 权限。在 Chrome 中，没有`"tabs"`权限也可以，但结果将限制在 URL 匹配主机权限的标签页。

#### webRequest

- 在 Firefox 中，只有原网址使用 `http:` 或 `https:` 协议时所请求的重定向才有效。
- In Firefox, events are not fired for system requests (for example, extension upgrades or searchbar suggestions). From Firefox 57 onwards, Firefox makes an exception for extensions that need to intercept {{WebExtAPIRef("webRequest.onAuthRequired")}} for proxy authorization. See the documentation for {{WebExtAPIRef("webRequest.onAuthRequired")}}.
- In Firefox, if an extension wants to redirect a public (e.g. HTTPS) URL to an [extension page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), the extension's manifest.json file must contain a [web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key that lists the URL for the extension page. Note that any website may then link or redirect to that url, and extensions should treat any input (POST data, for examples) as if it came from an untrusted source, just as a normal web page should.

#### windows

- Firefox 中 `onFocusChanged` 对于指定的焦点变化将触发多次。

### 其他不兼容情况

#### CSS 中的 URL

Firefox 解析 CSS 中嵌入的 URL 时，若 URL 时相对地址，将是相对 CSS 文件，而不是被嵌入的网页文件。

#### 更多不兼容情况

Firefox 不支持从后台标签页使用 `alert()、confirm()` 或 [`prompt()`](/zh-CN/docs/Web/API/Window/prompt)。

#### web_accessible_resources

在 Chrome 中，若资源在 web_accessible_resources 中列出，即可通过 chrome-extension://\<your-extension-id>/\<path/to/resource> 访问。每个扩展的 ID 都是固定的。

Firefox 以不同方式进行实现。它使用一个随机的 UUID，在每个 Firefox 实例中都不同：moz-extension://\<random-UUID>/\<path/to/resource>。这一随机性可能会让你无法实现某些东西，例如你无法将特定扩展的 URL 添加到另一个域名的 CSP 策略中。

#### Manifest "key" 属性

对于解包了的扩展，Chrome 允许将 ["key" 属性](https://developer.chrome.com/extensions/manifest/key)添加到 manifest，以确保在不同机器上的扩展 ID 不变。这主要在使用 web_accessible_resources 时有用。鉴于 Firefox 为 web_accessible_resources 使用随机的 UUID，此属性不受支持。

#### Content script requests happen in the context of extension, not content page

In Chrome when request is called (for example, using [`fetch()`](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)) to relative URL like `/api` from content script, it will be sent to `https://example.com/api`. In Firefox you have to provide absolute URLs.

## manifest.json 键

The main [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page includes a table describing browser support for manifest.json keys. Where there are caveats around support for a given key, this is indicated in the table with an asterisk "\*" and in the reference page for the key, the caveats are explained.

These tables are generated from compatibility data stored as [JSON files in GitHub](https://github.com/mdn/browser-compat-data).

## Native messaging

### Command-line arguments

On Linux and Mac, Chrome passes one argument to the native app, which is the origin of the extension that started it, in the form: `chrome-extension://[extensionID]`. This enables the app to identify the extension.

On Windows, Chrome passes two arguments: the first is the origin of the extension, and the second is a handle to the Chrome native window that started the app.

### allowed_extensions

In Chrome, the `allowed_extensions` key in the app manifest is called `allowed_origins` instead.

### App manifest location

Chrome expects to find the app manifest in a different place. See [Native messaging host location](https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location) in the Chrome docs.
