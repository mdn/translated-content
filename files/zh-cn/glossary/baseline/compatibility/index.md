---
title: 基线（兼容性）
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: 70aa041ebd7e31df76818bc8459f60659fe94c0c
---

**基线**（Baseline）标识可跨浏览器使用的 Web 平台特性，包括 API、CSS 属性、JavaScript 语法。基线特性被描述为当前稳定浏览器中新提供的，或随着时间的推移可持续支持且广泛可用的特性。不符合基线标准的特性被描述为具有有限可用性。

基线考虑以下浏览器的支持情况：

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

## 基线徽章

![带对号标记的绿色小部件：基线，广泛可用。四个浏览器徽标，均带有对号标记。](high.png)

被列为**广泛可用**（widely available）的特性在各基线浏览器中都有至少 2.5 年的稳定支持历史。

![带对号标记的蓝色小部件：基线 2022，最近可用。四个浏览器徽标，均带有对号标记。](limited.png)

被列为**最近可用**（newly available）的特性至少可在各基线浏览器的最新稳定版中使用，但可能无法在旧版浏览器和设备上使用。

![带叉号的灰色小部件：有限可用。四个浏览器徽标，两个带对号，两个带叉号。](low.png)

被列为**有限可用**（limited availability）的特性尚未被所有浏览器所支持。

## 参见

- [跨浏览器测试](/zh-CN/docs/Learn_web_development/Extensions/Testing)
- [web-platform-dx/web-features 仓库](https://github.com/web-platform-dx/web-features)
- [W3C WebDX 社区小组](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data 仓库](https://github.com/mdn/browser-compat-data)
- [caniuse.com](https://caniuse.com/)
- [a11ysupport.io](https://a11ysupport.io/)
