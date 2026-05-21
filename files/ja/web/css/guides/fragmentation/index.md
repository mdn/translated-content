---
title: CSS 断片化
short-title: 断片化
slug: Web/CSS/Guides/Fragmentation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 断片化** (CSS fragmentation) モジュールは、コンテンツが複数の[ページ](/ja/docs/Web/CSS/Guides/Paged_media)、領域、[段](/ja/docs/Web/CSS/Guides/Multicol_layout)をまたがって分割された（断片化された）ときにどのように表示するかを定義します。このモジュールは、ページネーション、可変の断片サイズや方向の分割、未行および孤立行に関する機能を定義しています。

このモジュールでは、コンテンツが断片化コンテナーの間でどのように区切られるか、また作成者がその区切りをどのように制御できるかについて説明します。コンテナー間でコンテンツが区切られることを総称して「断片化」と呼びます。断片化は、[CSS の段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)などのレイアウト機能を使用する際に発生することがあります。例えば、ブロックが段組みレイアウトコンテナーの中で複数の段にまたがる場合や、印刷時にページにまたがる場合です。その要素の表示されるそれぞれの部分は*断片*と呼ばれます。

コンテンツが実際に印刷されたり、印刷プレビューとして表示されたりする場合、改ページが発生します。このページ区切りのあるメディアでは、連続したメディアとは異なり、文書のコンテンツが 1 つ以上のページ、あるいはフラグメントに分割されることがあります。テキストの行の途中や、単語が 1 つだけで 1 ページを占めるといった不自然な改ページを避けるため、ブラウザーは、本来であれば改ページにまたがるはずのコンテンツを移動させることがあります。この処理は「ページネーション」と呼ばれます。

## リファレンス

### プロパティ

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

### 用語集

- {{glossary("Fragmentainer")}}

## ガイド

- [段組みにおけるコンテンツの分割の処理](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : 断片化仕様の概要と、列の内容がどこで改行されるかを制御する方法について。

## 関連概念

- {{cssxref("overflow")}}
- CSS の {{cssxref("height")}}, {{cssxref("max-height")}}, {{cssxref("block-size")}} プロパティ
- CSS の {{cssxref("width")}}, {{cssxref("max-width")}}, {{cssxref("inline-size")}} プロパティ
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)

[CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール

- [主ボックス](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model#主ボックス)（用語）
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)ガイド

## 仕様書

{{Specifications}}

## 関連情報

- `@media` 記述子の [`horizontal-viewport-segments`](/ja/docs/Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments) および [`vertical-viewport-segments`](/ja/docs/Web/CSS/Reference/At-rules/@media/vertical-viewport-segments)
- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
