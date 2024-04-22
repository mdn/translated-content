---
title: CSS 选择器与 XPath 的对比
slug: Web/XPath/Comparison_with_CSS_selectors
---

{{XsltSidebar}}

本文旨在记录 CSS 选择器和 XPath 之间的区别，以便 Web 开发人员能够更好地为正确的工作选择合适的工具。

| [XPath 特性](/zh-CN/docs/Web/XPath)                                                                                                                                        | [CSS 等价形式](/zh-CN/docs/Web/CSS/CSS_selectors)                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/zh-CN/docs/Web/XPath/Axes#ancestor)、[`parent`](/zh-CN/docs/Web/XPath/Axes#parent) 或 [`preceding-sibling`](/zh-CN/docs/Web/XPath/Axes#preceding-sibling) 轴 | {{CSSxRef(":has",":has()")}} 选择器 {{experimental_inline}}                                                                        |
| [`attribute`](/zh-CN/docs/Web/XPath/Axes#ancestor) 轴                                                                                                                      | [属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors)                                                                              |
| [`child`](/zh-CN/docs/Web/XPath/Axes#child) 轴                                                                                                                             | [子代组合器](/zh-CN/docs/Web/CSS/Child_combinator)                                                                                 |
| [`descendant`](/zh-CN/docs/Web/XPath/Axes#descendant) 轴                                                                                                                   | [后代组合器](/zh-CN/docs/Web/CSS/Descendant_combinator)                                                                            |
| [`following-sibling`](/zh-CN/docs/Web/XPath/Axes#following-sibling) 轴                                                                                                     | [后续兄弟组合器](/zh-CN/docs/Web/CSS/Subsequent-sibling_combinator)或[接续兄弟组合器](/zh-CN/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/zh-CN/docs/Web/XPath/Axes#self) 轴                                                                                                                               | {{CSSxRef(":scope")}} 或 {{CSSxRef(":host")}} 选择器                                                                               |
