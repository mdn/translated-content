---
title: font-variation-settings
slug: Web/CSS/Reference/Properties/font-variation-settings
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

**`font-variation-settings`** CSS 属性为[可变字体](/zh-CN/docs/Web/CSS/Guides/Fonts/Variable_fonts)特性提供了底层控制，让你可以指定要改变的特性的四字母轴名称及其值。

{{InteractiveExample("CSS Demo: font-variation-settings")}}

```css interactive-example-choice
font-variation-settings: "wght" 50;
```

```css interactive-example-choice
font-variation-settings: "wght" 850;
```

```css interactive-example-choice
font-variation-settings: "wdth" 25;
```

```css interactive-example-choice
font-variation-settings: "wdth" 75;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

p {
  font-size: 1.5rem;
  font-family: Amstelvar;
}
```

## 语法

```css
/* 使用默认设置 */
font-variation-settings: normal;

/* 为字体轴名称设置值 */
font-variation-settings: "XHGT" 0.7;

/* 全局值 */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### 值

该属性的值可以取如下两种形式之一：

- `normal`
  - : 文本采用默认设置。
- `<string> <number>`
  - : 在渲染文本时，可变字体轴名称列表会传递给文本布局引擎，以启用或禁用字体特性。每个设置总是一个或多个由 4 个 ASCII 字符组成的 {{cssxref("&lt;string&gt;")}} 和表示要设置的轴值的 {{cssxref("number")}} 组成的对组。如果 `<string>` 字符较多或较少，或包含 U+20 - U+7E 码位范围以外的字符，则整个属性无效。根据字体设计者定义的字体可用值范围，`<number>` 可以是小数或负数。

## 描述

该属性是一种低级机制，用于在没有其他方法启用或访问可变字体特性的情况下设置这些特性。只有在没有基本属性来设置这些特性（例如 {{cssxref("font-weight")}}、{{cssxref("font-style")}}）时，才可以使用该属性。

使用 `font-variation-settings` 设置的字体特性将始终覆盖使用相应基本字体属性（如 `font-weight`）设置的字体特性，无论它们出现在级联的哪个位置。在某些浏览器中，目前只有在 {{cssxref("@font-face")}} 声明包含 {{cssxref("@font-face/font-weight", "font-weight")}} 范围时才会出现这种情况。

### 已注册和自定义轴

可变字体轴有两种类型：**已注册**和**自定义**。

已注册轴是最常见的轴——常见到本规范的作者认为值得将其标准化。请注意，这并不意味着作者必须在字体中包含所有这些轴。

下面是已注册的轴及其相应的 CSS 属性：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">轴标签</th>
      <th scope="col">CSS 属性</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

自定义轴可以是字体设计者希望在字体中改变的任何内容，例如升线或降线的高度、衬线的大小或其他任何可以想象到的内容。只要有唯一的 4 个字符轴，任何轴都可以使用。随着时间的推移，有些轴会变得越来越常见，甚至会被注册。

> [!NOTE]
> 注册轴标记使用小写标记，而自定义轴应使用大写标记。需要注意的是，字体设计者并不是必须遵循这种做法，有些设计者也不会这样做。重要的一点是，轴标签是区分大小写的。

要在操作系统上使用可变字体，需要确保操作系统是最新的。例如，Linux 操作系统需要最新的 Linux Freetype 版本，而 10.13 之前的 macOS 不支持可变字体。如果操作系统不是最新版本，就无法在网页或 Firefox 开发工具中使用可变字体。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

你可以在我们的[可变字体指南](/zh-CN/docs/Web/CSS/Guides/Fonts/Variable_fonts)中找到大量其他可变字体示例。

### 控制可变字体字重（wght）

你可以编辑下面示例中的 CSS，尝试不同的字体字重值。看看如果指定的值超出了字重范围会发生什么。

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 940)}}

### 控制可变字体斜度（slnt）

你可以编辑下面示例中的 CSS，尝试不同的字体斜度值。

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 940)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [可变字体指南](/zh-CN/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- microsoft.com 的 [OpenType 可变字体概述](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- microsoft.com 的 [OpenType 设计变异轴标签注册表](https://docs.microsoft.com/typography/opentype/spec/dvaraxisreg)
- axis-praxis.org 的 [OpenType 可变字体](https://www.axis-praxis.org/)
- v-fonts.com 的[可变字体](https://v-fonts.com/)
