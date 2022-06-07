---
title: 扩展是什么？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
tags:
  - Extensions
  - WebExtensions
---
{{AddonSidebar}}

> **备注：** 如果你对浏览器扩展的基础概念已经熟悉，跳过这个部分去学习[扩展文件是如何组织在一起的](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)。然后，利用[参考文档](/zh-CN/docs/Mozilla/Add-ons/WebExtensions#reference)去构建你的扩展。访问[扩展工作坊](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)学习关于浏览器扩展工作流，测试，发布的更多内容。

扩展为浏览器添加了特性与功能。它通过我们所熟悉的 web 技术-HTML，CSS 还有 JavaScript 来创建。扩展可以利用与 JavaScript 相同的网页 API，但是扩展也可以访问它自己专有的 JavaScript API。这意味着，和在网页里编码相比，在扩展中你可以做到更多的事情。以下是其中你可以做到的一些事情：

**提升或者补充网站功能**: 利用扩展来实现额外的浏览器内特性或者来自你网站的信息。允许用户搜集他们访问过的页面细节来提升你所提供的服务。

![](amazon_add_on.png)

示例：[亚马逊助手](https://addons.mozilla.org/zh-CN/firefox/addon/amazon-browser-bar/)，[OneNote Web Clipper](https://addons.mozilla.org/zh-CN/firefox/addon/onenote-clipper/)，[Grammarly for Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/grammarly-1/)

**让用户展现他们的个性**: 浏览器扩展可以操控网页的内容；例如，让用户在每个他们访问的页面上添加最喜欢的 logo 或者图片作为背景。扩展也可以让用户更新 Firefox 的界面，就想独立的[主题扩展](https://extensionworkshop.com/documentation/themes/)一样。

![](myweb_new_tab_add_on.png)

示例：[MyWeb New Tab](https://addons.mozilla.org/zh-CN/firefox/addon/myweb-new-tab/), [Tabliss](https://addons.mozilla.org/zh-CN/firefox/addon/tabliss/), 和 [VivaldiFox](https://addons.mozilla.org/zh-CN/firefox/addon/vivaldifox/)

**从网页中添加或者删除内容**: 你可能想要帮助用户从网也中组织一些侵扰的广告，当网页中提到一个国家或者城市的时候提供旅游指南，或者重组页面的内容来提供一个连续的阅读体验。利用可以访问和更新一个页面里的 HTML 和 CSS 的能力，扩展可以帮助用户已他们想要的形式来查看网页。

![](ublock_origin_add_on.png)

示例：[uBlock Origin](https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin/), [Reader](https://addons.mozilla.org/zh-CN/firefox/addon/reader/), 和 [Toolbox for Google Play Store™](https://addons.mozilla.org/zh-CN/firefox/addon/toolbox-google-play-store/)

**添加工具和新的浏览特性**: 给任务面板添加新特性，或者从 URL 地址，超链接，或者页面文字生成二维码。有了灵活的界面选项和 [WebExtensions APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 的能力，你可以很容易的向浏览器添加新的特性。并且，你可以改善几乎任何网站的特性和功能，而不必是你自己的网站。

![](qr_code_image_generator_add_on.png)

Examples: [Swimlanes for Trello](https://addons.mozilla.org/zh-CN/firefox/addon/swimlanes-for-trello/) and [Tomato Clock](https://addons.mozilla.org/zh-CN/firefox/addon/tomato-clock/)

**游戏**: 通过离线游玩的特性或者探索新游戏的可能性来提供传统计算机游戏的功能；例如，把游戏性融入到每天的网页浏览中。

![](asteroids_in_popup_add_on_.png)

示例：[Asteroids in Popup](https://addons.mozilla.org/zh-CN/firefox/addon/asteroids-in-popup/), [Solitaire Card Game New Tab](https://addons.mozilla.org/zh-CN/firefox/addon/solitaire-card-game-new-tab/), 和 [2048 Prime](https://addons.mozilla.org/zh-CN/firefox/addon/2048-prime/).

**添加开发工具**: 你可以为你的业务提供网站开发工具或者开发一个有用的技术或者你想分享的网站开发方法。无论如何，你可以通过在开发者工具栏上添加一个新的标签来增强内置的 Firefox 开发者工具。

![](axe_developer_tools_add_on.png)

示例：[Web Developer](https://addons.mozilla.org/zh-CN/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/zh-CN/firefox/addon/react-devtools/), 和 [aXe Developer Tools](https://addons.mozilla.org/zh-CN/firefox/addon/axe-devtools/)

Firefox 扩展使用 [WebExtensions APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions)来构建，这是一种用以开发扩展的跨浏览器系统。在很大程度上，它与 Google Chrome 和 Opera 所支持的[扩展 API](https://developer.chrome.com/extensions) 兼容。在大多数情况下，为这些浏览器缩写的扩展只需要少量[修改](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)就可以在 Firefox 和 Microsoft Edge 上运行。这些 API 也完全兼容[多进程 Firefox](/zh-CN/docs/Mozilla/Firefox/Multiprocess_Firefox)。

如果你有想法或者问题，或者在[迁移就的附加组件到 WebExtensions APIs](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension)时需要帮助，可以在 [dev-addons 邮件列表](https://mail.mozilla.org/listinfo/dev-addons)或者 [Matrix](https://chat.mozilla.org/#/room/#addons:mozilla.org) 上的 [Add-ones room](https://wiki.mozilla.org/Matrix) 与我们联系。

## 接下来呢？

- 在[你的第一个扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)中轻松的开发一个简单的扩展。
- 在[扩展剖析](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)中了解一个扩展的结构。
- 在[示例扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)中尝试一些示例扩展。
