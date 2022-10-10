---
title: display
slug: Web/CSS/display
---

{{CSSRef}}

**`display`** 属性可以设置元素的内部和外部显示类型 _display types_。元素的外部显示类型 _outer display types_ 将决定该元素在[流式布局](/zh-CN/docs/Web/CSS/CSS_Flow_Layout)中的表现（[块级或内联元素](/zh-CN/docs/Web/CSS/CSS_Flow_Layout)）；元素的内部显示类型 _inner display types_ 可以控制其子元素的布局（例如：[flow layout](/zh-CN/docs/Web/CSS/CSS_Flow_Layout)，[grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout) 或 [flex](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)）。

在 **CSS 规范**（特指 CSS Level 1/2/3 规范）中查阅 **`display`** 属性的所有取值时需要注意：个别取值的详细信息记录在独立的规范中。例如，`display: flex` 的详细信息在 _CSS Flexible Box Model_ 规范中记录。可以在本文档末尾的表格中查看所有有关的规范。

## 语法

`display` 属性使用关键字取值来指定，关键字取值被分为六类：

```css
.container {
  display:  [ <display-outside> | <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy> ;
}
```

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : 这些关键字指定了元素的外部显示类型，实际上就是其在流式布局中的角色（即在流式布局中的表现）。
    {{page("/zh-CN/docs/Web/CSS/display-outside", "Syntax")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
  - : 这些关键字指定了元素的内部显示类型，它们定义了该元素内部内容的布局方式（假定该元素为非替换元素 non-replaced element）。
    {{page("/zh-CN/docs/Web/CSS/display-inside", "Syntax")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : 将这个元素的外部显示类型变为 block 盒，并将内部显示类型变为多个 list-item inline 盒。
    {{page("/zh-CN/docs/Web/CSS/display-listitem", "Syntax")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
  - : 有些布局模型（如 `table` 和 `ruby`）有着复杂的内部结构，因此它们的子元素可能扮演着不同的角色。这一类关键字就是用来定义这些“内部”显示类型，并且只有在这些特定的布局模型中才有意义。
    {{page("/en-US/docs/Web/CSS/display-internal", "Syntax")}}
- {{CSSxRef("&lt;display-box&gt;")}}
  - : 这些值决定元素是否使用盒模型。
    {{page("/en-US/docs/Web/CSS/display-box", "Syntax")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 对于 **`display`** 属性使用单关键字语法，对于相同布局模式的 block 级和 inline 级变体需要使用单独的关键字。
    {{page("/en-US /docs/Web/CSS/display-legacy", "Syntax")}}

### 是否该继续使用 Legacy 取值？

CSS Level 3 规范详细说明了 `display` 属性的两类取值——显式地指定了外部和内部显示属性的规范——但是还没有被浏览器广泛支持。

{{CSSxRef("&lt;display-legacy&gt;")}} 方法允许使用单个关键字达到相同效果，开发者应该在双关键字取值被广泛支持之前采用这个方法。举例来说，你可以这样指定 inline flex 容器：

```css
.container {
    display: inline-flex;
}
```

也可以用两个关键字来指定。

```css
.container {
    display: inline flex;
}
```

有关规范变更的更多信息，查阅文章 [Adapting to the new two-value syntax of display](/zh-CN/docs/Web/CSS/display/two-value_syntax_of_display)。

### 全局设置

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## 指南和示例

上面 [语法](#语法) 部分提供了 **`display`** 取值的多个示例。下面的资料将详细介绍 **`display`** 的各个取值。

- [接受 display 新的二值语法](/zh-CN/docs/Web/CSS/display/two-value_syntax_of_display)

### CSS Flow Layout (`display: block`, `display: inline`)

- [块级和内联元素在正常流中的布局](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [流布局和溢出](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [流布局和书写方法](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Formatting Contexts Explained](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
- [流内和流外](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### `display: flex`

- [弹性盒模型的基本概念](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- 在弹性容器中对齐项目
- [Controlling Ratios of Flex Items Along the Main Axis](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Cross-browser Flexbox mixins](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins)
- [Mastering Wrapping of Flex Items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Ordering Flex Items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relationship of flexbox to other layout methods](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Backwards Compatibility of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Typical use cases of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### `display: grid`

- [Basic Concepts of Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship to other layout methods](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Line-based placement](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in grid layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in grid layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grids, logical values and writing modes](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and Accessibility](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout and Progressive Enhancement](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizing common layouts using grids](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

除此之外，你可以在 MDN 上找到布局模型的详细解释：

- [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexible 布局](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout) (初学者学习模块)

## 无障碍相关

### `display: none;`

将 `display` 设置为 `none` 会将元素从 [无障碍树 _accessibility tree_](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) 中移除。这会导致该元素及其所有子代元素不再被屏幕阅读技术 _screen reading technology_ 访问。

如果你只是想从视觉上隐藏这个元素，对无障碍更加友好的做法是使用 [属性组合](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) 来将其从屏幕上隐藏，但仍可以被屏幕阅读器 _screen readers_ 等辅助技术解析。

### `display: contents;`

当前大多数浏览器对 `display: contents;` 的实现是：将设置了该值的元素从 [无障碍树 _accessibility tree_](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) 中移除，但保留其子代元素。这会导致该元素自身不再被屏幕阅读技术 _screen reading technology_ 访问。这在 [CSS 规范](https://drafts.csswg.org/css-display/#valdef-display-contents) 中被视为不正确的行为。

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tables

将 {{HTMLElement("table")}} 元素的 `display` 值修改为 `block`, `grid`, 或 `flex` 会修改其在 [无障碍树 _accessibility tree_](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) 中的表现，这会使得 table 元素不能被屏幕阅读技术正常处理。

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Block and inline layout in normal flow](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Introduction to formatting contexts](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
