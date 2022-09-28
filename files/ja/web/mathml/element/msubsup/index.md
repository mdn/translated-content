---
title: <msubsup>
slug: Web/MathML/Element/msubsup
---

{{MathMLRef}}

MathML `<msubsup>`要素は、下付き文字と上付き文字の両方を一緒に式に付けるために使用されます。
次の構文を使用します: `<msubsup> ベース 下付き文字 上付き文字 </msubsup>`

## 属性

- class, id, style
  - : [スタイルシート](/ja/docs/CSS)で使用するために用意されます。
- href
  - : 指定された URI へのハイパーリンクを設定するために使用されます。
- mathbackground
  - : 背景色。`#rgb`、`#rrggbb`、および[HTML の色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathcolor
  - : テキスト色。`#rgb`、`#rrggbb`、および[HTML の色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- subscriptshift
  - : [長さの値](/ja/docs/MathML/Attributes/Values#Lengths)として、下付き文字を式のベースラインより下にシフトするための最小スペース。
- superscriptshift
  - : [長さの値](/ja/docs/MathML/Attributes/Values#Lengths)として、上付き文字を式のベースラインより上にシフトするための最小スペース。

## 例

サンプルレンダリング: ![x1](msubsup.png)

ブラウザーでのレンダリング: <math displaystyle="true"><msubsup><mo>∫</mo> <mn>0 </mn><mn>1</mn></msubsup></math>

```html
<math displaystyle="true">

  <msubsup>
    <mo> &#x222B;<!--Integral --> </mo>
    <mn> 0 </mn>
    <mn> 1 </mn>
  </msubsup>

</math>
```

## 仕様

| 仕様                                                                                     | 状態                         | コメント   |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msubsup', 'msubsup') }} | {{ Spec2('MathML3') }} | 現在の仕様 |
| {{ SpecName('MathML2', 'chapter3.html#presm.msubsup', 'msubsup') }} | {{ Spec2('MathML2') }} | 初期の仕様 |

## ブラウザー互換性

{{Compat("mathml.elements.msubsup")}}

## Gecko 固有のノート

- Gecko 26.0 {{geckoRelease("26")}}から、子要素として `<none />` を使用することはできません。 レンダリングは {{MathMLElement("msup")}} と {{MathMLElement("mmultiscripts")}} の同等の構成と一貫して行われ、`subscriptshift`と`superscriptshift`属性の誤った適用によるバグが修正されました（詳細については {{bug("827713")}} を参照）。

## 関連項目

- {{ MathMLElement("msub") }} (上付き文字)
- {{ MathMLElement("msup") }} (下付き文字)
- {{ MathMLElement("mmultiscripts") }} (プリスケープとテンソルインデックス)
