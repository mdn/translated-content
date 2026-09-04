---
title: OpenType 字体特性指南
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: f78cc1a104586ebcdbba5f3d3c7df7083d369068
---

字体特性（font feature）或变体（variant）指的是在同一个 OpenType 字体中包含的不同的字形或字符样式。它包括了连字（ligature，由字符组合而成的特殊字形，如“ﬁ”或“ﬄ”）、字偶距（kerning，调整特定字母组合的间距）、分数形式、数字样式，以及其他内容。这些都被称为 OpenType 特性，而且可以通过特定属性和一种底层控制属性（{{cssxref("font-feature-settings")}}）在 web 中使用。本文将介绍在 CSS 中使用 OpenType 字体特性所需的所有内容。

某些字体会默认启用一个或多个特性（通常是字偶距和默认连字），而其他特性留给设计师或开发者选择性地在特定场景中启用。

除了连字或齐线数字（数字排列均匀，而“老式”数字的看起来像小写字母）等广泛应用的特性，还有非常特殊的一部分，如样式集（可能含有几种特定的字形变体，它们可以一起使用），甚至是特定的东亚文字的字形变化。对于最后一种情况，这些变化实际上是正确表达语言所必须的，因为它们超越了大多数其他 OpenType 特性的风格偏好。

> [!WARNING]
> CSS 定义了很多的属性用以改变字体特性，然而很多属性没有完全实现。这里给出了所有属性的定义，但是大部分都只能用底层属性 {{cssxref("font-feature-settings")}} 来控制。可以同时使用两种方式定义 CSS，但这可能会变得很繁琐。而只使用 `font-feature-settings` 控制一切的问题是，每次你要变动一个特性，就必须重新定义整个字符串（类似于用 {{cssxref("font-variation-settings")}} 操纵变量字体）。

## 了解字体的可用特性

有时，最麻烦的问题在于你没有字体的说明文档（正是因为这个，许多字体设计师和厂商会提供示例页面和 CSS）。不过，有一些网站可以更容易地弄清它们。你可以访问 [wakamaifondue.com](https://wakamaifondue.com)，把字体文件拖到提示的圈内，过一会就可以得到该字体的所有功能、特性的完整报告。[Axis-praxis.org](https://axis-praxis.org) 也提供类似的功能，只需在相应的文本块中点击一下特性，就可以打开或关闭它们。

## 为什么使用字体特性？

考虑到需要花一些工夫才能了解和使用这些字体特性，因而提出为什么需要使用它们似乎是一个合理的问题。答案是，特定的字体特性可以使网站更有用、更易读、更优美：

- **连字**（比如“ﬀ”或“ﬁ”）可以使字母间距更均匀，阅读更流畅。
- **分数形式**，可以让家居装修、食谱网站变得更易阅读和理解。
- 文本段落中的“老式”**数字风格**和小写字母搭配更合适；“表格数字”在表格里的费用清单里排列得更整齐；而“齐线”数字单独使用或与大写单词搭配使用显得更为统一。

虽说一个网站即使不用上述任何一个特性，也不会变得毫无用处，但这里的每一种特性都可以令网站更便于使用，并因其对细节的关注而令人印象深刻。

> OpenType 特性就像字体中的密室。打开它们，你将发现，你可以让字体或微妙或显著地展现出它的另一面。并非所有 OpenType 特性都可以不分场合地使用，但有些特性对于出色的排版至关重要。_——Tim Brown（Adobe 排版设计负责人）_

### 有时它是实质，而不仅是样式

在有些情况下（比如 {{cssxref("font-variant-east-asian")}}），OpenType 特性直接关系到特定字符的不同形式，涉及意义和易读性的差别。此时，字体特性不再只是为了美观，而成为了内容本身不可或缺的部分。

## 字体特性

需要考虑许多不同的字体特性。在这里，我们根据 W3C 规范的主要属性和选项将它们分门别类加以介绍。

> [!NOTE]
> 下列示例将展示各个属性及其组合，以及与之等价的底层语法。由于浏览器实现的差异，等价语法的效果可能不完全一致；但大多数情况下，两种示例是一模一样的。展示所用的字体有 Playfair Display、Source Serif Pro、IBM Plex Serif、Dancing Script，以及 Kokoro。以上字体均可获取并自由使用（大多可以从 Google Fonts 或其他字体服务中获取）。

### 字偶距

关联的 CSS 属性：{{cssxref("font-kerning")}}

这是特定字偶（字符组合）内部的间距。字偶距调整特性是默认启用的（OpenType 规范推荐）。应当注意的是，如果还对文本设置了 {{cssxref("letter-spacing")}}，则其会在字偶距调整之后应用。

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### 备用字体

关联的 CSS 属性：{{cssxref("font-variant-alternates")}}

字体可以为各种字形提供多种不同的代替，例如小写字母“a”的不同样式，或是书法字体中不同复杂程度的花体。该属性可以激活整个备用字形集，也可以只激活其中的一个，具体取决于所提供的值。下面的示例展示了使用备用字符的几个方面。字体可以在整个字体中提供备用字形，也可以在单独的样式集中提供，甚至可以在单个字符中提供。在下面的示例中，你可以看到两种不同的字体，以及 {{cssxref("@font-feature-values")}} at 规则的介绍。该 at 规则用于定义快捷方式或命名选项，这些选项可以针对每个字体系列进行定义。这样，你就可以创建一个仅适用于单个字体的命名选项，或者创建一个共享的选项，可以更普遍地应用。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

在此示例中，`@stylistic(alternates)` 将显示字体中所有的备用字符。将其应用于“My”这个词，会改变“M”的呈现方式；而应用 `@styleset(alt-a)` 则只会改变小写的“a”。

尝试将这一行

```css
font-variant-alternates: styleset(alt-a);
```

改变为

```css
font-variant-alternates: styleset(alt-g);
```

并注意小写的“a”恢复到了它的常规形式，而小写的“g”发生了变化。

#### 有关备用字体的更多信息

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>

### 连字

关联的 CSS 属性：{{cssxref("font-variant-ligatures")}}

连字是指替换两个或多个单独的字符，以便更加平滑地表示它们（在间距或审美方面）。最常见的连字包括“fi”、“fl”或“ffl”之类的字母——但也有其他可能的类型。其中的有些连字经常使用，被称为常用连字（common ligature）；也有一些属于特殊的类别，比如“任意连字（discretionary ligature）”、“历史连字（historical ligature）”和“上下文连字（contextual alternate）”。尽管后几种在技术上不算是连字，但在“将特定字母组合一起出现时替换成另一种字形”这一点上，它们和连字是基本一致的。

连字在脚本字体中更为常用，因此以下示例也展示了如何用连字生成箭头：

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### 位置

关联的 CSS 属性：{{cssxref("font-variant-position")}}

位置变体用于启用排版中的上标和下标字形。设计这些上标、下标字形，是为了在不改变基线和行距的条件下，配合前后的文本使用。这对于 {{htmlelement("sub")}} 或 {{htmlelement("sup")}} 元素十分有用。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### 大写

关联的 CSS 属性：{{cssxref("font-variant-caps")}}

OpenType 特性最常用的情形之一，就是正确地呈现小型大写字母（small cap）。小型大写字母，是指大小可以和小写字母更好搭配的大写字母，一般用于首字母缩略语和缩写词。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### 数字

关联的 CSS 属性：{{cssxref("font-variant-numeric")}}

字体中通常包含几种不同风格的数字：

- “齐行”（lining）数字的高度一致，都排在相同的基线上。
- “老式”（oldstyle）数字高度各异，像小写字母一样，在设计上有升部（ascender）和降部（descender）。设计老式数字是为了用在行内文本中，目的在于使数字在视觉上与前后的字形融为一体（作用类似于小型大写字母）。

其还有间距的概念。比例（proportional）字距是常规的设置，而表格（tabular）字距可以让数字对齐排列，不受字宽差异的影响，尤其适合于财务表格中的数字对齐排列。

该属性支持两种分数形式：

- 单层分数（以斜杠作为分数线）。
- 双层分数（分子、分母分别在分数线上下）。

其还支持序数（比如“1st”或“3rd”）以及带斜杠的零（如果字体中存在）。

#### 齐行数字和老式数字

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### 分数、序数和带斜杠的零

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### 东亚文字

关联的 CSS 属性：{{cssxref("font-variant-east-asian")}}

该属性允许访问字体中的各种字形。以下示例展示了仅启用 OpenType“jis78”字符集的字符串。取消勾选，你会看到更多字符显示了出来。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> [!NOTE]
> 这些字是从字体样例中复制出来的，并无含义。

### 字体变体简写

关联的 CSS 属性：{{cssxref("font-variant")}}

{{Cssxref("font-variant")}} 属性是所有上述属性的简写语法。设定 `normal` 值可以将所有属性重置为初始值。设定 `none` 值会把 `font-variant-ligatures` 设定为 `none` ，并将其他属性重置为初始值。（这里的意思是说，如果字偶距特性是默认启用的，即使 {{cssxref("font-variant")}} 设置为 `none`，字偶距特性依然是启用的。）

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## 字体特性设置

{{cssxref("font-feature-settings")}} 是允许直接访问每个命名的 OpenType 特性的“底层语法”。这样可以获得更多的控制权，但也有一些缺点，比如它对继承的影响，以及——如上所述——如果你想改变一个设置，你就必须重新声明整个字符串（除非你使用 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)来设置值）。因此，最好在可能的情况下使用上面展示的标准属性。

