---
title: XMLSerializer
slug: Web/API/XMLSerializer
original_slug: XMLSerializer
---

{{APIRef("XMLSerializer")}}

`XMLSerializer` インターフェースは、{{Glossary("DOM")}} ツリーを表す XML 文字列を構築するための {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} メソッドを提供します。

## メソッド

- {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}
  - : 文字列の形にシリアライズされたサブツリーを返します。
- {{domxref("XMLSerializer.serializeToStream", "serializeToStream()")}} {{ non-standard_inline }}{{ deprecated_inline }}
  - : 指定した要素をルートとするサブツリーが、指定した文字セットを使ったバイトストリームにシリアライズされます。

## 例

### XML を文字列にシリアライズ

最初の基本的な例は、ドキュメント全体を XML を含む文字列にシリアライズするだけです。

```js
 var s = new XMLSerializer();
 var d = document;
 var str = s.serializeToString(d);
 saveXML(str);
```

このコードは、新しい `XMLSerializer` オブジェクトを作成し、シリアライズされる {{domxref("Document")}} を {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} に渡します。これは、渡した document と同等の XML を返します。

### XML を基にした DOM にノードを挿入する

この例は、{{domxref("Element.insertAdjacentHTML()")}} メソッドを使用して新しい DOM {{domxref("Node")}} を {{domxref("Document")}} の body に挿入します。これは、{{domxref("Element")}} オブジェクトをシリアライズすることにより作成された XML を基にしています。

> **メモ:** 実際は、{{domxref("Document.importNode", "importNode()")}} メソッドを呼び出して新しいノードを DOM に挿入する代わりに、以下のいずれかのメソッドを呼び出して DOM ツリーに追加することになるでしょう:
>
> - {{domxref("Document")}} および {{domxref("Element")}} メソッド {{domxref("ParentNode.append", "append()")}} および {{domxref("ParentNode.prepend", "prepend()")}}
> - {{domxref("ChildNode.replaceWith", "Node.replaceWith()")}} メソッド (既存のノードを新しいノードと置き換えるため)
> - {{domxref("Document.insertAdjacentElement()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッド

`insertAdjacentHTML()` は文字列を受け入れるが、2 番目の引数として `Node` を受け入れないため、`XMLSerializer` を使用して先にノードを文字列に変換します。

```js
var inp = document.createElement('input');
var XMLS = new XMLSerializer();
var inp_xmls = XMLS.serializeToString(inp); // まず DOM ノードを文字列に変換

// 新たに作成されたノードを document の body に挿入
document.body.insertAdjacentHTML('afterbegin', inp_xmls);
```

このコードは、{{domxref("Document.createElement()")}} を呼び出して新しい {{HTMLElement("input")}} 要素を作成し、{{domxref("XMLSerializer.serializeToString", "serializeToString()")}} を使用して XML にシリアライズします。

完了したら、`insertAdjacentHTML()` を使用して `<input>` 要素を DOM に挿入します。

## 仕様

| 仕様書                                                                                               | 策定状況                         | 備考 |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM Parsing', '#the-xmlserializer-interface', 'XMLSerializer')}} | {{Spec2('DOM Parsing')}} |      |

## ブラウザーの実装状況

{{Compat("api.XMLSerializer")}}

## 関連項目

- [Parsing and serializing XML](/ja/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("DOMParser")}}
