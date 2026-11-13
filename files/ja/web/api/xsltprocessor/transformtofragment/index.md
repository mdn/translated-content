---
title: "XSLTProcessor: transformToFragment() メソッド"
short-title: transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
l10n:
  sourceCommit: 523438dbaa2f80c46f89cd2e98782c9b86a6caa7
---

{{APIRef("XSLT")}}

`transformToFragment()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、 `XSLTProcessor` に関連付けられた XSLT スタイルシートを使用して、指定された {{DOMxRef("Node")}} のソースを {{domxref("DocumentFragment")}} に変換します。

## 構文

```js-nolint
transformToFragment(source, document)
```

### 引数

- `source`
  - : XSLT スタイルシートを適用する {{DOMxRef("Node")}} のソース。
- `document`
  - : この文書フラグメントが関連付けられる文書 ({{DOMxRef("Document")}})（任意の文書フラグメントを追加することができる文書に関連付けられます）。

### 返値

{{domxref("DocumentFragment")}} です。

## 例

### transformToFragment() の使用

この例では、XML データを HTML に変換する `transformToFragment()` の使用方法を示しています。変換後の HTML は、文書フラグメントとして DOM に直接挿入することができます。

#### HTML

```html
<div id="result"></div>
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
  <xsl:output method="html"/>
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="books/book">
        <li>
          <strong><xsl:value-of select="title"/></strong>
          by <em><xsl:value-of select="author"/></em>
        </li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation, returning the result as a document fragment
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Insert the result into the page
document.getElementById("result").appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_transformToFragment", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.transformToDocument()")}}
