---
title: <msup>
slug: Web/MathML/Element/msup
---

{{MathMLRef()}}

MathML の `<msup>` 要素は，式に上付きを付けるために用います。
構文は `<msup> base superscript </msup>` となります。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- superscriptshift
  - : 上付き部分を本体のベースラインから持ち上げる最小の量を [length value.](/ja/docs/MathML/Attributes/Values#Lengths) で指定します。

## 例

Sample rendering: ![x1](msup.png)

Rendering in your browser: <math><msup><mi>X</mi> <mn>2</mn></msup></math>

```html
<math>

  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>

</math>
```

## ブラウザーの互換性

{{Compat("mathml.elements.msup")}}

### Gecko-specific notes

- Starting with Gecko 26.0 {{geckoRelease("26")}} it is no longer possible to use `<none />` as a child element. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msub")}} and {{MathMLElement("mmultiscripts")}} and a bug with an incorrect application of the `superscriptshift` attribute has been fixed (see {{bug("827713")}} for details).

## 仕様

| Specification                                                                    | Status                       | Comment               |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msup', 'msup') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msup', 'msup') }} | {{ Spec2('MathML2') }} | Initial specification |

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
