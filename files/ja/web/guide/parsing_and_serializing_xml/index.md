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
- [XPath](/ja/docs/Web/XPath)
  - : XML 文書の特定の部分のアドレスを含む文字列を作成し、それらのアドレスに基づいて XML ノードを特定する技術。

## XML 文書を作成する

次のいずれかの方法で XML 文書を作成します (これは {{domxref("Document")}} のインスタンスです)。

### 文字列を DOM ツリーにパースする

この例では、{{domxref("DOMParser")}} を使用して文字列の XML フラグメントを DOM ツリーに変換します:

```js
const xmlStr = '<a id="a"><b id="b">hey!</b></a>';
const parser = new DOMParser();
const dom = parser.parseFromString(xmlStr, "application/xml");
// ルート要素の名前またはエラーメッセージを出力します
console.log(
  dom.documentElement.nodeName == "parsererror"
    ? "パース中にエラー発生"
    : dom.documentElement.nodeName,
);
```

### URL にできるリソースを DOM ツリーにパースする

#### XMLHttpRequest を使用する

URL アドレス指定が可能な XML ファイルを読み込み解析して DOM ツリーにするサンプルコードを次に示します:

```js
const xhr = new XMLHttpRequest();

xhr.onload = function () {
  dump(xhr.responseXML.documentElement.nodeName);
};

xhr.onerror = function () {
  dump("Error while getting XML.");
};

xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
```

`xhr` オブジェクトの {{domxref("XMLHttpRequest.responseXML", "responseXML")}} フィールドで返される値は XML の解析により構築された {{domxref("Document")}} です。

document が {{Glossary("HTML")}} である場合、上記のコードは {{domxref("Document")}} を返します。document が XML である場合、返されるオブジェクトは {{domxref("XMLDocument")}} になります。この 2 種類は基本的に同じですが、その違いは主に歴史的な部分であり、差別化にはいくつかの実用的な利点があります。

> **メモ:** {{domxref("HTMLDocument")}} インターフェイスもありますが、独立した型であるとは限りません。独立した型として扱うブラウザーもありますが、単なる `Document` インターフェイスへのエイリアスとしているブラウザーもあります。

## XML 文書のシリアライズ

{{domxref("Document")}} がある時、{{domxref("XMLSerializer.serializeToString()")}} メソッドを用いて文章の DOM ツリーを XML にシリアライズし直すことができます。

前の節で作成した XML 文書をシリアライズするには、以下の方法を用いてください。

### DOM ツリーを文字列にシリアライズ

まず、[DOM ツリーの作成方法](/ja/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)で説明された方法で DOM ツリーを作成します。もしくは、{{domxref("XMLHttpRequest")}} で取得した DOM ツリーを用います。

DOM ツリー `doc` を XML 文字列にシリアライズするには、以下のように {{domxref("XMLSerializer.serializeToString()")}} を呼び出します。

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### HTML 文書のシリアライズ

DOM が HTML 文書である場合、`serializeToString()` を用いてシリアライズすることもできますが、より単純な方法があります。{{domxref("Element.innerHTML")}} プロパティ (指定したノードの子孫のみを得たい場合) または {{domxref("Element.outerHTML")}} プロパティ (指定したノードとその子孫を得たい場合) を用いればよいです。

```js
const docInnerHtml = document.documentElement.innerHTML;
```

これを実行すると、`docHTML` は文書の内容、すなわち {{HTMLElement("body")}} 要素の内容を表す HTML が入った {{domxref("DOMString")}} になります。

このコードを用いると、`<body>` _と_ その子孫に対応する HTML を得ることができます。

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## 関連項目

- [XPath](/ja/docs/Web/XPath)
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}} および {{domxref("HTMLDocument")}}
