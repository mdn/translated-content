---
title: Variable fonts guide
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
---

{{CSSRef}}

**可变字体（Variable fonts）**是 OpenType 字体规范上的演进，它允许将同一字体的多个变体统合进单独的字体文件中。从而无需再将不同字宽、字重或不同样式的字体分割成不同的字体文件。你只需通过 CSS 与一行{{cssxref("@font-face")}}引用，即可获取包含在这个单一文件中的各种字体变体。本文将介绍如何在 Web 中使用可变字体。

> **警告：** 为了能够在您的操作系统上正确地使用可变字体，请确定您的操作系统已经升级到最新版本。例如各 Linux 发行版，应将 Freetype 升级到最新版本。10.13 版本之前的 macOS 不支持可变字体。如果您的操作系统没有升级到最新版，您将无法在网页和 Firefox Developer Tools 中使用可变字体。

## 可变字体：何谓与何异

为了更好的理解可变字体有什么不同，我们有必要回顾一下什么是非可变字体，并对二者进行一番比较。

### 标准（静态）字体

过去，一个字体家族往往由大量独立字体文件组成，每个字体文件都代表某一特定的宽度/字重/样式的组合。因此你会看到有单独的字体文件叫做“Roboto Regular”、“Roboto Bold”，或是“Roboto Bold Italic”——这意味着你可能需要 20 或 30 个不同的字体文件才能算是有了一整个字体家族（对于有着不同宽度的大型字体来说，这个数量还要翻上几倍）。

在这样的情景下，为了在一个单纯显示进行正文展示的页面中使用一个字体，你至少需要四个字体文件：常规、斜体、加粗、斜体加粗。如果你想添加更多的字重，比如让题注更轻或让额外强调的地方更重，意味着你需要更多文件。这就导致了更多大量 HTTP 请求的产生，同时也需要下载更多的数据（通常每个文件至少有 20k 或更多）。

### 可变字体

通过使用可变字体，所有这些情况的排列组合都可以被装进一个文件中。这个文件可能比常规的单个字体文件大一些，但通常情况下，都不会大于，并且常常是小于你因为要展示正文所需要下载的四个文件的尺寸总和。使用可变字体的优势是你可以直接使用所有可用的字重、宽度和样式的字体，而不必像过去一样仅仅受限于使用其中单独的某一种。

这允许使用常见的排版技术，例如在不同的字重中设置不同大小的标题，以便在每种大小下都具有更好的可读性，或者在数据密集展示时使用稍窄一点的字体宽度。相比之下，在杂志的印刷系统中，在整个出版物中使用 10-15 种或更多不同的字重和宽度组合是很典型的——这比目前在 web 上的典型样式提供了更广泛的样式范围 (或者仅从性能方面考虑确实很实用)。

#### 关于字体系列，字重和变体的说明

您可能注意到，我们一直在讨论为每种权重和样式 (即粗体，斜体以及斜体加粗) 创建特定的字体文件，而不是依赖于浏览器来合成它们。这样做的原因，是大多数字体对于粗体和斜体都有非常特殊的设计，它们通常包含完全不同的字符 (例如，小写字母的“a”和“g”在斜体中常常是完全不同的)。在使用非可变字体时，为了最准确地反映字体设计，避免浏览器之间的差异以及它们如何合成或不合成不同的样式，在需要的地方加载特定的字体文件会更为准确。

您可能还会发现一些可变字体分为两个文件：一个用于正体及其所有变体，另一个包含斜体变体。有时这样做是为了在不需要或不使用斜体的情况下减小整体文件大小。在所有情况下，仍然可以通过通用的 {{cssxref("font-family")}} 名称链接它们，以便您可以使用相同的 font-family 和相应的 {{cssxref("font-style")}} 来调用它们。

## 介绍“可变轴” (variation axis)

可变字体新格式的核心是**可变轴**的概念，其描述了字体设计中某一特性的允许变化范围。例如‘字重轴’描述了字体的粗细；“宽度轴”描述了字体的宽窄；“斜体轴”描述是否使用斜体字形并且可相应地开关；等。请注意，轴既可以是范围选择又可以是开关选择。字重可能在 1-999 之间，而斜体可能只是简单的 0 或 1（关闭或打开）。

如规范中所定义，存在两种变形轴，**注册轴**和**自定义轴**：

- 注册轴最为常见，常见到制定规范的作者认为有必要进行标准化。目前注册的五个轴是字重，宽度，倾斜度，斜体和光学尺寸。W3C 已经将它们映射到现有的 CSS 属性，并在一个案例中引入了一个新的属性，您将在下面看到。
- 自定义轴实际上是无限的：字体设计师可以定义和界定他们喜欢的任何轴，并且只需要给它一个四个字母的标签以在字体文件格式本身中识别它。您可以在 CSS 中使用这些四个字母的标签来指定沿该变化轴的点，您也将在下面的代码示例中看到。

