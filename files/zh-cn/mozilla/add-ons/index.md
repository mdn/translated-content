---
title: 附加组件
slug: Mozilla/Add-ons
---

{{AddonSidebar}}

附加组件允许开发者们去扩展和修改 Firefox 的功能。开发者们能使用标准的 Web 技术「JavaScript，HTML 以及 CSS」再加上一些专用的 JavaScript APIs 来开发附加组件。

除此之外，附加组件还能：

- 改变指定网站的外观或者内容
- 修改 Firefox 的用户界面
- 给 Firefox 加上新功能

有几种附件组件类型，但最常见类型是扩展。

## 开发扩展

在过去，有几种工具集用于开发 Firefox 扩展，但是到 2017 年 11 月底，扩展必须使用 [WebExtensions APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 构建。其余工具集「包括 overlay add-ons、bootstrapped add-ons 和 Add-on SDK」将会同时被废弃。

使用 Firefox WebExtensions APIs 编写的扩展设计为跨浏览器兼容。在大多数情况下它也能在 Chrome，Edge 和 Opera 中运行，几乎没有任何变化。它们也完全兼容多进程 Firefox。你可以查看[目前在 Firefox 和其他浏览器中支持的 APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)。

### 扩展工坊

[Firefox 扩展工坊](https://extensionworkshop.com)可以帮助你为 Firefox 开发扩展，并为你的用户提供简单而强大的方式来定制他们的浏览体验。你会找到：

- [Firefox 扩展特征概述](https://extensionworkshop.com/#about)
- [开发和测试工具及其流程](https://extensionworkshop.com/documentation/develop/)
- [如何在 addons.mozilla.org 上发布扩展或自己分发扩展](https://extensionworkshop.com/documentation/publish/)
- [如何管理已发布的扩展](https://extensionworkshop.com/documentation/manage/)
- [对于企业用户，开发和使用扩展的指南](https://extensionworkshop.com/documentation/enterprise/)
- [如何为 Firefox 开发主题](https://extensionworkshop.com/documentation/themes/)
- [Firefox 开发者社区](https://extensionworkshop.com/community/)

### Android 版 Firefox 的扩展

2020 年，Mozilla 将发布一款新的 Android 版 Firefox。这款新的 Android 高性能浏览器是使用 Mozilla 的移动浏览器引擎 GeckoView 从头开始重新构建的。我们目前正在 GeckoView 上添加对 WebExtensionsAPI 的支持。

### 迁移现有扩展

如果你正在维护一个旧式扩展，比如 XUL overlay、bootstrapped，或者基于 Add-on SDK 的扩展，我们建议你将其移植到 WebExtension APIs。这里有一些[Firefox 扩展工坊中的移植资源](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)。

有关过渡支持的更多内容，请访问我们的[wiki 页面](https://wiki.mozilla.org/Add-ons/developer/communication)。

## 发布附加组件

[Addons.mozilla.org](https://addons.mozilla.org)，俗称「AMO」，是 Mozilla 官方的官方站点，方便开发者发布扩展组件和用户查找。通过上传附加组件到 AMO，你可以加入我们的用户和开发者社区，为你的附加组件找到订阅者。

你不一定需要在 AMO 上发布你的附加组件，但你的附加组件必须要经过 Mozilla 签名，否则用户不能安装它。

有关发布附加组件过程的概述，请参阅[签署和分发你的加载项](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)。

## 其他类型的附加组件

通常，当人们谈起附加组件时是指扩展工具，但是这里也有一些其他类型的附加组件允许用户定制 Firefox. 这些附加组件包括：

- [用户字典](/zh-CN/docs/Mozilla/Creating_a_spell_check_dictionary_add-on) 是可以进行各种语言的拼写检查的插件；
- [语言包](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack) 让你有更多可用的语言用于 Firefox 的界面。

## 联系我们

查看[联系我们](/zh-CN/docs/Mozilla/Add-ons/Contact_us)页面，了解有关如何获得帮助、时刻关注关于附加组件的最新消息以及向我们提供反馈的详细信息。
