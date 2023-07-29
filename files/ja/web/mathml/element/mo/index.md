---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{MathMLRef}}

**`<mo>`** は [MathML](/ja/docs/Web/MathML) の要素で、広い意味の**演算子**を表します。厳密に数学的な意味の演算子のほかに、括弧類やカンマ、セミコロンといった区切り記号、絶対値の縦棒などの「演算子」も含みます。

## 属性

[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)に加えて、この要素は[演算子の形状や内容による既定値をもつ](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator)以下の属性を受け入れます。

- `accent` {{Non-standard_Inline}}
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、この演算子が[下の文字](/ja/docs/Web/MathML/Element/munder)または[上の文字](/ja/docs/Web/MathML/Element/mover)として使用されたときに、アクセントとして処理されるべきか（つまり、基本式に対して大きく描画され、より近くなるべきか）どうかを示す。
- `fence`
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、演算子がフェンス（括弧など）であるかどうかを示す。この属性には視覚的な効果はありません。
- `lspace`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、演算子の前の空間の量を示します。
- `maxsize`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、伸縮するときの演算子の最大サイズを示します。
- `minsize`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、伸縮するときの演算子の最小サイズを示します。
- `movablelimits`
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、 [`math-style`](/ja/docs/Web/CSS/math-style) が `compact` に設定されているときに、下・上の文字が下・上付き文字に移動するかどうかを示します。
- `rspace`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、演算子の後の空間の量を示します。
- `separator`
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、この演算子が区切り記号（カンマなど）であるかどうかを示します。この属性には視覚的な効果はありません。
- `stretchy`
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、演算子が隣接する要素のサイズに伸縮するかどうかを示します。
- `symmetric`
  - : [`<boolean>`](/ja/docs/Web/MathML/Attribute/Values#mathml-specific_types) で、伸縮する演算子が仮想数式軸（中央の分数線）を中心に上下対称であるべきであるかどうかを示します。

> **メモ:** `lspace`、`maxsize`、`minsize`、`rspace` 属性については、一部のブラウザーは[古い MathML における長さ](/ja/docs/Web/MathML/Attribute/Values#古い_mathml_における長さ)も受け入れることがあります。

## 例

```html
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
  <mrow>
    <mo>[</mo>
    <!-- default form value: prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo>
      <!-- default form value: infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo>
    <!-- default form value: postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
