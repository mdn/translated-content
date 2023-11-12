---
title: OpenType 字体特性指南
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
---

{{CSSRef}}

字体特性（font feature）或变体（variant）指的是在同一个 OpenType 字体中包含的不同的字形或字母风格。它包括了连字（ligature，由字符组合而成的特殊字形，如“ﬁ”或“ﬄ” ），字偶距（kerning，调整特定字母组合的间距），分数形式，数字风格，和一票其他内容。这些都被称为 OpenType 特性，而且可以通过特定属性和一种底层属性指定（见 {{cssxref("font-feature-settings")}}）来控制。本文将介绍在 CSS 中使用 OpenType 字体特性的全部内容。

某些字体中启用了这些特性的一或多个（通常是字偶距 \[kerning] 和默认连字），而其他特性留给设计师或开发者选择性地在特定场景中启用。

除了连字或齐行数字（数字排列均匀，而“老式”数字的看起来像小写字母）等广泛应用的特性，还有非常特殊的一部分，如样式集（stylistic set，可能含有几种特定的字形变体 \[variant]，它们可以一起使用），甚至是特定的东亚文字的字形变化。最后一种情况，使用变更的字形对于恰当的表达非常必要，所以这些属性比起大部分样式集更加重要，也超过其他大部分 OpenType 特性。

> **警告：** CSS 定义了很多的属性用以改变字体特性，然而很多没有完全实现。这里给出了所有属性的定义，但是大部分都只能用底层属性 {{cssxref("font-feature-settings")}} 来控制。可以同时使用两种方式定义 CSS，但是可能太笨重了。而只使用 `font-feature-settings` 控制一切的问题是，每次你要变动一个特性，就必须处理整个字符串（类似于用 {{cssxref("font-variation-settings")}} 操纵变量字体）。

## 了解字体的可用特性

有时，最麻烦的问题在于你没有字体的说明文档（许多字体设计师和厂商会提供样张和 CSS 范例，以便用户了解字体特性）。不过，有一些网站可以方便地显示出字体特性。例如，访问 [wakamaifondue.com](https://wakamaifondue.com)，把你的字体文件拖到圈里（页面上有提示），过一会就可以得到该字体文件功能、特性的完整报告。[Axis-praxis.org](https://axis-praxis.org) 也提供类似的功能，只需点击一下字体特性，就可以在相应的文本块中打开或关闭这些特性。

## 为什么使用字体特性？

花工夫来了解和使用这些字体特性有些麻烦，因而提出这样的问题也是很正常的。问题的答案是，特定的字体特性可以使网站更有用、更易读、更优美：

- **连字**（比如“ﬀ”或“ﬁ”）可以使字母间距更均匀，阅读更流畅。
- **分数形式**，可以让家居装修、食谱网站变得更易阅读和理解。
- 文本段落中的“老式”**数字风格**和小写字母搭配更合适；“表格数字”在表格里的费用清单里排列得更整齐；而“齐行”数字单独使用或与大写单词搭配使用显得更为统一。

虽说一个网站即使不用上述任何一个特性，也不会变得没用，但这里的每一种特性都可以令网站更便于使用，并因其对细节的关注而令人印象深刻。

> OpenType 特性就像字体中的密室。打开它们，你将发现，你可以让字体或微妙或显著地展现出它的另一面。并非所有 OpenType 特性都可以不分场合地使用，但有些特性对于优秀的字体排印是至关重要的。_——Tim Brown（Adobe 字体排印负责人）_

### 有时它是实质，而不仅是样式

在有些情况下（比如 {{cssxref("font-variant-east-asian")}}），OpenType 特性直接关系到特定字符的不同形式，涉及意义和易读性的差别。此时，字体特性不再只是为了美观，而成为内容本身不可或缺的一部分。

## 字体特性

开发者需要考虑许多不同的字体特性。在这里，我们根据 W3C 规范的主要属性和选项将它们分门别类加以介绍。

> **备注：** 下列示例将展示各个属性及其组合，以及与之等价的底层语法。由于浏览器实现的差异，等价语法的效果可能不完全一致；但大多数情况下，两种示例是一模一样的。展示所用的字体有 Playfair Display，Source Serif Pro，IBM Plex Serif，Dancing Script，以及 Kokoro。以上字体均可获取并自由使用（大多可以从 Google Fonts 或其他字体服务中获取）。

### 字偶距（{{cssxref("font-kerning")}}）

字偶距（kerning）指的是特定字偶（字符组合）内部的间距。字偶距调整特性是默认打开的（OpenType 规范推荐）。应当注意的是，如果对文本同时设置了字偶距和词距（{{cssxref("letter-spacing")}}），词距调整会在字偶距调整之后进行。

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Alternates ({{cssxref("font-variant-alternates")}})

Fonts can supply a number of different alternatives for various glyphs, such as different styles of lower case 'a' or more or less elaborate swashes in a script typeface. This property can activate an entire set of alternates or just a specific one, depending on the values supplied.The example below is showing several different aspects of working with alternate characters. Fonts with alternate glyphs can make them available across the board or individually in separate stylistic sets, or even individual characters. In this example you can see two different typefaces, and the introduction of the {{cssxref("@font-feature-values")}} at-rule. This is used to define shortcuts or named options that can be defined per font family. This way you can create a named option that applies to only a single font, or one that is shared and can be applied more generally

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

In this case, `@stylistic(alternates)` will show all the alternate characters for either font). Applying this to just the word 'My' alters the way the 'M' renders, and applying `@styleset(alt-a)` only changes the lower case 'a'.

