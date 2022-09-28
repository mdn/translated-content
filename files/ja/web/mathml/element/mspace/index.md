---
title: <mspace>
slug: Web/MathML/Element/mspace
---

{{MathMLRef()}}

MathML の `<mspace>` 要素は，空白を作るために使われます。空白のサイズ（訳注：幅だけでなくベースラインからの高さ，深さも）は属性で指定します。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- depth
  - : ベースラインからの希望の深さ（値と単位については [length](/ja/docs/MathML/Attributes/Values#Lengths) 参照）
- height
  - : ベースラインからの希望の高さ（値と単位については [length](/ja/docs/MathML/Attributes/Values#Lengths) 参照）
- linebreak
  - : この空白における改行について。取り得る値は `auto`（既定値）, `newline`, `nobreak`, `goodbreak`, `badbreak`。MathML 3 以降は改行を制御するのに {{ MathMLElement("mo") }} を用いるのが好ましい。
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- width
  - : 希望の幅（値と単位については [length](/ja/docs/MathML/Attributes/Values#Lengths) 参照）

Note that some common attributes like `mathcolor`, `mathvariant` or `dir` have no effect on `<mspace>`.

## 例

```html
<math>

  <mspace depth="40px" height="20px" />

  <mspace width="100px" />

</math>
```

## ブラウザーの互換性

{{Compat("mathml.elements.mspace")}}

### Gecko-specific notes

- [Indentation attributes](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) are not implemented yet (for Gecko see {{ bug("534962") }}).
- Support for negative values for the `width` attribute has been implemented in Gecko 23.0 {{geckoRelease("23.0")}}.

## 仕様

| Specification                                                                            | Status                       | Comment               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mspace', 'mspace') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mspace', 'mspace') }} | {{ Spec2('MathML2') }} | Initial specification |

## See also

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
