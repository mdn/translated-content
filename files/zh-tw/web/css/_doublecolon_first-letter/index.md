---
title: "::first-letter (:first-letter)"
slug: Web/CSS/::first-letter
---

{{CSSRef}}

## 概要

`::first-letter` [CSS](/zh-TW/docs/Web/CSS) [虛擬元素](/zh-TW/docs/CSS/Pseudo-elements)選取了一個區塊第一行的第一個字母，如果那一行前面沒有其他內容（例如圖片或是行內表格）。

The first letter of an element is not necessarily trivial to identify:

- Punctuation, that is any characters defined in Unicode in the _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf) and _other punctuation_ (Po) classes, preceding or immediately following the first letter is also matched by this pseudo-element.
- Similarly some languages have digraphs that are always capitalized together, like the `IJ` in Dutch. In these rare cases, both letters of the digraph should be matched by the `::first-letter` pseudo-element. (This is poorly supported by browsers, check the [browser compatibility table](/zh-TW/docs/CSS/::first-letter#瀏覽器相容性)).
- Finally, a combination of the {{ cssxref("::before") }} pseudo-element and the {{ cssxref("content") }} property may inject some text at the beginning of the element. In that case, `::first-letter` will match the first letter of this generated content.

A first line has meaning only in a [block-container box](/zh-TW/docs/CSS/Visual_formatting_model#block-level_elements_and_block_boxes), therefore the `::first-letter` pseudo-element has an effect only on elements with a {{ cssxref("display") }} value of `block`, `inline-block`, `table-cell`, `list-item` or `table-caption`. In all other cases, `::first-letter` has no effect.

Only a small subset of all CSS properties can be used inside a declaration block of a CSS ruleset containing a selector using the `::first-letter` pseudo-element:

- All font properties : {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}.
- All background properties : {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}.
- All margin properties: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}.
- All padding properties: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}.
- All border properties: the shorthands {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, and the longhands properties.
- The {{ cssxref("color") }} property.
- The {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (only if `float` is `none`) CSS properties.

As this list will be extended in the future, it is recommended that you not use any other properties inside the declaration block, in order to keep the CSS future-proof.

> **備註：** In CSS 2, pseudo-elements were prefixed with a single colon character. As pseudo-classes were also following the same convention, they were indistinguishable. To solve this, CSS 2.1 changed the convention for pseudo-elements. Now a pseudo-element is prefixed with two colon characters, and a pseudo-class is still prefixed with a single colon.As several browsers already implemented the CSS 2 version in a release version, all browsers supporting the two-colon syntax also support the old one-colon syntax.If legacy browsers must be supported, `:first-letter` is the only viable choice; if not, `::first-letter` is preferred.

## Example

Make the first letter of every paragraph red and big.

### HTML Content

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
  dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
  dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
  dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
  feugait nulla facilisi.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### CSS Content

```css
p::first-letter {
  /* Use :first-letter if support for IE 8 or earlier is needed */
  color: red;
  font-size: 130%;
}
```

### Output

{{ EmbedLiveSample('Example', 679, 390) }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("::first-line")}} 虛擬元素。
