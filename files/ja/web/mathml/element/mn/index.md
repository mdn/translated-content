---
title: <mn>
slug: Web/MathML/Element/mn
---

{{MathMLRef}}

MathML の `<mn>` 要素は、通常は可能な区切り記号（ピリオドかカンマ）をもつ数字列である、数値リテラルを表します。しかし、「eleven」のような数量を表す任意のテキストを書くこともできます。

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

  - : The size of the content. Possible values are:

    - `small`: Font is rendered smaller than the current font size.
    - `normal`: Equivalent to 100% or 1em.
    - `big`Font is rendered larger than the current font size.
    - a custom [length](/ja/docs/CSS/length).
    - or a unitless value which multiplies the default.

- mathvariant

  - : This attribute specifies the logical class of the number which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;&#x20;

      <math><mn mathvariant="normal">Example</mn></math>

    - `bold` ;&#x20;

      <math><mn mathvariant="bold">Example</mn></math>

    - `italic` ;&#x20;

      <math><mn mathvariant="italic">Example</mn></math>

    - `bold-italic` ;&#x20;

      <math><mn mathvariant="bold-italic">Example</mn></math>

    <!---->

    - `double-struck` ;&#x20;

      <math><mn mathvariant="double-struck">Example</mn></math>

    - `bold-fraktur` ;&#x20;

      <math><mn mathvariant="bold-fraktur">Example</mn></math>

    - `script` ;&#x20;

      <math><mn mathvariant="script">Example</mn></math>

    - `bold-script` ;&#x20;

      <math><mn mathvariant="bold-script">Example</mn></math>

    - `fraktur` ;&#x20;

      <math><mn mathvariant="fraktur">Example</mn></math>

    <!---->

    - `sans-serif` ;&#x20;

      <math><mn mathvariant="sans-serif">Example</mn></math>

    - `bold-sans-serif` ;&#x20;

      <math><mn mathvariant="bold-sans-serif">Example</mn></math>

    - `sans-serif-italic` ;&#x20;

      <math><mn mathvariant="sans-serif-italic">Example</mn></math>

    - `sans-serif-bold-italic` ;&#x20;

      <math><mn mathvariant="sans-serif-bold-italic">Example</mn></math>

    - `monospace` ;&#x20;

      <math><mn mathvariant="monospace">Example</mn></math>

    <!---->

    - `initial` ;&#x20;

      <math><mn mathvariant="initial">مثال</mn></math>

    - `tailed` ;&#x20;

      <math><mn mathvariant="tailed">مثال</mn></math>

    - `looped` ;&#x20;

      <math><mn mathvariant="looped">مثال</mn></math>

    - `stretched` ;&#x20;

      <math><mn mathvariant="stretched">مثال</mn></math>

## 例

```html
<math>

  <mn> 0 </mn>

  <mn> 1.337 </mn>

  <mn> twelve </mn>

  <mn> XVI </mn>

  <mn> 2e10 </mn>

</math>
```

## 仕様

| Specification                                                                | Status                       | Comment    |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mn', 'mn') }} | {{ Spec2('MathML3') }} | 現在の仕様 |
| {{ SpecName('MathML2', 'chapter3.html#presm.mn', 'mn') }} | {{ Spec2('MathML2') }} | 初期の仕様 |

## ブラウザ実装状況

{{Compat("mathml.elements.mn")}}

## Gecko 固有の注記

- Starting with Gecko 20.0 {{geckoRelease("20.0")}} a unitless value for `mathsize` is allowed.
- Some `mathvariant` values are only implemented starting with Gecko 28.0 {{ geckoRelease("28.0") }} and require appropriate [math fonts](/ja/docs/Mozilla/MathML_Project/Fonts).
