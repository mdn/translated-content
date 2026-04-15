---
title: CSS ビューポート
short-title: ビューポート
slug: Web/CSS/Guides/Viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS ビューポート**モジュールにより、ユーザーエージェントの初期包含ブロック、すなわちビューポートのサイズ、ズーム率、および方向を指定することができます。

大きなビューポート向けに設計されたコンテンツは、小さなビューポートで表示した際に、意図しない場所で改行したり、コンテンツが切り取られたり、{{glossary("scroll container", "スクロールコンテナー")}}のサイズが不適切になったりと、さまざまな不具合が生じる可能性があります。HTMLには、ビューポートの初期サイズに関するヒントを提供するための[ビューポートメタタグ](/ja/docs/Web/HTML/Reference/Elements/meta/name/viewport)、`<meta name="viewport">` が用意されています。サイトが小さなビューポートでの表示に対応していない場合、かつこのタグが指定されていない場合、一部のモバイルブラウザーでは、初期の包含ブロックの幅を固定（通常は `980px`）にしてサイトを表示します。その後、コンテンツが変倍され、CSSピクセルサイズが実際のピクセルサイズよりも小さくなります。その結果、ページは利用できる画面の領域に収まりますが、文字が読めなくなり、ユーザーはコンテンツを表示するためにズームやスクロールを行う必要があります。

連続メディアにおける{{glossary("viewport", "ビューポート")}}の初期の包含ブロックは、ビューポートと同じサイズになります。ビューポートは一般的に画面よりも大きくないため、スマートフォンやタブレットなど画面の小さい端末では、デスクトップやノートパソコンなどの大型端末に比べて、通常、ビューポートのサイズが小さくなります。

## リファレンス

### プロパティ

- {{cssxref("zoom")}}

### インターフェイス

- {{domxref("Window.Viewport")}}
- {{domxref("Viewport")}}
  - {{domxref("Viewport.segments")}}

### 用語とその定義

- {{glossary("Viewport", "ビューポート")}}
- [実ビューポート](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#実ビューポート)
- [初期ビューポート](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#初期ビューポート)

## ガイド

- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : ビューポートの概念 ― その定義、CSS、SVG、およびモバイル端末における影響 ― と、視覚的ビューポートとレイアウトビューポートの違いについて。

- [環境変数の使用](/ja/docs/Web/CSS/Guides/Environment_variables/Using)
  - : 環境変数とは何か、ブラウザーで定義される環境変数、および `env()` 関数の使用方法についての概要です。

- [ビューポートセグメント API の使用](/ja/docs/Web/API/Viewport_segments_API/Using)
  - : API と環境変数を使用して、さまざまなビューポートのサイズや配置に最適化されたレスポンシブデザインを作成します。

## 関連概念

- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
  - {{cssxref("@media")}}
  - {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} 記述子
  - {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} 記述子

- [CSS 環境変数](/ja/docs/Web/CSS/Guides/Environment_variables)
  - {{cssxref("env()")}}
  - [`<environment-variable-name>`](/ja/docs/Web/CSS/Guides/Environment_variables/Using#ブラウザー定義の環境変数)

- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)

## 仕様書

{{Specifications}}

## 関連情報

- [CSSOM ビュー](/ja/docs/Web/CSS/Guides/CSSOM_view)モジュール
