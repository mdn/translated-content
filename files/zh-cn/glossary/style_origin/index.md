---
title: 样式来源
slug: Glossary/Style_origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

在 {{Glossary("CSS")}} 中，有三类样式变化的来源，其类别统称为**样式来源**，分别是**用户代理来源**、**用户来源**和**作者来源**。

- 用户代理来源
  - : 用户代理来源是由用户的网页浏览器使用的默认样式组成的样式来源。如果没有其他应用于内容的样式，则在渲染元素时使用用户代理来源的样式。
- 用户来源
  - : 用户来源是包含网页浏览器的用户添加的任何 CSS 的样式来源。这些可能是通过开发者工具添加的样式，或者是通过自动将自定义样式应用于内容的浏览器扩展程序（如 [Stylus](https://add0n.com/stylus.html) 或 [Stylish](https://userstyles.org/)）添加的样式。
- 作者来源
  - : 作者来源是文档中包含的所有样式的样式来源，无论是嵌入在 {{Glossary("HTML")}} 中还是从外部样式表文件加载的。

当移除样式时（如使用 {{cssxref("unset")}} 或 {{cssxref("revert")}} 关键字时），样式来源用于确定在样式层叠回溯过程中停止的地方。

## 参见

- [CSS 层叠与继承：层叠来源](https://drafts.csswg.org/css-cascade-4/#cascading-origins)