### 注册轴和现有的 CSS 属性

在本节中，我们将通过示例和相应的 CSS 来演示已定义的五个注册轴。在可能的情况下，包括标准语法和低级语法。较低级语法 ({{cssxref("font-variation-settings")}}) 是为了测试对可变字体支持的早期实现而实现的第一个机制，并且需要使用五个注册轴之外的新轴或自定义轴。但是，W3C 的意图是在其他属性可用时不使用此语法。因此，应尽可能使用相应的属性，`font-variation-settings`的低级语法仅用于设置值不可用的值或轴。

#### 注意

1. 当使用 `font-variation-settings` 时，请务必注意轴名称区分大小写。注册轴名称必须为小写，自定义轴必须为大写。例如：

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (weight) 是一个注册轴， `GRAD` (grade) 是一个自定义轴。

2. 如果您使用 `font-variation-settings` 设置了值并想要更改其中一个值，则必须重新声明所有值。您可以通过对各个值使用[CSS 自定义属性](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)（CSS 变量）来解决此限制，并只需修改单个自定义属性的值。该指南末尾有示例代码。

### 字重

字重（由 `wght` 标签表示）是定义了字形的笔画粗细范围（在印刷术语中称为轻重）的设计轴。很长一段时间，CSS 都能够通过 {{cssxref("font-weight")}}) 这个采用 100 到 900 之间的以 100 为增量的数字值以及类似于 `normal` 或 `bold` 等这样有相应数字值的别名（在这种情况下为 400 和 700）的关键字的属性来实现。在处理非可变或可变字体时仍然会用到这些数值或关键字，但对于可变字体，1 到 1000 之间的任何数字都是有效的。

应该注意的是，此时 `@font-face` 声明中没有办法将变量字体变形轴上的特定点“映射”到关键字 `bold` （或任何其他关键字）。这通常可以很容易地解决，但在编写 CSS 时需要额外的步骤：

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

可以通过编辑下面实例的 CSS 来使用字重值。

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### 字宽

字宽（由 `wdth` 标签表示）定义字形可以是多窄或多宽（印刷术语中称为压缩或扩展）的设计轴。这通常在 CSS 中通过使用 {{cssxref("font-stretch")}} 属性设置，该属性值表示为高于或低于“正常”的百分比（100％），任何大于 0 的数字在技术上都是有效的 - 尽管它的范围更有可能是接近 100％的，例如 75％-125％。如果提供的数字值超出了字体编码的范围，浏览器应该以允许的最接近值渲染字体。

> **备注：** 在使用 `font-variation-settings` 时不需要使用%。

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

可以通过编辑下面实例的 CSS 来使用字宽值。

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### 斜体

Italic（`ital`）轴的工作方式不同，因为它仅可以打开或关闭; 而没有中间值。斜体设计通常包括与其正体截然不同的字形，因此在从正体到斜体的过渡中，通常会发生许多字形（或字符）替换。Italic 和 oblique 通常可以互换使用，但事实上实际上是完全不同的。在这种情况下，Oblique 定义为术语 `slant` （参见下面的部分），并且字体通常具有一个或另一个斜体，但不是两者都有。

在 CSS 中，使用 {{cssxref("font-style")}} 属性对文本应用 italic 和 oblique。

```css
font-style: italic;

font-variation-settings: "ital" 1;
```

可以通过编辑下面实例的 CSS 来使用斜体值。

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### 倾斜

Slant（由 `slnt` 标签表示），或者它经常被称为“oblique” - 与真正的斜体不同之处在于它改变了字体的角度但不执行任何类型的字符替换。它也是可变的，因为它表示为数值范围。这允许字体沿该轴的任何位置变化。允许的范围通常为 0（直立）到 20 度 — 可以使用该范围内的任何数值，因此字体可以倾斜一点点。但是，-90-90 度的任何值都是有效的。

> **备注：** 在使用 `font-variation-settings` 时不需要使用 `deg` 这个关键字。

```css
font-style: oblique 14deg;

font-variation-settings: "slnt" 14;
```

可以通过编辑下面实例的 CSS 来使用 slant/oblique 值。

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

### 视觉尺寸（Optical sizes）

