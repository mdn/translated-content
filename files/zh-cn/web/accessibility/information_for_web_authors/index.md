---
title: Web 作者的无障碍信息
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: 6b8bb90a20d7fe2628d17a81cfd42d10747e8dbb
---

{{AccessibilitySidebar}}

## 指南和规定

- [<abbr>ARIA</abbr> 作者实践指南 (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
  - : 由 Accessible Rich Internet Application (<abbr>ARIA</abbr>) 规范定义的无障碍语义的指南，用于创建无障碍的 Web 体验。描述如何将无障碍语义应用于常见设计模式和小部件，提供设计模式和功能示例。
- [Web 内容无障碍性指南 (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : 来自 W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_ 的另一组重要指南。欧盟计划基于这些指南制定即将推出的无障碍性规定。这些指南在 [<abbr>WAI</abbr> 兴趣组讨论列表](https://www.w3.org/WAI/about/groups/waiig/#mailinglist)上进行了讨论。
- [本站点上的 ARIA](/zh-CN/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr> 提供的关于所有 [ARIA 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles)和 [ARIA 属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)的指南，包括最佳实践、关联角色和属性以及示例。

## 如何操作

- [前端开发人员的无障碍性](https://digital.gov/guides/accessibility-for-teams/)
  - : 美国总务署技术转型服务提供的简要指南，涵盖了几个无障碍性主题，并提供了指南视频和相关 WCAG 参考资料的链接。
- [无障碍网页编写](https://www.ibm.com/able/requirements/requirements/)
  - : IBM 公开了他们需要满足的无障碍性要求，并提供了交互式的界面。

## 自动化检查与修复

使用工具快速检查浏览器中的常见错误：

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [Lighthouse Accessibility Audit](https://developer.chrome.google.cn/docs/lighthouse/overview)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

将工具集成到构建过程中，以编程方式添加无障碍性测试，从而在开发 Web 应用程序时捕捉错误：

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

用于在 GitHub 拉取请求中查找无障碍性问题的持续集成工具：

- [AccessLint](https://accesslint.com/)

尽管最好使用真实用户测试你的 Web 应用程序，但你可以模拟色盲、低视力、低对比度和缩放。你应该始终在没有鼠标和触摸屏的情况下测试你的网站以测试键盘导航。你还可以尝试使用语音命令访问你的网站。尝试禁用鼠标并使用浏览器扩展，如 [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla)。