其具有大量可能的特性。你可以在上面看到其中一部分的示例，也有一些资源可以帮助你找到更多的特性。

一般语法如下所示：

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

根据规范，你可以只提供 4 个字符的特性代码，或者在代码后面加上 1（启用该特性）或 0（禁用该特性）。这对与禁用默认启用的连字等特性很有帮助，如下所示：

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### 更多关于 font-feature-settings 代码的信息

- [“OpenType 特性的完整 CSS 演示”](https://sparanoid.com/lab/opentype-features/)（不能保证标题的真实性，但它的确非常详细）
- [维基百科上的 OpenType 特性列表](https://en.wikipedia.org/wiki/List_of_typographic_features)

## 使用 CSS 特性检测进行实现

由于并非所有属性都得到了平等的实现，因此最好使用特性检测来设置 CSS，以便利用正确的属性，并将 {{cssxref("font-feature-settings")}} 作为回退。

例如，小型大写字母可以通过几种方式设置，但如果你想确保无论底层的大写字母是什么，最终都会得到所有的小型大写字母，就需要使用 `font-feature-settings` 进行 2 次设置，而不是使用 {{cssxref("font-variant-caps")}} 设置单个属性值。

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

## 参见

### CSS OpenType 特性演示

- [完整的 OpenType 特性 CSS 演示](https://sparanoid.com/lab/opentype-features/)

### Web 字体分析工具

- [Wakamai Fondue](https://wakamaifondue.com)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C 规范

- [CSS 字体模块第 3 版中的字体特性属性](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [CSS 字体模块第 4 版中的 font-variant-alternatives](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### 其他资源

- [使用 OpenType 特性](https://helpx.adobe.com/fonts/using/use-open-type-features.html)，来自 Adobe 排版设计负责人 Tim Brown
- [CSS 中的 OpenType 特性的语法](https://helpx.adobe.com/cn/fonts/using/open-type-syntax.html)