这是数字字体和 CSS 的新功能，但其实对应于设计加工金属活字中的一项古老技艺。视觉尺寸是指基于物理尺寸改变字形的整体笔画厚度的做法。如果尺寸非常小（例如等于 10 或 12px），则字符将具有整体较粗的笔画，可能还会进行其他小的修改，以确保以较小的物理尺寸复制和可读性。相反，当使用更大尺寸（如 48 或 60px）时，笔画的粗细重量可能会有更大的变化，外观会更接近原始设计意图。

虽然这样做最初是为了在油墨和纸张印刷过程中提供补偿（小尺寸铅字上非常细的线会很难印上，导致字形外观残损），但现在它很好地转化为在数字显示中对屏幕质量和物理尺寸渲染的补偿。

光学尺寸值通常旨在根据 `font-size`自动应用，但也可以使用较低级别的 `font-variation-settings` 语法进行操作。

创建了一个在 CSS 中中支持可变字体的新属性 {{cssxref("font-optical-sizing")}} 。使用 `font-optical-sizing` 时，唯一允许的值是 `auto` 或 `none` - 因此该属性仅允许打开或关闭光学尺寸。但是，当使用 `font-variation-settings: 'opsz' <num>`时，您可以使用数值。在大多数情况下，您可能希望将 `font-size`（正在渲染的类型的物理大小）与 `opsz` 值（使用 `auto`时应用光学尺寸的方式）进行匹配。提供了特定值，以便在必要时（为了易认性，美观或其他原因）可以应用特定值来覆盖默认值。

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

可以通过编辑下面实例的 CSS 来使用视觉尺寸值。

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### 自定义轴

自定义轴可以是字体设计师想象的任何设计变化轴。可能有一些会变得相当普遍，甚至演变成注册轴。

### Grade

由于在字体设计方面有着众所周知的历史，等级可能会成为更常见的自定义轴之一。设计不同等级的字体通常是根据预期的用途和印刷技术来进行的。 “等级”一词指的是字体设计的相对重量或密度，但与传统的“重量”不同之处在于文本占据的物理空间不会改变，因此改变文本等级并不会改变文本或其周围元素的整体布局。这使得等级成为有用的变化轴，因为它可以变化或动画而不会引起文本本身的回流。

```css
font-variation-settings: "GRAD" 88;
```

可以通过编辑下面实例的 CSS 来使用字体等级值。

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### 使用可变字体：改变 @font-face

加载可变字体的语法与其他 web 字体非常相似，但有一些显著的差异，这些差异是通过对现代浏览器中可用的传统{{cssxref("@font-face")}}语法的升级提供的。

基本语法是相同的，但是字体技术是不一样的，并且可变字体可以提供像对 `font-weight` 和 `font-stretch` 等描述符的允许范围，而不是根据加载的字体文件来命名。

```css
@font-face {
  font-family: "MyVariableFontName";
  src: "path/to/font/file/myvariablefont.woff2" format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
}
```

> **备注：** 并非所有浏览器都实现了字体格式的完整语法，因此请仔细测试。如果您将字体格式设置为仅文件格式，而不是格式变体（即 `woff2` 而不是 `woff2-variations`），那么支持可变字体的所有浏览器仍将渲染它们，但如果可能，最好使用正确的语法。

> **备注：** 如果使用适当的属性（即 `font-weight`或 `font-stretch`），提供 `font-weight`， `font-stretch`和 `font-style`的值范围将使浏览器不会尝试渲染超出该范围的轴，但不会阻止您通过 `font-variation-settings` 使用无效值，因此请小心使用。

## 使用旧版本浏览器

可以使用 CSS 特性查询检查是否支持可变字体（请参阅 [{{cssxref("@supports")}}](/zh-CN/docs/Web/CSS/@supports)），因此在生产中，可以在特性查询块内使用可变字体。

```css
h1 {
  font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: "wdth" 115) {
  h1 {
    font-family: some-variable-font-family;
  }
}
```

## 示例页面

以下示例页面展示了构造 CSS 的两种不同方法。第一种方法尽可能使用标准属性。第二个示例使用 CSS 自定义属性设置 `font-variation-settings` 字符串的值，并展示如何通过覆盖单个变量而不是重写整个字符串来更轻松地更新单个变量值。请注意 `h2`上的悬停效果，它只会改变等级轴自定义属性值。

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## 资源

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4) (editor’s draft)
- [W3C Github issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com) （通过简单的拖拽告诉您字体可以做什么的网站）
- [Axis Praxis](https://www.axis-praxis.org) （独创的可变字体排版试验网站）
- [V-Fonts.com](https://v-fonts.com) （可变字体目录网站）
- [Font Playground](https://play.typedetail.com) （另一个拥有独特用户界面的可变字体排版试验网站）
