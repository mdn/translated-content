---
title: Chrome 不兼容情况
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 311a791dde7caf8039bbc09bd81347a747f703b2
---

{{AddonSidebar}}

WebExtension API 的目标是提供对所有主要浏览器的兼容性，因此扩展程序只需最小的改动即可在任何浏览器上运行。

不过，Chrome 浏览器（以及基于 Chromium 的浏览器）、Firefox 浏览器和 Safari 浏览器之间存在很大差异。特别是：

- 不同浏览器对 WebExtension API 的支持各不相同。详情请参阅[浏览器对 JavaScript API 的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)。
- 不同浏览器对 `manifest.json` 键的支持有所不同。请参阅 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json#浏览器兼容性) 页面上的[“浏览器兼容性”部分](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)了解更多详情。
- 扩展 API 命名空间：

  - **在 Firefox 和 Safari 中**：扩展 API 在 `browser` 命名空间下访问。为了与 Chrome 浏览器兼容，还支持 `chrome` 命名空间。
  - **在 Chrome 浏览器中**：扩展 API 在 `chrome` 命名空间下访问。（参见 [Chrome bug 798169](https://crbug.com/798169)）

- 异步 API：

  - **在 Firefox 和 Safari 中**：异步 API 使用 Promise 实现。
  - **在 Chrome 浏览器中**：在 Manifest V2 中，异步 API 使用回调实现。在 Manifest V3 中，大多数适当的方法都支持 [promise](https://developer.chrome.google.cn/docs/extensions/develop/migrate#promises)。（参见 [Chrome bug 328932](https://crbug.com/328932)）Manifest V3 支持回调，以实现向后兼容。

本页其余部分将详细介绍这些不兼容性和其他不兼容性。

## JavaScript API

### chrome.\* 和 browser.\* 命名空间

- **在 Firefox 和 Safari 中**：API 使用 `browser` 命名空间访问。

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **在 Chrome 中**：API 使用 `chrome` 命名空间访问。

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### 回调与 Promise

- **在 Firefox 和 Safari（所有版本）以及 Chrome 浏览器（从 Manifest 版本 3 开始）中**：异步 API 使用 [promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 返回值。

  ```js
  function logCookie(c) {
    console.log(c);
  }

  function logError(e) {
    console.error(e);
  }

  let setCookie = browser.cookies.set({
    url: "https://developer.mozilla.org/",
  });
  setCookie.then(logCookie, logError);
  ```

- **在 Chrome 中**：在 Manifest V2 中，异步 API 使用回调来返回值，并使用 {{WebExtAPIRef("runtime.lastError")}} 来返回错误。在 Manifest V3 中，为实现向后兼容，支持回调，并在大多数适当的方法中支持 [promise](https://developer.chrome.google.cn/docs/extensions/develop/migrate#promises)。

  ```js
  function logCookie(c) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(c);
    }
  }

  chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
  ```

### Firefox 支持 chrome 和 browser 命名空间

作为一种移植辅助工具，WebExtensions 的 Firefox 实现支持使用回调的 `chrome` 和使用 Promise 的 `browser`。这意味着许多 Chrome 扩展无需更改即可在 Firefox 中运行。

> **备注：** `browser` 命名空间由 Firefox 和 Safari 支持。在 [Chrome bug 798169](https://crbug.com/798169) 解决之前，Chrome 浏览器不提供 `browser` 命名空间。

如果你在编写 WebExtension 时确实要用到 `browser` 和 promise，我们也开发了 polyfill 来保证扩展可以在 Chrome 里运行：<https://github.com/mozilla/webextension-polyfill>。

### 部分支持的 API

页面 [JavaScript API 的浏览器支持情况](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 包含了介绍受 Firefox 任意程度支持的 API 的兼容性表格。若对 API 的支持存在须要注意的事项，并标有星号“\*”，且在 API 的参考页面会介绍注意事项。

这些表格由[在 GitHub 上以 JSON 文件存储的兼容性数据](https://github.com/mdn/browser-compat-data)生成。

本节其余部分将介绍在构建跨浏览器扩展时可能需要考虑的主要兼容性问题。此外，请记得查看浏览器兼容性表，因为其中可能包含更多兼容性信息。

#### Notifications API

对于 `type "basic"` 的 `notifications.create()`：

- **在 Firefox 中**：`iconUrl` 为可选项。
- **在 Chrome 中**：`iconUrl` 为必需项。

当用户点击通知时：

- **在 Firefox 中**：通知会立即清除。
- **在 Chrome 中**：情况并非如此（通知并不会立即清除）。

如果连续多次调用 `notifications.create()`：

- **在 Firefox 中**：通知可能不会显示。在 `notifications.create()` 回调函数中等待后续调用不足以防止出现这种情况。

#### Proxy API

Firefox 和 Chrome 浏览器都包含代理 API。不过，这两个 API 的设计并不兼容。

- **在 Firefox 中**：使用 [proxy.settings](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) 属性或 [proxy.onRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) 属性设置代理，以动态提供 [ProxyInfo](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo)。
  有关 API 的更多信息，请参阅 [proxy](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy)。
- **在 Chrome 中**：代理设置在 [`proxy.ProxyConfig`](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy#type-ProxyConfig) 对象中定义。根据 Chrome 浏览器的代理设置，该设置可能包含 [`proxy.ProxyRules`](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy#type-ProxyRules) 或 [`proxy.PacScript`](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy#type-PacScript)。代理设置使用 [proxy.settings](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy#property-settings) 属性。
  有关 API 的更多信息，请参阅 [chrome.proxy](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy)。

#### Tabs API

使用 `tabs.executeScript()` 或 `tabs.insertCSS()` 时：

- **在 Firefox 中**：传递的相对 URL 将相对于当前页面 URL 解析。
- **在 Chrome 中**：相对网址是相对于扩展的基本网址解析的。

若要跨浏览器运行，可将路径指定为绝对 URL，从扩展根目录开始，如下所示：

```plain
/path/to/script.js
```

调用 `tabs.remove()` 时：

- **在 Firefox 中**：`tabs.remove()` promise 在 `beforeunload` 事件后兑现。
- **在 Chrome 中**：回调不等待 `beforeunload`。

#### WebRequest API

- **在 Firefox 中**：

  - 只有当原始 URL 使用了 `http:` 或 `https:` 协议时，请求才能被重定向。
  - `activeTab` 权限不允许拦截当前标签页中的网络请求。（参见 [bug 1617479](https://bugzil.la/1617479)）
  - 系统请求（如扩展升级或搜索栏建议）不会触发事件。

    - **从 Firefox 57 开始**：Firefox 对需要拦截 {{WebExtAPIRef("webRequest.onAuthRequired")}} 代理授权的扩展例外处理。请参阅 {{WebExtAPIRef("webRequest.onAuthRequired")}} 的文档。

  - 如果扩展希望将公共（如 HTTPS）URL 重定向到[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)，扩展的 `manifest.json` 文件必须包含 [`web_accessible_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 键，其中包含扩展页面的 URL。

    > [!NOTE]
    > 任何网站都可以链接或重定向到该 URL，扩展应将任何输入（例如 POST 数据）视为来自不可信任的来源，就像普通网页一样。

  - 某些 `browser.webRequest.*` API 允许异步返回解析为 `webRequest.BlockingResponse` 的 Promise。

- **在 Chrome 中**：只有在提供 `'asyncBlocking'` 选项的情况下，`webRequest.onAuthRequired` 才（通过回调而非 Promise）支持异步的 `webRequest.BlockingResponse`。

#### Windows API

- **在 Firefox 中**：{{WebExtAPIRef("windows")}} API 的 `onFocusChanged` 对于指定的焦点变化将触发多次。

### 不支持的 API

#### DeclarativeContent API

- **在 Firefox 中**：Chrome 浏览器的 [declarativeContent](https://developer.chrome.google.cn/docs/extensions/reference/api/declarativeContent) API [未被实现](https://bugzil.la/1435864)。此外，Firefox [将不支持](https://bugzil.la/1323433#c16) `declarativeContent.RequestContentScript` API（该 API 很少使用，在 Chrome 浏览器的稳定版本中也不可用）。

### 其他不兼容情况

#### CSS 中的 URL

- **在 Firefox 中**：被注入的 CSS 文件中的 URL 会相对于*该 CSS 文件*进行解析。
- **在 Chrome 中**：被注入的 CSS 文件中的 URL 会相对于*被注入的页面*进行解析。

#### 持后台页面中对话框的支持情况

- **在 Firefox 中**：[`alert()`](/zh-CN/docs/Web/API/Window/alert)、[`confirm()`](/zh-CN/docs/Web/API/Window/confirm) 和 [`prompt()`](/zh-CN/docs/Web/API/Window/prompt) 在后台页面中不受支持。

#### web_accessible_resources

- **在 Firefox 中**：资源会被分配一个随机的 {{Glossary("UUID")}}，在 Firefox 的每个实例中都会改变：`moz-extension://«random-UUID»/«path»`。这种随机性可能会阻止你做一些事情，比如将扩展的 URL 添加到另一个域的 CSP 策略中。
- **在 Chrome 中**：当资源被列在 `web_accessible_resources` 中时，它的访问方式为 `chrome-extension://«your-extension-id»/«path»`。扩展 ID 对于扩展来说是固定的。

#### Manifest“key”属性

- **在 Firefox 中**：由于 Firefox 对 `web_accessible_resources` 使用随机 UUID，因此不支持此属性。Firefox 扩展可通过 `browser_specific_settings.gecko.id` 清单键（请参阅 [browser_specific_settings.gecko](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_属性) 来固定其扩展 ID）。
- **在 Chrome 中**：在使用未打包的扩展时，清单可能包含一个 [`"key"` 属性](https://developer.chrome.google.cn/docs/extensions/reference/manifest/key)，以便在不同机器上固定扩展 ID。这主要在使用 `web_accessible_resources` 时有用。

#### 内容脚本 HTTP(S) 请求

- **在 Firefox 中**：内容脚本发出 HTTP(S) 请求时，必须提供绝对 URL。
- **在 Chrome 中**：当内容脚本向相对 URL（如 `/api`）发出请求（例如，使用 [`fetch()`](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)）时，该请求将被发送到 `https://example.com/api`。

#### 内容脚本环境

- **在 Firefox 中**：[内容脚本环境](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#内容脚本环境)的全局作用域并不严格等于 `window`（[Firefox bug 1208775](https://bugzil.la/1208775)）。更具体地说，全局作用域（`globalThis`）照例由标准 JavaScript 功能组成，另外还有作为全局作用域原型的 `window`。大多数 DOM API 都通过 `window` 从页面继承，通过 [Xray vision](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) 来屏蔽内容脚本对网页的修改。内容脚本可能会遇到来自其全局作用域的 JavaScript 对象或来自网页的 Xray 封装版本。
- **在 Chrome 中**：全局作用域为 `window`，可用的 DOM API 一般独立于网页（除了共享底层 DOM 外）。内容脚本无法直接访问网页中的 JavaScript 对象。

#### 通过内容脚本在网页中执行代码

- **在 Firefox 中**：{{jsxref("Global_Objects/eval", "eval")}} 在内容脚本的上下文中运行代码，而 `window.eval` 在页面的上下文中运行代码。请参阅[在内容脚本中使用 `eval`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#在内容脚本中使用_eval)。
- **在 Chrome 中**：{{jsxref("Global_Objects/eval", "eval")}} 和 `window.eval` 总是在内容脚本的上下文而非页面的上下文中运行代码。

#### 在内容脚本之间共享变量

- **在 Firefox 中**：无法通过在一个脚本中将变量赋值给 `this.{variableName}` 并尝试在另一个脚本中使用 `window.{variableName}` 访问它们来在内容脚本之间共享变量。这是 Firefox 沙盒环境造成的限制。该限制可能会被移除；请参阅 [Firefox bug 1208775](https://bugzil.la/1208775)。

#### 导航时内容脚本的生命周期

- **在 Firefox 中**：内容脚本在用户离开网页后仍会注入网页。但是，window 对象属性会被销毁。例如，如果内容脚本设置了 `window.prop1 = "prop"`，而用户导航离开并返回页面时，`window.prop1` 是未定义的。此问题在 [Firefox bug 1525400](https://bugzil.la/1525400) 中被跟踪。

  要模仿 Chrome 浏览器的行为，请监听 [pageshow](/zh-CN/docs/Web/API/Window/pageshow_event) 和 [pagehide](/zh-CN/docs/Web/API/Window/pagehide_event) 事件。然后模拟注入或销毁内容脚本。

- **在 Chrome 中**：当用户离开网页时，内容脚本会被销毁。如果用户点击返回按钮通过历史记录返回页面，则内容脚本会被注入网页。

#### “逐标签”缩放行为

- **在 Firefox 中**：缩放级别会在页面加载和标签页导航时持续存在。
- **在 Chrome 中**：缩放更改会在导航时重置；在标签页中导航时，页面始终以其各自的缩放系数加载。

请参阅 {{WebExtAPIRef("tabs.ZoomSettingsScope")}} 。

## manifest.json 键

[`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 主页面包含一个表格，说明浏览器对 `manifest.json` 键的支持情况。如果对某个键的支持存在注意事项，则会在表中用星号"\*"表示。选择星号会展开表格，显示解释注意事项的说明。

这些表格是根据 [GitHub 中的 JSON 文件](https://github.com/mdn/browser-compat-data)中存储的兼容性数据生成的。

## 原生通信

### 基于连接的信息传递参数

**在 Linux 和 Mac 上**：Chrome 浏览器会向本地应用程序传递一个参数，即启动它的扩展的来源，其形式为 `chrome-extension://"extensionID/"`（需要使用斜线）。这样，应用程序就能识别扩展。

**在 Windows 上**：Chrome 浏览器会传递两个参数：

1. 扩展的源
2. 启动应用程序的 Chrome 浏览器本地窗口的句柄

### allowed_extensions

- **在 Firefox 中**：清单键名为 `allowed_extensions`。
- **在 Chrome 中**：清单键名为 `allowed_origins`。

### 应用清单位置

- **在 Chrome 中**：应用程序清单预计会放在不同的位置。请参阅 Chrome 文档中的[本地消息主机位置](https://developer.chrome.google.cn/docs/apps/nativeMessaging#native-messaging-host-location)。

### 应用持久化

- **在 Firefox 中**：本机消息传输连接关闭时，如果子进程没有脱离，Firefox 会将其杀死。在 Windows 系统中，浏览器会将本机应用程序的进程放入[作业对象](<https://msdn.microsoft.com/library/windows/desktop/ms684161(v=vs.85).aspx>)并杀死该作业。假设本地应用程序启动了其他进程，并希望这些进程在本地应用程序被杀死后继续打开。在这种情况下，本地应用程序必须使用 `CreateProcess` 而不是 `ShellExecute` 来启动其他进程，并使用 [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/library/windows/desktop/ms684863(v=vs.85).aspx>) 标志。

## 数据克隆算法

某些扩展 API 允许扩展从扩展的一部分向另一部分发送数据，例如 {{WebExtAPIRef("runtime.sendMessage()")}}、{{WebExtAPIRef("tabs.sendMessage()")}}、{{WebExtAPIRef("runtime.onMessage")}}、{{WebExtAPIRef("runtime.port")}} 的 `postMessage()` 方法和 {{WebExtAPIRef("tabs.executeScript()")}}。

- **在 Firefox 中**：使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。
- **在 Chrome 中**：使用 [JSON 序列化算法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#描述)。将来可能会切换到结构化克隆（[issue 248548](https://crbug.com/248548)）。

结构化克隆算法比 JSON 序列化算法支持更多类型。一个明显的例外是具有 `toJSON` 方法的（DOM）对象。DOM 对象默认情况下不可克隆，也不可进行 JSON 序列化，但使用 `toJSON()` 方法，这些对象可以进行 JSON 序列化（但仍不能使用结构化克隆算法进行克隆）。不可结构化克隆的 JSON 序列化对象示例包括 {{domxref("URL")}} 和 {{domxref("PerformanceEntry")}} 的实例。

依赖于 JSON 序列化算法中的 `toJSON()` 方法的扩展可使用 {{jsxref("JSON.stringify()")}} 后接 {{jsxref("JSON.parse()")}} 来确保可以交换消息，因为解析后的 JSON 值在结构上始终是可克隆的。
