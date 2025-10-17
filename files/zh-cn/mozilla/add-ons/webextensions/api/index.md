---
title: API
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: b86c026ce4413be2a6b084ad5877dd641c32756e
---

WebExtension 的 JavaScript API 可在扩展的[后台脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)和扩展打包的任何其他文档中使用，包括[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_interface_components#浏览器操作)或[页面操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_interface_components#页面操作)弹窗、[侧边栏](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_interface_components#侧边栏)、[选项页](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_interface_components#选项页)或[新标签页](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)。这些 API 中的一些也可以被扩展的[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#内容脚本)访问（请参见[内容脚本指南中的列表](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_api)）。

要使用更强大的 API，你需要在扩展的 `manifest.json` 中[请求权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

你可以使用 `browser` 命名空间访问这些 API：

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

很多的 API 都是异步的，会返回一个 {{JSxRef("Promise")}}：

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

let setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

## 浏览器 API 差异

请注意，这与 Google Chrome 的扩展系统不同（Chrome 使用 `chrome` 命名空间而非 `browser`，并且在 Manifest V2 中异步函数使用回调而不是 Promise）。为了帮助移植，Firefox 实现的 WebExtensions API 支持 `chrome` 和回调以及 `browser` 和 Promise。Mozilla 还编写了一个 polyfill，让使用 `browser` 和 Promise 的代码可以在 Chrome 中无需修改即可运行：<https://github.com/mozilla/webextension-polyfill>。

Firefox 也使用回调在 `chrome` 命名空间下实现了这些 API。这使得为 Chrome 编写的代码在这里记录的 API 中在 Firefox 中基本上可以无需修改地运行。

并非所有浏览器都支持这里的所有 API：详情见[浏览器对 JavaScript API 的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)和[Chrome 不兼容性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)。

## 示例

在 JavaScript API 列表中，短的代码示例展示了如何使用 API。你可以在[工具箱](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox)的控制台中尝试这些示例。但是，你需要在 Web 扩展的上下文中运行工具箱。要做到这一点，请打开 `about:debugging`，然后点击**此 Firefox**，点击任何已安装或临时扩展的**检查**，然后打开**控制台**。然后你可以在控制台中粘贴并运行示例代码。

例如，这里是本页的第一个代码示例在 Firefox 开发者版的工具箱控制台中运行的情况：

![在工具箱中的控制台中运行的 Web 扩展代码片段的插图](javascript_exercised_in_console.jpg)

## JavaScript API 列表

下述是 JavaScript API 的完整列表：

{{LandingPageListSubpages}}
