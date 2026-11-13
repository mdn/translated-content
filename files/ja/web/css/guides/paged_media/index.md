---
title: CSS ページメディア
short-title: ページメディア
slug: Web/CSS/Guides/Paged_media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS ページメディア**モジュールは、印刷や、コンテンツを離散的なページに分割するその他のメディアでのコンテンツの表示を制御するプロパティを定義します。これにより、改ページの設定、印刷可能領域の制御、左右のページの外観の別々の設定、要素内の改行の制御を行うことができます。

CSS ページメディアモジュールは、印刷されるコンテンツや印刷プレビューとして表示されるコンテンツを含め、断片化されたコンテンツをページ形式で表示するために、ページがどのように生成され、レイアウトされるかを規定しています。このモジュールは、ページの余白、サイズ、向き、ヘッダーとフッターを制御するための機能を定義しています。また、[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)を拡張し、ページ番号や連続するヘッダー、フッターを生成するための機能を提供します。

コンテンツを生成されたページに分割し、要素内の改行を制御するプロセスについては、[CSS 断片化モジュール](/ja/docs/Web/CSS/Guides/Fragmentation)で解説されています。

## リファレンス

### CSS プロパティ

- {{cssxref("page")}}

### アットルール

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} 記述子
  - {{cssxref("@page/size", "size")}} 記述子
  - [マージン記述子](/ja/docs/Web/CSS/Reference/Properties/margin)
- [マージンのアットルール](/ja/docs/Web/CSS/Reference/At-rules/@page#マージンのアットルール)

CSS ページメディアモジュールには、 `@page` アットルールの `bleeds` および `marks` 記述子も導入しています。今のところ、これらの機能に対応しているブラウザーはありません。

### 擬似クラス

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## ガイド

- [印刷](/ja/docs/Web/CSS/Guides/Media_queries/Printing)
  - : ウェブコンテンツの印刷出力を改善するためのヒントとテクニック。

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

- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
