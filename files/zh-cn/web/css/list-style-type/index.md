---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - CSS Lists
  - CSS 属性
  - Reference
translation_of: Web/CSS/list-style-type
---
{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 `list-style-type` 可以设置列表元素的 marker（比如圆点、符号、或者自定义计数器样式）。

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}

The [color](/zh-CN/docs/CSS/color_value) of the marker will be the same as the computed color of the element it applies to.

只有几个元素 ({{HTMLElement("li")}} 和 {{HTMLElement("summary")}}) 的默认值为 `display: list-item`。但是， `list-style-type` 属性可以应用在任何 {{cssxref("display")}} 的值为 `list-item` 的元素上。此外，由于这个属性是可继承的，它可以设置在父元素上 (通常是 {{HTMLElement("ol")}} 或 {{HTMLElement("ul")}}) 以便应用于所有子元素 ({{HTMLElement("li")}})。

## 语法

```css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> value */
list-style-type: '-';

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: unset;
```

list-style-type 的属性值可以是以下任意一项：

- a [`<custom-ident>`](/zh-CN/docs/Web/CSS/list-style-type$edit#%3Ccustom-ident%3E) value
- a [`symbols()`](</zh-CN/docs/Web/CSS/list-style-type$edit#symbols()>) value
- a [`<string>`](/zh-CN/docs/Web/CSS/list-style-type$edit#%3Cstring%3E) value
- the keyword [`none`](/zh-CN/docs/Web/CSS/list-style-type$edit#none).

### 取值

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : A identifier matching the value of a {{cssxref("@counter-style")}} or one of the predefined styles:
- {{cssxref("symbols()")}}
  - : Defines an anonymous style of the list.
- {{cssxref("&lt;string&gt;")}}
  - : The specified string will be used as the item's marker.
- `none`
  - : 不显示列表项的标记。

关键字的取值是下列之一：

- ## `disc`

      :
      -   实心圆点 (默认值)

- ## `circle`

      :
      -   空心圆点

- ## `square`

      :
      -   实心方块

- ## `decimal`

      :
      -   十进制阿拉伯数字
      -   从 1 开始

- ## `cjk-decimal` {{experimental_inline}}

      :
      -   中日韩十进制数
      -   例如：一，二，三，..., 九八，九九，一〇〇

- ## `decimal-leading-zero`

      :
      -   Decimal numbers
      -   Padded by initial zeros
      -   E.g. 01, 02, 03, … 98, 99

- ## `lower-roman`

      :
      -   Lowercase roman numerals
      -   E.g. i, ii, iii, iv, v…

- ## `upper-roman`

      :
      -   Uppercase roman numerals
      -   E.g. I, II, III, IV, V…

- ## `lower-greek`

      :
      -   Lowercase classical Greek
      -   alpha, beta, gamma…
      -   E.g. α, β, γ…

- `lower-alpha`

  ## `lower-latin`

      :
      -   Lowercase ASCII letters
      -   E.g. a, b, c, … z
      -   `lower-latin` is unsupported in IE7 and earlier
      -   See [Browser compatibility](#browser_compatibility) section.

- `upper-alpha`

  ## `upper-latin`

      :
      -   Uppercase ASCII letters
      -   E.g. A, B, C, … Z
      -   `upper-latin` is unsupported in IE7 and earlier

- ## `armenian`

      :
      -   Traditional Armenian numbering
      -   (ayb/ayp, ben/pen, gim/keem…

- ## `georgian`

      :
      -   Traditional Georgian numbering
      -   E.g. an, ban, gan, … he, tan, in…

- ## `hebrew` {{experimental_inline}}

      :
      -   Traditional Hebrew numbering

- ## ethiopic-numeric {{experimental_inline}}

      :
      -   Example

- ## `hiragana` {{experimental_inline}}

      :
      -   a, i, u, e, o, ka, ki, …
      -   (Japanese)

- ## `katakana` {{experimental_inline}}

      :
      -   A, I, U, E, O, KA, KI, …
      -   (Japanese)

- ## `hiragana-iroha` {{experimental_inline}}

      :
      -   i, ro, ha, ni, ho, he, to, …
      -   [Iroha](https://zh.wikipedia.org/wiki/Iroha) is the old japanese ordering of syllabs.

- ## `katakana-iroha` {{experimental_inline}}

      :
      -   I, RO, HA, NI, HO, HE, TO, …
      -   [Iroha](https://zh.wikipedia.org/wiki/Iroha) is the old japanese ordering of syllabs.

- ## `japanese-informal` {{experimental_inline}}

      :
      -   Japanese informal numbering

- ## `japanese-formal` {{experimental_inline}}

      :
      -   Japanese formal numbering to be used in legal or financial document.
      -   E.g., 壱萬壱阡壱百壱拾壱
      -   The kanjis are designed so that they can't be modified to look like another correct one

- ## `korean-hangul-formal` {{experimental_inline}}

      :
      -   Korean hangul numbering.
      -   E.g., 일만 일천일백일십일

- ## `korean-hanja-informal` {{experimental_inline}}

      :
      -   Korean hanja numbering.
      -   E.g., 萬 一千百十一

- ## `korean-hanja-formal` {{experimental_inline}}

      :
      -   Formal Korean Han numberging.
      -   E.g. 壹萬 壹仟壹百壹拾壹

- ## `simp-chinese-informal` {{experimental_inline}}

      :
      -   Simplified Chinese informal numberging.
      -   E.g. 一万一千一百一十一

- ## `cjk-ideographic`{{experimental_inline}}

      :
      -   Identical to `simp-chinese-informal`
      -   E.g. 一万一千一百一十一

- ## `simp-chinese-formal` {{experimental_inline}}

      :
      -   Simplified Chinese formal numberging.
      -   E.g. 壹万壹仟壹佰壹拾壹

- ## `trad-chinese-informal` {{experimental_inline}}

      :
      -   Traditional Chinese informal numberging.
      -   E.g. 一萬一千一百一十一

- ## `trad-chinese-formal` {{experimental_inline}}

      :
      -   Traditional Chinese formal numberging.
      -   E.g. 壹萬壹仟壹佰壹拾壹

### 非标准扩展

Extended set of values provided by Mozilla (Firefox), Blink (Chrome and Opera) and WebKit (Safari) to support list types in other languages. See the compatibility table to check which browsers supports which extension.

- arabic-indic

  ## \-moz-arabic-indic

      :
      -   Example

- bengali

  ## \-moz-bengali

      :
      -   Example

- cjk-earthly-branch

  ## \-moz-cjk-earthly-branch

      :
      -   Example

- cjk-heavenly-stem

  ## \-moz-cjk-heavenly-stem

      :
      -   Example

- devanagari

  ## \-moz-devanagari

      :
      -   Example

- ## \-moz-ethiopic-halehame

      :
      -   Example

- ## \-moz-ethiopic-halehame-am

      :
      -   Example

- ethiopic-halehame-ti-er

  ## \-moz-ethiopic-halehame-ti-er

      :
      -   Example

- ethiopic-halehame-ti-et

  ## \-moz-ethiopic-halehame-ti-et

      :
      -   Example

- gujarati

  ## \-moz-gujarati

      :
      -   Example

- gurmukhi

  ## \-moz-gurmukhi

      :
      -   Example

- hangul

  ## \-moz-hangul

      :
      -   Example
      -   Example
      -   Example

- hangul-consonant

  ## \-moz-hangul-consonant

      :
      -   Example
      -   Example
      -   Example

- kannada

  ## \-moz-kannada

      :
      -   Example

- khmer

  ## \-moz-khmer

      :
      -   Example

- lao

  ## \-moz-lao

      :
      -   Example

- malayalam

  ## \-moz-malayalam

      :
      -   Example

- myanmar

  ## \-moz-myanmar

      :
      -   Example

- oriya

  ## \-moz-oriya

      :
      -   Example

- persian

  ## \-moz-persian

      :
      -   Example

- ## \-moz-tamil

      :
      -   Example

- telugu

  ## \-moz-telugu

      :
      -   Example

- thai

  ## \-moz-thai

      :
      -   Example

- urdu

  ## \-moz-urdu

      :
      -   Example

### Formal syntax

{{csssyntax}}

## 例子

### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

### HTML

```html
<ol class="normal">List 1
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

<ol class="shortcut">List 2
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

### Result

{{EmbedLiveSample("例子","200","300")}}

## Accessibility concerns

The [VoiceOver](https://help.apple.com/voiceover/info/guide/) screen reader has an issue where unordered lists with a `list-style-type`value of `none` applied to them will not be announced as a list. To address this, add a [zero-width space](https://en.wikipedia.org/wiki/Zero-width_space) as [pseudo content](/zh-CN/docs/Web/CSS/content) before each list item to ensure the list is announced properly. This ensures the design is unaffected by the bug fix and that list items are not improperly described.

```
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

- [VoiceOver and list-style-type: none – Unfettered Thoughts](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 注释

- Some types require a suitable font installed to display as expected.
- The `cjk-ideographic` is identical to `trad-chinese-informal`; it exists for legacy reasons.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.properties.list-style-type")}}

## 参见

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
