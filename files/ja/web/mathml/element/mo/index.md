---
title: <mo>
slug: Web/MathML/Element/mo
---

{{MathMLRef()}}

MathML の `<mo>` 要素は広い意味の演算子を表します。厳密に数学的な意味の演算子のほかに、括弧類やカンマ・セミコロンといった区切り記号、絶対値の縦棒などの「演算子」も含みます。

## 属性

- accent
  - : 演算子が上下に付ける記号（[underscript](/ja/docs/MathML/Element/munder) または [overscript](/ja/docs/MathML/Element/mover)）として使われる場合、この属性は演算子がアクセント記号として扱われるべきかどうかを指定します。
    取り得る値は `true` または `false です。`
- class, id, style
  - : [スタイルシート](/ja/docs/CSS)と一緒に用いて提供されます。
- dir
  - : 数式全体の書字方向。値として `ltr` （左から右へ）と `rtl` （右から左へ） が指定可能です。
- fence
  - : この属性は視覚的効果を持ちませんが、演算子が括弧類などの囲み記号であるかどうかを指定します。
    取り得る値は `true` または `false` です。
- form

  - : 囲んだ式における演算子の役割を指定します。これは、スペーシングや他のデフォルトプロパティに影響を与えます。通常の演算子（`+`, `-` など）の場合、明示的にこの属性を指定する必要はありません。
    取り得る値は次の通りです:

    - `prefix` を指定すると開き括弧類（opening fences）になります。（演算子が一つ以上の子要素を持つ {{ MathMLElement("mrow") }} 要素の最初の子要素の場合はこれが既定値です。）
    - `infix` を指定するとセパレーターになります。（演算子が {{ MathMLElement("mrow") }} 要素に含まれていない場合はこれが既定値です。)
    - `postfix` を指定すると閉じ括弧類（closing fences）になります。（演算子が一つ以上の子要素を持つ {{ MathMLElement("mrow") }} 要素の最後の子要素の場合はこれが既定値です。）

- href
  - : 指定された URI へのハイパーリンクの設定に使用されます。
- largeop
  - : `displaystyle="true"` と設定されるときに演算子が通常よりも大きく表示されるべきかどうかを指定します。取り得る値は `true` または `false` です。
- lspace
  - : 演算子の前の空き量（値と単位については [length](/ja/docs/MathML/Attributes/Values#Lengths) を参照）。定数 `thickmathspace`（5/18em）が既定値です。
- mathbackground
  - : 背景色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathcolor
  - : 文字色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathsize

  - : The size of the content. Possible values are:

    - `small:` Font is rendered smaller than the current font size.
    - `normal:` Equivalent to 100% or 1em.
    - `big:` Font is rendered larger than the current font size.
    - a custom [length](/ja/docs/MathML/Attributes/Values#Lengths).
    - or a unitless value which multiplies the default.

- mathvariant

  - : This attribute specifies the logical class of the operator which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;&#x20;

      <math><mo mathvariant="normal">Example</mo></math>

    - `bold` ;&#x20;

      <math><mo mathvariant="bold">Example</mo></math>

    - `italic` ;&#x20;

      <math><mo mathvariant="italic">Example</mo></math>

    - `bold-italic` ;&#x20;

      <math><mo mathvariant="bold-italic">Example</mo></math>

    <!---->

    - `double-struck` ;&#x20;

      <math><mo mathvariant="double-struck">Example</mo></math>

    - `bold-fraktur` ;&#x20;

      <math><mo mathvariant="bold-fraktur">Example</mo></math>

    - `script` ;&#x20;

      <math><mo mathvariant="script">Example</mo></math>

    - `bold-script` ;&#x20;

      <math><mo mathvariant="bold-script">Example</mo></math>

    - `fraktur` ;&#x20;

      <math><mo mathvariant="fraktur">Example</mo></math>

    <!---->

    - `sans-serif` ;&#x20;

      <math><mo mathvariant="sans-serif">Example</mo></math>

    - `bold-sans-serif` ;&#x20;

      <math><mo mathvariant="bold-sans-serif">Example</mo></math>

    - `sans-serif-italic` ;&#x20;

      <math><mo mathvariant="sans-serif-italic">Example</mo></math>

    - `sans-serif-bold-italic` ;&#x20;

      <math><mo mathvariant="sans-serif-bold-italic">Example</mo></math>

    - `monospace` ;&#x20;

      <math><mo mathvariant="monospace">Example</mo></math>

    <!---->

    - `initial` ;&#x20;

      <math><mo mathvariant="initial">مثال</mo></math>

    - `tailed` ;&#x20;

      <math><mo mathvariant="tailed">مثال</mo></math>

    - `looped` ;&#x20;

      <math><mo mathvariant="looped">مثال</mo></math>

    - `stretched` ;&#x20;

      <math><mo mathvariant="stretched">مثال</mo></math>

- maxsize

  - : If `stretchy` is `true`, this attribute specifies the maximum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/ja/docs/MathML/Attributes/Values#Lengths)

- minsize

  - : If `stretchy` is `true`, this attribute specifies the minimum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/ja/docs/MathML/Attributes/Values#Lengths)

- movablelimits
  - : **displaystyle** が `false` の場合に、上下に付ける記号（overscript，underscript）が上付き・下付き（superscript，subscript）の位置に移動するかどうかを指定します。
    取り得る値は `true` または `false です。`
- rspace
  - : 演算子の後の空き量（値と単位については [length](/ja/docs/MathML/Attributes/Values#Lengths) を参照）。定数 `thickmathspace`（5/18em）が既定値です。
- separator
  - : この属性は視覚的効果を持ちませんが、演算子がカンマなどの区切り記号であるかどうかを指定します。
    取り得る値は `true` または `false` です。
- stretchy
  - : Specifies whether the operator stretches to the size of the adjacent element.
    Allowed values are `true` or `false`.
- symmetric
  - : **stretchy** が `true` の場合、演算子が仮想数式軸（imaginary math axis，分数線の高さの水平軸）のまわりに上下対称であるべきかどうかを指定します。
    既定値は、**stretchy** が `true` セットされるならば `true` となり、そうでなければ `false` です。 取り得る値は `true` または `false` です。

## 例

```html
<math>

<mrow>
  <mn>5</mn>
  <mo>+</mo>
  <mn>5</mn>
</mrow>

<mrow>
  <mo> [ </mo> <!-- default form value: prefix -->
  <mrow>
    <mn> 0 </mn>
    <mo> ; </mo> <!-- default form value: infix -->
    <mn> 1 </mn>
  </mrow>
  <mo> ) </mo> <!-- default form value: postfix -->
</mrow>

</math>
```

## 仕様

| 仕様                                                                         | 状態                         | コメント              |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mo', 'mo') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mo', 'mo') }} | {{ Spec2('MathML2') }} | 初期の仕様            |

## ブラウザ実装状況

{{Compat("mathml.elements.mo")}}

## Gecko 固有の注記

- Starting with Gecko 16.0 {{ geckoRelease("16.0") }} the default values for `lspace` and `rspace` have been corrected to match the MathML3 specification. They now default to the constant `thickmathspace` (5/18em).
- Starting with Gecko 20.0 {{geckoRelease("20.0")}} a unitless value for `mathsize` is allowed.
- Some `mathvariant` values are only implemented starting with Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) and require appropriate [math fonts](/ja/docs/Mozilla/MathML_Project/Fonts).
- Any [linebreaking](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbattrs) or [indentation attributes](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) are not implemented yet. See {{ bug("534962") }}.
