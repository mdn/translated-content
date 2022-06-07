---
title: 浏览器扩展
slug: Mozilla/Add-ons/WebExtensions
tags:
  - Add-ons
  - Landing
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions
---
{{AddonSidebar}}

扩展或者说是附加组件，拥有可以修改、增强浏览器的能力。用于 Firefox 的扩展，使用跨浏览器的 WebExtensions API 技术来构建。

用于构建 Firefox 扩展的技术在很大程度上与被基于 Chromium 内核的浏览器（例如谷歌 Chrome 浏览器，微软 Edge 浏览器，Opera 浏览器，Vivaldi 浏览器）所支持的[扩展 API](https://developer.chrome.com/extensions) 所兼容。在大多数情况下，为基于 Chromium 内核浏览器而写的插件只需要[少许修改](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)就可以在 Firefox 中运行。

## 核心资源

- 指南
  - : 无论你是刚开始学习还是在寻找更加高级的建议，你可以从我们大量的[教程和指南中](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)学习扩展是如何工作的以及如何使用 WebExtensions API。
- 参考资料
  - : 获取全面的关于方法，属性，类型，事件等 [WebExtensions APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 的细节部分以及关于 [manifest 键列表](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)的全部细节。
- Firefox 工作流
  - : 了解如何为 Firefox 构建、发布扩展：在[扩展工作坊](https://extensionworkshop.com/)了解开发者工具，发布和移植的基本原理。

> **备注：** 如果你有任何的想法、问题或者是需要帮助，可以在[社区论坛](https://discourse.mozilla.org/c/add-ons)和在 [Matrix](https://wiki.mozilla.org/Matrix) 上的[附加组件](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be)房间联系到我们。

## 开始

在构建[你的第一个扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)之前，先去了解下[扩展都可以做些什么](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)。学习[扩展剖析](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)章节，对[扩展开发、发布工作流和 Firefox 风格](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Firefox_workflow_overview)有一个大致的了解。在[扩展示例](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)中
你会有一个全面的选择来进行更深入的探索，这些示例你都是可以正常运行在 Firefox 中的。

## 概念

从 [JavaScript API 概览](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API)开始，到[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts),[模式匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns),[使用文件](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Working_with_files),[国际化](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization),[内容安全策略](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)以及更加高阶的主题，例如[原生通信](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging),[使用开发者工具 API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools),[原生应用清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)获取详尽的信息来加深对扩展的概念理解。

## 用户界面

利用这些示例代码来了解你可以在扩展中使用的所有[用户界面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface)组件。

## 如何做

你将会找到大量的教程来开始，根据你经常使用的范例，例如[使用 Tabs API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API),[在工具栏上增加一个按钮儿](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)到更加高阶的主题，例如[拦截 HTTP 请求](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)，[语境认同](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)，

## Firefox 工作流

当你已经准备好创建你的 Firefox 扩展或者是移植你的 Chrome 扩展时，前往[扩展工作坊](https://extensionworkshop.com/)。它包含了以下细节：

- Firefox 工作流，例如[在开发时临时安装扩展](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)、[调试](https://extensionworkshop.com/documentation/develop/debugging/)、[获取对的权限](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)，等等。
- [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 开发者工具。
- [移植谷歌 Chrome 浏览器扩展](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)，[桌面程序与安卓的差异](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)，等等。
- [预览发布](https://extensionworkshop.com/documentation/publish/)，[推广你的扩展](https://extensionworkshop.com/documentation/publish/promoting-your-extension/)，[扩展生命周期的最佳实践](https://extensionworkshop.com/documentation/manage/)。

## 参考资料

### JavaScript APIs

获取全面的关于方法，属性，类型，事件等 [JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API) 的细节部分。在那儿你也可以获取到每个 API 与主流浏览器的兼容性的详尽细节。大多数的参考资料页面都包含使用这些 API 的代码示例和扩展示例的链接。

### Manifest 键列表

你可以从这里获取[键列表](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)详尽的细节，包括它们所有的属性和设置。以及关于每个键与主流浏览器的[兼容性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)的详尽细节。
