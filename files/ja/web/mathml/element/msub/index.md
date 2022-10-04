---
title: <msub>
slug: Web/MathML/Element/msub
---

{{MathMLRef()}}

MathML の `<msub>` 要素は式に下付きを付けるために用います。
構文は `<msub> base subscript </msub>` となります。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- subscriptshift
  - : 下付き部分を本体のベースラインから下げる最小量を [length value](/ja/docs/MathML/Attributes/Values#Lengths) として指定します。

## 例

Sample rendering: ![x1](msub.png)

Rendering in your browser: <math><msub><mi>X</mi> <mn>1</mn></msub></math>

```html
<math>

  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>

</math>
```

## ブラウザーの互換性

{{Compat("mathml.elements.msub")}}

### Gecko-specific notes

- Starting with Gecko 26.0 {{geckoRelease("26")}} it is no longer possible to use `<none />` as a child element. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msup")}} and {{MathMLElement("mmultiscripts")}} and a bug with an incorrect application of the `superscriptshift` attribute has been fixed (see {{bug("827713")}} for details).

## 仕様

| Specification                                                                    | Status                       | Comment               |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML2') }} | Initial specification |

## See also

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
