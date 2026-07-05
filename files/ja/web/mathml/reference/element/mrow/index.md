---
title: <mrow>
slug: Web/MathML/Reference/Element/mrow
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mrow>`** は [MathML](/ja/docs/Web/MathML) の要素で、通常、1 つ以上の[演算子](/ja/docs/Web/MathML/Reference/Element/mo)とそのそれぞれのオペランド（{{ MathMLElement("mi") }} や {{ MathMLElement("mn") }} など）を含む部分式をグループ化するために使用されます。この要素は、その引数が含まれている水平な行として表示されます。

MathML 式を記述する際は、その式の数学的な解釈において要素がグループ化されているのと同じように、`<mrow>` 内に要素をグループ化する必要があります。適切にグループ化することで、いくつかの方法で式のレンダリングが容易になります。

- 行間を調整したり、改行を防止したりすることで、表示を改善できる可能性があります。
- これにより、コンピューター代数システムや音声レンダラーなどの自動処理システムによる式の解釈が容易になります。

## 属性

この要素は [MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)を受け入れます。

## 例

```html
<math display="block">
  <mfrac>
    <mrow>
      <!-- 1 つの mrow にグループ化された分子のコンテンツ -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>K</mi>
    </mrow>
    <mrow>
      <!-- 1 つの mrow にグループ化された分母のコンテンツ -->
      <mn>3</mn>
      <mrow>
        <!-- 1 つの mrow にグループ化された囲まれた式 -->
        <mo>(</mo>
        <mrow>
          <!-- 1 つの mrow にグループ化された囲まれたコンテンツ -->
          <mi>x</mi>
          <mo>+</mo>
          <mi>y</mi>
        </mrow>
        <mo>)</mo>
      </mrow>
    </mrow>
  </mfrac>
</math>
```

{{EmbedLiveSample('Examples')}}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML のグループ化要素: {{ HTMLElement("div") }}
