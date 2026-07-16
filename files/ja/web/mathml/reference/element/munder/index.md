---
title: <munder>
slug: Web/MathML/Reference/Element/munder
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

[MathML](/ja/docs/Web/MathML) の **`<munder>`** 要素は式の下にアクセントや範囲を付けるために使用します。これは `<munder> base underscript </munder>` のように使用します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性が含まれます。

- `accentunder`
  - : 真下付き文字 (underscript) をアクセントとして扱う（つまり、より大きく、かつベースとなる式により近づけて描く）かどうかを示す [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml-specific_types) です。

## 例

```html
<math display="block">
  <munder accentunder="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DF;<!--BOTTOM CURLY BRACKET--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('munder_example', 700, 200, "", "") }}

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

## 関連情報

- {{ MathMLElement("mover") }} (真上付き文字 (overscript))
- {{ MathMLElement("munderover") }} (真下付き文字と真上付き文字の組)