Try changing the line

```css
font-variant-alternates: styleset(alt-a);
```

to

```css
font-variant-alternates: styleset(alt-g);
```

and notice that the lower case 'a' reverts to its regular form and the lower case 'g' changes instead.

#### More about alternates

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-alternates](/zh-CN/docs/Web/CSS/font-variant-alternates)

### 连字（{{cssxref("font-variant-ligatures")}}）

为了让两个或以上的字符（在间距、审美方面）显得更匀称，可以把它们替换成另一种字形，即连字（ligature）。最常见的连字包括“ﬁ，ﬂ，ﬄ”之类的字母连字；此外，也有许多其他类型的连字。有些连字经常使用，称为常用连字（common ligatures）；也有一些连字更为特殊，比如“任意连字（discretionary ligatures）”、“历史连字（historical ligatures）”和“上下文连字（contextual alternates）”。尽管后几种在技术上不算是连字，但在“将特定字母组合一起出现时替换成另一种字形”这一点上，它们和连字是基本一致的。

尽管连字在文字中更为常用，以下示例也展示了如何用连字功能生成箭头：

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### 位置（{{cssxref("font-variant-position")}}）

位置变体用于调用排版中的上标和下标字形。设计这些上标、下标字形，是为了在不改变基线和行距的条件下，配合前后的文本使用。这是“位置”字体特性相比 {{htmlelement("sub")}} 或 {{htmlelement("sup")}} 元素的优势之一。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### 大写字母（{{cssxref("font-variant-caps")}}）

OpenType 特性最常用的情形之一，就是用来正确地呈现小型大写字母（small caps）。小型大写字母，是指尺寸经过调整，可以和小写字母更好搭配的大写字母，一般用于缩写词。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### 数字（{{cssxref("font-variant-numeric")}}）

字体中通常包含几种不同风格的数字：

- “齐行（lining）”数字的高度一致，都排在相同的基线上。
- “老式（oldstyle）”数字高度各异，像小写字母一样，在字形设计上有升部（ascender）和降部（descender）。设计老式数字是为了用在行内文本中，目的在于使数字在视觉上与前后的字形融为一体（作用类似于小型大写字母）。

数字风格也和字距有关。比例（proportional）字距是一般设定；而表格（tabular）字距可以让数字对齐排列，不受字宽差异的影响，用在需要对齐数字的财务表格中尤为合适。

本属性支持两种分数形式：

- 单层分数（以斜杠作为分数线）；
- 双层分数（分子、分母分别在分数线上下）。

本属性也支持序数（比如“1st”“3rd”）特性；如果字体中有带斜杠的零的字形，本属性也可以调用。

#### 齐行数字和老式数字

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### 分数、序数和带斜杠的零

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### 东亚文字（{{cssxref("font-variant-east-asian")}}）

本属性可以调用字体中的各种异体字形。下列示例展示了仅启用 OpenType“jis78”字符集的字符串。取消勾选，你会看到更多汉字显示了出来。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> **备注：** 这些字是从字体样品中复制出来的，并无含义。

### 字体变体简写（{{cssxref("font-variant")}}）

本属性定义了以上所有属性的简写语法。设定 `normal` 值可以将所有属性重置为初始值。设定 `none` 值会把 `font-variant-ligatures` 设定为 `none` ，并重置其他属性为初始值。（这里的意思是说，如果字偶距特性是默认打开的，即使 {{cssxref("font-variant")}} 设置为 `none`，字偶距特性依然是打开的。）

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Font feature settings

{{cssxref("font-feature-settings")}} is the 'low level syntax' that allows explicit access to every named available OpenType feature. This gives a lot of control, but has some disadvantages in how it impacts inheritance and — as mentioned above — if you wish to change one setting, you have to redeclare the entire string (unless you're using [CSS custom properties](/zh-CN/docs/Web/CSS/Using_CSS_variables) to set the values). Because of this, it's best to use the standard properties shown above wherever possible.

There a huge number of possible features. You can see examples of a number of them above, and there are several resources available for finding more of them.

The general syntax looks like this:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

According to the specification you can either supply just the 4-character feature code or supply a 1 following the code (for enabling that feature) or a 0 (zero) to disable it. This is helpful if you have a feature like ligatures enabled by default but you would like to turn them off, like so:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

#### More on font-feature-settings codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (can't vouch for the truth of the name, but it's pretty big)
- [A list of OpenType features on Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Using CSS feature detection for implementation

Since not all properties are evenly implemented, it's good practice to set up your CSS using feature detection to utilize the correct properties, with {{cssxref("font-feature-settings")}} as the fallback.

For example, small caps can be set several ways, but if you want to ensure that no matter what the underlying capitalization is that you end up with everything in small caps, it requires 2 settings with `font-feature-settings` versus a single property value using {{cssxref("font-variant-caps")}}.

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
  .small-caps {
    font-feature-settings: normal;
    font-variant-caps: all-small-caps;
  }
}
```

## 相关链接

### CSS OpenType 特性演示

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Web 字体分析工具

- [Wakamai Fondue](https://wakamaifondue.com)
- [Axis Praxis](https://axis-praxis.org)

### W3C 规范

- [Font Feature Properties in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### 其他资源

- [Using OpenType features](https://helpx.adobe.com/fonts/using/use-open-type-features.html) by Tim Brown, Head of Typography, Adobe
- [Adobe's Syntax for OpenType features in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
