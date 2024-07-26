---
title: 基线（兼容性）
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: 70aa041ebd7e31df76818bc8459f60659fe94c0c
---

{{GlossarySidebar}}

**基线**（Baseline）标识可跨浏览器使用的 Web 平台特性，包括API、CSS 属性、JavaScript 语法。基线特性被描述为当前稳定浏览器中新提供的，或随着时间的推移可持续支持且广泛可用的特性。不符合基线标准的特性被描述为具有有限可用性。

极限考虑以下浏览器的支持情况：

- Apple Safari（iOS）
- Apple Safari（macOS）
- Google Chrome（Android）
- Google Chrome（桌面版）
- Microsoft Edge（桌面版）
- Mozilla Firefox（Android）
- Mozilla Firefox（桌面版）

基线是对浏览器支持的概要。它并不是无障碍、可用性、性能、安全性或其他测试的替代品。基线可能无法告诉你特性是否能在以下情况下工作：

- 较旧的设备和浏览器版本
- 未包含在基线定义中的浏览器，例如操作系统的 WebView
- 辅助技术，例如屏幕阅读器

## 标记

![带对号标记的绿色小部件：基线，广泛可用。四个浏览器徽标，均带有对号标记。](high.png)

如果你看到的是**广泛可用**（widely available）的基线图标，那么就可以相信该特性在每个基线浏览器中都有稳定的支持历史。广泛可用的特性已在多个浏览器中存在了多年。它适用于多种浏览器和设备，甚至是尚未更新到最新版本的浏览器和设备。

![带对号标记的蓝色小部件：基线 2022，最近可用。四个浏览器徽标，均带有对号标记。](limited.png)

如果你看到的是**最近可用**（newly available）的基线图标，那么就可以相信该特性至少能在每个基线浏览器的最新稳定版本（而且通常更多的版本）上运行。最新可用特性可在最新浏览器中使用，但可能无法在旧版浏览器和设备上使用。在使用新特性之前，请仔细考虑网站的受众。

![带叉号的灰色小部件：有限可用。四个浏览器徽标，两个带对号，两个带叉号。](low.png)

如果你看到的是**有限可用**（limited availability）的基线图标，那么其*不*属于基线特性。在依赖该特性之前，请对网站的用户进行更多的调查和测试，或者等待其成为基线特性。

## 参见

- [跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features 仓库](https://github.com/web-platform-dx/web-features)
- [W3C WebDX 社区小组](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data 仓库](https://github.com/mdn/browser-compat-data)
- [caniuse.com](https://caniuse.com/)
- [a11ysupport.io](https://a11ysupport.io/)
