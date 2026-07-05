---
title: <mfrac>
slug: Web/MathML/Reference/Element/mfrac
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mfrac>`** は [MathML](/en-US/docs/Web/MathML) の要素で、分数を表示させるために使用します。同時に、[二項係数](https://en.wikipedia.org/wiki/Binomial_coefficient)や[ルジャンドル記号](https://en.wikipedia.org/wiki/Legendre_symbol)など、分数に似たものを記述するためにも使用できます。

## 構文

```html
<mfrac>分子 分母</mfrac>
```

## 属性

この要素の属性には、[MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性が含まれます。

- `denomalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 分数の下に分母をどう揃えるかを指定します。指定できる値は `left`、`center`（デフォルト値）、`right` です。
- `linethickness`
  - : {{cssxref("length-percentage")}} で、分数の水平線の太さを示します。
- `numalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 分数の上に分子をどう揃えるかを指定します。取り得る値は `left`、`center` (既定値) と `right` です。

> [!NOTE]
> `linethickness` 属性については、一部のブラウザーでは、非推奨の値 `medium`、`thin`、`thick`（これらの正確な解釈は実装者に委ねられています）や、[古い MathML の長さの単位](/ja/docs/Web/MathML/Reference/Values#mathml_における古い長さ)も受け入れることがあります。

## 例

### 単純な分数

以下の MathML コードは、分子が "a + 2"、分母が "3 − b" の分数として表示されるはずです。

```html
<math display="block">
  <mfrac>
    <mrow>
      <mi>a</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>3</mn>
      <mo>−</mo>
      <mi>b</mi>
    </mrow>
  </mfrac>
</math>
```

{{ EmbedLiveSample('simple_fraction', 700, 200, "", "") }}

### 水平線なしの分数

以下の MathML コードは、[二項係数](https://ja.wikipedia.org/wiki/二項係数) として表示されるはずです。

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('Fraction_without_bar', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
