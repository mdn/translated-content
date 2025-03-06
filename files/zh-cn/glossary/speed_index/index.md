---
title: 速度指数
slug: Glossary/Speed_index
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**速度指数**（SI）页面加载性能指标用于衡量页面可见内容的加载速度。速度指数取决于视口的大小，以毫秒为单位表示：时间越短，得分越高。

速度指数是为了解决其他里程碑和指标的问题，提供真实用户体验的度量。速度指数已经在几个常见的审核中实现，包括 [WebPageTest](https://github.com/WPO-Foundation/webpagetest-docs/blob/main/src/metrics/SpeedIndex.md) 和 [Lighthouse](https://github.com/paulirish/speedline)。

速度指数的计算方式是：在页面可视内容完全加载之前，每隔 100 毫秒计算一次页面可视内容加载完成的百分比。指数的总分则是同样间隔内未完全显示的屏幕百分比之和。

_显示了页面加载事件之前的首屏内容如何加载和由速度指数测量所得的图表_：

![速度指数的计算](speedindex.png)

## 参见

- [了解 Web 性能](/zh-CN/docs/Learn_web_development/Extensions/Performance)
