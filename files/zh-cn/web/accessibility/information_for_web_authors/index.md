---
title: Accessibility information for web authors
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## 指南和规定

1. [<abbr>ARIA</abbr> 作者实践指南 (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
   由 Accessible Rich Internet Application (<abbr>ARIA</abbr>) 规范定义的无障碍语义的指南，用于创建无障碍的 Web 体验。描述如何将无障碍语义应用于常见设计模式和小部件，提供设计模式和功能示例。
2. [Web 内容无障碍性指南 (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
   来自 W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_ 的另一组重要指南。欧盟计划基于这些指南制定即将推出的无障碍性规定。这些指南在 [<abbr>WAI</abbr> 兴趣组讨论列表](https://www.w3.org/WAI/about/groups/waiig/#mailinglist)上进行了讨论。
3. [本站点上的 ARIA](/zh-CN/docs/Web/Accessibility/ARIA)
    <abbr>MDN</abbr> 提供的关于所有 [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)和 [ARIA 属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)的指南，包括最佳实践、相关角色和属性以及示例。

## 如何操作

1. [前端开发人员的无障碍性](https://accessibility.digital.gov/front-end/getting-started/)
    美国总务署技术转型服务提供的简要指南，涵盖了几个无障碍性主题，并提供了与 WCAG 相关的链接。
2. [可访问的网页编写](https://www.ibm.com/able/requirements/requirements/)
    IBM 公开了他们需要满足的无障碍性要求，并提供了交互式的界面。

### 自动化检查与修复

使用工具快速检查浏览器中的常见错误：

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=zh-CN)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

将工具集成到构建过程中，以编程方式添加无障碍性测试，从而在开发 Web 应用程序时捕捉错误：

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

用于在 GitHub 拉取请求中查找无障碍性问题的持续集成工具：

- [AccessLint](https://www.accesslint.com/)

尽管最好使用真实用户测试你的 Web 应用程序，但你可以模拟色盲、低视力、低对比度和缩放。你应该始终在没有鼠标和触摸的情况下测试你的网站以测试键盘导航。你还可以尝试使用语音命令访问你的网站。尝试禁用鼠标并使用浏览器扩展，如 [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla)。
