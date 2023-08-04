---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLSourceElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} インターフェイスから継承されるもの以外に） {{HtmlElement("source")}} 要素を操作するための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLSourceElement.media")}}
  - : 文字列で、HTML の [`media`](/ja/docs/Web/HTML/Element/source#media) 属性を反映し、メディアリソースの意図する型を含みます。
- {{domxref("HTMLSourceElement.sizes")}}
  - : 文字列で、ブレークポイント間の画像の寸法を表します。
- {{domxref("HTMLSourceElement.src")}}

  - : 文字列で、HTML の [`src`](/ja/docs/Web/HTML/Element/source#src) 属性を反映し、メディアリソースの URL が保持します。{{domxref("HTMLSourceElement.src")}} プロパティは関連する {{HTMLElement("source")}} 要素が {{htmlelement("video")}} や {{htmlelement("audio")}} 要素などのメディア要素の中で入れ子になった場合のみ意味を持ちます。 {{HTMLElement("picture")}} 要素の中で入れ子になったときは意味を持たず、無視されます。

    > **メモ:** `src` プロパティが（兄弟要素によって）更新された場合、親の {{domxref("HTMLMediaElement")}} の `load` メソッドが完了時に呼び出されます。`<source>` 要素は自動的には再読み込みされないからです。

- {{domxref("HTMLSourceElement.srcset")}}
  - : 文字列で、HTML の [`srcset`](/ja/docs/Web/HTML/Element/source#srcset) 属性を反映し、カンマ (`',', U+002C COMMA`) で区切られた画像の候補のリストが入ります。画像の候補は URL の後に `'w'` に続いて画像の幅、または `'x'` に続いてピクセルの密度を指定します。
- {{domxref("HTMLSourceElement.type")}}
  - : 文字列で、HTML の [`type`](/ja/docs/Web/HTML/Element/source#type) 属性を反映し、メディアリソースの型を保持します。

## インスタンスメソッド

_の固有メソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{ HTMLElement("source") }}
- {{HTMLElement("source")}} 要素を含むことができる要素の HTML DOM API: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}
