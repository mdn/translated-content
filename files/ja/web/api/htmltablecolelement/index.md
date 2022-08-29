---
title: HTMLTableColElement
slug: Web/API/HTMLTableColElement
tags:
  - API
  - HTML DOM
  - インターフェイス
  - NeedsNewLayout
  - リファレンス
browser-compat: api.HTMLTableColElement
translation_of: Web/API/HTMLTableColElement
---
{{ APIRef("HTML DOM") }}

**`HTMLTableColElement`** インターフェイスは、表の単一またはグループの列要素を操作するプロパティを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLTableColElement.align")}} {{deprecated_inline}}
  - : 文字列で、列内のセルデータの水平方向の配置を示します。
- {{domxref("HTMLTableColElement.ch")}} {{deprecated_inline}}
  - : 文字列で、セルデータの整列文字を表します。
- {{domxref("HTMLTableColElement.chOff")}} {{deprecated_inline}}
  - : 文字列で、整列文字のオフセットを表します。
- {{domxref("HTMLTableColElement.span")}}
  - : `unsigned long` で、 HTML の {{htmlattrxref("span", "col")}} 属性を反映し、このオブジェクトの属性を適用する列の数を示します。正の整数でなければなりません。
- {{domxref("HTMLTableColElement.vAlign")}} {{deprecated_inline}}
  - : 文字列で、列内のセルデータの垂直方向の配置を示します。
- {{domxref("HTMLTableColElement.width")}} {{deprecated_inline}}
  - : 文字列で、既定の列の幅を表します。

## メソッド

_独自のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("col")}} および {{HTMLElement("colgroup")}}
