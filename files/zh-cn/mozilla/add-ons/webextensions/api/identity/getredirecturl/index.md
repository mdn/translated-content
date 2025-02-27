---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

生成一个可用作重定向 URL 的 URL。

这一 URL 将派生自你的扩展 ID，因此如果你使用此函数，你应该使用 [`browser_specific_settings`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键显式设置扩展的 ID（否则每次你[临时安装扩展](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)时都会得到不同的重定向 URL）。

参见[获取重定向 URL](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#获取重定向_url) 一节以获取更多关于重定向 URL 的信息。

## 语法

```js-nolint
let redirectURL = browser.identity.getRedirectURL()
```

### 参数

无。

### 返回值

包含重定向 URL 值的字符串。

## 浏览器兼容性

{{Compat}}

## 示例

获取重定向 URL：

```js
let redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`identity`](https://developer.chrome.google.cn/docs/extensions/reference/api/identity) API。
