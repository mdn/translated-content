---
title: CSS ページメディア
slug: Web/CSS/Guides/Paged_media
original_slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 76885324c55eda81ef536254ffe532ca68a2f502
---

**CSS ページメディア**モジュールは、印刷や、コンテンツを離散的なページに分割するその他のメディアでのコンテンツの表示を制御するプロパティを定義します。これにより、改ページの設定、印刷可能領域の制御、左右のページの外観の別々の設定、要素内の改行の制御を行うことができます。

## リファレンス

### CSS プロパティ

- {{cssxref('page')}}

### アットルール

- {{cssxref('@page')}}
  - {{cssxref('@page/page-orientation', 'page-orientation')}} 記述子
  - {{cssxref('@page/size', 'size')}} 記述子
  - [マージン記述子](/ja/docs/Web/CSS/Reference/Properties/margin)
- [マージンのアットルール](/ja/docs/Web/CSS/Reference/At-rules/@page#マージンのアットルール)

> [!NOTE]
> CSS ページメディアモジュールには、まだ実装されていない `@page` の 2 つの記述子 `bleeds` および `marks`を導入しています。

### 擬似クラス

- {{cssxref(':blank')}}
- {{cssxref(':first')}}
- {{cssxref(':left')}}
- {{cssxref(':right')}}

## 関連概念

- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
  - {{cssxref("break-after")}} プロパティ
  - {{cssxref("break-before")}} プロパティ
  - {{cssxref("break-inside")}} プロパティ
  - {{cssxref("orphans")}} プロパティ
  - {{cssxref("widows")}} プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [印刷](/ja/docs/Web/CSS/Guides/Media_queries/Printing)ガイド
- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
