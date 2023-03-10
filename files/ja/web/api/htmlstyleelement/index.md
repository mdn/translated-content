---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
---

{{ApiRef}}

`HTMLStyleElement` インタフェースは {{HTMLElement("style")}} 要素を表すインタフェースです。{{domxref("HTMLElement")}} と {{domxref("LinkStyle")}} のプロパティとメソッドを継承しています。

This interface doesn't allow to manipulate the CSS it contains (in most case). To manipulate CSS, see [Using dynamic styling information](/ja/docs/DOM/Using_dynamic_styling_information) for an overview of the objects used to manipulate specified CSS properties using the DOM.

## プロパティ

{{domxref("HTMLElement")}} および {{domxref("LinkStyle")}} から継承するプロパティの他に、以下の固有プロパティを持ちます。

- {{domxref("HTMLStyleElement.media")}}
  - : スタイル情報の適用先として意図するメディアを表す {{domxref("DOMString")}}
- {{domxref("HTMLStyleElement.type")}}
  - : この style 要素のスタイルの種類を表す {{domxref("DOMString")}}
- {{domxref("HTMLStyleElement.disabled")}}
  - : {{domxref("Boolean")}}。スタイルシート有効時には `true` 、無効時には `false` を返す。
- {{domxref("HTMLStyleElement.scoped")}}
  - : {{domxref("Boolean")}}。スタイルの適用対象が文書全体の場合は `false`、 `scoped` 属性により適用範囲が制限されている場合は `true` を返す。

## メソッド

固有のメソッドは持ちません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.HTMLStyleElement")}}

## 関連情報

- {{HTMLElement("style")}} - `HTMLStyleElement` インタフェースを持つ HTML 要素
- [動的スタイル情報の利用](/ja/docs/Web/Guide/DOM/Using_dynamic_styling_information)
