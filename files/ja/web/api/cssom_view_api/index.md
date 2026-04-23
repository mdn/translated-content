---
title: CSSOM ビュー API
slug: Web/API/CSSOM_view_API
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{DefaultAPISidebar("CSSOM view API")}}

**CSSOM ビュー API** を使用すると、文書の視覚的なビューを操作できます。これには、要素のレイアウトボックスの位置を取得する、スクリプトでビューポートの幅や高さを取得する、そして要素をスクロールするといったことが含まれます。

## ガイド

- [座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : 表示コンテキスト（モニター上のウィンドウや、モバイル端末のビューポートなど）の中の位置や、印刷時の用紙上の位置などを指定するために使用する座標系です。
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : ビューポートの概念、すなわちその定義、CSS・SVG・モバイル端末における影響、そして視覚的ビューポートとレイアウトビューポートの違いについて。

## インターフェイス

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

## 他のインターフェイスへの拡張

このモジュールは、その他の仕様書で定義されているインターフェイスにプロパティ、メソッド、イベントなどを追加します。

### Window への拡張

- {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
- {{domxref("Window.innerHeight", "innerHeight")}}
- {{domxref("Window.innerWidth", "innerWidth")}}
- {{domxref("Window.matchMedia", "matchMedia()")}}
- {{domxref("Window.moveBy", "moveBy()")}}
- {{domxref("Window.moveTo", "moveTo()")}}
- {{domxref("Window.outerHeight", "outerHeight")}}
- {{domxref("Window.outerWidth", "outerWidth")}}
- `pageXOffset` （{{domxref("Window.scrollX", "scrollX")}} を参照）
- `pageYOffset` （{{domxref("Window.scrollY", "scrollY")}} を参照）
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
- {{domxref("Window/resize_event", "resize")}} イベント

### Document への拡張

- {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
- {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
- {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Document/scroll_event", "scroll")}} イベント
- {{domxref("Document/scrollend_event", "scrollend")}} イベント

### Element への拡張

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
- {{domxref("Element/scroll_event", "scroll")}} イベント
- {{domxref("Element/scrollend_event", "scrollend")}} イベント

### HTMLElement への拡張

- {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
- {{domxref("HTMLElement.offsetParent", "offsetParent")}}
- {{domxref("HTMLElement.offsetTop", "offsetTop")}}
- {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}

### HTMLImageElement への拡張

- {{domxref("HTMLImageElement.x", "x")}}
- {{domxref("HTMLImageElement.y", "y")}}

### Range への拡張

- {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Range.getClientRects", "getClientRects()")}}

### MouseEvent への拡張

- {{domxref("MouseEvent.clientX", "clientX")}}
- {{domxref("MouseEvent.clientY", "clientY")}}
- {{domxref("MouseEvent.offsetX", "offsetX")}}
- {{domxref("MouseEvent.offsetY", "offsetY")}}
- {{domxref("MouseEvent.pageX", "pageX")}}
- {{domxref("MouseEvent.pageY", "pageY")}}
- {{domxref("MouseEvent.screenY", "screenY")}}
- {{domxref("MouseEvent.x", "x")}}
- {{domxref("MouseEvent.y", "y")}}

このモジュールは、{{domxref("Text")}}, {{domxref("Element")}}, {{domxref("CSSPseudoElement")}}, {{domxref("Document")}} の各インターフェイスに適用される幾何学的ユーティリティメソッドを定義しています。これらの `GeometryUtils` 機能は、現時点ではどのブラウザーにも実装されていません。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) API
- [CSSOM ビュー](/ja/docs/Web/CSS/Guides/CSSOM_view)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- {{glossary("Viewport", "ビューポート")}}
- {{glossary("Layout viewport", "レイアウトビューポート")}}
- {{glossary("Visual viewport", "視覚的ビューポート")}}
- {{cssxref("zoom")}}
- {{glossary("CSSOM")}}
- {{glossary("CSS pixel")}}
- {{glossary("Scroll container")}}
- {{htmlelement("meta")}}
