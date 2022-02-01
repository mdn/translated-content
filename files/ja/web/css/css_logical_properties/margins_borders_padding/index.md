---
title: マージン、境界、パディングの論理的プロパティ
slug: Web/CSS/CSS_Logical_Properties/Margins_borders_padding
tags:
  - CSS
  - CSS 論理的プロパティ
  - ガイド
  - 概念
  - 書字方向
translation_of: Web/CSS/CSS_Logical_Properties/Margins_borders_padding
---
{{CSSRef}}

[論理的プロパティと値仕様書](https://drafts.csswg.org/css-logical/) (Logical Properties and Values specification) では、それぞれのマージン、境界、パディングのプロパティおよびその一括指定について、フローに関連する対応付けを定義します。

[CSS 論理的プロパティと値](/ja/docs/Web/CSS/CSS_Logical_Properties)のメインページを見ると、たくさんのプロパティが並んでいます。これは多くがマージン、境界、パディングのそれぞれの辺について 4 つの個別指定値と、一括指定値のすべてがあるためです。

## マージン、境界、パティングの対応付け

この仕様では、それぞれの論理値の物理的な対応関係を詳細に示しています。下の表では、使用されている {{cssxref("writing-mode")}} が `horizontal-tb` — 左書きであると仮定して、これらに対応する値を与えています。インラインの方向は左から右への水平方向で、{{cssxref("margin-inline-start")}} は {{cssxref("margin-left")}} と同じになります。

`horizontal-tb` を使用して右書きである場合は、 {{cssxref("margin-inline-start")}} が {{cssxref("margin-right")}} と同じになり、縦書きの場合は {{cssxref("margin-top")}} を使うのと同じになります。

| 論理的プロパティ                         | 物理的プロパティ                          |
| ---------------------------------------- | ----------------------------------------- |
| {{cssxref("border-block-end")}}          | {{cssxref("border-bottom")}}              |
| {{cssxref("border-block-end-color")}}    | {{cssxref("border-bottom-color")}}        |
| {{cssxref("border-block-end-style")}}    | {{cssxref("border-bottom-style")}}        |
| {{cssxref("border-block-end-width")}}    | {{cssxref("border-bottom-width")}}        |
| {{cssxref("border-block-start")}}        | {{cssxref("border-top")}}                 |
| {{cssxref("border-block-start-color")}}  | {{cssxref("border-top-color")}}           |
| {{cssxref("border-block-start-style")}}  | {{cssxref("border-top-style")}}           |
| {{cssxref("border-block-start-width")}}  | {{cssxref("border-top-width")}}           |
| {{cssxref("border-inline-end")}}         | {{cssxref("border-right")}}               |
| {{cssxref("border-inline-end-color")}}   | {{cssxref("border-right-color")}}         |
| {{cssxref("border-inline-end-style")}}   | {{cssxref("border-right-style")}}         |
| {{cssxref("border-inline-end-width")}}   | {{cssxref("border-right-width")}}         |
| {{cssxref("border-inline-start")}}       | {{cssxref("border-left")}}                |
| {{cssxref("border-inline-start-color")}} | {{cssxref("border-left-color")}}          |
| {{cssxref("border-inline-start-style")}} | {{cssxref("border-left-style")}}          |
| {{cssxref("border-inline-start-width")}} | {{cssxref("border-left-width")}}          |
| {{cssxref("border-start-start-radius")}} | {{cssxref("border-top-left-radius")}}     |
| {{cssxref("border-start-end-radius")}}   | {{cssxref("border-bottom-left-radius")}}  |
| {{cssxref("border-end-start-radius")}}   | {{cssxref("border-top-right-radius")}}    |
| {{cssxref("border-end-end-radius")}}     | {{cssxref("border-bottom-right-radius")}} |
| {{cssxref("margin-block-end")}}          | {{cssxref("margin-bottom")}}              |
| {{cssxref("margin-block-start")}}        | {{cssxref("margin-top")}}                 |
| {{cssxref("margin-inline-end")}}         | {{cssxref("margin-right")}}               |
| {{cssxref("margin-inline-start")}}       | {{cssxref("margin-left")}}                |
| {{cssxref("padding-block-end")}}         | {{cssxref("padding-bottom")}}             |
| {{cssxref("padding-block-start")}}       | {{cssxref("padding-top")}}                |
| {{cssxref("padding-inline-end")}}        | {{cssxref("padding-right")}}              |
| {{cssxref("padding-inline-start")}}      | {{cssxref("padding-left")}}               |

また、ボックスの両方のブロックまたは両方のインライン側の縁を同時に対象にできることから、いくつかの追加の略語があります。これらの略語は、物理的プロパティに同等のものはありません。

| プロパティ                         | 目的                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{cssxref("border-block")}}        | {{cssxref("border-color")}}, {{cssxref("border-style")}}, {{cssxref("border-width")}} をブロック方向の両方の境界に設定します。 |
| {{cssxref("border-block-color")}}  | `border-color` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxref("border-block-style")}}  | `border-style` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxref("border-block-width")}}  | `border-width` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxref("border-inline")}}       | `border-color`, `-style`, `-width` をインライン方向の両方の境界に設定します。                                                  |
| {{cssxref("border-inline-color")}} | `border-color`  をインライン方向の両方の境界に設定します。                                                                     |
| {{cssxref("border-inline-style")}} | `border-style`  をインライン方向の両方の境界に設定します。                                                                     |
| {{cssxref("border-inline-width")}} | `border-width`  をインライン方向の両方の境界に設定します。                                                                     |
| {{cssxref("margin-block")}}        | ブロック方向のすべての {{cssxref("margin")}} を設定します。                                                                    |
| {{cssxref("margin-inline")}}       | インライン方向のすべての `margin` を設定します。                                                                               |
| {{cssxref("padding-block")}}       | ブロック方向のすべての {{cssxref("padding")}} を設定します。                                                                   |
| {{cssxref("padding-inline")}}      | インライン方向のすべての `padding` を設定します。                                                                              |

