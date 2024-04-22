---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
---

{{CSSRef}}

**`font-variation-settings`** CSS 属性提供了对 [variable font](/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) 特征的低级控制，通过指定要更改的特征的四个字母轴名称及其值。

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

> **备注：** This property is a low-level mechanism designed to set variable font features where no other way to enable or access those features exist. You should only use it when no basic properties exist to set those features (e.g. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

> **备注：** font characteristics set using `font-variation-settings` will always override those set using the corresponding basic font properties, e.g. `font-weight`, no matter where they appear in the cascade. In some browsers, this is currently only true when the `@font-face` declaration includes a `font-weight` range.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for variable font axis names */
font-variation-settings: "XHGT" 0.7;

/* Global values */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: unset;
```

### Values

This property's value can take one of two forms:

- `normal`
  - : Text is laid out using default settings.
- `<string> <number>`
  - : When rendering text, the list of variable font axis names is passed to the text layout engine to enable or disable font features. Each setting is always one or more pairs consisting of a {{cssxref("&lt;string&gt;")}} of 4 ASCII characters followed by a {{cssxref("number")}} indicating the axis value to set. If the `<string>` has more or fewer characters or contains characters outside the U+20 - U+7E codepoint range, the whole property is invalid. The `<number>` can be fractional or negative, depending on the value range available in your font, as defined by the font designer.

### Formal syntax

{{csssyntax}}

## Registered and custom axes

Variable font axes come in two types: **registered** and **custom**.

Registered axes are the most commonly encountered — common enough that the authors of the specification felt they were worth standardizing. Note that this doesn't mean that the author has to include all of these in their font.

Here are the registered axes along with their corresponding CSS properties:

| Axis Tag       | CSS Property                                 |
| -------------- | -------------------------------------------- |
| "wght"         | {{cssxref("font-weight")}}                   |
| "wdth"         | {{cssxref("font-stretch")}}                  |
| "slnt" (slant) | {{cssxref("font-style")}}: `oblique + angle` |
| "ital"         | {{cssxref("font-style")}}: `italic`          |
| "opsz"         | {{cssxref("font-optical-sizing")}}           |

Custom axes can be anything the font designer wants to vary in their font, for example ascender or descender heights, the size of serifs, or anything else they can imagine. Any axis can be used as long as it is given a unique 4-character axis. Some will end up becoming more common, and may even become registered over time.

> **备注：** Registered axis tags are identified using lower-case tags, whereas custom axes should be given upper-case tags. Note that font designers aren't forced follow this practice in any way, and some won't. The important takeaway here is that axis tags are case-sensitive.

## Examples

See below for interactive examples demonstrating the registered axes. You can find a number of other variable fonts examples at our [Variable fonts guide](/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), [v-fonts.com](https://v-fonts.com/), and [axis-praxis.org](https://www.axis-praxis.org/).

> **警告：** In order to use variable fonts on your operating system, you need to make sure that it is up to date. For example Linux OSes need the latest Linux Freetype version, and macOS prior to 10.13 does not support variable fonts. If your operating system is not up to date, you will not be able to use variable fonts in web pages or the Firefox Developer Tools.

### Weight (wght)

The following live example's CSS can be edited to allow you to play with font weight values.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Slant (slnt)

The following live example's CSS can be edited to allow you to play with font slant/oblique values.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- [Variable fonts guide](/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [OpenType Font Variations Overview](https://www.microsoft.com/typography/otspec180/otvaroverview.htm)
- [OpenType Design-Variation Axis Tag Registry](https://www.microsoft.com/typography/otspec/dvaraxisreg.htm)
