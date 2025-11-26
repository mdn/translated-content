---
title: CSS 列表与计数器
slug: Web/CSS/Guides/Lists
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 列表与计数器**模块用于控制列表项项目符号的样式和位置，并可通过字符串、计数器等特性组合来操作它们的值。

列表项的标记（无论是项目符号还是序号计数器）是其最具标识性的特性。列表项并不仅限于嵌套在 {{HTMLElement("ol")}} 或 {{HTMLElement("ul")}} 元素中的 {{HTMLElement("li")}} 元素，实际上，任何设置了 `display: list-item` 的元素都可以被视为列表项。

该模块定义了一系列 CSS 特性，用于设置和重置列表的计数器，指定用于标记的[计数器样式](/zh-CN/docs/Web/CSS/Guides/Counter_styles)或符号，并控制这些标记的位置。它还为开发者提供了创建自定义标记的能力。

## 参考

### 属性

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} 简写

此外，还有一个 `marker-side` 属性，但它尚未被完全定义或实现。

### 伪元素

- {{cssxref("::marker")}}

### 函数

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### 数据类型

- [`<counter>`](/zh-CN/docs/Web/CSS/Reference/Properties/content#counter)
- [`<counter-name>`](/zh-CN/docs/Web/CSS/Reference/Values/counter#counter-name)
- [`<counter-style>`](/zh-CN/docs/Web/CSS/Reference/Values/counter#counter-style)

## 指南

- [一致的列表缩进](/zh-CN/docs/Web/CSS/Guides/Lists/Indenting)
  - : 解释如何在不同浏览器中实现一致的列表缩进效果。

- [使用 CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : 说明如何使用 CSS 计数器属性来控制列表编号。

## 相关概念

- [CSS 计数器样式](/zh-CN/docs/Web/CSS/Guides/Counter_styles)
  - {{cssxref("@counter-style")}} at 规则
  - [`<counter-style-name>`](/zh-CN/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) 数据类型
  - [`<symbol>`](/zh-CN/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#值) 数据类型
  - {{cssxref("symbols", "symbols()")}} 函数

- {{HTMLElement("ol")}} `start`、`reversed` 和 `type` 属性
- {{HTMLElement("ul")}} `type` 属性
- {{HTMLElement("li")}} `type` 和 `value` 属性

## 规范

{{Specifications}}

## 参见

- [CSS 计数器样式](/zh-CN/docs/Web/CSS/Guides/Counter_styles)模块
- [CSS 伪元素](/zh-CN/docs/Web/CSS/Guides/Pseudo-elements)模块
- [CSS 生成内容](/zh-CN/docs/Web/CSS/Guides/Generated_content)模块
