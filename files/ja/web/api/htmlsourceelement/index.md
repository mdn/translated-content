---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
---

{{ApiRef}}

`HTMLSourceElement` インターフェイスは {{htmlelement("source")}} 要素を操作するための (継承によって利用できる、通常の {{domxref("HTMLElement")}} オブジェクトインターフェイスにから見て) 特別なプロパティを提供します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLSourceElement.keySystem")}} {{experimental_inline}}
  - : ストリームを暗号化するキーシステムを説明する {{domxref("DOMString")}} です。
- {{domxref("HTMLSourceElement.media")}}
  - : HTML の {{ htmlattrxref("media", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの意図する型を含みます。
- {{domxref("HTMLSourceElement.sizes")}} {{experimental_inline}}
  - : ブレークポイント間の画像の寸法を表す {{domxref("DOMString")}} です。
- {{domxref("HTMLSourceElement.src")}}

  - : HTML の {{ htmlattrxref("src", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの URL が入ります。 {{domxref("HTMLSourceElement.src")}} プロパティは関連する {{HTMLElement("source")}} 要素が {{htmlelement("video")}} や {{htmlelement("audio")}} 要素などのメディア要素の中で入れ子になった場合のみ意味を持ちます。 {{HTMLElement("picture")}} 要素の中で入れ子になったときは意味を持たず、無視されます。

    > **メモ:** `src` プロパティが (兄弟要素によって) 更新された場合、親の {{domxref("HTMLMediaElement")}} の `load` メソッドが完了時に呼び出されます。 `<source>` 要素は自動的には再読み込みされないからです。

- {{domxref("HTMLSourceElement.srcset")}} {{experimental_inline}}
  - : HTML の {{ htmlattrxref("srcset", "source") }} 属性を反映する {{domxref("DOMString")}} で、コンマ (`',', U+002C COMMA`) で区切られた画像の候補のリストが入ります。画像の候補は URL の後に `'w'` に続いて画像の幅、または `'x'` に続いてピクセルの密度を指定します。
- {{domxref("HTMLSourceElement.type")}}
  - : HTML の {{ htmlattrxref("type", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの型が入ります。

## メソッド

_固有メソッドはありません。 {{domxref("HTMLElement")}} インターフェイスからの継承メソッドが利用可能です。_

## 仕様書

| 仕様書                                                                                                                       | 状態                             | 備考                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('EME', '#dom-sourcekeysystem', 'HTMLSourceElement')}}                                         | {{Spec2('EME')}}             | `keySystem` 属性を追加。                        |
| {{SpecName('HTML WHATWG', "the-video-element.html#the-source-element", "HTMLSourceElement")}} | {{Spec2('HTML WHATWG')}} | {{SpecName("HTML5 W3C")}} より変更なし。 |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#the-source-element", "HTMLSourceElement")}} | {{Spec2('HTML5 W3C')}}     | 初回定義                                        |

## ブラウザーの互換性

{{Compat("api.HTMLSourceElement")}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{ HTMLElement("source") }}.
- {{HTMLElement("source")}} 要素を含むことができる要素の HTML DOM API: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}.
