---
title: CSSOM ビュー
slug: Web/CSS/Guides/CSSOM_view
original_slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
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

### インターフェイス

- {{domxref("MediaQueryList")}}
  - {{domxref("MediaQueryList.matches", "matches")}}
  - {{domxref("MediaQueryList.media", "media")}}
  - {{domxref("MediaQueryList.addListener", "addListener()")}}
  - {{domxref("MediaQueryList.removeListener", "removeListener()")}}
  - {{domxref("MediaQueryList/change_event", "onchange")}}
- {{domxref("MediaQueryListEvent")}}
  - {{domxref("MediaQueryListEvent.media", "media")}}
  - {{domxref("MediaQueryListEvent.matches", "matches")}}
- {{domxref("Screen")}}
  - {{domxref("Screen.availHeight", "availHeight")}}
  - {{domxref("Screen.availWidth", "availWidth")}}
  - {{domxref("Screen.colorDepth", "colorDepth")}}
  - {{domxref("Screen.height", "height")}}
  - {{domxref("Screen.pixelDepth", "pixelDepth")}}
  - {{domxref("Screen.width", "width")}}
- {{domxref("CaretPosition")}}
  - {{domxref("CaretPosition.offsetNode", "offsetNode")}}
  - {{domxref("CaretPosition.offset", "offset")}}
  - {{domxref("CaretPosition.getClientRect", "getClientRect()")}}
- {{domxref("VisualViewport")}}
  - {{domxref("VisualViewport.height", "height")}}
  - {{domxref("VisualViewport.offsetLeft", "offsetLeft")}}
  - {{domxref("VisualViewport.offsetTop", "offsetTop")}}
  - {{domxref("VisualViewport/resize_event", "onresize")}}
  - {{domxref("VisualViewport/scroll_event", "onscroll")}}
  - {{domxref("VisualViewport/scrollend_event", "onscrollend")}}
  - {{domxref("VisualViewport.pageLeft", "pageLeft")}}
  - {{domxref("VisualViewport.pageTop", "pageTop")}}
  - {{domxref("VisualViewport.scale", "scale")}}
  - {{domxref("VisualViewport.width", "width")}}

### インターフェイスの拡張

このモジュールは、他の仕様書で定義されているインターフェイスにプロパティとメソッドを追加します。

- {{domxref("Window")}}
  - {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
  - {{domxref("Window.innerHeight", "innerHeight")}}
  - {{domxref("Window.innerWidth", "innerWidth")}}
  - {{domxref("Window.matchMedia", "matchMedia()")}}
  - {{domxref("Window.moveBy", "moveBy()")}}
  - {{domxref("Window.moveTo", "moveTo()")}}
  - {{domxref("Window.outerHeight", "outerHeight")}}
  - {{domxref("Window.outerWidth", "outerWidth")}}
  - `pageXOffset` (see {{domxref("Window.scrollX", "scrollX")}})
  - `pageYOffset` (see {{domxref("Window.scrollY", "scrollY")}})
  - {{domxref("Window.resizeBy", "resizeBy()")}}
  - {{domxref("Window.resizeTo", "resizeTo()")}}
  - {{domxref("Window.screen", "screen")}}
  - {{domxref("Window.screenLeft", "screenLeft")}}
  - {{domxref("Window.screenTop", "screenTop")}}
  - {{domxref("Window.screenX", "screenX")}}
  - {{domxref("Window.screenY", "screenY")}}
  - {{domxref("Window.visualViewport", "visualViewport")}}
  - {{domxref("Window.scroll", "scroll()")}}
  - {{domxref("Window.scrollBy", "scrollBy()")}}
  - {{domxref("Window.scrollTo", "scrollTo()")}}
  - {{domxref("Window.scrollX", "scrollX")}}
  - {{domxref("Window.scrollY", "scrollY")}}
- {{domxref("Document")}}
  - {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
  - {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
  - {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Element")}}
  - {{domxref("Element.checkVisibility", "checkVisibility()")}}
  - {{domxref("Element.clientHeight", "clientHeight")}}
  - {{domxref("Element.clientLeft", "clientLeft")}}
  - {{domxref("Element.clientTop", "clientTop")}}
  - {{domxref("Element.clientWidth", "clientWidth")}}
  - {{domxref("Element.currentCSSZoom", "currentCSSZoom")}}
  - {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}
  - {{domxref("Element.getClientRects", "getClientRects()")}}
  - {{domxref("Element.scroll", "scroll()")}}
  - {{domxref("Element.scrollBy", "scrollBy()")}}
  - {{domxref("Element.scrollHeight", "scrollHeight")}}
  - {{domxref("Element.scrollIntoView", "scrollIntoView()")}}
  - {{domxref("Element.scrollLeft", "scrollLeft")}}
  - {{domxref("Element.scrollTo", "scrollTo()")}}
  - {{domxref("Element.scrollTop", "scrollTop")}}
  - {{domxref("Element.scrollWidth", "scrollWidth")}}
- {{domxref("HTMLElement")}}
  - {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
  - {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
  - {{domxref("HTMLElement.offsetParent", "offsetParent")}}
  - {{domxref("HTMLElement.offsetTop", "offsetTop")}}
  - {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}
- {{domxref("HTMLImageElement")}}
  - {{domxref("HTMLImageElement.x", "x")}}
  - {{domxref("HTMLImageElement.y", "y")}}
- {{domxref("Range")}}
  - {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
  - {{domxref("Range.getClientRects", "getClientRects()")}}
- {{domxref("MouseEvent")}}
  - {{domxref("MouseEvent.clientX", "clientX")}}
  - {{domxref("MouseEvent.clientY", "clientY")}}
  - {{domxref("MouseEvent.offsetX", "offsetX")}}
  - {{domxref("MouseEvent.offsetY", "offsetY")}}
  - {{domxref("MouseEvent.pageX", "pageX")}}
  - {{domxref("MouseEvent.pageY", "pageY")}}
  - {{domxref("MouseEvent.screenY", "screenY")}}
  - {{domxref("MouseEvent.x", "x")}}
  - {{domxref("MouseEvent.y", "y")}}

このモジュールは、{{domxref("Text")}}、{{domxref("Element")}}、{{domxref("CSSPseudoElement")}}、{{domxref("Document")}} の各インターフェイスに適用される幾何ユーティリティメソッドを定義します。 `GeometryUtils` のこれらの機能は、まだどのブラウザーにも実装されていません。

## ガイド

- [座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : モニター上のウィンドウ、モバイル機器のビューポート、印刷時の紙上の位置などのディスプレイコンテキストにおける位置を特定するために使われる座標系についてのガイドです。
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : ビューポートの概念（それが何か、CSS、SVG、モバイル端末への影響）と、視覚的ビューポートとレイアウトビューポートの違いについてです。

## 関連する概念

- {{cssxref("zoom")}}
- {{glossary("CSSOM")}}
- {{glossary("CSS pixel", "CSS ピクセル")}}
- {{glossary("Scroll container", "スクロールコンテナー")}}
- {{htmlelement("meta")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) API
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
