---
title: 繼承
slug: Web/CSS/Inheritance
---

{{CSSRef}}

## 摘要

每個 [CSS property definition](/zh-TW/docs/Web/CSS/Reference) 都寫道是否這個屬性預設有繼承: ("Inherited: Yes") 或是 預設沒有繼承: ("Inherited: no"). 這個設定將會在沒有位屬性標註值時發生.

## 繼承屬性

When no value for an **inherited property** has been specified on an element, the element gets the [computed value](/zh-TW/docs/Web/CSS/computed_value) of that property on its parent element. Only the root element of the document gets the [initial value](/zh-TW/docs/Web/CSS/initial_value) given in the property's summary.

A typical example of an inherited property is the {{ Cssxref("color") }} property. Given the style rules:

```css
p {
  color: green;
}
```

HTML:

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

the words "emphasized text" will appear green, since the `em` element has inherited the value of the {{ Cssxref("color") }} property from the `p` element. It does _not_ get the initial value of the property (which is the color that is used for the root element when the page specifies no color).

## 非繼承屬性

When no value for an **non-inherited property** (sometimes called a **reset property** in Mozilla code) has been specified on an element, the element gets the [initial value](/zh-TW/docs/Web/CSS/initial_value) of that property (as specified in the property's summary).

A typical example of a non-inherited property is the {{ Cssxref("border") }} property. Given the style rules:

```css
p {
  border: medium solid;
}
```

HTML:

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

the words "emphasized text" will not have a border (since the initial value of {{ Cssxref("border-style") }} is `none`).

## 註

{{ Cssxref("inherit") }} 關鍵字允許作者準確地去標註. 這個在繼承和非繼承屬性都是有效的.

## 參見

- [CSS Reference](/zh-TW/docs/Web/CSS/Reference)
- CSS 重要概念：

  - [CSS 語法](/zh-TW/docs/Web/CSS/Syntax)
  - [@ 規則](/zh-TW/docs/Web/CSS/At-rule)
  - [註釋](/zh-TW/docs/Web/CSS/Comments)
  - [優先級](/zh-TW/docs/Web/CSS/Specificity)
  - [繼承](/zh-TW/docs/Web/CSS/inheritance)
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

- {{ Cssxref("inherit") }}
