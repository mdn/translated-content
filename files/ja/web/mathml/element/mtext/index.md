---
title: <mtext>
slug: Web/MathML/Element/mtext
---

{{MathMLRef}}

MathML \<mtext> 要素は、コメントや注釈などの表記の意味を*もたない*任意のテキストをレンダリングするために使用されます。
表記の意味*で*テキストを表示するには、{{ MathMLElement("mi") }} や {{ MathMLElement("mo") }} を代わりに使用します。

## 属性

- class, id, style
  - : [スタイルシート](/ja/docs/CSS)と一緒に用いて提供されます。
- dir
  - : 数式全体の書字方向。値として `ltr` （左から右へ）と `rtl` （右から左へ） が指定可能です。
- href
  - : 指定された URI へのハイパーリンクの設定に使用されます。
- mathbackground
  - : 背景色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathcolor
  - : 文字色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathsize

  - : Specifies the size of the content. Possible values are:

    - `small:`Font is rendered smaller than the current font size.
    - `normal:`Equivalent to 100% or 1em.
    - `big:`Font is rendered larger than the current font size.
    - a custom [length](/ja/docs/MathML/Attributes/Values#Lengths).
    - or a unitless value which multiplies the default.

- mathvariant

  - : This attribute specifies the logical class of the identifier, which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;&#x20;

      <math><mtext mathvariant="normal">Example</mtext></math>

    - `bold` ;&#x20;

      <math><mtext mathvariant="bold">Example</mtext></math>

    - `italic` ;&#x20;

      <math><mtext mathvariant="italic">Example</mtext></math>

    - `bold-italic` ;&#x20;

      <math><mtext mathvariant="bold-italic">Example</mtext></math>

    <!---->

    - `double-struck` ;&#x20;

      <math><mtext mathvariant="double-struck">Example</mtext></math>

    - `bold-fraktur` ;&#x20;

      <math><mtext mathvariant="bold-fraktur">Example</mtext></math>

    - `script` ;&#x20;

      <math><mtext mathvariant="script">Example</mtext></math>

    - `bold-script` ;&#x20;

      <math><mtext mathvariant="bold-script">Example</mtext></math>

    - `fraktur` ;&#x20;

      <math><mtext mathvariant="fraktur">Example</mtext></math>

    <!---->

    - `sans-serif` ;&#x20;

      <math><mtext mathvariant="sans-serif">Example</mtext></math>

    - `bold-sans-serif` ;&#x20;

      <math><mtext mathvariant="bold-sans-serif">Example</mtext></math>

    - `sans-serif-italic` ;&#x20;

      <math><mtext mathvariant="sans-serif-italic">Example</mtext></math>

    - `sans-serif-bold-italic` ;&#x20;

      <math><mtext mathvariant="sans-serif-bold-italic">Example</mtext></math>

    - `monospace` ;&#x20;

      <math><mtext mathvariant="monospace">Example</mtext></math>

    <!---->

    - `normal` (Default) ;&#x20;

      <math><mtext>مثال</mtext></math>

    - `initial` ;&#x20;

      <math><mtext mathvariant="initial">مثال</mtext></math>

    - `tailed` ;&#x20;

      <math><mtext mathvariant="tailed">مثال</mtext></math>

    - `looped` ;&#x20;

      <math><mtext mathvariant="looped">مثال</mtext></math>

    - `stretched` ;&#x20;

      <math><mtext mathvariant="stretched">مثال</mtext></math>

## 例

```html
<math>

  <mtext> Theorem of Pythagoras </mtext>

  <mtext> /* comment here */ </mtext>

</math>
```

## 仕様

| 仕様                                                                                 | 状態                         | コメント   |
| ------------------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mtext', 'mtext') }} | {{ Spec2('MathML3') }} | 現在の仕様 |
| {{ SpecName('MathML2', 'chapter3.html#presm.mtext', 'mtext') }} | {{ Spec2('MathML2') }} | 初期の仕様 |

## ブラウザー互換性

{{Compat("mathml.elements.mtext")}}

## Gecko 固有の注記

- Starting with Gecko 20.0 {{geckoRelease("20.0")}} a unitless value for `mathsize` is allowed.
- Some `mathvariant` values are only implemented starting with Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) and require appropriate [math fonts](/ja/docs/Mozilla/MathML_Project/Fonts).
