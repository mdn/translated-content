---
title: <munderover>
slug: Web/MathML/Reference/Element/munderover
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`<munderover>`** は [MathML](/ja/docs/Web/MathML) の要素で、数式の上下両方にアクセントや制限を添付するために使用されます。

これは `<munderover> 基底 真上付き文字 真下付き文字 </munderover>` という構文で使用します。

## 属性

この要素の属性には、[MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性があります。

- `accent`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、真上付き文字をアクセントとして扱うかどうか（つまり、より大きく、基底の式に近づけて描画するかどうか）を示します。
- `accentunder`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、真下付き文字をアクセントとして扱うかどうか（つまり、より大きく、基底の式に近づけて描画するかどうか）を示します。

## 例

```html
<math display="block">
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
</math>
```

{{ EmbedLiveSample('munderover_example', 700, 200, "", "") }}

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

- {{ MathMLElement("munder") }} （真上付き文字）
- {{ MathMLElement("mover") }} （真下付き文字）
