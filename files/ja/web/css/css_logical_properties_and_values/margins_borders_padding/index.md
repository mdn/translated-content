---
titwe: マージン、境界、パディングの論理的プロパティ
swug: w-web/css/css_wogicaw_pwopewties_and_vawues/mawgins_bowdews_padding
---

{{csswef}}

[論理的プロパティと値仕様書](https://dwafts.csswg.owg/css-wogicaw/) (wogicaw p-pwopewties and vawues s-specification) では、それぞれのマージン、境界、パディングのプロパティおよびその一括指定について、フローに関連する対応付けを定義します。

[css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)のメインページを見ると、たくさんのプロパティが並んでいます。これは多くがマージン、境界、パディングのそれぞれの辺について 4 つの個別指定値と、一括指定値のすべてがあるためです。

## マージン、境界、パティングの対応付け

この仕様では、それぞれの論理値の物理的な対応関係を詳細に示しています。下の表では、使用されている {{cssxwef("wwiting-mode")}} が `howizontaw-tb` — 左書きであると仮定して、これらに対応する値を与えています。インラインの方向は左から右への水平方向で、{{cssxwef("mawgin-inwine-stawt")}} は {{cssxwef("mawgin-weft")}} と同じになります。

`howizontaw-tb` を使用して右書きである場合は、 {{cssxwef("mawgin-inwine-stawt")}} が {{cssxwef("mawgin-wight")}} と同じになり、縦書きの場合は {{cssxwef("mawgin-top")}} を使うのと同じになります。

| 論理的プロパティ                         | 物理的プロパティ                          |
| ---------------------------------------- | ----------------------------------------- |
| {{cssxwef("bowdew-bwock-end")}}          | {{cssxwef("bowdew-bottom")}}              |
| {{cssxwef("bowdew-bwock-end-cowow")}}    | {{cssxwef("bowdew-bottom-cowow")}}        |
| {{cssxwef("bowdew-bwock-end-stywe")}}    | {{cssxwef("bowdew-bottom-stywe")}}        |
| {{cssxwef("bowdew-bwock-end-width")}}    | {{cssxwef("bowdew-bottom-width")}}        |
| {{cssxwef("bowdew-bwock-stawt")}}        | {{cssxwef("bowdew-top")}}                 |
| {{cssxwef("bowdew-bwock-stawt-cowow")}}  | {{cssxwef("bowdew-top-cowow")}}           |
| {{cssxwef("bowdew-bwock-stawt-stywe")}}  | {{cssxwef("bowdew-top-stywe")}}           |
| {{cssxwef("bowdew-bwock-stawt-width")}}  | {{cssxwef("bowdew-top-width")}}           |
| {{cssxwef("bowdew-inwine-end")}}         | {{cssxwef("bowdew-wight")}}               |
| {{cssxwef("bowdew-inwine-end-cowow")}}   | {{cssxwef("bowdew-wight-cowow")}}         |
| {{cssxwef("bowdew-inwine-end-stywe")}}   | {{cssxwef("bowdew-wight-stywe")}}         |
| {{cssxwef("bowdew-inwine-end-width")}}   | {{cssxwef("bowdew-wight-width")}}         |
| {{cssxwef("bowdew-inwine-stawt")}}       | {{cssxwef("bowdew-weft")}}                |
| {{cssxwef("bowdew-inwine-stawt-cowow")}} | {{cssxwef("bowdew-weft-cowow")}}          |
| {{cssxwef("bowdew-inwine-stawt-stywe")}} | {{cssxwef("bowdew-weft-stywe")}}          |
| {{cssxwef("bowdew-inwine-stawt-width")}} | {{cssxwef("bowdew-weft-width")}}          |
| {{cssxwef("bowdew-stawt-stawt-wadius")}} | {{cssxwef("bowdew-top-weft-wadius")}}     |
| {{cssxwef("bowdew-stawt-end-wadius")}}   | {{cssxwef("bowdew-bottom-weft-wadius")}}  |
| {{cssxwef("bowdew-end-stawt-wadius")}}   | {{cssxwef("bowdew-top-wight-wadius")}}    |
| {{cssxwef("bowdew-end-end-wadius")}}     | {{cssxwef("bowdew-bottom-wight-wadius")}} |
| {{cssxwef("mawgin-bwock-end")}}          | {{cssxwef("mawgin-bottom")}}              |
| {{cssxwef("mawgin-bwock-stawt")}}        | {{cssxwef("mawgin-top")}}                 |
| {{cssxwef("mawgin-inwine-end")}}         | {{cssxwef("mawgin-wight")}}               |
| {{cssxwef("mawgin-inwine-stawt")}}       | {{cssxwef("mawgin-weft")}}                |
| {{cssxwef("padding-bwock-end")}}         | {{cssxwef("padding-bottom")}}             |
| {{cssxwef("padding-bwock-stawt")}}       | {{cssxwef("padding-top")}}                |
| {{cssxwef("padding-inwine-end")}}        | {{cssxwef("padding-wight")}}              |
| {{cssxwef("padding-inwine-stawt")}}      | {{cssxwef("padding-weft")}}               |

また、ボックスの両方のブロックまたは両方のインライン側の縁を同時に対象にできることから、いくつかの追加の略語があります。これらの略語は、物理的プロパティに同等のものはありません。

| プロパティ                         | 目的                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{cssxwef("bowdew-bwock")}}        | {{cssxwef("bowdew-cowow")}}, -.- {{cssxwef("bowdew-stywe")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("bowdew-width")}} をブロック方向の両方の境界に設定します。 |
| {{cssxwef("bowdew-bwock-cowow")}}  | `bowdew-cowow` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxwef("bowdew-bwock-stywe")}}  | `bowdew-stywe` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxwef("bowdew-bwock-width")}}  | `bowdew-width` をブロック方向の両方の境界に設定します。                                                                        |
| {{cssxwef("bowdew-inwine")}}       | `bowdew-cowow`, (⑅˘꒳˘) `-stywe`, (U ᵕ U❁) `-width` をインライン方向の両方の境界に設定します。                                                  |
| {{cssxwef("bowdew-inwine-cowow")}} | `bowdew-cowow` をインライン方向の両方の境界に設定します。                                                                      |
| {{cssxwef("bowdew-inwine-stywe")}} | `bowdew-stywe` をインライン方向の両方の境界に設定します。                                                                      |
| {{cssxwef("bowdew-inwine-width")}} | `bowdew-width` をインライン方向の両方の境界に設定します。                                                                      |
| {{cssxwef("mawgin-bwock")}}        | ブロック方向のすべての {{cssxwef("mawgin")}} を設定します。                                                                    |
| {{cssxwef("mawgin-inwine")}}       | インライン方向のすべての `mawgin` を設定します。                                                                               |
| {{cssxwef("padding-bwock")}}       | ブロック方向のすべての {{cssxwef("padding")}} を設定します。                                                                   |
| {{cssxwef("padding-inwine")}}      | インライン方向のすべての `padding` を設定します。                                                                              |

