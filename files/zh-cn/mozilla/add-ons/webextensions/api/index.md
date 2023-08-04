---
title: API
slug: Mozilla/Add-ons/WebExtensions/API
---

{{AddonSidebar}}

WebExtension JavaScript API 可以在附加组件的[后台脚本](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)和附加组件定义的任何[浏览器动作](/zh-CN/Add-ons/WebExtensions/User_interface_components#Browser_actions)或[页面动作](/zh-CN/Add-ons/WebExtensions/User_interface_components#Page_actions)中使用。这里的部分 API 也可以通过附加组件的[内容脚本](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts)访问（见[内容脚本指南列表](/zh-CN/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)）。

要使用更强大的 API，您需要在您的 manifest.json 中[申请权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions)。

您可以使用 `browser` 命名空间访问这些 API。

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

许多 API 为异步，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：

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

请注意，这不同于 Google Chrome 的扩展系统，它使用 `chrome` 而非 `browser` 名字空间，并且对异步函数使用回调而不是 promises。为辅助移植，Firefox 实现的 WebExtensions 支持 `chrome` 和回调以及 `browser` 和 promises。Mozilla 也写了一个 polyfill 使使用 `browser` 和 promises 的代码能不经修改的在 Chrome 中使用：<https://github.com/mozilla/webextension-polyfill>。

微软 Edge 使用 `browser` 名字空间，但尚不支持基于 promise 的异步 API。目前在 Edge 中，异步 API 必须使用回调。

并非所有浏览器都支持这里的所有 API：详情见[浏览器对 JavaScript API 的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)。

{{SubpagesWithSummaries}}
