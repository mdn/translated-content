---
title: "XSLTProcessor: clearParameters() メソッド"
short-title: clearParameters()
slug: Web/API/XSLTProcessor/clearParameters
l10n:
  sourceCommit: d8fd9326867083bc2ce88d1128aba888ad5312fd
---

{{APIRef("XSLT")}}

`clearParameters()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、プロセッサーにインポートされたスタイルシートからすべての引数 (`<xsl:param>`) とその値を除去します。その後、 `XSLTProcessor` は、 XSLT スタイルシートで指定された既定値を使用します。

## 構文

```js-nolint
clearParameters()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### clearParameters() の使用

例えば、 `clearParameters()` を使用して、 XSLT スタイルシートで指定された既定値にすべての引数をリセットすることができます。

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
  <item>Item 3</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:param name="showItems" select="'yes'"/>
  <xsl:template match="/">
    <!-- If showItems is 'yes', display the list of items -->
    <xsl:if test="$showItems = 'yes'">
      <ul>
        <xsl:for-each select="items/item">
          <li><xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </xsl:if>
    <!-- If showItems is 'no', display a message -->
    <xsl:if test="$showItems = 'no'">
      <div>No content to show</div>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Set the 'showItems' parameter to 'no' and perform the first transformation
xsltProcessor.setParameter(null, "showItems", "no");
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);

// Add a horizontal rule to separate the results
document.getElementById("result").appendChild(document.createElement("hr"));

// Clear all parameters, resetting 'showItems' to its default value ('yes')
xsltProcessor.clearParameters();
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_clearParameters", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.reset()")}}
