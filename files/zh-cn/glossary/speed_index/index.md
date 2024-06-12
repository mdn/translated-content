---
title: 速度索引
slug: Glossary/Speed_index
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**速度索引**（SI）是一个页面加载性能指标，用于衡量页面内容的可见加载速度。速度索引取决于视口的大小，以毫秒为单位表示：时间越短，得分越高。

速度索引是为了解决其他里程碑和指标的问题，提供真实用户体验的度量。速度索引已经在几个常见的审核中实现，包括[WebPageTest](https://github.com/WPO-Foundation/webpagetest-docs/blob/main/src/metrics/SpeedIndex.md) 和 [Lighthouse](https://github.com/paulirish/speedline)。

速度索引的计算方式是：在页面视觉上完全加载之前的每 100 毫秒间隔内，页面的视觉完成百分比。总分是未视觉完成的屏幕百分比的 10 次每秒间隔的总和。

_显示了页面加载事件之前的视窗内容如何加载，并由速度索引进行测量的折线图_：

![速度索引的计算](speedindex.png)

## 参见

- [了解 Web 性能](/zh-CN/docs/Learn/Performance)
