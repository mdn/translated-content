---
title: <mi>
slug: Web/MathML/Element/mi
---

{{MathMLRef}}

MathML の `<mi>` 要素は、関数名や変数、記号定数（訳注：数値リテラルでなく文字で表された定数）などの**識別子**としてレンダリングされるべきコンテンツを表します。項をマークアップするために任意のテキストを入れることもできます。

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

    - `small:` Font is rendered smaller than the current font size.
    - `normal:` Equivalent to 100% or 1em.
    - `big:` Font is rendered larger than the current font size.
    - a custom [length](/ja/docs/CSS/length).
    - or a unitless value which multiplies the default.

- mathvariant

  - : This logical class of the identifier, which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value for _more than one character_) ;&#x20;

      <math><mi mathvariant="normal">Example</mi></math>

    - `bold` ;&#x20;

      <math><mi mathvariant="bold">Example</mi></math>

    - `italic` (Default value for _a single character_) ;&#x20;

      <math><mi mathvariant="italic">Example</mi></math>

    - `bold-italic` ;&#x20;

      <math><mi mathvariant="bold-italic">Example</mi></math>

    <!---->

    - `double-struck` ;&#x20;

      <math><mi mathvariant="double-struck">Example</mi></math>

    - `bold-fraktur` ;&#x20;

      <math><mi mathvariant="bold-fraktur">Example</mi></math>

    - `script` ;&#x20;

      <math><mi mathvariant="script">Example</mi></math>

    - `bold-script` ;&#x20;

      <math><mi mathvariant="bold-script">Example</mi></math>

    - `fraktur` ;&#x20;

      <math><mi mathvariant="fraktur">Example</mi></math>

    <!---->

    - `sans-serif` ;&#x20;

      <math><mi mathvariant="sans-serif">Example</mi></math>

    - `bold-sans-serif` ;&#x20;

      <math><mi mathvariant="bold-sans-serif">Example</mi></math>

    - `sans-serif-italic` ;&#x20;

      <math><mi mathvariant="sans-serif-italic">Example</mi></math>

    - `sans-serif-bold-italic` ;&#x20;

      <math><mi mathvariant="sans-serif-bold-italic">Example</mi></math>

    - `monospace` ;&#x20;

      <math><mi mathvariant="monospace">Example</mi></math>

    <!---->

    - `initial` ;&#x20;

      <math><mi mathvariant="initial">مثال</mi></math>

    - `tailed` ;&#x20;

      <math><mi mathvariant="tailed">مثال</mi></math>

    - `looped` ;&#x20;

      <math><mi mathvariant="looped">مثال</mi></math>

    - `stretched` ;&#x20;

      <math><mi mathvariant="stretched">مثال</mi></math>

## 例

```html
<math>

  <mi> y </mi>

  <mi> sin </mi>

  <mi mathvariant="monospace"> x </mi>

  <mi mathvariant="bold"> &pi; </mi>

</math>
```

## 仕様

| 仕様                                                                         | 状態                         | コメント   |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mi', 'mi') }} | {{ Spec2('MathML3') }} | 現在の仕様 |
| {{ SpecName('MathML2', 'chapter3.html#presm.mi', 'mi') }} | {{ Spec2('MathML2') }} | 初期の仕様 |

## ブラウザー互換性

{{Compat("mathml.elements.mi")}}

## Gecko 固有の注記

- Starting with Gecko 20.0 {{geckoRelease("20.0")}} a unitless value for `mathsize` is allowed.
- Some `mathvariant` values are only implemented starting with Gecko 28.0 {{ geckoRelease("28.0") }} and require appropriate [math fonts](/ja/docs/Mozilla/MathML_Project/Fonts).
