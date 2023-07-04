---
title: JavaScript APIs
slug: Mozilla/Add-ons/WebExtensions/API
page-type: landing-page
---

{{AddonSidebar}}

WebExtension 的 JavaScript API 可以在附加组件的[后台脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)以及附加组件定义的任何文档中使用，包括[浏览器动作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)、[页面动作]弹出窗口(/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)、[侧边栏](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars),、[选项页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)、或者[新标签页](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). 其中一些 API 也可以通过附加组件的[内容脚本](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts)访问。（见[内容脚本指南中的列表](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)。）

要使用更强大的 API，您需要在您的 manifest.json 中[申请权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

您可以使用 `browser` 命名空间访问这些 API。

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({currentWindow: true}, logTabs);
```

许多 API 为异步，返回一个 {{JSxRef("Promise")}}:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError);
```

## 浏览器之间的 API 差异

请注意，这不同于 Google Chrome 的扩展系统，Chrome 使用 `chrome` 而非 `browser` 名字空间，并且对异步函数使用 callbacks 而不是 promises。为辅助移植，Firefox 实现的 WebExtensions API 支持 `chrome` 和 callbacks 以及 `browser` 和 promises。Mozilla 也写了一个 polyfill 使使用 `browser` 和 promises 的代码能不经修改的在 Chrome 中使用：<https://github.com/mozilla/webextension-polyfill>。

Firefox也在`chrome`命名空间下使用回调来实现这些API。这使得在Firefox中运行Chrome浏览器编写的代码时，这里记录的 API 没有太大的差异。
微软 Edge 使用 `browser` 名字空间，但尚不支持基于 promise 的异步 API。目前在 Edge 中，异步 API 必须使用回调。

并非所有浏览器都支持这里的所有 API：详情见[浏览器对 JavaScript API 的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) and [Chrome浏览器不兼容的问题](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## 示例

Throughout the JavaScript API listings, short code examples illustrate how the API is used. You can experiment with most of these examples using the console in the [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox). However, you need Toolbox running in the context of a web extension. To do this, open `about:debugging` then **This Firefox**, click **Inspect** against any installed or temporary extension, and open **Console**. You can then paste and run the example code in the console.

For example, here is the first code example on this page running in the Toolbox console in Firefox Developer Edition:

![Illustration of a snippet of web extension code run from the console in the Toolbox](javascript_exercised_in_console.jpg)

## JavaScript API 列表

完整的 JavaScript API 列表见下文：

{{LandingPageListSubpages}}
