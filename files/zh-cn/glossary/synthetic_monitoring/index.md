---
title: 模拟监控
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**模拟监控**包含在“实验室”环境中监控页面的性能的行为。这通常在尽可能一致的环境中使用自动化工具进行。

通过一致的基准，模拟监控非常适合测量代码更改对性能的影响。然而，它并不一定反映用户的实际体验。

模拟监控涉及部署脚本来模拟最终用户可能在 Web 应用程序中执行的路径，并报告模拟器体验的性能。流行的模拟监控工具示例包括 [WebPageTest](https://webpagetest.org) 和 [Lighthouse](https://developer.chrome.google.cn/docs/lighthouse/overview)。测量的流量不是实际用户的流量，而是为收集页面性能数据而综合生成的流量。

与{{glossary("Real user monitoring", "真实用户监控")}}（RUM）不同，模拟监控提供了一个狭窄的性能视图，不考虑用户差异，使其在获取应用程序性能的基本数据和在开发环境中进行性能抽查方面非常有用。结合其他工具，如网络限制，可以提供对潜在问题区域的极好见解。

## 参见

- {{glossary("Real user monitoring", "真实用户监控")}}（RUM）
- [真实用户监控（RUM）vs. 模拟监控](/zh-CN/docs/Web/Performance/Rum-vs-Synthetic)
- {{glossary("Beacon", "信标")}}
