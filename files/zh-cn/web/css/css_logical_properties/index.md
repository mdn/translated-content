---
title: CSS 逻辑属性与值
slug: Web/CSS/CSS_Logical_Properties
---

{{CSSRef}}

**CSS 逻辑属性与值**是 [CSS](/zh-CN/docs/Web/CSS) 的一个模块，其引入的属性与值能做从逻辑角度控制布局，而不是从物理、方向或维度来控制。

The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties.

### block 与 inline

Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/zh-CN/docs/Web/CSS/CSS_Writing_Modes).

- Block dimension
  - : The dimension perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension.
- Inline dimension
  - : The dimension parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension.

## 参考

### 大小属性

- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}

### 外边距、边框与内边距属性

- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-color")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-style")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("border-width")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

### 浮动与定位属性

- {{CSSxRef("clear")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("float")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("inset")}}
- {{CSSxRef("inset-block")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-inline")}}
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}

### 其他属性

- {{CSSxRef("caption-side")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("resize")}} (`block` and `inline` keywords)
- {{CSSxRef("text-align")}} (`end` and `start` keywords)

### 已弃用属性

- {{CSSxRef("offset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-start")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}})

## 指南

- [Basic concepts of logical properties and values](/zh-CN/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [Logical Properties for sizing](/zh-CN/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [Logical Properties for margins, borders and padding](/zh-CN/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding)
- [Logical Properties for floating and positioning](/zh-CN/docs/Web/CSS/CSS_Logical_Properties/Floating_and_positioning)

## 规范

{{Specifications}}

## 浏览器兼容性

In general:

- Firefox has support for the mapped properties — where there is a direct mapping from the physical to the logical version.
- Chrome, from version 69, has support for the mapped properties.
- Edge, from version 79, has the same support as Chrome.
- Firefox 66 introduces support for two value shorthands, also behind a flag in Chrome.
- Internet Explorer has no support.

See the individual property pages for full compatibility information.
