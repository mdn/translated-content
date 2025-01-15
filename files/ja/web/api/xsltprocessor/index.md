---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("XSLT")}}

**`XSLTProcessor`** は、[XSLT](/ja/docs/Web/XSLT) スタイルシート変換を XML 文書に適用して、新しい XML 文書を出力として生成します。 XSLT スタイルシートをロードし、 `<xsl:param>` 引数の値を操作し、変換処理を文書に適用するメソッドを持っています。

## コンストラクター

- {{domxref("XSLTProcessor.XSLTProcessor", "XSLTProcessor()")}}
  - : 新しい `XSLTProcessor` を作成します。

## インスタンスメソッド

- {{domxref("XSLTProcessor.importStylesheet()")}}
  - : XSLT スタイルシートをインポートします。
    指定されたノードが文書ノードの場合は、完全な XSL Transform または[リテラルの結果要素の変換](https://www.w3.org/TR/xslt#result-element-stylesheet)を渡すことができます。
    それ以外の場合は、`<xsl:stylesheet>` または `<xsl:transform>` 要素でなければなりません。
- {{domxref("XSLTProcessor.transformToFragment()")}}
  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートした XSLT スタイルシートを適用して、ノードソースを変換します。
    結果として得られる文書の断片のオーナー文書は所有者ノードです。
- {{domxref("XSLTProcessor.transformToDocument()")}}
  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートされた XSLT スタイルシートを適用して、ノードソースを変換します。
- {{domxref("XSLTProcessor.setParameter()")}}
  - : インポートされた XSLT スタイルシートに引数 (`<xsl:param>`) を設定します。
- {{domxref("XSLTProcessor.getParameter()")}}
  - : XSLT スタイルシートから引数の値を取得します。
- {{domxref("XSLTProcessor.removeParameter()")}}
  - : 引数が以前に設定されていた場合は削除します。
    これにより、`XSLTProcessor` は XSLT スタイルシートで指定された引数の既定値を使用します。
- {{domxref("XSLTProcessor.clearParameters()")}}
  - : 設定された引数を `XSLTProcessor` からすべて削除します。
    `XSLTProcessor` は XSLT スタイルシートで指定されている既定値を使用します。
- {{domxref("XSLTProcessor.reset()")}}
  - : すべての引数とスタイルシートを `XSLTProcessor` から削除します。

## インスタンスプロパティ

_このインターフェイスにはプロパティがありません。_

## 例

### `XSLTProcessor` のインスタンス化

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // XSLT ファイル example1.xsl を読み込み
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // ファイルを処理
  // ...
}
```

### 文書の DOM の一部分に基づいて XML 文書を作成する

実際の変換を行うには、 `XSLTProcessor` は XML 文書を必要とします。この XML 文書は、インポートされた XSL ファイルと組み合わせて使用され、最終的な結果を生成します。 XML 文書は {{domxref("Window/fetch", "fetch()")}} を使用して読み込まれる個別の XML ファイルであってもよいし、既存のページの一部でも可能です。

ページの DOM の一部を処理するには、まずメモリー内に XML 文書を作成する必要があります。処理対象の DOM が、 id が `example` である要素に含まれていると仮定すると、その DOM はメモリー内の XML 文書の {{domxref('Document.importNode()')}} メソッドを使用して「複製」することができます。 {{domxref('Document.importNode()')}} を使用すると、DOM の断片を文書間で転送することができます。この場合、HTML 文書から XML 文書に転送します。最初の引数は、複製する DOM ノードを参照します。 2 番目の引数を "true" に設定すると、子孫要素もすべて複製されます（ディープクローン）。複製された DOM は、以下に示すように、 {{domxref('Node.appendChild()')}} を使用してXML文書に挿入することができます。

```js
// メモリー内に新しい XML 文書を作成
const xmlRef = document.implementation.createDocument("", "", null);

// DOM の一部を HTML 文書から XML 文書に移動したい。
// importNode は、 XSLT で処理したいノードを複製するために使用します。 true を指定すると、ディープクローンが作成されます。
const myNode = document.getElementById("example");
const clonedNode = xmlRef.importNode(myNode, true);

