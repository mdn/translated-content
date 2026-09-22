---
title: <mo>
slug: Web/MathML/Reference/Element/mo
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

**`<mo>`** は [MathML](/ja/docs/Web/MathML) の要素で、広い意味の**演算子**を表します。厳密に数学的な意味の演算子のほかに、括弧類やカンマ、セミコロンといった区切り記号、「絶対値」の縦棒などの「演算子」も含みます。

## 属性

[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加えて、この要素は[演算子の形状や内容によるデフォルト値をもつ](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator)以下の属性を受け入れます。

- `accent` {{Non-standard_Inline}}
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、この演算子が[真下付き文字](/ja/docs/Web/MathML/Reference/Element/munder)または[真上付き文字](/ja/docs/Web/MathML/Reference/Element/mover)として使用されたときに、アクセントとして処理されるべきか（つまり、基本式に対して大きく描画され、より近くなるべきか）どうかを示します。
- `fence`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、演算子がフェンス（括弧など）であるかどうかを示す。この属性には視覚的な効果はありません。
- `form`
  - : 演算子の表示方法を指定する[列挙型](/ja/docs/Glossary/Enumerated)属性です。例えば、値に応じて、演算子の両側に表示される空間の大きさが異なる場合があります。この属性には、以下のいずれかの値を指定できます。
    - `prefix`: 演算子は、そのオペランドの前に現れます。例えば、式 `+ a` において、`+` は前置演算子です。
    - `infix`: 演算子は、そのオペランドの間に現れます。式 `a + b` において、`+` は中置演算子です。
    - `postfix`: 演算子は、そのオペランドの後に現れます。例えば、式 `a +` において、`+` は後置演算子です。
- `largeop`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、{{cssxref("math-style")}} が `normal` に設定されている場合、演算子を大きく描画すべきかどうかを示します。
- `lspace`
  - : {{cssxref("length-percentage")}} で、演算子の前の空間の量を示します。
- `maxsize`
  - : {{cssxref("length-percentage")}} で、伸縮するときの演算子の最大サイズを示します。
- `minsize`
  - : {{cssxref("length-percentage")}} で、伸縮するときの演算子の最小サイズを示します。
- `movablelimits`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、{{cssxref("math-style")}} が `compact` に設定されているときに、真下・真上付き文字が下・上付き文字に移動するかどうかを示します。
- `rspace`
  - : {{cssxref("length-percentage")}} で、演算子の後の空間の量を示します。
- `separator`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、この演算子が区切り記号（カンマなど）であるかどうかを示します。この属性には視覚的な効果はありません。
- `stretchy`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、演算子が隣接する要素のサイズに伸縮するかどうかを示します。
- `symmetric`
  - : [`<boolean>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型) で、伸縮する演算子が仮想数式軸（中央の分数線）を中心に上下対称であるべきであるかどうかを示します。

> [!NOTE]
> `lspace`、`maxsize`、`minsize`、`rspace` 属性については、一部のブラウザーは[古い MathML における長さ](/ja/docs/Web/MathML/Reference/Values#古い_mathml_における長さ)も受け入れることがあります。

## 例

```html-nolint
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
  <mrow>
    <mo>[</mo> <!-- デフォルトの form 値: prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo> <!-- デフォルトの form 値: infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo> <!-- デフォルトの form 値: postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

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
