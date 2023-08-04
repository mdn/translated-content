---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("XMLSerializer")}}

`XMLSerializer` インターフェイスは {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} メソッドを提供します。これにより、 {{Glossary("DOM")}} ツリーを表す XML 文字列を構築することができます。

## インスタンスメソッド

- {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}
  - : 文字列の形にシリアライズされたサブツリーを返します。

## 例

### XML を文字列にシリアライズ

最初の基本的な例は、文書全体を XML を含む文字列にシリアライズします。

```js
 const s = new XMLSerializer();
 const d = document;
 const str = s.serializeToString(d);
 saveXML(str);
```

このコードは、新しい `XMLSerializer` オブジェクトを作成し、シリアライズされる {{domxref("Document")}} を {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} に渡します。これは、渡した文書と同等の XML を返します。

### XML を基にした DOM にノードを挿入する

この例は、{{domxref("Element.insertAdjacentHTML()")}} メソッドを使用して新しい DOM {{domxref("Node")}} を {{domxref("Document")}} の body に挿入します。これは、{{domxref("Element")}} オブジェクトをシリアライズすることにより作成された XML を基にしています。

> **メモ:** 実際は、{{domxref("Document.importNode", "importNode()")}} メソッドを呼び出して新しいノードを DOM に挿入する代わりに、以下のいずれかのメソッドを呼び出して DOM ツリーに追加することになるでしょう。
>
> - {{domxref("Element.append()")}} / {{domxref("Element.prepend()")}} および {{domxref("Document.append()")}} / {{domxref("Document.prepend()")}} メソッド
> - {{domxref("Element.replaceWith()")}} メソッド（既存のノードを新しいノードと置き換えるため）
> - {{domxref("Document.insertAdjacentElement()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッド

`insertAdjacentHTML()` は文字列を受け入れるますが、2 番目の引数として `Node` を受け入れないため、`XMLSerializer` を使用して先にノードを文字列に変換します。

```js
const inp = document.createElement('input');
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // まず DOM ノードを文字列に変換

// 新たに作成されたノードを文書の body に挿入
document.body.insertAdjacentHTML('afterbegin', inp_xmls);
```

このコードは、{{domxref("Document.createElement()")}} を呼び出して新しい {{HTMLElement("input")}} 要素を作成し、{{domxref("XMLSerializer.serializeToString", "serializeToString()")}} を使用して XML にシリアライズします。

完了したら、`insertAdjacentHTML()` を使用して `<input>` 要素を DOM に挿入します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XML の解釈とシリアライズ](/ja/docs/Web/Guide/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("DOMParser")}}
