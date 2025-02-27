---
title: CSS 段組みレイアウト
slug: Web/CSS/CSS_multicol_layout
---

{{CSSRef}}

**CSS 段組みレイアウト**は CSS のモジュールの一つで、段組みレイアウトの対応を追加するものです。対応内容はレイアウトする段数の指定、段から段へのコンテンツの流れ方、段間の空白、段区切り線 (段間罫) などの対応が含まれています。

## 基本的な例

以下の例では、 {{cssxref("column-count")}} プロパティをコンテナーのクラスの要素に適用しています。 `column-count` の値が `3` なので、内容物は同じ寸法の 3 つの段に並べられます。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## 断片化との関係

段組みレイアウトは、文書全体が印刷ページに分割されるように行ボックスに分割することから、[ページ付きメディア](/ja/docs/Web/CSS/CSS_paged_media)に密接に関連します。従って、 [CSS 断片化](/ja/docs/Web/CSS/CSS_fragmentation)仕様書に定義されているプロパティが、段間の内容物の区切り位置を制御するために必要になりました。

## リファレンス

### 段組みレイアウトのプロパティ

- {{cssxref("column-count")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-span")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}}

### 関連する CSS 断片化のプロパティ

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## ガイド

- [段組みの基本概念](/ja/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : 段組みレイアウト仕様の概要です。
- [段のスタイル付け](/ja/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : 段間罫と段間の空間の使い方です。
- [段抜きと段の均衡](/ja/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : すべての段にまたがる要素の作り方と、段を埋める方法の制御です。
- [段組みでのはみ出しの扱い](/ja/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : アイテムが段をあふれたときに起こることと、段内の内容物が多すぎてコンテナーに収まらない場合に起こることです。
- [段組みにおける内容の分割の扱い](/ja/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : 分割の仕様とどこで内容を区切るかの制御方法です。

## 仕様書

{{Specifications}}

## 関連情報

他の CSS レイアウト技術には以下のようなものがあります。

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout) (CSS フレックスボックス)
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)
