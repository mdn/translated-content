---
title: CSSOM ビュー
slug: Web/CSS/Guides/CSSOM_view
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSSOM ビュー**モジュールでは、文書内の視覚的な表示を操作することができます。要素のレイアウトボックスの位置の取得、スクリプトからのビューポートの幅や高さの取得、要素のスクロールなどがあります。

## リファレンス

### イベント

- {{domxref("Window")}} のイベント:
  - {{domxref("Window/resize_event", "resize")}}
- {{domxref("VisualViewport")}} のイベント:
  - {{domxref("VisualViewport/resize_event", "resize")}}
  - {{domxref("VisualViewport/scroll_event", "scroll")}}
  - {{domxref("VisualViewport/scrollend_event", "scrollend")}}
- {{domxref("Document")}} のイベント
  - {{domxref("Document/scroll_event", "scroll")}}
  - {{domxref("Document/scrollend_event", "scrollend")}}
- {{domxref("Element")}} のイベント
  - {{domxref("Element/scroll_event", "scroll")}}
  - {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("MediaQueryList")}} のイベント
  - {{domxref("MediaQueryList/change_event", "change")}}

### 用語集

- {{glossary("Viewport", "ビューポート")}}
- {{glossary("Layout viewport", "レイアウトビューポート")}}
- {{glossary("Visual Viewport", "視覚的ビューポート")}}

### API

このモジュールで定義されている JavaScript API については、 [CSSOM ビュー API](/ja/docs/Web/API/CSSOM_view_API) のドキュメントを参照してください。

## ガイド

- [座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : モニター上のウィンドウ、モバイル機器のビューポート、印刷時の紙上の位置などのディスプレイコンテキストにおける位置を特定するために使われる座標系についてのガイドです。
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : ビューポートの概念（それが何か、CSS、SVG、モバイル端末への影響）と、視覚的ビューポートとレイアウトビューポートの違いについてです。

## 関連概念

- {{cssxref("zoom")}}
- {{htmlelement("meta")}}

### 用語集

- {{glossary("CSSOM", "CSS オブジェクトモデル (CSSOM)")}}
- {{glossary("CSS pixel", "CSS ピクセル")}}
- {{glossary("Scroll container", "スクロールコンテナー")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) API
- [CSSOM ビュー API](/en-US/docs/Web/API/CSSOM_view_API)
- [CSS ビューポート](/en-US/docs/Web/CSS/Guides/Viewport) モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