// クローンした DOM を XML 文書に追加する
xmlRef.appendChild(clonedNode);
```

このスタイルシートがインポートされると、 `XSLTProcessor` は実際の変換を行うために 2 つのメソッド、すなわち {{domxref('XSLTProcessor.transformToDocument()')}} と {{domxref('XSLTProcessor.transformToFragment()')}} を実行する必要があります。
{{domxref('XSLTProcessor.transformToDocument()')}} は完全な XML 文書を返し、 {{domxref('XSLTProcessor.transformToFragment()')}} は既存の文書に簡単に追加できる文書の断片を返します。 どちらも、変換される XML 文書を最初の引数として受け取ります。 {{domxref('XSLTProcessor.transformToFragment()')}} は、生成された断片を所有する文書オブジェクトである 2 番目の引数が必要です。 生成された断片が現在の HTML 文書に挿入される場合、文書を渡せば十分です。

### 文字列から XML 文書を作成する 'XML Soup'

{{domxref("DOMParser")}} を使用して、 XML の文字列から XML 文書を作成することができます。

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### 変換を実行

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### 基本的な例

この基本的な例では、 XML ファイルを読み込み、 XSL 変換を適用します。これらは、 [HTML を生成](/ja/docs/Web/API/XSLTProcessor/Generating_HTML)する例で使用したのと同じファイルです。 XML ファイルには記事が記述されており、 XSL ファイルは表示用の情報を書式化します。

#### XML

```xml
<?xml version="1.0"?>
<myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>My Article</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
    <myNS:Author>Mr. Bar</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
  </myNS:Body>
</myNS:Article>
```

#### XSLT

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                   xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
     --   <xsl:value-of select="." />

    <xsl:if test="@company">
     ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```

この例では、 .xsl (`xslStylesheet`) と .xml (`xmlDoc`) ファイルの両方がメモリーに読み込まれます。次に、.xslファイルがインポートされ (`xsltProcessor.importStylesheet(xslStylesheet)`) 、変換が実行されます (`xsltProcessor.transformToFragment(xmlDoc, document)`)。これにより、ページが読み込まれた後に、新たなページ読み込みを開始することなく、データの取得が実行されます。

#### JavaScript

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // XSLT ファイルの example1.xsl を読み込む
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // XML ファイルの example1.xml を読み込む
  const xmlResponse = await fetch("example1.xml");
  const xmlText = await xmlResponse.text();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);

  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}

init();
```

### 高度な例

この高度な例では、複数の div をコンテンツに基づいてソートします。例えば、コンテンツを複数回ソートし、昇順と降順を交互に切り替えることができます。 JavaScript は最初のソート時にのみ .xsl ファイルを読み込み、ファイルの読み込みが完了すると `xslLoaded` 変数を true に設定します。 {{domxref("XSLTProcessor.getParameter()")}} メソッドを使用して、コードは昇順または降順でソートするかを判断することができます。引数が空の場合（XSLT ファイルに何か値があるわけではないため、ソートが現れる最初の時点）、既定では昇順になります。ソート値は、 {{domxref("XSLTProcessor.getParameter()")}} を使用して設定します。

XSLT ファイルには `myOrder` と呼ばれる引数が存在し、 JavaScript でソート方法を変更するために設定されます。 `xsl:sort` 要素の order 属性は、 `$myOrder` を使用して引数の値にアクセスすることができます。ただし、値は文字列ではなく XPATH 式である必要があるため、 `{$myOrder}` が使用されます。 {} を使用することで、コンテンツが XPath 式として評価されます。

変換が完了すると、結果が文書内に追加されます。この例では、追加された結果が示されています。

#### XHTML

```html
<div id="example">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

#### JavaScript

```js
let xslRef;
let xslLoaded = false;
const parser = new DOMParser();
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlRef = document.implementation.createDocument("", "", null);

async function sort() {
  if (!xslLoaded) {
    const response = await fetch("example2.xsl");
    const xslText = await response.text();
    xslRef = parser.parseFromString(xslText, "application/xml");
    xsltProcessor.importStylesheet(xslRef);
    xslLoaded = true;
  }

  // Create a new XML document in memory
  xmlRef = document.implementation.createDocument("", "", null);

  // We want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  const myNode = document.getElementById("example");
  const clonedNode = xmlRef.importNode(myNode, true);

  // After cloning, we append
  xmlRef.appendChild(clonedNode);

  // Set the sorting parameter in the XSL file
  const sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal === "" || sortVal === "descending") {
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  } else {
    xsltProcessor.setParameter(null, "myOrder", "descending");
  }

  // Initiate the transformation
  const fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // Clear the contents
  document.getElementById("example").textContent = "";

  myDOM = fragment;

  // Add the new content from the transformation
  document.getElementById("example").appendChild(fragment);
}
```

#### XSLT

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes" />

  <xsl:param name="myOrder" />

  <xsl:template match="/">

    <xsl:apply-templates select="/div//div">
      <xsl:sort select="." data-type="number" order="{$myOrder}" />
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="div">
    <xsl:copy-of select="." />
  </xsl:template>
</xsl:stylesheet>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XSLT](/ja/docs/Web/XSLT)
- [What kind of language is XSLT?](https://developer.ibm.com/technologies/web-development/) ([IBM developer](https://developer.ibm.com/))
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) ([zvon.org](https://zvon.org/))
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) ([zvon.org](https://zvon.org/))
