---
title: Chrome 不兼容情况
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
page-type: guide
---

{{AddonSidebar}}

使用 WebExtension API 构建的扩展旨在与 Chrome 和 Opera 扩展兼容：尽可能为这些浏览器编写的扩展应该在 Firefox 上运行，并且只需进行极少的更改。

但是，Firefox 目前仅支持 Chrome 和 Opera 支持的有限功能和 API。我们正在努力增加更多的支持，但许多功能尚未得到支持，我们可能永远不会支持某些功能。

- Support for JavaScript APIs differs across browsers. See [Browser support for JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) for more details.
- Support for `manifest.json` keys differs across browsers. See the ["Browser compatibility" section](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) in the [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page for more details.
- JavaScript APIs:

  - **In Firefox:** JavaScript APIs are accessed under the `browser` namespace.
  - **In Chrome and Edge:** JavaScript APIs are accessed under the `chrome` namespace. (cf. [Chrome bug 798169](https://crbug.com/798169))

- Asynchronous APIs:

  - **In Firefox:** Asynchronous APIs are implemented using promises.
  - **In Chrome and Edge:** Asynchronous APIs are implemented using callbacks. (cf. [Chrome bug 328932](https://crbug.com/328932))

The rest of this page summarizes these and other incompatibilities.

## JavaScript APIs

### chrome.\* 和 browser.\* 命名空间

- **In Firefox:** 使用 `browser` 命名空间来访问相应的 API。

  ```js
  browser.browserAction.setIcon({path: "path/to/icon.png"});
  ```

- **In Chrome:** 扩展使用`chrome`命名空间访问有特权的 JavaScript APIs。

  ```js
  chrome.browserAction.setIcon({path: "path/to/icon.png"});
  ```

### Callbacks 和 promises

- **In Firefox:** 异步 API 使用 [promises](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 来代替返回值。

  ```js
  function logCookie(c) {
    console.log(c);
  }

  function logError(e) {
    console.error(e);
  }

  let setCookie = browser.cookies.set(
    {url: "https://developer.mozilla.org/"}
  );
  setCookie.then(logCookie, logError);
  ```

- **In Chrome:** 异步 API 使用 Callbacks 来返回值，并使用 {{WebExtAPIRef("runtime.lastError")}} 来传达错误。

  ```js
  function logCookie(c) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(c);
    }
  }

  chrome.cookies.set(
    {url: "https://developer.mozilla.org/"},
    logCookie
  );
  ```

### Firefox 同时支持 `chrome` 和 `browser` 命名空间

为了帮助移植，Firefox 的 WebExtension 实现支持 `chrome` 与 callbacks 和 `browser` 与 promise。这意味着许多 Chrome 扩展无须修改就能在 Firefox 上运行。然而并不是 WebExtension 标准的一部分，也许不会被所有兼容 WebExtension 的浏览器支持。

> **Note:** However, this is _not_ part of the WebExtensions standard and may not be supported by all compliant browsers.
如果你在编写 WebExtension 时确实要用到 `browser` 和 promise，我们也开发了 polyfill 来保证扩展可以在 Chrome 里运行：<https://github.com/mozilla/webextension-polyfill>.

### 部分受支持的 API

页面 [JavaScript API 的浏览器支持情况](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 包含了介绍受 Firefox 任意程度支持的 API 的兼容性表格。若对 API 的支持存在须要注意的事项，并标有星号“\*”，且在 API 的参考页面会介绍注意事项。

这些表格是由存储为[GitHub 中的 JSON 文件](https://github.com/mdn/browser-compat-data)的兼容性数据生成的。

本节剩余部分介绍了表格未涵盖的兼容性问题。

#### Notifications API

For `notifications.create()`, with `type "basic"`:

- **In Firefox**: `iconUrl` is optional.
- **In Chrome**: `iconUrl` is required.

When the user clicks on a notification:

- **In Firefox**: The notification is cleared immediately.
- **In Chrome**: This is not the case.

If you call `notifications.create()` more than once in rapid succession:

- **In Firefox**: In Firefox, the notifications may not display at all. Waiting to make subsequent calls until within the `chrome.notifications.create()` callback function is not a sufficient delay to prevent this.

#### Proxy API

Firefox's {{WebExtAPIRef("proxy")}} API followed a completely different design from Chrome's Proxy API.

- **In Firefox**: An extension can register a PAC file.
- **In Chrome**: An extension can register a PAC file, but can also define explicit proxying rules.

Because this API is incompatible with Chrome's `proxy` API, the Firefox proxy API is only available through the `browser` namespace.

#### Tabs API

When using `tabs.executeScript()` or `tabs.insertCSS()`:

- **In Firefox**: Relative URLs passed are resolved relative to the current page URL.
- **In Chrome**: These URLs are resolved relative to the extension's base URL.

To work cross-browser, you can specify the path as an absolute URL, starting at the extension's root, like this:

```plain
/path/to/script.js
```

When querying tabs by URL `tabs.query()`:

- **In Firefox**: 扩展必须有 `"tabs"` 权限。
- **In Chrome**: Extensions do not need the `"tabs"` permission, but only tabs whose URLs match the extension's host permissions will be included in the results.

When calling `tabs.remove()`:

- **In Firefox**: The `tabs.remove()` promise is fulfilled after the `beforeunload` event.
- **In Chrome**: The callback does not wait for `beforeunload`.

#### WebRequest API

- **In Firefox:**
  - 只有原网址使用 `http:` 或 `https:` 协议时所请求的重定向才有效。
  - The `activeTab` permission does not allow intercepting network requests in the current tab. (See [bug 1617479](https://bugzil.la/1617479))
  - Events are not fired for system requests (for example, extension upgrades or search bar suggestions).

    - **From Firefox 57 onwards:** Firefox makes an exception for extensions that need to intercept {{WebExtAPIRef("webRequest.onAuthRequired")}} for proxy authorization. See the documentation for {{WebExtAPIRef("webRequest.onAuthRequired")}}.
  - If an extension wants to redirect a public (e.g., HTTPS) URL to an [extension page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), the extension's `manifest.json` file must contain a [`web_accessible_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key with the URL of the extension page.

    - > **Note:** _Any_ website may then link or redirect to that URL, and extensions should treat any input (POST data, for example) as if it came from an untrusted source, just as a normal web page should.

  - Some of the `browser.webRequest.*` APIs allow returning Promises that resolves `webRequest.BlockingResponse` asynchronously.

- **In Chrome:** Only `webRequest.onAuthRequired` supports asynchronous `webRequest.BlockingResponse` via supplying `'asyncBlocking'`.

#### Windows API

- **In Firefox:** {{WebExtAPIRef("windows")}} API 的 "onFocusChanged "将在焦点变化时多次触发

### 不支持的API

#### DeclarativeContent API

- **In Firefox:** Chrome's [declarativeContent](https://developer.chrome.com/docs/extensions/reference/declarativeContent/) API [has not yet been implemented](https://bugzil.la/1435864). In addition, Firefox [will not be supporting](https://bugzil.la/1323433#c16) the `declarativeContent.RequestContentScript` API (which is rarely used, and is unavailable in stable releases of Chrome).

### Miscellaneous incompatibilities

#### CSS 中的 URL

- **In Firefox:** 解析 CSS 中嵌入的 URL 时，若 URL 是相对地址，将解析为相对 CSS 文件的地址，而不是被嵌入的网页文件。
- **In Chrome:** URLs in injected CSS files are resolved relative to _the page they are injected into_.

#### 对 background pages 中的对话的支持

- **In Firefox:** 背景页面不支持[`alert()`](/zh-CN/docs/Web/API/Window/alert)、[`confirm()`](/zh-CN/docs/Web/API/Window/confirm)和[`prompt()`]（/zh-CN/docs/Web/API/Window/prompt）：

#### web_accessible_resources

- **In Firefox:** 资源被分配了一个随机的 {{Glossary("UUID")}} ，在 Firefox 的每个实例中都会改变： `moz-extension://"random-UUID"/"path"`。这种随机性可以阻止你做一些事情，比如把你的特定扩展的 URL 添加到另一个域的 CSP 策略中。
- **In Chrome:** 若资源在 web_accessible_resources 中列出，即可通过 `chrome-extension://«your-extension-id»/«path»`. 访问。每个扩展的 ID 都是固定的。

#### Manifest "key" 属性

- **In Firefox:** 由于Firefox对 `web_accessible_resources` 使用随机的 UUID，所以这个属性是不支持的。
- **In Chrome:** 当使用已解压的扩展时，清单可能包括一个 [`"key"` 属性](https://developer.chrome.com/docs/extensions/mv3/manifest/key/)，以便在不同的机器上固定扩展ID。这在使用 "web_accessible_resources "时主要有用。

#### Content script HTTP(S) requests

- **In Firefox:** When a content script makes an HTTP(S) request, you _must_ provide absolute URLs.
- **In Chrome:** When a content script makes a request (for example, using [`fetch()`](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)) to a relative URL (like `/api`), it will be sent to `https://example.com/api`.

#### Content script environment

- **In Firefox:** The global scope of the [content script environment](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) is not strictly equal to `window` ([Firefox bug 1208775](https://bugzil.la/1208775)). More specifically, the global scope (`globalThis`) is composed of standard JavaScript features as usual, plus `window` as the prototype of the global scope. Most DOM APIs are inherit from the page through `window`, through [Xray vision](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) to shield the content script from modifications by the web page. Content scripts may encounter JavaScript objects from its own global scope or Xray-wrapped versions from the web page.
- **In Chrome:** The global scope is `window` and the available DOM APIs are generally independent of the web page (other than sharing the underlying DOM). Content scripts cannot directly access JavaScript objects from the web page.

#### Executing code in web page from content script

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} runs code in the context of the content script, and `window.eval` runs code in the context of the page. See [Using `eval` in content scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} and `window.eval` always runs code in the context of the content script, not in the context of the page.

#### Sharing variables between content scripts

- **In Firefox:** You cannot share variables between content scripts by assigning them to `this.{variableName}` in one script and then attempting to access them using `window.{variableName}` in another. This is a limitation created by the sandbox environment in Firefox. This limitation may be removed, see [Firefox bug 1208775](https://bugzil.la/1208775).

#### Content script lifecycle during navigation

- **In Firefox:** Content scripts remain injected in a web page after the user has navigated away, however, window object properties are destroyed. For example, if a content script sets `window.prop1 = "prop"` and the user then navigates away and returns to the page `window.prop1` is undefined. This issue is tracked in [Firefox bug 1525400](https://bugzil.la/1525400).

  To mimic the behavior of Chrome, listen for the [pageshow](/zh-CN/docs/Web/API/Window/pageshow_event) and [pagehide](/zh-CN/docs/Web/API/Window/pagehide_event) events. Then simulate the injection or destruction of the content script.

- **In Chrome:** Content scripts are destroyed when the user navigates away from a web page. If the user then returns to the page through history, by clicking the back button, the content script is injected into the web page again.

#### "per-tab" zoom behavior

- **In Firefox:** The zoom level persists across page loads and navigation within the tab.
- **In Chrome:** Zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.

See {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json 键

The main [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page includes a table describing browser support for manifest.json keys. Where there are caveats around support for a given key, this is indicated in the table with an asterisk "\*" and in the reference page for the key, the caveats are explained.

These tables are generated from compatibility data stored as [JSON files in GitHub](https://github.com/mdn/browser-compat-data).

## Native messaging

### Connection-based messaging arguments

**On Linux and Mac:** Chrome passes one argument to the native app, which is the origin of the extension that started it, in the form: `chrome-extension://«extensionID/»` (trailing slash required). This enables the app to identify the extension.

**On Windows:** Chrome passes two arguments:

1. The origin of the extension
2. A handle to the Chrome native window that started the app

### allowed_extensions

- **In Firefox:** The manifest key is called `allowed_extensions`.
- **In Chrome:** The manifest key is called `allowed_origins` instead.

### App manifest location

- **In Chrome:** The app manifest is expected in a different place. See [Native messaging host location](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in the Chrome docs.

### App persistance

- **In Firefox:** When a native messaging connection is closed, Firefox kills the subprocesses if they do not break away. On Windows, the browser puts the native application's process into a [Job object](<https://msdn.microsoft.com/library/windows/desktop/ms684161(v=vs.85).aspx>) and kills the job. Suppose the native application launches other processes and wants them to remain open after the native application is killed. In that case, the native application must use `CreateProcess`, instead of `ShellExecute`, to launch the additional process with the [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/library/windows/desktop/ms684863(v=vs.85).aspx>) flag.

## Data cloning algorithm

Some extension APIs allow an extension to send data from one part of the extension to another, such as {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, the `postMessage()` method of {{WebExtAPIRef("runtime.port")}}, and {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** The [Structured clone algorithm](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.
- **In Chrome:** The [JSON serialization algorithm](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) is used. It may switch to structured cloning in the future ([issue 248548](https://crbug.com/248548)).

The Structured clone algorithm supports more types than the JSON serialization algorithm. A notable exception are (DOM) objects with a `toJSON` method. DOM objects are not cloneable nor JSON-serializable by default, but with a `toJSON()` method, these can be JSON-serialized (but still not cloned with the structured cloning algorithm). Examples of JSON-serializable objects that are not structured cloneable include instances of {{domxref("URL")}} and {{domxref("PerformanceEntry")}}.

Extension that rely on the `toJSON()` method of the JSON serialization algorithm can use {{jsxref("JSON.stringify()")}} followed by {{jsxref("JSON.parse()")}} to ensure that a message can be exchanged, because a parsed JSON value is always structurally cloneable.
