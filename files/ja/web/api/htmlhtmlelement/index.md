---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
tags:
  - API
  - HTML DOM
  - インターフェイス
  - NeedsNewLayout
  - リファレンス
browser-compat: api.HTMLHtmlElement
translation_of: Web/API/HTMLHtmlElement
---
{{ APIRef("HTML DOM") }}

**`HTMLHtmlElement`** インターフェイスはこの HTML 文書のルートノードとして機能します。このオブジェクトは {{domxref("HTMLElement")}} インターフェイスで記述されたプロパティやメソッドを継承しています。

`HTMLHtmlElement` オブジェクトを文書から受け取るには、 {{domxref("document.documentElement")}} プロパティの値を読み取ります。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLHtmlElement.version")}} {{deprecated_inline}}
  - : この文書に適用される HTML 文書型定義 (DTD) のバージョンを表す文字列。このプロパティは不適合であるため、もう使用するべきではありません。省略してください。

## メソッド

_独自のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("html")}}
