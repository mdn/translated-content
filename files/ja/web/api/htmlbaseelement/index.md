---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
tags:
  - API
  - HTML DOM
  - インターフェイス
  - リファレンス
browser-compat: api.HTMLBaseElement
translation_of: Web/API/HTMLBaseElement
---
{{APIRef("HTML DOM")}}

**`HTMLBaseElement`** インターフェイスは、文書の基底 URI を持ちます。このオブジェクトは {{domxref("HTMLElement")}} インターフェイスで定められているすべてのプロパティとメソッドを継承します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLBaseElement.href")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("href", "base")}} 属性を反映し、文書内の相対 URL の基底 URL を保持します。
- {{domxref("HTMLBaseElement.target")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("target", "base")}} 属性を反映し、要素にターゲットとなる参照先が指定されなかった場合の既定のターゲットとなる閲覧コンテキストまたはフレームを保持します。

## メソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("base") }}