## マージンの例

対応付けられたされたマージンのプロパティである {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-end")}} は、物理的に対応するプロパティの代わりに使用できます。

下の例では、2 つのボックスを作成し、それぞれの端に異なるサイズのマージンを加えています。マージンがよりわかりやすくなるように、境界付きの特別なコンテナーを追加しています。

一方のボックスは物理的なプロパティを使用しており、もう一方は論理的なプロパティを使用しています。{{cssxref("direction")}} プロパティを `rtl` に変更して、ボックスが右から左の方向に表示されるようにしてみてください。1 つ目のボックスのマージンは同じ場所に留まりますが、2 つ目のボックスのインライン方向のマージンは切り替わります。

また、`writing-mode` を `horizontal-tb` から `vertical-rl` に変更してみてください。ここでも、最初のボックスではマージンが同じ場所に留まっていますが、2 つ目のボックスではテキストの方向に合わせて切り替わっていることに注意してください。

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### マージンの一括指定

ボックスの両側 (インラインの両側またはブロックの両側) を対象とすることができるようになったため、{{cssxref("margin-inline")}} と {{cssxref("margin-block")}} という新しい一括指定が用意されており、2 つの値を受け入れます。1 つ目の値はその次元の先頭に適用され、2 つ目の値は末尾に適用されます。1 つの値しか使用しない場合は、両方に適用されます。

横書きの場合、この CSS はボックスの上部に 5px のマージンを、下部に 10px のマージンを適用します。

```css
.box {
  margin-block: 5px 10px;
}
```

## パディングの例

{{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-end")}} の対応付けられたパディングプロパティは、物理的な対応の代わりに使用することができます。

以下の例では、2 つのボックスがあり、一方は物理的なパディングプロパティを使用しており、もう一方は論理的なパディングプロパティを使用しています。 `writing-mode` が `horizontal-tb` の場合は、両方のボックスは同じように表示されるはずです。

`direction` プロパティを `rtl` に変更して、ボックスが右から左の方向に表示されるようにしてみてください。1 つ目のボックスのパディングは同じ場所に留まりますが、2 つ目のボックスのインライン方向のパディングは切り替わります。

また、`writing-mode` を `horizontal-tb` から `vertical-rl` に変更してみてください。ここでも、最初のボックスではパディングは同じ場所に留まっていますが、2 つ目のボックスではテキストの方向に合わせて切り替わっていることに注意してください。

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### パディングの一括指定

マージンと同様に、パディングにも 2 つの値の一括指定 — {{cssxref("padding-inline")}} と {{cssxref("padding-block")}} — があります。これにより、2 つのインライン方向と 2 つのブロック方向のパディングをそれぞれ設定することができます。

`writing-mode` が横書きである場合、この CSS はボックスの上部に `5px` のパディングを、下部に 10px のパディングを適用します。

```css
.box {
  padding-block: 5px 10px;
}
```

## 境界の例

境界のプロパティは、論理的プロパティと値が非常に多くのプロパティを持っているように見える主な原因であり、ボックスのそれぞれの辺の境界線の色、幅、スタイルを表す個別指定と、それぞれの辺に 3 つを一度に設定する一括指定があります。マージンやパディングと同様に、それぞれの物理的なプロパティの対応付けされたバージョンがあります。

以下のデモでは、いくつかの個別指定と 3 つの一括指定の値を使用しています。他のデモと同様に、`direction` プロパティを `rtl` に変更してボックスを右から左の方向に表示させたり、`writing-mode` を `horizontal-tb` から `vertical-rl` に変更したりしてみてください。

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### 新しい境界の一括指定

ブロックやインライン方向の幅、スタイル、色を設定する 2 値の一括指定と、ブロックやインライン方向の 3 つの値をすべて設定する 2 値の一括指定があります。下のコードは、横書きの場合、ボックスの上下に 2px の緑の実線の境界線、左右に 4px の紫の点線の境界線が表示されます。

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### フローに関連した border-radius プロパティ

この仕様では、かなり最近になって {{cssxref("border-radius")}} の個別指定にフロー相対値が追加されました。これらはまだどのブラウザーでも実装されていません。以下の例では、横長の `writing-mode` で、右上の境界の半径を 1em、右下を 0、左下を 20px、左上を 40px に設定しています。

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## 4 つの値の一括指定構文で論理的な値を示す

仕様書では、`margin` プロパティのような 4 つの値の一括指定を提案していますが、これをどのように表示するかの最終決定はまだなされておらず、[この Issue](https://github.com/w3c/csswg-drafts/issues/1282) で議論されています。

margin、padding、border などの 4 つの値の一括指定を使用すると、現在は物理的なバージョンが使用されるので、文書の流れに従うことが重要な場合は、当面は個別指定のプロパティを使用してください。
