---
title: At 规则
slug: Web/CSS/At-rule
---

{{CSSRef}}

**At 规则**是一个 [CSS 语句](/zh-CN/docs/Web/CSS/Syntax#css_语句)，用来指示 CSS 如何运行。以 at 符号开头，'`@`'（`U+0040 COMMERCIAL AT`），后跟一个标识符，并包括直到下一个分号的所有内容，'`;`'（`U+003B SEMICOLON`），或下一个 [CSS 块](/zh-CN/docs/Web/CSS/Syntax#css_声明块)，以先到者为准。

## 语法

### 规则

```css
/* 一般结构 */
@identifier (RULE);

/* 示例：通知浏览器使用 UTF-8 字符集 */
@charset "utf-8";
```

下面是一些 at 规则，由它们的标示符指定，每种规则都有不同的语法：

- {{cssxref("@charset")}}——定义样式表使用的字符集。
- {{cssxref("@import")}}——告诉 CSS 引擎引入一个外部样式表。
- {{cssxref("@namespace")}}——告诉 CSS 引擎必须考虑 XML 命名空间。

### 嵌套

```css
@identifier (RULE) {
}
```

嵌套 at 规则，是嵌套语句的子集，不仅可以作为样式表里的一个语句，也可以用在条件规则组里：

- {{cssxref("@media")}}——如果满足媒介查询的条件则条件规则组里的规则生效。
- {{cssxref("@supports")}}——如果满足给定条件则条件规则组里的规则生效。{{experimental_inline()}}
- {{cssxref("@document")}}——如果文档样式表满足给定条件则条件规则组里的规则生效。_（推迟至 CSS Level 4 规范）_
- {{cssxref("@page")}}——描述打印文档时布局的变化。
- {{cssxref("@font-face")}}——描述将下载的外部的字体。{{experimental_inline()}}
- {{cssxref("@keyframes")}}——描述 CSS 动画的中间步骤。{{experimental_inline()}}
- {{cssxref("@counter-style")}}——定义不属于预定义样式集的特定计数器样式。_（在候选推荐阶段，仅在 Gecko 中实现）_
- {{cssxref("@font-feature-values")}}（加上 `@swash`、`@ornaments`、`@annotation`、`@stylistic`、`@styleset` 和 `@character-variant`）——在 {{cssxref("font-variant-alternates")}} 中定义通用名称，以便在 OpenType 中以不同方式激活功能。_（在候选推荐阶段，仅在 Gecko 中实现）_
- {{cssxref("@property")}} {{experimental_inline}}——描述自定义属性和变量。_（目前处于工作草案阶段）_
- {{cssxref("@layer")}}——声明一个级联层，并在有多个级联层时定义优先顺序。

## 条件规则组

就像属性值那样，每条 at 规则都有不同的语法。不过一些 @规则可以归为一个特殊的分类：**条件规则组**。这些语句使用相同的语法。它们都可以包括 _嵌套语句_——*规则集*或者是*嵌套 at 规则*。它们都表达：它们所指的条件 (类型不同) 总等效于 **true** 或者 **false**，如果为 **true** 那么它们之中的语句生效。

条件规则组由 [CSS Conditionals Level 3](https://drafts.csswg.org/css-conditional-3/) 定义：

- {{cssxref("@media")}}
- {{cssxref("@supports")}}
- {{cssxref("@document")}}_（推迟至 CSS Level 4 规范）_

既然条件规则组可以嵌套语句，那么嵌套层级不定。

## 索引

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@document")}} {{deprecated_inline}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@property")}} {{experimental_inline}}
- {{cssxref("@supports")}}

## 规范

{{Specifications}}

## 参见

- CSS 关键概念
  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值
    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)
  - [值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
