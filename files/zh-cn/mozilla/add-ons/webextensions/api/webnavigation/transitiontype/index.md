---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

导航的原因：例如，用户点击了链接、输入了地址或点击了书签。

请注意，这里的许多值目前在 Firefox 中不受支持：有关详细信息，请参阅[浏览器兼容性表](#browser_compatibility)。

## 类型

此类型的值是字符串。可能的值包括：

- "link"
  - : 用户点击了另一个页面中的链接。
- "typed"
  - : 用户在地址栏中输入了 URL。如果用户开始在地址栏中输入内容，然后从提供的建议中选择了一个 URL，也会使用此值。另请参阅 "generated"。
- "auto_bookmark"
  - : 用户点击了书签或浏览器历史记录中的项目。
- "auto_subframe"
  - : 由其父级自动加载的任何嵌套 iframe。
- "manual_subframe"
  - : 作为显式用户操作加载的任何嵌套 iframe。加载此类 iframe 将在前进/后退导航列表中生成一个条目。
- "generated"
  - : 用户开始在地址栏中输入内容，然后点击了一个不包含 URL 的建议条目。
- "start_page"
  - : 页面通过命令行传递或是起始页面。
- "form_submit"
  - : 用户提交了一个表单。请注意，在某些情况下，例如表单使用脚本提交其内容时，提交表单不会导致此过渡类型。
- "reload"
  - : 用户使用重新加载按钮或按下地址栏中的 Enter 键重新加载页面。这也用于会话恢复和重新打开关闭的标签页。
- "keyword"
  - : URL 是使用用户配置的[关键字搜索](https://support.mozilla.org/zh-CN/kb/how-search-from-address-bar)生成的。
- "keyword_generated"
  - : 对应于为关键字生成的访问。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [! 注意]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#type-TransitionType) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。
