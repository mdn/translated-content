---
title: HTMLFontElement
slug: Web/API/HTMLFontElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

font 要素のドキュメントオブジェクトモデル（DOM）表現を実装します。HTML フォント要素 {{HTMLElement("font")}} は、テキストのフォントサイズ、フォントフェイス、色を定義します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLFontElement.color")}} {{Deprecated_Inline}}
  - : HTML 属性 [`color`](/ja/docs/Web/HTML/Reference/Elements/font#color) を反映した文字列で、名前付き色または 16 進数の #RRGGBB 形式で指定した色を格納します。
- {{domxref("HTMLFontElement.face")}} {{Deprecated_Inline}}
  - : HTML の [`face`](/ja/docs/Web/HTML/Reference/Elements/font#face) 属性を反映した文字列で、1 つ以上のフォント名のカンマ区切りリストを格納します。
- {{domxref("HTMLFontElement.size")}} {{Deprecated_Inline}}
  - : HTML の [`size`](/ja/docs/Web/HTML/Reference/Elements/font#size) 属性を反映した文字列で、1 から 7 までのフォントサイズか、例えば -2 や +1 のような既定値 3 からの相対値が入ります。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("font")}}