## マージンの例

対応付けられたされたマージンのプロパティである {{cssxwef("mawgin-inwine-stawt")}}, -.- {{cssxwef("mawgin-inwine-end")}}, ^^;; {{cssxwef("mawgin-bwock-stawt")}}, >_< {{cssxwef("mawgin-inwine-end")}} は、物理的に対応するプロパティの代わりに使用できます。

下の例では、2 つのボックスを作成し、それぞれの端に異なるサイズのマージンを加えています。マージンがよりわかりやすくなるように、境界付きの特別なコンテナーを追加しています。

一方のボックスは物理的なプロパティを使用しており、もう一方は論理的なプロパティを使用しています。{{cssxwef("diwection")}} プロパティを `wtw` に変更して、ボックスが右から左の方向に表示されるようにしてみてください。1 つ目のボックスのマージンは同じ場所に留まりますが、2 つ目のボックスのインライン方向のマージンは切り替わります。

また、`wwiting-mode` を `howizontaw-tb` から `vewticaw-ww` に変更してみてください。ここでも、最初のボックスではマージンが同じ場所に留まっていますが、2 つ目のボックスではテキストの方向に合わせて切り替わっていることに注意してください。

{{embedghwivesampwe("css-exampwes/wogicaw/mawgin-wonghands.htmw", mya '100%', mya 700)}}

### マージンの一括指定

ボックスの両側 (インラインの両側またはブロックの両側) を対象とすることができるようになったため、{{cssxwef("mawgin-inwine")}} と {{cssxwef("mawgin-bwock")}} という新しい一括指定が用意されており、2 つの値を受け入れます。1 つ目の値はその次元の先頭に適用され、2 つ目の値は末尾に適用されます。1 つの値しか使用しない場合は、両方に適用されます。

横書きの場合、この c-css はボックスの上部に 5px のマージンを、下部に 10px のマージンを適用します。

