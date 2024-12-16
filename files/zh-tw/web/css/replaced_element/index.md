---
title: 置換元素 (Replaced element)
slug: Web/CSS/Replaced_element
---

{{CSSRef}}

## 摘要

CSS 中所謂的「置換元素 (**Replaced element**)」，即是該元素所呈現的內容不在 CSS 的控制範圍之內。這類外部物件所呈現的內容均獨立於 CSS 之外。常見的置換元素包含 {{HTMLElement("img")}}、{{HTMLElement("object")}}、{{HTMLElement("video")}}，或如 {{HTMLElement("textarea")}} 與 {{HTMLElement("input")}} 的表單元素。某些元素 (像是 {{HTMLElement("audio")}} 或 {{HTMLElement("canvas")}}) 只有在特殊情況下才是置替換元素。若是透過 CSS {{cssxref("content")}} 屬性所插入的物件，則稱為「不具名置換元素 (Anonymous replaced elements)」。

在某些情況下，CSS 會特別處理置換元素，如計算邊距空白 (Margin) 與某些 `auto` 的值。

另需注意的是，**某些**置換元素本身就具備固定尺寸 (Intrinsic dimension) 或已定義的基準線 (Baseline)，並可由 CSS 的某些屬性 (如 {{cssxref("vertical-align")}}) 所利用。

## 另可參閱

- CSS 重要概念：

  - [CSS 語法](/zh-TW/docs/Web/CSS/Syntax)
  - [@ 規則](/zh-TW/docs/Web/CSS/At-rule)
  - [註釋](/zh-TW/docs/Web/CSS/Comments)
  - [優先級](/zh-TW/docs/Web/CSS/Specificity)
  - [繼承](/zh-TW/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-TW/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [佈局模式](/zh-TW/docs/Web/CSS/Layout_mode)
  - [視覺格式化模型](/zh-TW/docs/Web/CSS/Visual_formatting_model)
  - [外邊距合併](/zh-TW/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-TW/docs/Web/CSS/initial_value)
    - [計算值](/zh-TW/docs/Web/CSS/computed_value)
    - [解析值](/zh-TW/docs/Web/CSS/resolved_value)
    - [指定值](/zh-TW/docs/Web/CSS/specified_value)
    - [應用值](/zh-TW/docs/Web/CSS/used_value)
    - [實際值](/zh-TW/docs/Web/CSS/actual_value)

  - [特性值定義語法](/zh-TW/docs/Web/CSS/Value_definition_syntax)
  - [特性簡寫](/zh-TW/docs/Web/CSS/Shorthand_properties)
  - [可置換元素](/zh-TW/docs/Web/CSS/Replaced_element)
