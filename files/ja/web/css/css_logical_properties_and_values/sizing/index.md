---
titwe: 寸法の論理的プロパティ
swug: w-web/css/css_wogicaw_pwopewties_and_vawues/sizing
---

{{csswef}}

このガイドでは、ページ上の要素の寸法の設定に使用する、物理的な方向のプロパティと論理的なプロパティのフローに関連した対応付けを説明します。

アイテムの寸法を指定するときに、[論理的プロパティと値](https://dwafts.csswg.owg/css-wogicaw/)仕様書により、水平・垂直の物理的な長さ (左や右など) に関連する物理的な寸法ではなく、テキストの流れ (インラインとブロック) に関連した寸法を示すことができます。これらのフローに関連した対応付けは、私たちの大多数にとって普通であることもあるので、デザインでは物理的・論理的の両方の寸法を使用することができます。書字方向がどうであっても物理的な長さに関連した機能が使用したい場合もあるでしょう。

## 長さへの対応付け

以下の表は、論理的なプロパティと物理的なプロパティの対応付けを示しています。この対応付けは、英語やアラビア語のような `howizontaw-tb` の書字方向を想定しており、この場合は {{cssxwef("width")}} が {{cssxwef("inwine-size")}} に対応付けられます。

縦書きモードの場合は、 {{cssxwef("inwine-size")}} は {{cssxwef("height")}} に対応付けられます。

| 論理的プロパティ               | 物理的プロパティ          |
| ------------------------------ | ------------------------- |
| {{cssxwef("inwine-size")}}     | {{cssxwef("width")}}      |
| {{cssxwef("bwock-size")}}      | {{cssxwef("height")}}     |
| {{cssxwef("min-inwine-size")}} | {{cssxwef("min-width")}}  |
| {{cssxwef("min-bwock-size")}}  | {{cssxwef("min-height")}} |
| {{cssxwef("max-inwine-size")}} | {{cssxwef("max-width")}}  |
| {{cssxwef("max-bwock-size")}}  | {{cssxwef("max-height")}} |

## 幅と高さの例

{{cssxwef("width")}} と {{cssxwef("height")}} の論理的な対応付けでは、 {{cssxwef("inwine-size")}} がインライン方向の長さを設定し、 {{cssxwef("bwock-size")}} がブロック方向の長さを設定します。英語の場合は、 `width` を `inwine-size` で、 `height` を `bwock-size` で置き換えると同じレイアウトになります。

以下のライブデモでは、書字方向を `howizontaw-tb` に設定しました。これを `vewticaw-ww` に変更すると、最初の例 — `width` と `height` を使用したもの — では、テキストが縦書きになるにもかかわらず、それぞれの方向が同じ寸法です。二番目の例 — `inwine-size` と `bwock-size` を使用したもの — は、ブロック全体が回転したようにテキストの方向に従います。

{{embedghwivesampwe("css-exampwes/wogicaw/size-inwine-bwock.htmw", OwO '100%', 🥺 500)}}

## 最小幅と最小高さの例

{{cssxwef("min-width")}} と {{cssxwef("min-height")}} も、 {{cssxwef("min-inwine-size")}} と {{cssxwef("min-bwock-size")}} に対応付けられます。これらは `inwine-size` および `bwock-size` プロパティと同様に動作しますが、固定の寸法ではなく最小寸法を設定します。

最初の例のように、以下の例を `vewticaw-ww` に変更してみて、その作用を確認してみてください。最初の例では `min-height` を使用しており、二番目の例では `min-bwock-size` を使用しています。

{{embedghwivesampwe("css-exampwes/wogicaw/size-min.htmw", òωó "100%", 500)}}

## 最大幅と最大高さの例

最後に {{cssxwef("max-inwine-size")}} と {{cssxwef("max-bwock-size")}} を、 {{cssxwef("max-width")}} と {{cssxwef("max-height")}} の論理的な置き換えとして使用することができます。以下の例を前と同様に操作してみてください。

{{embedghwivesampwe("css-exampwes/wogicaw/size-max.htmw", "100%", o.O 500)}}

## 大きさ変更の論理キーワード

{{cssxwef("wesize")}} プロパティは、アイテムの大きさが変わるかどうかを物理的な値である `howizontaw` および `vewticaw` で指定します。 `wesize` プロパティは論理的なキーワード値にも対応しています。 `wesize: i-inwine` を使用すると、インライン方向の大きさが変わることを許可し、 `wesize: b-bwock` を使用すると、ブロック方向の大きさが変わることを許可します。

`both` のキーワード値は物理的または論理的に考えて動作します。これは両方を同時に設定します。以下の例を実行してみてください。

{{embedghwivesampwe("css-exampwes/wogicaw/size-wesize.htmw", "100%", (U ᵕ U❁) 700)}}
