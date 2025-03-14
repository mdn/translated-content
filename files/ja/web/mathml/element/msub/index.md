---
title: <msub>
slug: Web/MathML/Element/msub
l10n:
  sourceCommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{MathMLRef}}

**`<msub>`** は [MathML](/ja/docs/Web/MathML) の要素で、式に下付き文字を付けるために用います。

`<msub> ベース 下付き文字 </msub>` という構文を使用します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)の他、以下の非推奨属性があります。

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、下付き文字部分を本体のベースラインから下げる最小量を示します。

> **メモ:** `superscriptshift` 属性については、ブラウザーによっては[古い MathML の長さ](/ja/docs/Web/MathML/Values#古い_mathml_における長さ)も受け入れられるかもしれません。

## 例

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
</math>
```

{{ EmbedLiveSample('msub_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }} (上付き文字)
- {{ MathMLElement("msubsup") }} (上付き文字と下付き文字の組)
- {{ MathMLElement("mmultiscripts") }} (前付き文字とテンソルインデックス)
