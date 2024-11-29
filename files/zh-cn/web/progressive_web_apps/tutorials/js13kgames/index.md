---
title: 渐进式 Web 应用介绍
slug: Web/Progressive_web_apps/Tutorials/js13kGames
---

{{PWASidebar}} {{NextMenu("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

这篇文章将会为你介绍渐进式 Web 应用（PWA），讨论一下它们到底是什么；相比于常规的 Web 应用，它又带来了哪些优势。

## 什么是渐进式 Web 应用？

PWA 指的是使用指定技术和标准模式来开发的 Web 应用，这同时赋予它们 Web 应用和原生应用的特性。

例如一方面，Web 应用更加易于发现：相比于安装应用，访问一个网站显然更加容易和迅速。你还可以通过链接来分享 Web 应用。

另一方面，原生应用与操作系统可以更加完美的整合，也因此为用户提供了无缝的用户体验。你可以通过安装应用使得它在离线的状态下也可以运行；相较于使用浏览器访问，用户也更喜欢通过点击主页上的图标来访问它们喜爱的应用。

PWA 赋予了我们创建同时拥有以上两种优势的应用的能力。

这并不是一个新概念；类似的想法已经在过去的 Web 平台上通过各种方法实现了多次。渐进式增强和响应式设计已经可以让我们构建对移动端友好的网站。在多年以前的 Firefox OS 的生态系统中，离线运行和安装 Web 应用就已经成为了可能。

除此之外，PWA 还提供了更多的特性，并且无需在 Web 已有的那些优秀特点上妥协。

## 什么使应用成为 PWA?

正如前文所述，PWA 不是只使用一种技术创建的。它代表了构建 Web 应用程序的新理念，涉及一些特定的模式，API 和其他功能。一眼是看不出来一个 Web App 是不是 PWA 的。如果应用程序满足某些要求，或者实现了一组特定的功能，例如离线工作、可安装、易于同步、可以发送推送通知等，我们就可以将其视为 PWA。

此外，还有一些工具可以按百分比衡量应用的完整性。（[Lighthouse](https://developer.chrome.google.cn/docs/lighthouse/overview) 目前是最受欢迎的工具）通过实施各种技术优势，我们可以使应用程序更加渐进式，从而最终获得更高的 Lighthouse 得分。但这只是一个粗略的指标。

辨别一个 Web 应用是否是 PWA 有一些关键原则。一个 PWA 应该具有以下特点：

- [可发现（Discoverable）](/zh-CN/Apps/Progressive/Advantages#Discoverable), 可以通过搜索引擎发现。
- [可安装（Installable）](/zh-CN/Apps/Progressive/Advantages#Installable), 可以出现在设备的主屏幕。
- [可链接（Linkable）](/zh-CN/Apps/Progressive/Advantages#Linkable), 可以简单地通过 URL 分享。
- [独立于网络（Network independent）](/zh-CN/Apps/Progressive/Advantages#Network_independent), 可以在离线状态或者是在网速很差的情况下运行。
- [渐进式（Progressive）](/zh-CN/Apps/Progressive/Advantages#Progressive), 在老版本的浏览器仍旧可以使用，在新版本的浏览器上可以使用全部功能。
- [可重入（Re-engageable）](/zh-CN/Apps/Progressive/Advantages#Re-engageable), 无论何时有新的内容，都可以发送通知。
- [响应式（Responsive）](/zh-CN/Apps/Progressive/Advantages#Responsive), 在任何具有屏幕和浏览器的设备上可以正常使用——包括手机、平板电脑、笔记本、电视、冰箱等。
- [安全（Safe）](/zh-CN/Apps/Progressive/Advantages#Safe), 在用户、应用和服务器之间的连接是安全的，第三方无法访问你的敏感数据。

### 这么做值得吗？

当然值得！只需要相对较小的代价就可以实现 PWA 的核心特性，而优势却是巨大的。例如：

- 减少应用安装后的加载时间，通过 [Service Workers](/zh-CN/docs/Web/API/Service_Worker_API) 来进行缓存，以此来节省带宽和时间。
- 当应用有可用的更新时，可以只更新发生改变的那部分内容。相比之下，对于一个原生应用而言，即便是最微小的改动也需要强制用户去再次下载整个应用。
- 外观和使用感受与原生平台更加融为一体——应用图标被放置在主屏幕上，应用可以全屏运行等。
- 凭借系统通知和推送消息与用户保持连接，对用户产生更多的吸引力，并且提高转换效率。

有许多知名的成功企业正在尝试 PWA 方案，选择增强的网站体验而不是原生应用。事实上它们也确实从中获得了显而易见的益处。[PWA Stats](https://www.pwastats.com/) 这个网站上分享了许多案例研究，可以证明以上提及的这些优势。

最著名的案例可能是印度最大的电子商务网站 [Flipkart Lite](https://stories.flipkart.com/flipkart-lite/)，它在 2015 年重建为 PWA，转化率提高了 70%。[AliExpress](https://m.aliexpress.com/) PWA 也得到了比 Web 应用或原生应用更好的效果，新用户的转换率提高了 104%。对比一下利润增长率和转换为 PWA 所需相对较少的工作量，PWA 的优势显而易见。

像 [couponmoto](https://www.couponmoto.com/) 这样的早期新兴创业公司也开始使用 PWA 来推动更多的消费者参与，这表明 PWA 可以帮助小公司和大公司更有效地（重新）吸引用户。

你可以查看 [pwa.rocks](https://pwa.rocks/) 上的列表以获取更多示例。特别值得一提的是 [hnpwa.com](https://hnpwa.com/)，它列出了 Hacker News 网站的示例实现（而不是随处可见的 TodoMVC 应用程序），你可以在其中看到各种前端框架的使用。

你甚至可以使用 [PWABuilder](https://www.pwabuilder.com/) 网站在线生成 PWA。

对于 Service Worker 和消息推送，请务必查看 [Service Worker 手册](https://github.com/mdn/serviceworker-cookbook/)。这是一个在现代站点中使用 Service Worker 的方法集合。

PWA 非常值得一试，你可以自己查看它是否适用于你的应用程序。

## 浏览器支持

如前所述，PWA 不依赖于单个 API，而是使用多种技术来实现提供最佳 Web 体验的目标。

PWA 所需的关键要素是 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 支持。值得庆幸的是，桌面和移动设备上的[所有主流浏览器都支持](https://jakearchibald.github.io/isserviceworkerready/) Service Worker。

至于其他功能，像是[推送通知](/zh-CN/docs/Web/API/Push_API)、[通知功能](/zh-CN/docs/Web/API/Notifications_API)和[添加至主屏](/zh-CN/docs/Web/AppsProgressive_web_apps/Progressive/Guides/Making_PWAs_installable)功能也得到了广泛的支持。目前，Safari 对 [Web App Manifest](/zh-CN/docs/Web/Manifest) 和添加至主屏的支持有限，并且不支持 Web 推送通知。但是，其他主流浏览器都支持这里的所有功能。

其中一些 API 是实验性的，文档仍在草稿中，但是 Flipkart 和 AliExpress 这样的成功案例应该也能说服你尝试在 Web 应用程序中实现一些 PWA 功能。

最重要的是，你应该遵循渐进增强理念：在客户端支持它们的情况下使用提供此类增强功能的技术，但如果客户端不支持，则仍然提供应用程序的基本功能。这样，应用对每个人都可用，但使用现代浏览器的人能更多地从 PWA 功能中受益。

## 一个示例应用程序

在本系列文章中，我们将研究一个超级简单网站的源代码，该网站列出了 [js13kGames 2017](http://2017.js13kgames.com/) 竞赛中提交给 [A-Frame category](http://js13kgames.com/aframe) 的游戏的相关信息。你不必考虑网站上的实际内容，这里主要是学习如何在你自己的项目中使用 PWA 功能。

你可以在 [mdn.github.io/pwa-examples/js13kpwa](https://mdn.github.io/pwa-examples/js13kpwa/) 找到在线版本（另请[参阅源代码](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)），我们将在接下来的几篇文章中对其进行详细解释。

现在，让我们转到本系列的第二部分，我们来看看这个示例应用程序的结构。

{{NextMenu("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
