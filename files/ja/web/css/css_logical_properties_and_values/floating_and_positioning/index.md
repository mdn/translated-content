---
title: 浮動と位置指定の論理的プロパティ
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
---

{{CSSRef}}

[論理的プロパティと値仕様書](https://drafts.csswg.org/css-logical/) (Logical Properties and Values specification) には、 {{cssxref("float")}} および {{cssxref("clear")}} の物理的な値の論理的な対応付けと、[位置指定レイアウト](/ja/docs/Web/CSS/CSS_Positioning)で使用する位置指定プロパティを含んでいます。このガイドはこれらの使い方を見てみます。

## マッピングされるプロパティと値

以下の表はこのガイドで物理的なマッピングに沿って議論されるプロパティや値を説明しています。水平方向の {{cssxref("writing-mode")}} は、左書きを想定しています。

| 論理的プロパティまたは値           | 物理的プロパティまたは値         |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

これらの対応付けられたプロパティに加えて、ブロック方向やインライン方向を示すことができる一括指定プロパティがいくつかあります。これらは {{cssxref("inset")}} プロパティを除いて物理的なプロパティに対応付けられていません。

| 論理的プロパティ            | 目的                                                            |
| --------------------------- | --------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | インライン方向に上記の両方のインセット値を同時に設定する。      |
| {{cssxref("inset-block")}}  | ブロック方向に上記の両方のインセット値を同時に設定する。        |
| {{cssxref("inset")}}        | 多値の物理的マッピングで 4 つのインセット値を同時に設定します。 |

## 浮動と解除の例

{{cssxref("float")}} および {{cssxref("clear")}} プロパティで用いられる物理的な値 `left`, `right`, `both` です。論理的プロパティの仕様では、 `inline-start` および `inline-end` の値を `left` および `right` に対応付けて定義しています。

下記の例では、2 つのボックスがあります。 — 1 つ目は `float: left` で、2 つ目は `float: inline-start` で浮動させています。 `writing-mode` を `vertical-rl` に変更したり、 `direction` を `rtl` に変更したりすると、 left で浮動させたボックスは常に左にくっつきますが、 `inline-start` で浮動させたアイテムは `direction` や `writing-mode` に従います。

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## 例: 位置指定レイアウトにおける inset プロパティ

一般的に位置指定では、要素を含むブロックに対して相対的に要素を配置することができます。基本的に、通常のフローに基づいてアイテムが配置された場所に対して相対的にアイテムを挿入します。これを行うために、歴史的には {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} の物理的なプロパティを使用してきました。

これらのプロパティは、長さまたはパーセント値を値として取り、ユーザーの画面の寸法の相対になります。

論理的プロパティの仕様書では、指定した書字方向におけるテキストの流れに関連した位置合わせを行いたい場合のために、新しいプロパティが作成されました。これらは {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} になります。

以下の例では、 `inset-block-start` と `inset-inline-end` プロパティを使用して、青枠を灰色の点線で囲まれた領域 (`position: relative`) の内側に絶対位置を使用して配置しています 。 `writing-mode` プロパティを `vertical-rl` に変更するか、 `direction: rtl` を追加して、フロー相対ボックスがテキストの方向に従う様子を見てみましょう。

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## 新しい 2 つまたは 4 つの値の一括指定

仕様書の他のプロパティと同様に、いくつかの新しい一括指定プロパティがあり、一度に 2 つまたは 4 つの値を設定することができます。

- {{cssxref("inset")}} — 物理的な対応付けを使用して四辺をすべて設定します。
- {{cssxref("inset-inline")}} — 論理的なインライン方向の内側の距離を両方設定します。
- {{cssxref("inset-block")}} — 論理的なブロック方向の内側の距離を両方設定します。

## 例: text-align の論理的な値

{{cssxref("text-align")}} プロパティは、テキストの方向に関連する論理値を持っています。 `left` と `right` に代わり、 `start` と `end` を使用することができます。以下の例では、最初のブロックで `text-align: right`、2番目のブロックで `text-align: end` を設定しています。

`direction` の値を `rtl` に変更すると、最初のブロックでは配置が右に留まりますが、2 番目のブロックでは論理的な末尾が左になることがわかります。

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

これは、物理的な方向ではなく、先頭と末尾を使用したボックス配置を使用した場合に、より一貫性のある方法で動作します。
