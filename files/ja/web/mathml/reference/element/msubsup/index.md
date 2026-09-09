---
title: <msubsup>
slug: Web/MathML/Reference/Element/msubsup
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<msubsup>`** は [MathML](/ja/docs/Web/MathML) の要素で、式に下付き文字と上付き文字の両方を一緒に付けるために使用されます。

`<msubsup> ベース 下付き文字 上付き文字 </msubsup>` という構文を使用します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)の他、以下の非推奨属性があります。

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : {{cssxref("length-percentage")}} で、下付き文字を式のベースラインより下にシフトするための最小量。
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : {{cssxref("length-percentage")}} で、上付き文字を式のベースラインより上にシフトするための最小量。

> [!NOTE]
> `subscriptshift` および `superscriptshift` 属性については、ブラウザーによっては[古い MathML の長さ](/ja/docs/Web/MathML/Reference/Values#古い_mathml_における長さ)も受け入れられるかもしれません。

## 例

```html
<math display="block">
  <msubsup>
    <mo>&#x222B;<!--Integral --></mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
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
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }} (上付き文字)
- {{ MathMLElement("msup") }} (下付き文字)
- {{ MathMLElement("mmultiscripts") }} (前付き文字とテンソルインデックス)
