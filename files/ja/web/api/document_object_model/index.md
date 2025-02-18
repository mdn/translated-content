---
title: ドキュメントオブジェクトモデル (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

**ドキュメントオブジェクトモデル** (**Document Object Model**, **DOM**) は、ウェブページを表す HTML のような文書の構造をメモリー内に表現することで、ウェブページとスクリプトやプログラミング言語を接続するものです。ふつうは JavaScript を使用しますが、HTML、SVG、XML などの文書をオブジェクトとしてモデリングすることはコア JavaScript 言語の一部ではありません。

DOM は文書を論理的なツリーで表現します。ツリーのそれぞれの枝はノードで終わっており、それぞれのノードがオブジェクトを含んでいます。 DOM のメソッドでプログラム的にツリーにアクセスできます。これにより、文書構造やスタイルやコンテンツを変更することができます。

ノードにはイベントハンドラーを割り当てることができます。イベントが発生すると、イベントハンドラーが実行されます。

DOM とは何であるか、どのように文書を表現するのかについてもっと学習するのであれば、[DOM 入門](/ja/docs/Web/API/Document_Object_Model/Introduction)をご覧ください。

## DOM インターフェイス

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### 廃止された DOM インターフェイス

ドキュメントオブジェクトモデルは、高度に単純化されてきています。このため、 DOM レベル 3 以前の仕様書にあった以下のインターフェイスは削除されています。これらはウェブ開発者はもう利用できません。

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

HTML を含む文書は、 HTML 仕様で拡張した様々な HTML 固有の機能を含む {{DOMxRef("Document")}} インターフェイスを使用して記述されます。具体的には、 {{domxref("Element")}} インターフェイスは拡張されて {{domxref("HTMLElement")}} を始めとするサブクラスになっており、それぞれが要素の一つ (または深く関係した同類のもの) を表します。

HTML DOM API によって、タブやウィンドウ、 CSS スタイルやスタイルシート、ブラウザーの履歴など、様々なブラウザーの機能にアクセスすることができます。これらのインターフェイスの詳細については、 [HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) のドキュメントにあります。

## SVG DOM

同様に、 SVG を含む文書も {{DOMxRef("Document")}} インターフェイスを使用して記述されており、 SVG 仕様によって拡張され、さまざまな SVG 固有の機能が含まれています。特に、 {{domxref("Element")}} インターフェイスは拡張されて {{domxref("SVGElement")}} およびさまざまなサブクラスとなり、それぞれが要素または密接に関連する要素の集合を表します。これらのインターフェイスについては、 [SVG API](/ja/docs/Web/API/SVG_API) のドキュメントでさらに詳しく説明されています。

## 仕様書

{{Specifications}}

## 関連情報

- [DOM の例](/ja/docs/Web/API/Document_Object_Model/Examples)
- [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model)
