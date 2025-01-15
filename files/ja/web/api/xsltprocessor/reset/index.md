---
title: "XSLTProcessor: reset() メソッド"
short-title: reset()
slug: Web/API/XSLTProcessor/reset
l10n:
  sourceCommit: 01bad23f0d2ef51538bdb071282c56faf79395c6
---

{{APIRef("XSLT")}}

`reset()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、このプロセッサーからすべての引数 (`<xsl:param>`) および XSLT スタイルシートを除去します。これにより、`XSLTProcessor` は作成されたときの元の状態に戻ります。

## 構文

```js-nolint
reset()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### reset() の使用

この例は、`reset()` メソッドを使用することで、同じ `XSLTProcessor` インスタンスを異なるスタイルシートを使用する複数の変換で再利用できることを示しています。

#### HTML

```html
<div id="result"></div>
```

#### JavaScript

```js
const xmlString1 = `
<items>
  <item>Item A</item>
  <item>Item B</item>
</items>
`;

const xsltString1 = `
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

const xmlString2 = `
<fruits>
  <fruit>Apple</fruit>
  <fruit>Banana</fruit>
</fruits>
`;

const xsltString2 = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ol>
      <xsl:for-each select="fruits/fruit">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ol>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc1 = parser.parseFromString(xmlString1, "application/xml");
const xsltDoc1 = parser.parseFromString(xsltString1, "application/xml");
const xmlDoc2 = parser.parseFromString(xmlString2, "application/xml");
const xsltDoc2 = parser.parseFromString(xsltString2, "application/xml");

const xsltProcessor = new XSLTProcessor();

// Import the first XSLT stylesheet and transform the first XML
xsltProcessor.importStylesheet(xsltDoc1);
let resultFragment = xsltProcessor.transformToFragment(xmlDoc1, document);
document.getElementById("result").appendChild(resultFragment);

// Reset the XSLTProcessor instance
xsltProcessor.reset();

// Import the second XSLT stylesheet and transform the second XML
xsltProcessor.importStylesheet(xsltDoc2);
resultFragment = xsltProcessor.transformToFragment(xmlDoc2, document);
document.getElementById("result").appendChild(document.createElement("hr"));
document.getElementById("result").appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_reset", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
