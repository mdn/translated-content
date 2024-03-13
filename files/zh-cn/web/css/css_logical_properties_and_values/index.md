---
title: CSS 逻辑属性与逻辑值
slug: Web/CSS/CSS_logical_properties_and_values
---

{{CSSRef}}

**CSS 逻辑属性与逻辑值**这一 [CSS](/zh-CN/docs/Web/CSS) 模块引入了逻辑属性和逻辑值，由此得以通过逻辑的——而不是实体的——方向与尺度映射控制布局。

此模块也为之前在 CSS 2.1 中定义的属性定义了逻辑属性和逻辑值。逻辑属性定义了在相对方向下与对应的实体属性相等价的属性。

### 块向与行向

逻辑属性和逻辑值用抽象术语*块向*和*行向*描述其流向。这些术语的实体含义取决于[书写模式](/zh-CN/docs/Web/CSS/CSS_writing_modes)。

- 块向尺度
  - : 与行内文本流向垂直的方向上的尺度，如横排书写模式中的竖直尺度，以及竖排书写模式中的水平尺度。对于标准的英文文本，此尺度指竖直尺度。
- 行向尺度
  - : 与行内文本流向平行的方向上的尺度，如横排书写模式中的水平尺度，以及横排书写模式中的竖直尺度。对于标准的英文文本，此尺度指水平尺度。

## 参考

### 尺寸属性

- {{CSSXref("block-size")}}
- {{CSSXref("inline-size")}}
- {{CSSXref("max-block-size")}}
- {{CSSXref("max-inline-size")}}
- {{CSSXref("min-block-size")}}
- {{CSSXref("min-inline-size")}}

### 用于外边距、边框和内边距的属性

- {{CSSXref("border-block")}}
- {{CSSXref("border-block-color")}}
- {{CSSXref("border-block-end")}}
- {{CSSXref("border-block-end-color")}}
- {{CSSXref("border-block-end-style")}}
- {{CSSXref("border-block-end-width")}}
- {{CSSXref("border-block-start")}}
- {{CSSXref("border-block-start-color")}}
- {{CSSXref("border-block-start-style")}}
- {{CSSXref("border-block-start-width")}}
- {{CSSXref("border-block-style")}}
- {{CSSXref("border-block-width")}}
- {{CSSXref("border-color")}}
- {{CSSXref("border-inline")}}
- {{CSSXref("border-inline-color")}}
- {{CSSXref("border-inline-end")}}
- {{CSSXref("border-inline-end-color")}}
- {{CSSXref("border-inline-end-style")}}
- {{CSSXref("border-inline-end-width")}}
- {{CSSXref("border-inline-start")}}
- {{CSSXref("border-inline-start-color")}}
- {{CSSXref("border-inline-start-style")}}
- {{CSSXref("border-inline-start-width")}}
- {{CSSXref("border-inline-style")}}
- {{CSSXref("border-inline-width")}}
- {{CSSXref("border-start-start-radius")}}
- {{CSSXref("border-start-end-radius")}}
- {{CSSXref("border-end-start-radius")}}
- {{CSSXref("border-end-end-radius")}}
- {{CSSXref("border-style")}}
- {{CSSXref("border-width")}}
- {{CSSXref("margin")}}（`logical` {{Experimental_Inline}} 关键词）
- {{CSSXref("margin-block")}}
- {{CSSXref("margin-block-end")}}
- {{CSSXref("margin-block-start")}}
- {{CSSXref("margin-inline")}}
- {{CSSXref("margin-inline-end")}}
- {{CSSXref("margin-inline-start")}}
- {{CSSXref("padding")}}（`logical` {{Experimental_Inline}} 关键词）
- {{CSSXref("padding-block")}}
- {{CSSXref("padding-block-end")}}
- {{CSSXref("padding-block-start")}}
- {{CSSXref("padding-inline")}}
- {{CSSXref("padding-inline-end")}}
- {{CSSXref("padding-inline-start")}}

### 用于浮动和定位的属性

- {{CSSXref("clear")}}（`inline-end` 和 `inline-start` 关键词）
- {{CSSXref("float")}}（`inline-end` 和 `inline-start` 关键词）
- {{CSSXref("inset")}}
- {{CSSXref("inset-block")}}
- {{CSSXref("inset-block-end")}}
- {{CSSXref("inset-block-start")}}
- {{CSSXref("inset-inline")}}
- {{CSSXref("inset-inline-end")}}
- {{CSSXref("inset-inline-start")}}

### 用于尺寸局限的属性

- {{CSSXref("contain-intrinsic-block-size")}}
- {{CSSXref("contain-intrinsic-inline-size")}}

### 其他属性

- {{CSSXref("caption-side")}}（`inline-end` 和 `inline-start` 关键词）
- {{CSSXref("overflow-block")}}
- {{CSSXref("overflow-inline")}}
- {{CSSXref("overscroll-behavior-block")}}
- {{CSSXref("overscroll-behavior-inline")}}
- {{CSSXref("resize")}}（`block` 和 `inline` 关键词）
- {{CSSXref("text-align")}}（`end` 和 `start` 关键词）

### 弃用属性

- `offset-block-end` {{Non-standard_Inline}} {{Deprecated_Inline}}（现为 {{CSSXref("inset-block-end")}}）
- `offset-block-start` {{Non-standard_Inline}} {{Deprecated_Inline}}（现为 {{CSSXref("inset-block-start")}}）
- `offset-inline-end` {{Non-standard_Inline}} {{Deprecated_Inline}}（现为 {{CSSXref("inset-inline-end")}}）
- `offset-inline-start` {{Non-standard_Inline}} {{Deprecated_Inline}}（现为 {{CSSXref("inset-inline-start")}}）

## 指南

- [逻辑属性和逻辑值的基本概念](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
- [逻辑尺寸属性](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)
- [用于外边距、边框和内边距的逻辑属性](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)
- [用于浮动和定位的逻辑属性](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

## 规范

{{Specifications}}

## 浏览器兼容性

完整的兼容性信息见各属性的页面。
