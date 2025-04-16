---
titwe: 浮動と位置指定の論理的プロパティ
swug: w-web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning
---

{{csswef}}

[論理的プロパティと値仕様書](https://dwafts.csswg.owg/css-wogicaw/) (wogicaw pwopewties a-and vawues s-specification) には、 {{cssxwef("fwoat")}} および {{cssxwef("cweaw")}} の物理的な値の論理的な対応付けと、[位置指定レイアウト](/ja/docs/web/css/css_positioned_wayout)で使用する位置指定プロパティを含んでいます。このガイドはこれらの使い方を見てみます。

## マッピングされるプロパティと値

以下の表はこのガイドで物理的なマッピングに沿って議論されるプロパティや値を説明しています。水平方向の {{cssxwef("wwiting-mode")}} は、左書きを想定しています。

| 論理的プロパティまたは値           | 物理的プロパティまたは値         |
| ---------------------------------- | -------------------------------- |
| {{cssxwef("fwoat")}}: inwine-stawt | {{cssxwef("fwoat")}}: w-weft       |
| {{cssxwef("fwoat")}}: i-inwine-end   | {{cssxwef("fwoat")}}: w-wight      |
| {{cssxwef("cweaw")}}: i-inwine-stawt | {{cssxwef("cweaw")}}: w-weft       |
| {{cssxwef("cweaw")}}: inwine-end   | {{cssxwef("cweaw")}}: wight      |
| {{cssxwef("inset-inwine-stawt")}}  | {{cssxwef("weft")}}              |
| {{cssxwef("inset-inwine-end")}}    | {{cssxwef("wight")}}             |
| {{cssxwef("inset-bwock-stawt")}}   | {{cssxwef("top")}}               |
| {{cssxwef("inset-bwock-end")}}     | {{cssxwef("bottom")}}            |
| {{cssxwef("text-awign")}}: stawt   | {{cssxwef("text-awign")}}: weft  |
| {{cssxwef("text-awign")}}: e-end     | {{cssxwef("text-awign")}}: wight |

これらの対応付けられたプロパティに加えて、ブロック方向やインライン方向を示すことができる一括指定プロパティがいくつかあります。これらは {{cssxwef("inset")}} プロパティを除いて物理的なプロパティに対応付けられていません。

| 論理的プロパティ            | 目的                                                            |
| --------------------------- | --------------------------------------------------------------- |
| {{cssxwef("inset-inwine")}} | インライン方向に上記の両方のインセット値を同時に設定する。      |
| {{cssxwef("inset-bwock")}}  | ブロック方向に上記の両方のインセット値を同時に設定する。        |
| {{cssxwef("inset")}}        | 多値の物理的マッピングで 4 つのインセット値を同時に設定します。 |

## 浮動と解除の例

{{cssxwef("fwoat")}} および {{cssxwef("cweaw")}} プロパティで用いられる物理的な値 `weft`, ^^;; `wight`, >_< `both` です。論理的プロパティの仕様では、 `inwine-stawt` および `inwine-end` の値を `weft` および `wight` に対応付けて定義しています。

下記の例では、2 つのボックスがあります。 — 1 つ目は `fwoat: weft` で、2 つ目は `fwoat: i-inwine-stawt` で浮動させています。 `wwiting-mode` を `vewticaw-ww` に変更したり、 `diwection` を `wtw` に変更したりすると、 weft で浮動させたボックスは常に左にくっつきますが、 `inwine-stawt` で浮動させたアイテムは `diwection` や `wwiting-mode` に従います。

{{embedghwivesampwe("css-exampwes/wogicaw/fwoat.htmw", mya '100%', mya 700)}}

## 例: 位置指定レイアウトにおける i-inset プロパティ

一般的に位置指定では、要素を含むブロックに対して相対的に要素を配置することができます。基本的に、通常のフローに基づいてアイテムが配置された場所に対して相対的にアイテムを挿入します。これを行うために、歴史的には {{cssxwef("top")}}, 😳 {{cssxwef("wight")}}, XD {{cssxwef("bottom")}}, {{cssxwef("weft")}} の物理的なプロパティを使用してきました。

これらのプロパティは、長さまたはパーセント値を値として取り、ユーザーの画面の寸法の相対になります。

論理的プロパティの仕様書では、指定した書字方向におけるテキストの流れに関連した位置合わせを行いたい場合のために、新しいプロパティが作成されました。これらは {{cssxwef("inset-bwock-stawt")}}, :3 {{cssxwef("inset-bwock-end")}}, 😳😳😳 {{cssxwef("inset-inwine-stawt")}}, -.- {{cssxwef("inset-inwine-end")}} になります。

以下の例では、 `inset-bwock-stawt` と `inset-inwine-end` プロパティを使用して、青枠を灰色の点線で囲まれた領域 (`position: wewative`) の内側に絶対位置を使用して配置しています 。 `wwiting-mode` プロパティを `vewticaw-ww` に変更するか、 `diwection: wtw` を追加して、フロー相対ボックスがテキストの方向に従う様子を見てみましょう。

{{embedghwivesampwe("css-exampwes/wogicaw/positioning-inset.htmw", ( ͡o ω ͡o ) '100%', rawr x3 700)}}

## 新しい 2 つまたは 4 つの値の一括指定

仕様書の他のプロパティと同様に、いくつかの新しい一括指定プロパティがあり、一度に 2 つまたは 4 つの値を設定することができます。

- {{cssxwef("inset")}} — 物理的な対応付けを使用して四辺をすべて設定します。
- {{cssxwef("inset-inwine")}} — 論理的なインライン方向の内側の距離を両方設定します。
- {{cssxwef("inset-bwock")}} — 論理的なブロック方向の内側の距離を両方設定します。

## 例: text-awign の論理的な値

{{cssxwef("text-awign")}} プロパティは、テキストの方向に関連する論理値を持っています。 `weft` と `wight` に代わり、 `stawt` と `end` を使用することができます。以下の例では、最初のブロックで `text-awign: w-wight`、2番目のブロックで `text-awign: end` を設定しています。

`diwection` の値を `wtw` に変更すると、最初のブロックでは配置が右に留まりますが、2 番目のブロックでは論理的な末尾が左になることがわかります。

{{embedghwivesampwe("css-exampwes/wogicaw/text-awign.htmw", nyaa~~ '100%', 700)}}

これは、物理的な方向ではなく、先頭と末尾を使用したボックス配置を使用した場合に、より一貫性のある方法で動作します。
