---
title: CSS メディアクエリー
slug: Web/CSS/Guides/Media_queries
original_slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**CSS メディアクエリー**モジュールにより、ビューポートの値やブラウザーや端末の機能を検査および問い合わせして、現在のユーザー環境に応じて CSS スタイルを条件付きで適用することができます。メディアクエリーは、 CSS の `@media` ルールや、 HTML や JavaScript などの他のコンテキストや言語で使用されます。

メディアクエリーは、[レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)の中心的な要素です。メディアクエリーを使用すると、端末の特性やその値に応じて条件付きで CSS スタイルを設定することができます。一般的には、ビューポートのサイズに基づいてメディアクエリーを使用し、様々な画面サイズの端末に適切なレイアウトを設定します。例えば、幅の広い画面では 3 段組み、幅の狭い画面では 1 段組みにするなどです。

それ以外にも、ページを印刷する際にフォントサイズを大きくしてナビゲーションメニューを非表示にしたり、ページを縦向きまたは横向きで表示する際に段落間のパディングを調整したり、タッチ画面で操作しやすいようにボタンのサイズを大きくしたりといった例が挙げられます。

[CSS](/ja/docs/Web/CSS) では、 {{cssxref("@media")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用して、メディアクエリーの結果に基づいて条件付きでスタイルの一部を適用することができます。 {{cssxref("@import")}} を使用すると、条件付きでスタイルシート全体を適用することもできます。

再利用可能な HTML コンポーネントを設計する場合、[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)を使用することもできます。これにより、ビューポートやその他の端末の特性ではなく、コンテナー要素のサイズに基づいてスタイルを適用することができます。

## リファレンス

### アットルール

- {{cssxref("@import")}}
- {{cssxref("@media")}}

### 記述子

- {{cssxref("@media/any-hover", "any-hover")}}
- {{cssxref("@media/any-pointer", "any-pointer")}}
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
- {{cssxref("@media/color", "color")}}
- {{cssxref("@media/color-gamut", "color-gamut")}}
- {{cssxref("@media/color-index", "color-index")}}
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
- {{cssxref("@media/device-height", "device-height")}}
- {{cssxref("@media/device-width", "device-width")}}
- {{cssxref("@media/display-mode", "display-mode")}}
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
- {{cssxref("@media/forced-colors", "forced-colors")}}
- {{cssxref("@media/grid", "grid")}}
- {{cssxref("@media/height", "height")}}
- {{cssxref("@media/hover", "hover")}}
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
- {{cssxref("@media/monochrome", "monochrome")}}
- {{cssxref("@media/orientation", "orientation")}}
- {{cssxref("@media/overflow-block", "overflow-block")}}
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
- {{cssxref("@media/pointer", "pointer")}}
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
- {{cssxref("@media/resolution", "resolution")}}
- {{cssxref("@media/scan", "scan")}}
- {{cssxref("@media/scripting", "scripting")}}
- {{cssxref("@media/update", "update")}}
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
- {{cssxref("@media/width", "width")}}

> [!NOTE]
> CSS メディアクエリーレベル 5 では、まだ実装されていない 5 つの `@media` 記述子、 {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}, {{cssxref("@media/video-color-gamut", "video-color-gamut")}} を導入しています。

> [!NOTE]
> CSS メディアクエリーレベル 4 では、 3 つの `@media` 記述子、 {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, {{cssxref("@media/device-width", "device-width")}} を非推奨にしています。

### データ型と演算子

- [`<media-types>`](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア種別)
- [`<media-features>`](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)
- [`<resolution>`](/ja/docs/Web/CSS/Reference/Values/resolution)
- [論理演算子](/ja/docs/Web/CSS/Reference/At-rules/@media#論理演算子)

### 用語集の用語

- [メディア](/ja/docs/Glossary/Media/CSS)
- [メディアクエリー](/ja/docs/Glossary/Media_query)

## ガイド

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
  - : メディアクエリーと、その構文や演算子、メディアクエリー式を構築するために使用するメディア機能を紹介します。

- [学習: メディアクエリーの基本](/ja/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : メディアクエリーと、それを使用してレスポンシブデザインを作成するための手法の概要です。

- [プログラムからのメディアクエリーのテスト](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
  - : JavaScript の中でメディアクエリーを使用して端末の状態を特定する方法、メディアクエリーの結果が変化したとき（ユーザーが画面を回転させたり、ブラウザーの大きさを変更したりしたとき）にコードに通知されるよう、リスナーを設定する方法を説明します。

- [アクセシビリティのためのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
  - : ユーザーがウェブサイトをより理解できるように、メディアクエリーが支援できることを学びます。

- [印刷](/ja/docs/Web/CSS/Guides/Media_queries/Printing)
  - : ウェブコンテンツの印刷出力を改善するためのヒントとテクニック。

- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
  - : `sizes` を使用してメディアクエリーを使用し、ウェブサイトのレスポンシブ画像のソリューションを実装する方法を学びます。

## 関連概念

- [CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)モジュール
  - {{cssxref("@container")}} アットルール
  - [コンテナークエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
  - [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュール
  - {{cssxref("@supports")}} アットルール
  - [機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール
  - {{cssxref("@page")}} アットルール
- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)モジュール
  - {{DOMxRef("MediaQueryList")}} インターフェイス
    - {{DOMxRef("MediaQueryList.matches", "matches")}} プロパティ
    - {{DOMxRef("MediaQueryList.media", "media")}} プロパティ
    - {{DOMxRef("MediaQueryList.change_event", "change")}} イベント
  - {{DOMxRef("MediaList")}} インターフェイス
    - {{DOMxRef("MediaList.mediaText", "mediaText")}} プロパティ
  - {{DOMxRef("MediaQueryListEvent")}} オブジェクト
- [Device Posture API](/ja/docs/Web/API/Device_Posture_API)
  - {{cssxref("@media/device-posture", "device-posture")}} 記述子
- HTML
  - `sizes` 属性（[`<img>`](/ja/docs/Web/HTML/Reference/Elements/img#sizes)、[`<link>`](/ja/docs/Web/HTML/Reference/Elements/link#sizes)、{{HTMLElement("picture")}} の [`<source>`](/ja/docs/Web/HTML/Reference/Elements/source#sizes)）
  - `media` 属性（[`<link>`](/ja/docs/Web/HTML/Reference/Elements/link#media)、[`<source>`](/ja/docs/Web/HTML/Reference/Elements/source#media)、[HTML](/ja/docs/Web/HTML) の [`<style>`](/ja/docs/Web/HTML/Reference/Elements/style#media)）
  - [ビューポートの `<meta>` タグ](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport)
- SVG の [`media`](/ja/docs/Web/SVG/Reference/Attribute/media) 属性

## 仕様書

{{Specifications}}

## 関連情報

- [コンテナークエリ－](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [`srcset` および `sizes` 属性の使用](/ja/docs/Web/HTML/Reference/Elements/img#srcset_および_sizes_属性の使用)
- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)
- {{cssxref("@supports")}} を使用すると、ブラウザーのさまざまな CSS の技術への対応状況に応じてスタイルを適用することができます。
