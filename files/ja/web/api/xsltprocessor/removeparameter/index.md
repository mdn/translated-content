---
title: "XSLTProcessor: removeParameter() メソッド"
short-title: removeParameter()
slug: Web/API/XSLTProcessor/removeParameter
l10n:
  sourceCommit: f8e4bb60080838e2283604c6f5ace423c7dc861e
---

{{APIRef("XSLT")}}

`removeParameter()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、このプロセッサーにインポートされたスタイルシートから、引数 (`<xsl:param>`) とその値を除去します。

## 構文

```js-nolint
removeParameter(namespaceURI, localName)
```

### 引数

- `namespaceURI`
  - : 引数名に関連付けられた名前空間。 ["null"](/ja/docs/Web/JavaScript/Reference/Operators/null) の値は空文字列 (`""`) と同様に扱われます。
- `localName`
  - : 関連付けられた名前空間にある引数名。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### removeParameter() を使用

最初の `showItems`引数を `"yes"` に設定すると、リストアイテムが出力先に表示されます。

その後、 `showItems` 引数は `removeParameter()` を使用して除去されてから、変換が再度実行されるため、アイテムは表示されません。

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

// Set 'showItems' to 'no' and perform the first transformation
xsltProcessor.setParameter(null, "showItems", "no");
const resultContainer = document.getElementById("result");
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
resultContainer.appendChild(resultFragment);

// Add a horizontal rule to separate the results
resultContainer.appendChild(document.createElement("hr"));

// Remove the 'showItems' parameter, reverting it to the default value ('yes')
xsltProcessor.removeParameter(null, "showItems");
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
resultContainer.appendChild(resultFragment);
```

#### 結果

{{EmbedLiveSample("using_removeparameter", "", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
