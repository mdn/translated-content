---
title: list-style-type
slug: Web/CSS/list-style-type
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
list-style-type: "-";

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

- a [`<custom-ident>`](/zh-CN/docs/Web/CSS/list-style-type#%3Ccustom-ident%3E) value
- a [`symbols()`](</zh-CN/docs/Web/CSS/list-style-type#symbols()>) value
- a [`<string>`](/zh-CN/docs/Web/CSS/list-style-type#%3Cstring%3E) value
- the keyword [`none`](/zh-CN/docs/Web/CSS/list-style-type#none).

### 取值

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : A identifier matching the value of a {{cssxref("@counter-style")}} or one of the predefined styles:
- {{cssxref("symbols()")}}
  - : Defines an anonymous style of the list.
- {{cssxref("&lt;string&gt;")}}
  - : The specified string will be used as the item's marker.
- `none`
  - : 不显示列表项的标记。
- `disc`
  - : 实心圆点 (默认值)
- `circle`
  - : 空心圆点
- `square`
  - : 实心方块
- `decimal`
  - : 十进制阿拉伯数字
- `cjk-decimal` {{experimental_inline}}
  - : 中日韩十进制数
- `decimal-leading-zero`
  - : Decimal numbers, padded by initial zeros.
- `lower-roman`
  - : Lowercase roman numerals
- `upper-roman`
  - : Uppercase roman numerals
- `lower-greek`
  - : Lowercase classical Greek
    - alpha, beta, gamma…
- `lower-alpha`, `lower-latin`
  - : Lowercase ASCII letters
- `upper-alpha`, `upper-latin`
  - : Uppercase ASCII letters
- `armenian`
  - : Traditional Armenian numbering
- `georgian`
  - : Traditional Georgian numbering
- `hebrew` {{experimental_inline}}
  - : Traditional Hebrew numbering
- `ethiopic-numeric` {{experimental_inline}}
- `hiragana` {{experimental_inline}}
  - : Dictionary-order hiragana lettering.
- `katakana` {{experimental_inline}}
  - : Dictionary-order katakana lettering
- `hiragana-iroha` {{experimental_inline}}
  - : [Iroha](https://zh.wikipedia.org/wiki/Iroha) is the old japanese ordering of syllabs.
- `katakana-iroha` {{experimental_inline}}
  - : [Iroha](https://zh.wikipedia.org/wiki/Iroha) is the old japanese ordering of syllabs.
- `japanese-informal` {{experimental_inline}}
  - : Japanese informal numbering
- `japanese-formal` {{experimental_inline}}
  - : Japanese formal numbering to be used in legal or financial document. The kanjis are designed so that they can't be modified to look like another correct one
- `korean-hangul-formal` {{experimental_inline}}
  - : Korean hangul numbering.
- `korean-hanja-informal` {{experimental_inline}}
  - : Korean hanja numbering.
- `korean-hanja-formal` {{experimental_inline}}
  - : Formal Korean Han numberging.
- `simp-chinese-informal` {{experimental_inline}}
  - : Simplified Chinese informal numberging.
- `cjk-ideographic`{{experimental_inline}}
  - : Identical to `simp-chinese-informal`
- `simp-chinese-formal` {{experimental_inline}}
  - : Simplified Chinese formal numberging.
- `trad-chinese-informal` {{experimental_inline}}
  - : Traditional Chinese informal numberging.
- `trad-chinese-formal` {{experimental_inline}}
  - : Traditional Chinese formal numberging.

### 非标准扩展

Extended set of values provided by Mozilla (Firefox), Blink (Chrome and Opera) and WebKit (Safari) to support list types in other languages. See the compatibility table to check which browsers supports which extension.

- `arabic-indic`、`-moz-arabic-indic`
- `bengali`、`-moz-bengali`
- `cjk-earthly-branch`、`-moz-cjk-earthly-branch`
- `cjk-heavenly-stem`、`-moz-cjk-heavenly-stem`
- `devanagari`、`-moz-devanagari`
- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`、`-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`、`-moz-ethiopic-halehame-ti-et`
- `gujarati`、`-moz-gujarati`
- `gurmukhi`、`-moz-gurmukhi`
- `hangul`、`-moz-hangul`
- `hangul-consonant`、`-moz-hangul-consonant`
- `kannada`、`-moz-kannada`
- `khmer`、`-moz-khmer`
- `lao`、`-moz-lao`
- `malayalam`、`-moz-malayalam`
- `myanmar`、`-moz-myanmar`
- `oriya`、`-moz-oriya`
- `persian`、`-moz-persian`
- `-moz-tamil`
- `telugu`、`-moz-telugu`
- `thai`、`-moz-thai`
- `urdu`、`-moz-urdu`

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
<ol class="normal">
  List 1
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

<ol class="shortcut">
  List 2
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

```css
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

{{Compat}}

## 参见

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
