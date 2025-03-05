---
title: SVG 字体
slug: Web/SVG/Tutorial/SVG_fonts
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

当规定 SVG 时，在浏览器支持 web 字体并不流行。因为访问正确的字体文件对于正确呈现字体是有确定性的，SVG 中添加了一个字体描述技术，以提供这个能力。它并不是为了和别的格式比如说 PostScript 或 OTF 兼容，而是为了将字形信息嵌入 SVG 呈现的一个简单的方法。

> [!NOTE]
> SVG 字体当前只在 Safari 和 Android 浏览器中受支持。
>
> Chrome 38（和 Opera25）[移除了这个功能](https://www.chromestatus.com/feature/5930075908210688)，Firefox 已经[无限期推迟实施它](https://bugzilla.mozilla.org/show_bug.cgi?id=119490)以专注于实现 [WOFF](/zh-CN/docs/Web/CSS/CSS_fonts/WOFF)。别的工具，如 Batik 和部分 Inkscape 支持 SVG 字体嵌入。

定义一个 SVG 字体的基础是 {{ SVGElement("font") }} 元素。

## 定义一个字体

在 SVG 中嵌入一个字体，有一些原料要求。让我们用一个示例演示它（来自[规范文档](https://www.w3.org/TR/SVG/fonts.html#FontElement)的示例），并详细解释。

```html
<font id="Font1" horiz-adv-x="1000">
  <font-face
    font-family="Super Sans"
    font-weight="bold"
    font-style="normal"
    units-per-em="1000"
    cap-height="600"
    x-height="400"
    ascent="700"
    descent="300"
    alphabetic="0"
    mathematical="350"
    ideographic="400"
    hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold" />
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
  <!-- Outline of exclamation point glyph -->
  <glyph unicode="!" horiz-adv-x="300"></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

我们从{{ SVGElement("font") }}元素开始。这个携带了一个 ID 属性，使它能够通过一个`URI`被引用（如下所示）。属性`horiz-adv-x`定义了相比之单一字形的路径定义，一个字符的平均宽度。值`1000`设置了一个起作用的合理值。有一些陪同的属性，帮助进一步定义基本的字形盒布局。

{{ SVGElement("font-face") }}元素在 SVG 中等同于 CSS 的 [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) 声明。它定义了最终字体的基本属性，比如说 weight、style，等等。在上面这个示例中，最重要的是定义`font-family`，后面的 CSS 和 SVG `font-family`属性可以引用它的值。属性`font-weight`和`font-style`跟 CSS 中的描述符有同样的目的。所有后面的属性都是字体布局引擎的呈现指令，举个例子，字形的全部高度可以[提升](http://en.wikipedia.org/wiki/Ascender_%28typography%29)多少。

它的子元素，{{ SVGElement("font-face-src") }}元素，相对于 CSS 的`@font-face`描述符中的`src`描述符。你可以利用它的子元素 {{ SVGElement("font-face-name") }}和{{ SVGElement("font-face-uri") }}把字体声明指向外源。以上示例表达了如果渲染器有一个名为“Super Sans Bold”的本地字体可用，它将使用这个本地字体。

紧跟着{{ SVGElement("font-face-src") }}元素的是一个{{ SVGElement("missing-glyph") }}元素。它定义了如果一个特定的字形在字体中找不到，而且也没有回调机制的话，该如何显示。它同时还显示了如何创建字形：在里面简单添加任一个图形化 SVG 内容。你可以在这里使用任何其他的 SVG 元素，甚至是 {{ SVGElement("filter") }}元素、{{ SVGElement("a") }}元素或者 {{ SVGElement("script") }}元素。然而，为了简化字形，你可以简单添加一个属性`d`——它精确定义了字形的形状，就像标准 SVG 路径所做的那样。

真正的字形是用{{ SVGElement("glyph") }}元素定义的。它最重要的属性是`unicode`。它定义了表达这个字形的 unicode 代码点。如果你还在一个字形上指定了 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang)属性，你可以更进一步专门限定它为特定的语言（由目标上的`xml:lang`属性表达）。而且，你可以使用任意的 SVG 来定义这个字形，它允许用户代理所支持的很多效果。

有两个进一步的元素，可以定义在`font`元素里面：{{ SVGElement("hkern") }}元素和{{ SVGElement("vkern") }}元素。这两个元素每个引用到至少两个字符（属性 u1 和属性 u2）以及一个属性 k。属性 k 决定了那些字符之间的距离应该减少多少。下面的示例指示用户代理把“A”和“V”字符放得比标准的字符间距更靠近一些。

```html
<hkern u1="A" u2="V" k="20" />
```

## 引用一个字体

如果你已经把你的字体声明如上放在一起，你可以使用一个单一的`font-family`属性以实现在 SVG 文本上应用字体：

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

然而，你可以自由组合一些方法，在如何定义字体方面有极大的自由度。

### 选项：使用 CSS @font-face

你可以使用`@font-face`以引用远程（或者非远程）字体：

```html
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

### 选项：引用一个远程字体

上面提到的 `font-face-uri` 元素允许你引用一个外来字体，因此可以有很大的可重用性：

```html
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri xlink:href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
