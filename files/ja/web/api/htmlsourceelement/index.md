---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

**`HTMLSourceElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} インターフェイスから継承されるもの以外に） {{HtmlElement("source")}} 要素を操作するための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLSourceElement.height")}}
  - : 数値で、HTML の [`height`](/ja/docs/Web/HTML/Reference/Elements/source#height) 属性を反映します。画像リソースの高さを CSS ピクセルで表します。このプロパティは、現在の {{HTMLElement("source")}} 要素の親が {{HTMLElement("picture")}} 要素である場合にのみ意味を持ちます。
- {{domxref("HTMLSourceElement.media")}}
  - : 文字列で、HTML の [`media`](/ja/docs/Web/HTML/Reference/Elements/source#media) 属性を反映し、メディアリソースの意図する型が入ります。
- {{domxref("HTMLSourceElement.sizes")}}
  - : 文字列で、ブレークポイント間の画像の寸法を表します。
- {{domxref("HTMLSourceElement.src")}}
  - : 文字列で、HTML の [`src`](/ja/docs/Web/HTML/Reference/Elements/source#src) 属性を反映し、メディアリソースの URL を保持します。{{domxref("HTMLSourceElement.src")}} プロパティは、関連する {{HTMLElement("source")}} 要素が {{htmlelement("video")}} または {{htmlelement("audio")}} 要素の中に入れ子になっている場合にのみ意味を持ちます。{{HTMLElement("picture")}} 要素の中に入れ子になっている場合は意味を持たず、無視されます。

    > [!NOTE]
    > `src` プロパティを更新した場合（ほかの兄弟要素も更新した場合を含む）は、更新が完了した時点で親の {{domxref("HTMLMediaElement")}} の `load` メソッドを呼び出してください。`<source>` 要素は自動的には再スキャンされないためです。

- {{domxref("HTMLSourceElement.srcset")}}
  - : 文字列で、HTML の [`srcset`](/ja/docs/Web/HTML/Reference/Elements/source#srcset) 属性を反映し、カンマ (`',', U+002C COMMA`) で区切られた画像の候補のリストが入ります。画像の候補は URL の後に `'w'` に続いて画像の幅、または `'x'` に続いてピクセルの密度を指定します。
- {{domxref("HTMLSourceElement.type")}}
  - : 文字列で、HTML の [`type`](/ja/docs/Web/HTML/Reference/Elements/source#type) 属性を反映し、メディアリソースの型を保持します。
- {{domxref("HTMLSourceElement.width")}}
  - : 数値で、HTML の [`width`](/ja/docs/Web/HTML/Reference/Elements/source#width) 属性を反映します。画像リソースの幅を CSS ピクセルで表します。このプロパティは、現在の {{HTMLElement("source")}} 要素の親が {{HTMLElement("picture")}} 要素である場合にのみ意味を持ちます。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{ HTMLElement("source") }}
- {{HTMLElement("source")}} 要素を含むことができる要素の HTML DOM API: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}
