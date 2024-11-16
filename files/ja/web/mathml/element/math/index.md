---
title: <math>
slug: Web/MathML/Element/math
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

**`<math>`** は最上位の [MathML](/ja/docs/Web/MathML) 要素で、一つの数式を記述するのに使われます。これは[フローコンテンツ](/ja/docs/Web/HTML/Content_categories#フローコンテンツ)が許可されている HTML コンテンツに置くことができます。

> [!NOTE]
> MathML の数式をウェブページに適切に統合するためのヒントについては [MathML の記述ページ](/ja/docs/Web/MathML/Authoring#using_mathml)を、その他のデモについては [例](/ja/docs/Web/MathML/Examples)ページを参照してください。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)の他に以下の属性があります。

- `display`

  - : この[列挙](/ja/docs/Glossary/Enumerated)属性は、囲まれた MathML マークアップをレンダリングする方法を指定します。これは、次のいずれかの値を取ることができます。

    - `block` は、この要素が現在のテキストのスパンの外にある独自のブロックに表示され、 [`math-style`](/ja/docs/Web/CSS/math-style) が `normal` に設定されていることを意味します。
    - `inline` は、この要素が現在のテキストのスパンの中に表示され、 [`math-style`](/ja/docs/Web/CSS/math-style) が `compact` に設定されていることを意味します。

    存在しない場合、既定値は `inline` です。

## 例

この例には 2 つの MathML 式が含まれています。最初のものは、必要なだけのスペースをとって、中央のブロック内に表示されます。 2 番目のものは、高さを最小にするためにサイズと間隔を狭めて、テキストの段落の中に表示されます。

```html
<p>
  The infinite sum
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
  is equal to the real number
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac></math
  >.
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の最上位要素: {{ HTMLElement("html") }}
- SVG の最上位要素: {{ SVGElement("svg") }}
