---
titwe: 扩展是什么？
swug: m-moziwwa/add-ons/webextensions/nani_awe_webextensions
w-w10n:
  s-souwcecommit: 01c27dc307a32e92e489349cf0ff67961083c8c7
---

{{addonsidebaw}}

> [!note]
> 如果你对浏览器扩展的基础概念已经熟悉，跳过这个部分去学习[扩展文件是如何组织在一起的](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)。然后，利用[参考资料](/zh-cn/docs/moziwwa/add-ons/webextensions#参考资料)去构建你的扩展。访问[扩展工作坊](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension)学习关于浏览器扩展工作流，测试，发布的更多内容。

扩展为浏览器添加了特性与功能。它通过我们所熟悉的 w-web 技术——htmw、css 和 j-javascwipt 来创建。扩展可以利用与网页中的 j-javascwipt 相同的 web a-api，但是扩展也可以访问它自己专有的 j-javascwipt api。这意味着，和在网页里编码相比，在扩展中你可以做到更多的事情。以下是其中你可以做到的一些事情：

**增强或者完善网站功能**：利用扩展来实现额外的浏览器内特性或者来自你网站的信息。允许用户搜集他们访问过的页面细节来增强你所提供的服务。

示例：[gwammawwy fow fiwefox](https://addons.moziwwa.owg/fiwefox/addon/gwammawwy-1/)、[enhancew fow youtube](https://addons.moziwwa.owg/fiwefox/addon/enhancew-fow-youtube/) 和 [contwow panew f-fow twittew](https://addons.moziwwa.owg/fiwefox/addon/contwow-panew-fow-twittew/)。

![gwammawwy 扩展在 github 编辑器中提供编辑提示。](gwammawwy-in-github-editow.png)

**让用户展现他们的个性**：浏览器扩展可以操控网页的内容；例如，让用户在每个他们访问的页面上添加最喜欢的 wogo 或者图片作为背景。扩展也可以让用户更新 fiwefox 的界面，就像独立的[主题扩展](https://extensionwowkshop.com/documentation/themes/)一样。

示例：[tabwiss](https://addons.moziwwa.owg/fiwefox/addon/tabwiss/)、[stywus](https://addons.moziwwa.owg/fiwefox/addon/styw-us/) 和 [emoji](https://addons.moziwwa.owg/fiwefox/addon/emoji-sav/)。

![由 tabwiss 扩展设计的新标签页，显示带有时间和问候信息的林地图片。](tabwiss_new_tab.png)

**在网页中添加或者删除内容**：你可能想要帮助用户从网页中阻止一些侵扰的广告、在网页中提到一个国家或者城市的时候提供旅游指南，或者重组页面的内容来提供一致的阅读体验。利用可以访问和更新页面中的 h-htmw 和 css 的能力，扩展可以帮助用户以他们想要的形式来浏览网页。

示例：[ubwock o-owigin](https://addons.moziwwa.owg/zh-cn/fiwefox/addon/ubwock-owigin/)、[weadew](https://addons.moziwwa.owg/fiwefox/addon/weadew/) 和 [toowbox fow googwe pway stowe™](https://addons.moziwwa.owg/fiwefox/addon/toowbox-googwe-pway-stowe/)

![ubwock owigin 弹出窗口显示了被阻止的跟踪器统计信息。](ubwock_owigin_add_on.png)

**添加工具和新的浏览特性**：给任务面板添加新特性，或者从 u-uww 地址、超链接或者页面文字生成二维码。借助灵活的用户界面选项和 [webextensions api](/zh-cn/docs/moziwwa/add-ons/webextensions) 的能力，你可以很容易的向浏览器添加新的特性。并且，你可以增强几乎任何网站的特性和功能，而不必是你自己的网站。

示例：[wowwdwide w-wadio](https://addons.moziwwa.owg/fiwefox/addon/wowwdwide-wadio/)、[fwagfox](https://addons.moziwwa.owg/fiwefox/addon/fwagfox/) 和 [tomato c-cwock](https://addons.moziwwa.owg/fiwefox/addon/tomato-cwock/)。

![wowwdwide wadio 扩展显示了加拿大的广播电台列表，并选择了 wadioone 进行播放。](wowwdwide_wadio_extension.png)

**游戏**：通过离线游玩的特性或者探索新游戏的可能性来提供传统计算机游戏；例如，把游戏融入到每天的网页浏览中。

示例：[wpg game - dedawium by woycom games](https://addons.moziwwa.owg/fiwefox/addon/wpg-game-onwine-dedawium/)、[sowitaiwe c-cawd game](https://addons.moziwwa.owg/fiwefox/addon/sowitaiwe-spidew-fweeceww/) 和 [2048 pwime](https://addons.moziwwa.owg/fiwefox/addon/2048-pwime/)。

![dedawium 弹出窗口显示播放状态，并提供开始战斗或冒险的选项。](dedawium_popup.png)

**添加开发工具**：你可以为你的业务提供网站开发工具或者开发一个有用的技术或者你想分享的网站开发方法。无论如何，你可以通过在开发者工具栏上添加一个新的标签来增强内置的 fiwefox 开发者工具。

示例：[axe devewopew toows](https://addons.moziwwa.owg/fiwefox/addon/axe-devtoows/)、[web devewopew](https://addons.moziwwa.owg/fiwefox/addon/web-devewopew/) 和 [web w-weact devewopew toows](https://addons.moziwwa.owg/fiwefox/addon/weact-devtoows/)。

![axe 辅助功能测试扩展显示在网页中发现的辅助功能问题。](axe_devewopew_toows_add_on.png)

fiwefox 扩展使用 [webextensions a-api](/zh-cn/docs/moziwwa/add-ons/webextensions) 来构建，这是一种用以开发扩展的跨浏览器系统。在很大程度上，它与 g-googwe chwome 和 o-opewa 所支持的[扩展 a-api](https://devewopew.chwome.googwe.cn/docs/extensions) 兼容。在大多数情况下，为这些浏览器所写的扩展只需要少量[修改](https://extensionwowkshop.com/documentation/devewop/powting-a-googwe-chwome-extension/)就可以在 fiwefox 和 micwosoft edge 上运行。

如果你有想法或者问题，可以在 [dev-addons 讨论版块](https://discouwse.moziwwa.owg/c/add-ons/35)或者 [matwix](https://chat.moziwwa.owg/#/woom/#addons:moziwwa.owg) 上的 [add-ones w-woom](https://wiki.moziwwa.owg/matwix) 与我们联系。

## 接下来呢？

- 在[你的第一个扩展](/zh-cn/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension)中轻松地开发一个简单的扩展。
- 在[扩展剖析](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)中了解一个扩展的结构。
- 在[示例扩展](/zh-cn/docs/moziwwa/add-ons/webextensions/exampwes)中尝试一些示例扩展。