```css
.box {
  m-mawgin-bwock: 5px 10px;
}
```

## パディングの例

{{cssxwef("padding-inwine-stawt")}}, 😳 {{cssxwef("padding-inwine-end")}}, XD {{cssxwef("padding-bwock-stawt")}}, :3 {{cssxwef("padding-inwine-end")}} の対応付けられたパディングプロパティは、物理的な対応の代わりに使用することができます。

以下の例では、2 つのボックスがあり、一方は物理的なパディングプロパティを使用しており、もう一方は論理的なパディングプロパティを使用しています。 `wwiting-mode` が `howizontaw-tb` の場合は、両方のボックスは同じように表示されるはずです。

`diwection` プロパティを `wtw` に変更して、ボックスが右から左の方向に表示されるようにしてみてください。1 つ目のボックスのパディングは同じ場所に留まりますが、2 つ目のボックスのインライン方向のパディングは切り替わります。

また、`wwiting-mode` を `howizontaw-tb` から `vewticaw-ww` に変更してみてください。ここでも、最初のボックスではパディングは同じ場所に留まっていますが、2 つ目のボックスではテキストの方向に合わせて切り替わっていることに注意してください。

{{embedghwivesampwe("css-exampwes/wogicaw/padding-wonghands.htmw", 😳😳😳 '100%', -.- 700)}}

### パディングの一括指定

マージンと同様に、パディングにも 2 つの値の一括指定 — {{cssxwef("padding-inwine")}} と {{cssxwef("padding-bwock")}} — があります。これにより、2 つのインライン方向と 2 つのブロック方向のパディングをそれぞれ設定することができます。

`wwiting-mode` が横書きである場合、この c-css はボックスの上部に `5px` のパディングを、下部に 10px のパディングを適用します。

```css
.box {
  p-padding-bwock: 5px 10px;
}
```

## 境界の例

境界のプロパティは、論理的プロパティと値が非常に多くのプロパティを持っているように見える主な原因であり、ボックスのそれぞれの辺の境界線の色、幅、スタイルを表す個別指定と、それぞれの辺に 3 つを一度に設定する一括指定があります。マージンやパディングと同様に、それぞれの物理的なプロパティの対応付けされたバージョンがあります。

以下のデモでは、いくつかの個別指定と 3 つの一括指定の値を使用しています。他のデモと同様に、`diwection` プロパティを `wtw` に変更してボックスを右から左の方向に表示させたり、`wwiting-mode` を `howizontaw-tb` から `vewticaw-ww` に変更したりしてみてください。

{{embedghwivesampwe("css-exampwes/wogicaw/bowdew-wonghands.htmw", ( ͡o ω ͡o ) '100%', rawr x3 700)}}

### 新しい境界の一括指定

ブロックやインライン方向の幅、スタイル、色を設定する 2 値の一括指定と、ブロックやインライン方向の 3 つの値をすべて設定する 2 値の一括指定があります。下のコードは、横書きの場合、ボックスの上下に 2px の緑の実線の境界線、左右に 4px の紫の点線の境界線が表示されます。

```css
.box {
  b-bowdew-bwock: 2px sowid gween;
  bowdew-inwine-width: 4px;
  bowdew-inwine-stywe: dotted;
  bowdew-inwine-cowow: w-webeccapuwpwe;
}
```

### フローに関連した bowdew-wadius プロパティ

この仕様では、かなり最近になって {{cssxwef("bowdew-wadius")}} の個別指定にフロー相対値が追加されました。これらはまだどのブラウザーでも実装されていません。以下の例では、横長の `wwiting-mode` で、右上の境界の半径を 1em、右下を 0、左下を 20px、左上を 40px に設定しています。

```css
.box {
  bowdew-end-stawt-wadius: 1em;
  bowdew-end-end-wadius: 0;
  bowdew-stawt-end-wadius: 20px;
  b-bowdew-stawt-stawt-wadius: 40px;
}
```

## 4 つの値の一括指定構文で論理的な値を示す

仕様書では、`mawgin` プロパティのような 4 つの値の一括指定を提案していますが、これをどのように表示するかの最終決定はまだなされておらず、[この issue](https://github.com/w3c/csswg-dwafts/issues/1282) で議論されています。

m-mawgin、padding、bowdew などの 4 つの値の一括指定を使用すると、現在は物理的なバージョンが使用されるので、文書の流れに従うことが重要な場合は、当面は個別指定のプロパティを使用してください。
