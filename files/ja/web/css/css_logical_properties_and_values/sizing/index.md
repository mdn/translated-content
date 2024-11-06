---
title: 寸法の論理的プロパティ
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
---

{{CSSRef}}

このガイドでは、ページ上の要素の寸法の設定に使用する、物理的な方向のプロパティと論理的なプロパティのフローに関連した対応付けを説明します。

アイテムの寸法を指定するときに、[論理的プロパティと値](https://drafts.csswg.org/css-logical/)仕様書により、水平・垂直の物理的な長さ (左や右など) に関連する物理的な寸法ではなく、テキストの流れ (インラインとブロック) に関連した寸法を示すことができます。これらのフローに関連した対応付けは、私たちの大多数にとって普通であることもあるので、デザインでは物理的・論理的の両方の寸法を使用することができます。書字方向がどうであっても物理的な長さに関連した機能が使用したい場合もあるでしょう。

## 長さへの対応付け

以下の表は、論理的なプロパティと物理的なプロパティの対応付けを示しています。この対応付けは、英語やアラビア語のような `horizontal-tb` の書字方向を想定しており、この場合は {{CSSxRef("width")}} が {{CSSxRef("inline-size")}} に対応付けられます。

縦書きモードの場合は、 {{CSSxRef("inline-size")}} は {{CSSxRef("height")}} に対応付けられます。

| 論理的プロパティ               | 物理的プロパティ          |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## 幅と高さの例

{{CSSxRef("width")}} と {{CSSxRef("height")}} の論理的な対応付けでは、 {{CSSxRef("inline-size")}} がインライン方向の長さを設定し、 {{CSSxRef("block-size")}} がブロック方向の長さを設定します。英語の場合は、 `width` を `inline-size` で、 `height` を `block-size` で置き換えると同じレイアウトになります。

以下のライブデモでは、書字方向を `horizontal-tb` に設定しました。これを `vertical-rl` に変更すると、最初の例 — `width` と `height` を使用したもの — では、テキストが縦書きになるにもかかわらず、それぞれの方向が同じ寸法です。二番目の例 — `inline-size` と `block-size` を使用したもの — は、ブロック全体が回転したようにテキストの方向に従います。

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## 最小幅と最小高さの例

{{CSSxRef("min-width")}} と {{CSSxRef("min-height")}} も、 {{CSSxRef("min-inline-size")}} と {{CSSxRef("min-block-size")}} に対応付けられます。これらは `inline-size` および `block-size` プロパティと同様に動作しますが、固定の寸法ではなく最小寸法を設定します。

最初の例のように、以下の例を `vertical-rl` に変更してみて、その作用を確認してみてください。最初の例では `min-height` を使用しており、二番目の例では `min-block-size` を使用しています。

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## 最大幅と最大高さの例

最後に {{CSSxRef("max-inline-size")}} と {{CSSxRef("max-block-size")}} を、 {{CSSxRef("max-width")}} と {{CSSxRef("max-height")}} の論理的な置き換えとして使用することができます。以下の例を前と同様に操作してみてください。

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## 大きさ変更の論理キーワード

{{CSSxRef("resize")}} プロパティは、アイテムの大きさが変わるかどうかを物理的な値である `horizontal` および `vertical` で指定します。 `resize` プロパティは論理的なキーワード値にも対応しています。 `resize: inline` を使用すると、インライン方向の大きさが変わることを許可し、 `resize: block` を使用すると、ブロック方向の大きさが変わることを許可します。

`both` のキーワード値は物理的または論理的に考えて動作します。これは両方を同時に設定します。以下の例を実行してみてください。

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}
