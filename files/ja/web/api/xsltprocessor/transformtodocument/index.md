---
title: "XSLTProcessor: transformToDocument() メソッド"
short-title: transformToDocument()
slug: Web/API/XSLTProcessor/transformToDocument
l10n:
  sourceCommit: 5a1a007bb35afdda0e46c4472d65a7610ab655fd
---

{{APIRef("XSLT")}}

`transformToDocument()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、 `XSLTProcessor` に関連付けられた XSLT スタイルシートを使用して、指定された {{DOMxRef("Node")}} のソースを {{domxref("Document")}} に変換します。

## 構文

```js-nolint
transformToDocument(source)
```

### 引数

- `source`
  - : XSLT スタイルシートを適用する {{DOMxRef("Node")}} のソース。

### 返値

{{domxref("Document")}} です。実際のインターフェイスは、このスタイルシートの[出力メソッド](https://www.w3.org/TR/1999/REC-xslt-19991116#output)によって異なります。

| 出力メソッド | 返値のインターフェイス                                                               |
| ------------ | ------------------------------------------------------------------------------------ |
| `html`       | {{domxref("HTMLDocument")}}                                                          |
| `xml`        | {{domxref("XMLDocument")}}                                                           |
| `text`       | {{domxref("XMLDocument")}} で、唯一のルート要素である `<transformiix:result>` を持つ |

## 例

### transformToDocument() の使用

この例では、`transformToDocument()` を使用して XSLT を用いて XML 文書を変換し、新しい XML 文書構造を作成する方法を示しています。

#### HTML

```html
<pre id="result"></pre>
```

#### JavaScript

```js
const xmlString = `
<books>
  <book>
    <title>Book 1</title>
    <author>Author 1</author>
  </book>
  <book>
    <title>Book 2</title>
    <author>Author 2</author>
  </book>
</books>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes"/>
  <xsl:template match="/">
    <catalog>
      <xsl:for-each select="books/book">
        <item>
          <name><xsl:value-of select="title"/></name>
          <writer><xsl:value-of select="author"/></writer>
        </item>
      </xsl:for-each>
    </catalog>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation, returning the result as a new XML document
const resultDoc = xsltProcessor.transformToDocument(xmlDoc);

// Serialize the result document to a string
const serializer = new XMLSerializer();
const resultString = serializer.serializeToString(resultDoc);

// Display the transformed XML in the page
document.getElementById("result").textContent = resultString;
```

#### 結果

{{EmbedLiveSample("using_transformToDocument", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.transformToFragment()")}}
