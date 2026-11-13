---
title: "XSLTProcessor: setParameter() メソッド"
short-title: setParameter()
slug: Web/API/XSLTProcessor/setParameter
l10n:
  sourceCommit: ed8b0abcd17844e033c2af350e7d2b314ca56ac4
---

{{APIRef("XSLT")}}

`setParameter()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、このプロセッサーでインポートされたスタイルシート内の引数（`<xsl:param>`）の値を設定します。

## 構文

```js-nolint
setParameter(namespaceURI, localName, value)
```

### 引数

- `namespaceURI`
  - : 引数名に関連付けられた名前空間。 ["null"](/ja/docs/Web/JavaScript/Reference/Operators/null) の値は空文字列 (`""`) と同様に扱われます。
- `localName`
  - : 関連付けられた名前空間にある引数名。
- `value`
  - : 引数の値。
    > [!NOTE]
    > Firefox はあらゆる種類の引数に対応しています。 Chrome、Edge、Safari は文字列引数のみに対応しています。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### setParameter() の使用

この例では、JavaScript から XSLT スタイルシートに `setParameter()` を使用して引数を渡し、それらの引数に基づいて変換の出力を動的に変更する方法を示しています。

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
  <xsl:param name="highlightColor" select="'yellow'"/>
  <xsl:template match="/">
    <ul>
      <xsl:if test="$showItems = 'yes'">
        <xsl:for-each select="items/item">
          <li style="background-color: {$highlightColor};">
            <xsl:value-of select="."/>
          </li>
        </xsl:for-each>
      </xsl:if>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

xsltProcessor.setParameter(null, "showItems", "yes");
xsltProcessor.setParameter(null, "highlightColor", "lightblue");

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_setParameter", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
