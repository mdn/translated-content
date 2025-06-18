---
title: CSS コンテナー
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: da2fb2fbfca57a93dacfa9ca06dad83fcbb6be01
---

{{CSSRef}}

**CSS コンテナー** (CSS Containment) モジュールでは、抑制とコンテナークエリーを定義しています。

抑制によって、ページのサブツリーを DOM の残りの部分から分離することができます。ブラウザーは、これらの独立した部分のレンダリングを最適化することで、パフォーマンスを向上させることができます。

コンテナークエリーは寸法の[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)と似ていますが、クエリーがビューポートの寸法ではなく、コンテナーコンテキストとして定義された特定のコンテナー要素の寸法に基づいている点が異なります。コンテナークエリーにより、コンテナーの寸法、プロパティ、プロパティ値を照会し、条件付きで CSS スタイルを適用することができます。これらの条件付きスタイルを適用するとき、コンテナークエリーの長さの単位を使用することができます。コンテナークエリーの長さの単位は、クエリーコンテナーの寸法に相対する長さを指定します。追加のプロパティを定義することで、特定の要素をクエリーコンテナーとして確立し、それに固有の名前を付けることができます。

## リファレンス

### プロパティ

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

### イベント

- {{domxref("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### インターフェイス

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
  - {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} プロパティ
- {{domxref("CSSContainerRule")}}
  - {{domxref("CSSContainerRule.containerName")}}
  - {{domxref("CSSContainerRule.containerQuery")}}

## ガイド

- [CSS コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)

  - : コンテナーコンテキストに名前を付けることを含む、 `@container` でコンテナークエリーを使用するガイドです。

- [CSS コンテナーの使用](/ja/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : CSS コンテナーの基本的な目的と、より良いユーザー体験のために `contain` と `content-visibility` を活用する方法を記述しています。

- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : コンテナーサイズとスタイルクエリーを `@container` で記述する方法についてのガイドです。カスタムプロパティのスタイルクエリー、クエリー構文と名前付き、コンテナークエリーの入れ子などについて記載しています。

## 関連概念

- [レイアウトと包含ブロック](/ja/docs/Web/CSS/CSS_display/Containing_block)
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)モジュール

  - {{cssxref("@container")}} アットルール
  - {{CSSxRef("container")}} プロパティ
  - {{CSSxRef("container-name")}} プロパティ
  - {{CSSxRef("container-type")}} プロパティ

- [CSS メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)モジュール

  - {{cssxref("@media")}} アットルール
  - [CSS 論理演算子](/ja/docs/Web/CSS/@media#論理演算子) (`not`, `or`, `and`)

- [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)モジュール

  - {{cssxref("@starting-style")}} アットルール
  - {{cssxref("transition-behavior")}} プロパティ

- [CSS ボックスサイズ設定](/ja/docs/Web/CSS/CSS_box_sizing)モジュール

  - {{CSSxRef("aspect-ratio")}} プロパティ
  - {{cssxref("contain-intrinsic-size")}} 一括指定プロパティ
  - {{CSSxRef("contain-intrinsic-inline-size")}} プロパティ
  - {{CSSxRef("contain-intrinsic-block-size")}} プロパティ
  - {{CSSxRef("contain-intrinsic-width")}} プロパティ
  - {{CSSxRef("contain-intrinsic-height")}} プロパティ

- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール

  - [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)ガイド

- [CSS 入れ子](/ja/docs/Web/CSS/CSS_nesting)モジュール

  - [CSS 入れ子のアットルール](/ja/docs/Web/CSS/CSS_nesting/Nesting_at-rules)ガイド

## 仕様書

{{Specifications}}

## 関連情報

- [機能クエリーの使用](/ja/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [アスペクト比の理解と設定](/ja/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} アットルール
