---
title: HTMLQuoteElement
slug: Web/API/HTMLQuoteElement
---

{{APIRef("HTML DOM")}}

**`HTMLQuoteElement`** インターフェースは，引用要素を扱う為に（継承する{{domxref("HTMLElement")}}インターフェースを越えた）固有の属性を提供します。ここで引用要素とは{{HTMLElement("blockquote")}}や{{HTMLElement("q")}}といった要素であり，{{HTMLElement("cite")}}要素ではありません。

{{InheritanceDiagram(600, 120)}}

## 属性

_親である{{domxref("HTMLElement")}}からメソッドを継承します。_

- {{domxref("HTMLQuoteElement.cite")}}
  - : は{{domxref("DOMString")}}であり，HTML 属性[`cite`](/ja/docs/Web/HTML/Element/blockquote#cite)に格納している引用元 URL を表します。

## メソッド

_固有のメソッドなし。親である{{domxref("HTMLElement")}}からメソッドを継承します。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.HTMLQuoteElement")}}

## 関連情報

- 本インターフェースを実装する HTML 要素: {{HTMLElement("blockquote")}}及び{{HTMLElement("q")}}，然し{{HTMLElement("cite")}}ではない。
