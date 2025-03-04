---
title: "XSLTProcessor: importStylesheet() メソッド"
short-title: importStylesheet()
slug: Web/API/XSLTProcessor/importStylesheet
l10n:
  sourceCommit: f8e4bb60080838e2283604c6f5ace423c7dc861e
---

{{APIRef("XSLT")}}

`importStylesheet()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、プロセッサーに XSLT スタイルシートをインポートします。

## 構文

```js-nolint
importStylesheet(style)
```

### 引数

- `style`
  - : インポートするノード ({{DOMxRef("Node")}})。これは、 XML 文書（すなわち {{domxref("Document")}} のうち、 {{domxref("Document.doctype", "doctype")}} の {{domxref("DocumentType.name", "name")}} が `"xml"` であるもの）で、 XSLT スタイルシートまたは[リテラル結果要素変換](https://www.w3.org/TR/xslt/#result-element-stylesheet)を含むもの、または、 `<xsl:stylesheet>` or `<xsl:transform>` を表す要素 ({{domxref("Element")}}) です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### importStylesheet() の使用

この例では、 XML データの変換に使用するために、 `importStylesheet()` が XSLT スタイルシートを `XSLTProcessor` に読み込むことを示しています。

#### HTML

```html
<div id="result"></div>
```

#### JavaScript

```js
const xmlString = `
<items>
  <item>Item 1</item>
  <item>Item 2</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="items/item">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();

// Import the XSLT stylesheet into the XSLTProcessor
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_importStylesheet", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
