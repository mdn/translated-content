---
title: 继承
slug: Web/CSS/Inheritance
---

{{CSSRef}}

在 css 中，每个[CSS 属性定义](/zh-CN/docs/CSS/CSS_Reference)的概述都指出了这个属性是默认继承的 ("Inherited: Yes") 还是默认不继承的 ("Inherited: no")。这决定了当你没有为元素的属性指定值时该如何计算值。

## 继承属性

当元素的一个**继承属性**（inherited property）没有指定值时，则取父元素的同属性的[计算值 computed value](/zh-CN/docs/CSS/computed_value)。只有文档根元素取该属性的概述中给定的[初始值](/zh-CN/docs/CSS/initial_value)（[initial value](/zh-CN/docs/CSS/initial_value)）（这里的意思应该是在该属性本身的定义中的默认值）。

继承属性的一个典型例子就是 {{ Cssxref("color") }} 属性。给出以下样式规则：

```css
p {
  color: green;
}
```

若将其应用在下面这段 HTML 代码上…

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

…文本 "emphasized text" 就会呈现为绿色，因为 `em` 元素继承了 `p` 元素 {{ Cssxref("color") }} 属性的值，而没有获取 `color` 属性的初始值（这个 `color` 值用于页面没有指定 `color` 时的根元素）。

## 非继承属性

当元素的一个**非继承属性**(在 Mozilla code 里有时称之为**reset property** ) 没有指定值时，则取属性的[初始值 initial value](/zh-CN/docs/CSS/initial_value)（该值在该属性的概述里被指定）。

非继承属性的一个典型例子就是 {{ Cssxref("border") }} 属性。给出以下样式规则：

```css
p {
  border: medium solid;
}
```

若将其应用在下面这段 HTML 代码上…

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

…文本 "emphasized text" 就没有边框，因为 {{ Cssxref("border-style") }} 属性的初始值为`none`。

## 注意

{{ Cssxref("inherit") }} 关键字允许显式的声明继承性，它对继承和非继承属性都生效。

可以使用 {{cssxref("all")}} 简写属性一次控制所有属性的继承，该属性将其值应用于所有属性，例如：

```plain
font {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

这会将 {{cssxref("font")}} 属性的样式恢复为用户代理（浏览器）的默认值，除非存在用户样式表，在这种情况下使用该样式表。然后它将字体大小加倍并应用 {{cssxref("font-weight")}} 属性 为`"bold"`

## 参见

- 控制继承：{{ cssxref("inherit") }}, {{cssxref("initial")}}, {{cssxref("unset")}}, and {{cssxref("revert")}}
- [CSS 层叠](/zh-CN/docs/Web/CSS/Cascade)
- [层叠和继承](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
