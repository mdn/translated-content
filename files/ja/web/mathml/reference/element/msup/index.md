---
title: <msup>
slug: Web/MathML/Reference/Element/msup
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<msup>`** は [MathML](/ja/docs/Web/MathML) の要素で、式に上付き文字を付けるために用います。

`<msup> ベース 上付き文字 </msup>` という構文を使用します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)の他、以下の非推奨属性があります。

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : {{cssxref("length-percentage")}}で、上付き文字のベースラインを上に移動させる最小量を示します。

> [!NOTE]
> `superscriptshift` 属性については、ブラウザーによっては[古い MathML の長さ](/ja/docs/Web/MathML/Reference/Values#古い_mathml_における長さ)も受け入れられるかもしれません。

## 例

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
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

- {{ MathMLElement("msub") }} （下付き文字）
- {{ MathMLElement("msubsup") }} （上付き文字と下付き文字の組）
- {{ MathMLElement("mmultiscripts") }} (前付き文字とテンソルインデックス)
