---
title: <math>
slug: Web/MathML/Reference/Element/math
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

**`<math>`** は最上位の [MathML](/ja/docs/Web/MathML) 要素で、1 つの数式を記述するのに使われます。これは[フローコンテンツ](/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ)が許可されている HTML コンテンツに置くことができます。

> [!NOTE]
> MathML の数式をウェブページに適切に統合するためのヒントについては [MathML の作成ページ](/ja/docs/Web/MathML/Guides/Authoring#mathml_の使用)を、その他のデモについては [例](/ja/docs/Web/MathML/Guides)ページを参照してください。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)の他に以下の属性があります。

- `display`
  - : この[列挙](/ja/docs/Glossary/Enumerated)属性は、囲んでいる MathML マークアップをレンダリングする方法を指定します。これは、次のいずれかの値を取ることができます。
    - `block` は、この要素が現在のテキストのスパンの外にある独自のブロックに表示され、{{cssxref("math-style")}} が `normal` に設定されていることを意味します。
    - `inline` は、この要素が現在のテキストのスパンの中に表示され、 {{cssxref("math-style")}} が `compact` に設定されていることを意味します。

    存在しない場合、デフォルト値は `inline` です。

## アクセシビリティ

`<math>` 要素には、暗黙的な [ARIA `math` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)が付与されています。支援技術はこのロールを使用し、そのコンテンツを数式として識別し、ユーザーに伝えることができます。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

例えば、スクリーンリーダーは、下記の二次方程式の解の公式を次のように表します。

> x イコール分数開始、マイナス 2 プラスマイナスルート b 自乗マイナス 4 a c ルート終わり、分母は 2 a、分数と数式終わり

<details>
<summary>二次方程式の解の公式のマークアップ</summary>

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mrow>
          <mo>−</mo>
          <mi>b</mi>
        </mrow>
        <mo>±</mo>
        <msqrt>
          <mrow>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
            <mo>−</mo>
            <mrow>
              <mn>4</mn>
              <mo>⁢</mo>
              <mi>a</mi>
              <mo>⁢</mo>
              <mi>c</mi>
            </mrow>
          </mrow>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mo>⁢</mo>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>
```

</details>

{{ EmbedLiveSample('accessibility') }}

## 例

この例には 2 つの MathML 式が含まれています。最初のものは、必要なだけの空間をとって、中央のブロック内に表示されます。 2 番目のものは、高さを最小にするためにサイズと間隔を狭めて、テキストの段落の中に表示されます。

```html
<p>
  無限の加算
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  は実数
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac>
  </math>
  と等しい。
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/math_role">
        <code>math</code>
      </a>
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の最上位要素: {{ HTMLElement("html") }}
- SVG の最上位要素: {{ SVGElement("svg") }}
