---
title: CSS 字体
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS 字体**是一个 CSS 模块，它定义了字体相关的属性和字体资源是如何加载的。它允许定义一个字体的样式，如字体家族、尺寸或字重、行高，以及对于一个字符有几个字形的字体时要使用的字形。

## 基础示例

以下示例展示了使用基本字体属性来对段落文本添加样式的方法。

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

```html
<p>
  Three hundred years ago<br />
  I thought I might get some sleep<br />
  I stretched myself out on an antique bed<br />
  An' my spirit did a midnite creep
</p>
```

它的结果如下所示：

{{EmbedLiveSample('基础示例', '100%', '200')}}

## 可变字体示例

你可以在 [v-fonts.com](https://v-fonts.com/) 和 [axis-praxis.org](https://www.axis-praxis.org/) 找到可变字体示例；参见[可变字体指南](/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)以获取更多信息。

## 参考文献

### 属性

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### @ 规则

- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}

## 指南

- [文本和字体样式基础](/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals)
  - : 在这篇面向初学者的文章中，我们详细介绍了文本和字体样式的基础知识，包括设置字重、字体家族和样式、字体简写、文本对齐和其他效果，以及行和字母间距。
- [OpenType 字体特性指南](/zh-CN/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)
  - : 字体特性（font feature）或变体（variant）指的是在同一个 OpenType 字体中包含的不同的字形或字符风格。它包括了连字（ligature，由字符组合而成的特殊字形，如“ﬁ”或“ﬄ” ）、字偶距（kerning，调整特定字母组合的间距）、分数形式、数字风格，和一票其他内容。这些都被称为 OpenType 特性，而且可以通过特定属性和一种底层属性指定（见 {{cssxref("font-feature-settings")}}）来控制。本文将介绍在 CSS 中使用 OpenType 字体特性的全部内容。
- [可变字体指南](/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : **可变字体指南**是 OpenType 字体规范上的演进，它允许将同一字体的多个变体统合进单独的字体文件中。从而无需再将不同字宽、字重或不同样式的字体分割成不同的字体文件。本文将介绍你需要知道的有关使用可变字体的所有内容。

## 规范

{{Specifications}}
