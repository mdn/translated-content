---
title: CSS 拘束
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: 559e1fa9e8d13e5b49862ebb1d53c6f39b55d79d
---

{{CSSRef}}

**CSS 拘束** (CSS Containment) モジュールでは、拘束とコンテナークエリーを定義しています。

拘束によって、ページのサブツリーを DOM の残りの部分から分離することができます。ブラウザーは、これらの独立した部分のレンダリングを最適化することで、パフォーマンスを向上させることができます。

コンテナクエリーは寸法の[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)と似ていますが、クエリーがビューポートの寸法ではなく、拘束コンテキストとして定義された特定のコンテナー要素の寸法に基づいている点が異なります。コンテナークエリーにより、コンテナーの寸法、プロパティ、プロパティ値を照会し、条件付きで CSS スタイルを適用することができます。これらの条件付きスタイルを適用するとき、コンテナークエリーの長さの単位を使用することができます。コンテナークエリーの長さの単位は、クエリーコンテナーの寸法に相対する長さを指定します。追加のプロパティを定義することで、特定の要素をクエリーコンテナーとして確立し、それに固有の名前を付けることができます。

## リファレンス

### プロパティ

- {{cssxref("contain")}}
- {{cssxref("container")}} 一括指定
  - {{cssxref("container-name")}}
  - {{cssxref("container-type")}}
- {{cssxref("content-visibility")}}

### アットルールと記述子

- {{cssxref("@container")}}
- [`@container` の記述子](/ja/docs/Web/CSS/@container#descriptors):
  - `aspect-ratio`
  - `block-size`
  - `height`
  - `inline-size`
  - `orientation`
  - `width`

### 関数

- [`style()`](/ja/docs/Web/CSS/@container#container_style_queries)

### データ型

- [`<container-name>`](/ja/docs/Web/CSS/@container#values)
- [`<style-feature>`](/ja/docs/Web/CSS/@container#container_style_queries)
- [Container relative `<length>` units](/ja/docs/Web/CSS/length#container_query_length_units)

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

  - : コンテナーコンテキストに名前を付けることを含む、 `@container` でコンテナクエリーを使用するガイドです。

- [CSS 拘束の使用](/ja/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : CSS コンテナーの基本的な目的と、より良いユーザー体験のために `contain` と `content-visibility` を活用する方法を記述しています。

## 関連概念

- [レイアウトと包含ブロック](/ja/docs/Web/CSS/Containing_block)
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)モジュール

  - {{cssxref("@media")}} アットルール
  - [CSS 論理演算子](/ja/docs/Web/CSS/@media#論理演算子) (`not`, `or`, `and`)

- [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)モジュール

  - {{cssxref("@starting-style")}} アットルール
  - {{cssxref("transition-behavior")}} プロパティ

- CSS ボックスサイズ調整モジュール

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

- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- [Everything You Need to Know About the CSS `will-change` Property](https://dev.opera.com/articles/css-will-change-property)
