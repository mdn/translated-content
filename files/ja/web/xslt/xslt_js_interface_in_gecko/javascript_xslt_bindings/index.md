---
title: JavaScript/XSLT バインディング
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
---

## JavaScript/XSLT バインディング

JavaScript は {{domxref('XSLTProcessor')}} オブジェクトを通して XSLT 変換を実行できます。インスタンス化されると、{{domxref('XSLTProcessor')}} には変換で使用される XSLT スタイルシートを引数として取る{{domxref('XSLTProcessor.importStylesheet()')}} メソッドがあります。スタイルシートは XML 文書として渡す必要があります。つまり{{domxref('XSLTProcessor.importStylesheet()')}} を呼び出す前に .xsl ファイルをページでロードする必要があります。これは {{domxref('XMLHttpRequest')}} または {{domxref('XMLDocument.load()')}} で行うことができます。

**Figure 1 : {{domxref('XSLTProcessor')}} のインスタンス化**

```js
var xsltProcessor = new XSLTProcessor();

// Load the xsl file using synchronous (third param is set to false) XMLHttpRequest
var myXMLHTTPRequest = new XMLHttpRequest();
myXMLHTTPRequest.open("GET", "example.xsl", false);
myXMLHTTPRequest.send(null);

var xslRef = myXMLHTTPRequest.responseXML;

// Finally import the .xsl
xsltProcessor.importStylesheet(xslRef);
```

実際の変換では、{{domxref('XSLTProcessor')}} には XML ドキュメントが必要です。このドキュメントは、最終的な結果を得るためにインポートされた XSL ファイルと一緒に使用されます。XML ドキュメントは、図 1 に示すようにロードされた別個の XML ファイルでも、既存のページの一部でもかまいません。ページの DOM の一部を処理するには、最初にメモリー内に XML 文書を作成する必要があります。処理対象の DOM が id の `example`を持つ要素に含まれていると仮定すると、その DOM はメモリ内 XML ドキュメントの {{domxref('Document.importNode()')}} メソッドを使用して "複製"できます。{{domxref('Document.importNode()')}} は、ドキュメント間（この場合は HTML ドキュメントから XML ドキュメントへ）の DOM フラグメントを転送することを可能にします。最初のパラメータはクローンを作成する DOM ノードを参照します。2 番目のパラメータを "true" にすることですべての子孫も同様にクローンします (深いクローン)。複製された DOM は図 2 に示すように、{{domxref('Node.appendChild()')}} を使用して簡単に XML ドキュメントに挿入できます。

**Figure 2 : ドキュメントの DOM の一部に基づいて XML ドキュメントを作成する**

```js
// create a new XML document in memory
var xmlRef = document.implementation.createDocument("", "", null);

// we want to move a part of the DOM from an HTML document to an XML document.
// importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
var myNode = document.getElementById("example");
var clonedNode = xmlRef.importNode(myNode, true);

// add the cloned DOM into the XML document
xmlRef.appendChild(clonedNode);
```

スタイルシートをインポートしたら、{{domxref('XSLTProcessor')}} は実際の変換に 2 つのメソッド、つまり{{domxref('XSLTProcessor.transformToDocument()')}} と{{domxref('XSLTProcessor.transformToFragment()')}} を実行する必要があります。{{domxref('XSLTProcessor.transformToDocument()')}} は完全な XML ドキュメントを返しますが、{{domxref('XSLTProcessor.transformToFragment()')}} は既存のドキュメントに簡単に追加できるドキュメントフラグメントを返します。どちらも、変換される最初のパラメーターとして XML 文書を取り込みます。 {{domxref('XSLTProcessor.transformToFragment()')}} は第 2 のパラメータ、すなわち生成されたフラグメントを所有するドキュメントオブジェクトを必要とします。生成されたフラグメントが現在の HTML ドキュメントに挿入される場合はドキュメントを渡すだけで十分です。

**Figure 2.1 : 文字列 'XML Soup' からの XML 文書の作成**

IE `loadXML` メソッドを使用して XML を含む文字列をロードすることができますが、Mozilla で同じことをするためにいくつかの微調整とチューニングを行う必要があります。これは DomParser によって処理されるため、DomParser.no を使用してドキュメントを作成する必要があります。

```js
var parser = new DOMParser();
var doc = parser.parseFromString(aStr, "text/xml");
```

**Figure 3 : 変換の実行**

```js
var fragment = xsltProcessor.transformToFragment(xmlRef, document);
```
