---
title: font-style
slug: Web/CSS/@font-face/font-style
---

{{CSSRef}}

## 概述

**font-style** 描述符允许开发者在 @font-rule 规则中为指定字体样式 (该条目区别于 font-style，意指用在 @font-rule 中的 font-style 属性)

For a particular font family, authors can download various font faces which correspond to the different styles of the same font family, and then use the `font-style` descriptor to explicitly specify the font face's style. The values for the CSS descriptor is same as that of its corresponding font property.

{{cssinfo}}

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

### Values

**`normal`**
Selects the normal version of the font-family.

**`italic`**
Specifies that font-face is an italicized version of the normal font .

**`oblique`**
Specifies that the font-face is an artificially sloped version of the normal font.

### Formal syntax

{{csssyntax}}

## Examples

As an example, consider the garamond font family, in its normal form, we get the following result:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

The italicized version of this text uses the same glyphs present in the unstyled version, but they are artificially sloped by a few degrees.

![artificially sloped garamond](garamondartificialstyle.jpg)

On the other hand, if a true italicized version of the font family exists, we can include it in the `src` descriptor and specify the font style as italic, so that it is clear that the font is italicized. True italics use different glyphs and are a bit different from their upright counterparts, having some unique features and generally have a rounded and calligraphic quality. These fonts are specially created by font designers and are **not** artificially sloped.

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![italic garamond](garamonditalic.jpg)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
