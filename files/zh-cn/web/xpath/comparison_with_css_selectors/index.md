---
title: Comparison of CSS Selectors and XPath
slug: Web/XPath/Comparison_with_CSS_selectors
original_slug: Web/CSS/CSS_Selectors/Comparison_with_XPath
---

{{CSSRef("Selectors")}}{{QuickLinksWithSubpages("/en-US/docs/Web/XPath")}}

本文旨在记录 CSS 选择器和 XPath 之间的区别，以便 Web 开发人员能够更好地为正确的工作选择合适的工具。

| [XPath feature](/zh-CN/docs/Web/XPath)                                                                                                                                       | [CSS equivalent](/zh-CN/docs/Web/CSS/CSS_Selectors)                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/zh-CN/docs/Web/XPath/Axes/ancestor), [`parent`](/zh-CN/docs/Web/XPath/Axes/parent) or [`preceding-sibling`](/zh-CN/docs/Web/XPath/Axes/preceding-sibling) axis | {{CSSxRef(":has",":has()")}} selector {{experimental_inline}}                                                                               |
| [`attribute`](/zh-CN/docs/Web/XPath/Axes/ancestor) axis                                                                                                                      | [Attribute selectors](/zh-CN/docs/Web/CSS/Attribute_selectors)                                                                                               |
| [`child`](/zh-CN/docs/Web/XPath/Axes/child) axis                                                                                                                             | [Child combinator](/zh-CN/docs/Web/CSS/Child_selectors)                                                                                                      |
| [`descendant`](/zh-CN/docs/Web/XPath/Axes/descendant) axis                                                                                                                   | [Descendant combinator](/zh-CN/docs/Web/CSS/Descendant_selectors)                                                                                            |
| [`following-sibling`](/zh-CN/docs/Web/XPath/Axes/following-sibling) axis                                                                                                     | [General sibling combinator](/zh-CN/docs/Web/CSS/General_sibling_selectors) or [adjacent sibling combinator](/zh-CN/docs/Web/CSS/Adjacent_sibling_selectors) |
| [`self`](/zh-CN/docs/Web/XPath/Axes/self) axis                                                                                                                               | {{CSSxRef(":scope")}} or {{CSSxRef(":host")}} selector                                                                                        |
