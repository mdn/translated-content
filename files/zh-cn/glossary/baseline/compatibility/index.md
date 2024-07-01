---
title: 基线（兼容性）
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: d14b5a927958ec1ab9737f2f9fce0761a4c95c75
---

{{GlossarySidebar}}

**基线**（Baseline）标识可跨浏览器使用的 Web 平台特性。基线可帮助你决定何时使用某项特性，告诉你该特性何时不太可能给网站访客带来兼容性问题。

基线特性（如 API、CSS 属性集或 JavaScript 语法）可在 Chrome、Edge、Firefox 和 Safari 等多款知名且广泛使用的桌面和移动浏览器上一致运行。

基线特性被描述为当前稳定浏览器中新提供的，或随着时间的推移可持续支持且广泛可用的特性。

## 标记

![带对号标记的绿色小部件：基线，广泛可用。四个浏览器徽标，均带有对号标记。](high.png)

如果你看到的是**广泛可用**（widely available）的基线图标，那么就可以相信该特性在每个基线浏览器中都有稳定的支持历史。广泛可用的特性已在多个浏览器中存在了多年。它适用于多种浏览器和设备，甚至是尚未更新到最新版本的浏览器和设备。

![带对号标记的蓝色小部件：基线 2022，最近可用。四个浏览器徽标，均带有对号标记。](limited.png)

如果你看到的是**最近可用**（newly available）的基线图标，那么就可以相信该特性至少能在每个基线浏览器的最新稳定版本（而且通常更多的版本）上运行。最新可用特性可在最新浏览器中使用，但可能无法在旧版浏览器和设备上使用。在使用新特性之前，请仔细考虑网站的受众。

![带叉号的灰色小部件：有限可用。四个浏览器徽标，两个带对号，两个带叉号。](low.png)

如果你看到的是**有限可用**（limited availability）的基线图标，那么其*不*属于基线特性。在依赖该特性之前，请对网站的用户进行更多的调查和测试，或者等待其成为基线特性。

## 浏览器系列

基线跟踪以下浏览器的可用性：

- Apple Safari（iOS）
- Apple Safari（macOS）
- Google Chrome（Android）
- Google Chrome（桌面版）
- Microsoft Edge（桌面版）
- Mozilla Firefox（Android）
- Mozilla Firefox（桌面版）

## 额外考虑

基线是一个支持概要指南，并不涵盖所有情况。如果你的网站需要兼容较旧的设备或浏览器版本，或者基线状态未涵盖的浏览器，那么你可能需要自行调查或测试。如果基线未涵盖你的情况，请考虑在使用某项特性之前阅读 MDN 上的浏览器兼容性表或访问 [caniuse.com](https://caniuse.com/)。

## 贡献

基线（Baseline）是 W3C WebDX 社区小组的一项社区工作，依赖于 MDN 的开源浏览器兼容性数据。如果你有问题、反馈，或希望帮助更新和扩展基线状态报告所涵盖的特性，请访问 [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) 以便参与其中。

## 参见

- [跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features 仓库](https://github.com/web-platform-dx/web-features)
- [W3C WebDX 社区小组](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data 仓库](https://github.com/mdn/browser-compat-data)
