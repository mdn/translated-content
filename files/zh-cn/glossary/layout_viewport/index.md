---
title: 布局视口
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

**布局视口**是浏览器绘制网页的{{glossary("viewport", "视口")}}。本质上代表了用户可以看到的内容；而{{Glossary("visual viewport", "可视视口")}}则代表布局视口中当前可见的部分，即用户显示设备上当前可见的布局视口子区域。

这一点很重要，例如在移动设备上，用户通常可以通过捏合手势来缩放网站内容。渲染的文档不会发生任何变化，因此布局视口在用户调整缩放级别时保持不变。但是，可视视口会更新，以指示用户可以看到的页面区域。

## 参见

- {{Glossary("Viewport", "视口")}}
- {{Glossary("Visual viewport", "可视视口")}}
- [视口概念](/zh-CN/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM 视图](/zh-CN/docs/Web/CSS/Guides/CSSOM_view)模块
- [CSSOM 视图 API](/zh-CN/docs/Web/API/CSSOM_view_API)
- 维基百科上的[视口](https://zh.wikipedia.org/wiki/视口)
- [两种视口的故事](https://www.quirksmode.org/mobile/viewports.html)（Quirksmode）
