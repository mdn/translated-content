---
title: CSSNamespaceRule.namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("CSSOM") }}

**`namespaceURI`** は {{domxref("CSSNamespaceRule")}} の読み取り専用プロパティで、この名前空間の URI のテキストを文字列で返します。

## 値

文字列で、 URI を持ちます。

## 例

このスタイルシートは、唯一のルールとして名前空間を含んでいます。したがって、最初に返される {{domxref("CSSRule")}} は `CSSNamespaceRule` となります。 `namespaceURI` プロパティの値は `http://www.w3.org/1999/xhtml` となります。

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); //http://www.w3.org/1999/xhtml
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
