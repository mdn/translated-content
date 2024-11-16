---
title: 扩展是什么？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 01c27dc307a32e92e489349cf0ff67961083c8c7
---

{{AddonSidebar}}

> [!NOTE]
> 如果你对浏览器扩展的基础概念已经熟悉，跳过这个部分去学习[扩展文件是如何组织在一起的](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)。然后，利用[参考资料](/zh-CN/docs/Mozilla/Add-ons/WebExtensions#参考资料)去构建你的扩展。访问[扩展工作坊](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)学习关于浏览器扩展工作流，测试，发布的更多内容。

扩展为浏览器添加了特性与功能。它通过我们所熟悉的 Web 技术——HTML、CSS 和 JavaScript 来创建。扩展可以利用与网页中的 JavaScript 相同的 Web API，但是扩展也可以访问它自己专有的 JavaScript API。这意味着，和在网页里编码相比，在扩展中你可以做到更多的事情。以下是其中你可以做到的一些事情：

**增强或者完善网站功能**：利用扩展来实现额外的浏览器内特性或者来自你网站的信息。允许用户搜集他们访问过的页面细节来增强你所提供的服务。

示例：[Grammarly for Firefox](https://addons.mozilla.org/firefox/addon/grammarly-1/)、[Enhancer for YouTube](https://addons.mozilla.org/firefox/addon/enhancer-for-youtube/) 和 [Control Panel for Twitter](https://addons.mozilla.org/firefox/addon/control-panel-for-twitter/)。

![Grammarly 扩展在 GitHub 编辑器中提供编辑提示。](grammarly-in-github-editor.png)

**让用户展现他们的个性**：浏览器扩展可以操控网页的内容；例如，让用户在每个他们访问的页面上添加最喜欢的 logo 或者图片作为背景。扩展也可以让用户更新 Firefox 的界面，就像独立的[主题扩展](https://extensionworkshop.com/documentation/themes/)一样。

示例：[Tabliss](https://addons.mozilla.org/firefox/addon/tabliss/)、[Stylus](https://addons.mozilla.org/firefox/addon/styl-us/) 和 [Emoji](https://addons.mozilla.org/firefox/addon/emoji-sav/)。

![由 Tabliss 扩展设计的新标签页，显示带有时间和问候信息的林地图片。](tabliss_new_tab.png)

**在网页中添加或者删除内容**：你可能想要帮助用户从网页中阻止一些侵扰的广告、在网页中提到一个国家或者城市的时候提供旅游指南，或者重组页面的内容来提供一致的阅读体验。利用可以访问和更新页面中的 HTML 和 CSS 的能力，扩展可以帮助用户以他们想要的形式来浏览网页。

示例：[uBlock Origin](https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin/)、[Reader](https://addons.mozilla.org/firefox/addon/reader/) 和 [Toolbox for Google Play Store™](https://addons.mozilla.org/firefox/addon/toolbox-google-play-store/)

![uBlock Origin 弹出窗口显示了被阻止的跟踪器统计信息。](ublock_origin_add_on.png)

**添加工具和新的浏览特性**：给任务面板添加新特性，或者从 URL 地址、超链接或者页面文字生成二维码。借助灵活的用户界面选项和 [WebExtensions API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 的能力，你可以很容易的向浏览器添加新的特性。并且，你可以增强几乎任何网站的特性和功能，而不必是你自己的网站。

示例：[Worldwide Radio](https://addons.mozilla.org/firefox/addon/worldwide-radio/)、[Flagfox](https://addons.mozilla.org/firefox/addon/flagfox/) 和 [Tomato Clock](https://addons.mozilla.org/firefox/addon/tomato-clock/)。

![Worldwide Radio 扩展显示了加拿大的广播电台列表，并选择了 RadioOne 进行播放。](worldwide_radio_extension.png)

**游戏**：通过离线游玩的特性或者探索新游戏的可能性来提供传统计算机游戏；例如，把游戏融入到每天的网页浏览中。

示例：[RPG Game - Dedalium by Loycom Games](https://addons.mozilla.org/firefox/addon/rpg-game-online-dedalium/)、[Solitaire Card Game](https://addons.mozilla.org/firefox/addon/solitaire-spider-freecell/) 和 [2048 Prime](https://addons.mozilla.org/firefox/addon/2048-prime/)。

![Dedalium 弹出窗口显示播放状态，并提供开始战斗或冒险的选项。](dedalium_popup.png)

**添加开发工具**：你可以为你的业务提供网站开发工具或者开发一个有用的技术或者你想分享的网站开发方法。无论如何，你可以通过在开发者工具栏上添加一个新的标签来增强内置的 Firefox 开发者工具。

示例：[aXe Developer Tools](https://addons.mozilla.org/firefox/addon/axe-devtools/)、[Web Developer](https://addons.mozilla.org/firefox/addon/web-developer/) 和 [Web React Developer Tools](https://addons.mozilla.org/firefox/addon/react-devtools/)。

![Axe 辅助功能测试扩展显示在网页中发现的辅助功能问题。](axe_developer_tools_add_on.png)

Firefox 扩展使用 [WebExtensions API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 来构建，这是一种用以开发扩展的跨浏览器系统。在很大程度上，它与 Google Chrome 和 Opera 所支持的[扩展 API](https://developer.chrome.google.cn/docs/extensions) 兼容。在大多数情况下，为这些浏览器所写的扩展只需要少量[修改](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)就可以在 Firefox 和 Microsoft Edge 上运行。

如果你有想法或者问题，可以在 [dev-addons 讨论版块](https://discourse.mozilla.org/c/add-ons/35)或者 [Matrix](https://chat.mozilla.org/#/room/#addons:mozilla.org) 上的 [Add-ones room](https://wiki.mozilla.org/Matrix) 与我们联系。

## 接下来呢？

- 在[你的第一个扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)中轻松地开发一个简单的扩展。
- 在[扩展剖析](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)中了解一个扩展的结构。
- 在[示例扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)中尝试一些示例扩展。
