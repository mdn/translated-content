---
title: "::first-letter (:first-letter)"
slug: Web/CSS/::first-letter
---

{{CSSRef}}

[CSS](/zh-CN/CSS) [伪元素](/zh-CN/CSS/Pseudo-elements) `::first-letter`会选中某 [block-level element](/zh-CN/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes)（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）。

```
/* Selects the first letter of a <p> */
p::first-letter {
  font-size: 130%;
}
```

元素首字符并不总是很容易识别：

- 首字符之前或紧跟首字符的标点符号在伪元素匹配范围内。标点符号（Punctuation）包括在开（Ps），闭（Pe），初始引用（Pi），结束引用（Pf）当中定义的任何 Unicode 字符以及其他种类的标点符号（Po）。
- 另外还会有一些以大写双字母组合命名的语言，比如荷兰的 `IJ`. 在这种罕见情况下，两个大写字母都理应被 `::first-letter` 伪元素匹配到。(但是浏览器对此支持得很糟糕，可以用[浏览器兼容性表格](#浏览器兼容性)进行核实).
- {{ cssxref("::before") }} 伪元素 和 {{ cssxref("content") }} 属性结合起来有可能会在元素前面注入一些文本。如此，`::first-letter` 将会匹配到 content 文本的首字母。

首行只在 [block-container box](/zh-CN/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes)内部才有意义，因此 `::first-letter` 伪元素 只在{{ cssxref("display") }}属性值为 block, `inline-block`, `table-cell`, `list-item` 或者 `table-caption`的元素上才起作用。其他情况下，`::first-letter` 毫无意义。

## 允许的属性值

只有一小部分 CSS 可以在包含使用了`::first-letter` 伪元素选择器的 CSS 规则集声明块内运用：

- 所有的字体属性 : {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} 以及 {{ Cssxref("font-family") }}.
- 所有的背景属性 : {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}以及 {{cssxref("background-blend-mode")}}.
- 所有的外边距属性：{{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}.
- 所有的内边距属性：{{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}.
- 所有的边框属性：比如一些简短的边框属性 {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, 还剩下许多冗长的边框属性等等。
- {{ cssxref("color") }} 属性。
- {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (使用恰当的话), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} `注意此刻必须没有浮动`) 等属性。

当这个列表以后被实现时，为了保持 css 不过时。建议你不要在声明块内使用任何其他属性。

> **备注：** 对于 CSS 2，伪元素采用单冒号前缀语法。因为伪类也是同样的语法，所以使得两者难以区分。CSS2.1 改变了伪元素的前缀语法可以解决这个问题。现在伪元素采用双冒号前缀，并且伪类仍然采用单冒号前缀。
>
> CSS2 伪类单冒号语法已得到广泛支持时，所有支持双冒号的浏览器同样也支持旧的单冒号语法。
>
> 考虑浏览器兼容性的话，`:first-letter` 是一个更有效的选择; 否则，`::first-letter` 更受欢迎。

## 示例

```css
/* 使每段开头的第一个字母变红变大 */

p::first-letter {
  /* 使用:first 来兼容 IE8- */
  color: red;
  font-size: 130%;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::first-line")}} 伪元素。
