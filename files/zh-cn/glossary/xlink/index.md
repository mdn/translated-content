---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

XLink 是用于描述 XML 与 XML 或其他文档之间的链接的 W3C 标准。一些行为留给实现来决定如何处理。

在 Firefox 中，简单的 XLink 是“支持”的（至少在 SVG 和 MathML 中），尽管如果加载一个带有 XLink 的普通 XML 文档并尝试单击 XML 树中的相关点，则它们不会作为链接工作。

对于那些可能发现 XLink 1.0 的常规链接过于繁琐的人来说，XLink 1.1 不再需要为简单链接指定 `xlink:type="simple"`。

XLink 在 [SVG](/zh-CN/docs/Web/SVG)、[MathML](/zh-CN/docs/Web/MathML) 和其他重要标准中使用。

### 规范

- [XLink 1.0](https://www.w3.org/TR/xlink/)
- [XLink 1.1](https://www.w3.org/TR/xlink11/)（目前是工作草案）

### 参见

- [XML](/zh-CN/docs/Web/XML)
- [代码片段：getAttributeNS](/zh-CN/docs/Web/API/Element/getAttributeNS)——一个用于处理一些浏览器不支持的 DOM 方法的包装器
