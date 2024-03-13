---
title: <msup>
slug: Web/MathML/Element/msup
l10n:
  sourceCommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{MathMLRef}}

**`<msup>`** は [MathML](/ja/docs/Web/MathML) の要素で、式に上付き文字を付けるために用います。

`<msup> ベース 上付き文字 </msup>` という構文を使用します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)の他、以下の非推奨属性があります。

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage)で、上付き文字のベースラインを上に移動させる最小量を示します。

> **メモ:** `superscriptshift` 属性については、ブラウザーによっては[古い MathML の長さ](/ja/docs/Web/MathML/Attribute/Values#古い_mathml_における長さ)も受け入れられるかもしれません。

## 例

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{ EmbedLiveSample('msup_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }} （下付き文字）
- {{ MathMLElement("msubsup") }} （上付き文字と下付き文字の組）
- {{ MathMLElement("mmultiscripts") }} (前付き文字とテンソルインデックス)
