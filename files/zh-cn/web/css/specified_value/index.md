---
title: 指定值
slug: Web/CSS/specified_value
---

{{CSSRef}}

## 概述

CSS 属性的 **指定值** (specified value) 会通过下面 3 种途径取得：

1. 在当前文档的样式表中给这个属性赋的值，会被优先使用。例如：把 {{ cssxref("color") }} 属性的值设为`green` ，那么对应元素内的文字就会变成绿色。
2. 如果在当前文档的样式表中没有给这个属性赋值，那么它会尝试从父元素那继承一个值。例如：在一个 {{ HTMLElement("div") }} 内部放置一个段落 ({{ HTMLElement("p") }})，这个 {{ HTMLElement("div") }} 的 {{ cssxref("font") }} 属性值为 "Arial"，而 {{ HTMLElement("p") }} 的 {{ cssxref("font") }} 属性没有被赋值，那么它的字体就会继承为 Arial
3. 如果上面的两种途径都不可行，则把 CSS 规范中针对这个元素的这个属性的初始值作为指定值

## 相关规范

- [CSS 2.1 Assigning property values #specified-value](https://www.w3.org/TR/CSS2/cascade.html#specified-value)
