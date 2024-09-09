---
title: 规范顺序
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

CSS **规范顺序**是指需要指定（或{{Glossary("parse", "解析")}}）或作为 CSS 属性值的一部分进行{{Glossary("serialization", "序列化")}}的单独值的顺序。它由属性的正式{{Glossary("syntax", "语法")}}定义，通常指的是应该在单个简写值的一部分中指定全称值的顺序。

例如，{{cssxref("background")}} 简写属性值由几个 `background-*` 全称属性组成。这些全称值的规范顺序定义如下：

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

另外，它的语法规定如果给出了 {{cssxref("background-size")}} 的值，则这个值**必须**在 {{cssxref("background-position")}} 的值**之后**指定，并用斜杠分隔。其他值则可以以任何顺序出现。

## 参见

- [CSS 值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
- StackOverflow 上的[“规范顺序”对 CSS 属性的意义有什么？](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties)给出了进一步有意义的讨论。
