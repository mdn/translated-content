---
title: XML のパースとシリアライズ
slug: Web/Guide/Parsing_and_serializing_XML
---

場合によっては、{{Glossary("XML")}} のコンテンツを解析して {{Glossary("DOM")}} ツリーに変換する必要があるでしょう。または逆に、既存の DOM ツリーを XML にシリアライズすることもあります。この記事では、XML のシリアライズと解析の一般的な作業を容易にするため、ウェブプラットフォームで提供されるオブジェクトに注目します。

- {{domxref("XMLSerializer")}}
  - : DOM ツリーをシリアライズし、XML を含む文字列に変換します。
- {{domxref("DOMParser")}}
  - : XML を含む文字列を解析して DOM ツリーを構築し、入力データに基づいて適切な {{domxref("XMLDocument")}} または {{domxref("Document")}} を返します。
- {{domxref("XMLHttpRequest")}}
  - : URL からコンテンツを読み込みます。XML コンテンツは、XML 自体から構築された DOM ツリーを持つ XML {{domxref("Document")}} オブジェクトとして返されます。
- [XPath](/ja/docs/XPath)
  - : XML 文書の特定の部分のアドレスを含む文字列を作成し、それらのアドレスに基づいて XML ノードを特定する技術。

## XML 文書を作成する

次のいずれかの方法で XML 文書を作成します (これは {{domxref("Document")}} のインスタンスです)。

### 文字列を DOM ツリーにパースする

この例では、{{domxref("DOMParser")}} を使用して文字列の XML フラグメントを DOM ツリーに変換します:

```js
const xmlStr = '<a id="a"><b id="b">hey!</b></a>';
const parser = new DOMParser();
const dom = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
console.log(dom.documentElement.nodeName == "parsererror" ? "error while parsing" : dom.documentElement.nodeName);
```

### URL にできるリソースを DOM ツリーにパースする

#### XMLHttpRequest を使用する

URL アドレス指定が可能な XML ファイルを読み込み解析して DOM ツリーにするサンプルコードを次に示します:

```js
const xhr = new XMLHttpRequest();

xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}

xhr.onerror = function() {
  dump("Error while getting XML.");
}

xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
```

`xhr` オブジェクトの {{domxref("XMLHttpRequest.responseXML", "responseXML")}} フィールドで返される値は XML の解析により構築された {{domxref("Document")}} です。

document が {{Glossary("HTML")}} である場合、上記のコードは {{domxref("Document")}} を返します。document が XML である場合、返されるオブジェクトは {{domxref("XMLDocument")}} になります。この 2 種類は基本的に同じですが、その違いは主に歴史的な部分であり、差別化にはいくつかの実用的な利点があります。

> **メモ:** There is in fact an {{domxref("HTMLDocument")}} interface as well, but it is not necessarily an independent type. In some browsers it is, while in others it is simply an alias for the `Document` interface.

## XML 文書のシリアライズ

Given a {{domxref("Document")}}, you can serialize the document's DOM tree back into XML using the {{domxref("XMLSerializer.serializeToString()")}} method.

Use the following approaches to serialize the contents of the XML document you created in the previous section.

### DOM ツリーを文字列にシリアライズ

First, create a DOM tree as described in [How to Create a DOM tree](/ja/How_to_create_a_DOM_tree). Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}.

To serialize the DOM tree `doc` into XML text, call {{domxref("XMLSerializer.serializeToString()")}}:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### HTML 文書のシリアライズ

If the DOM you have is an HTML document, you can serialize using `serializeToString()`, but there is a simpler option: just use the {{domxref("Element.innerHTML")}} property (if you want just the descendants of the specified node) or the {{domxref("Element.outerHTML")}} property if you want the node and all its descendants.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

As a result, `docHTML` is a {{domxref("DOMString")}} containing the HTML of the contents of the document; that is, the {{HTMLElement("body")}} element's contents.

You can get HTML corresponding to the `<body>` _and_ its descendants with this code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## 関連項目

- [XPath](/ja/XPath)
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}} および {{domxref("HTMLDocument")}}
