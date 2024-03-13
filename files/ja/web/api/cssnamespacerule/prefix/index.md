---
title: CSSNamespaceRule.prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("CSSOM") }}

**`prefix`** は {{domxref("CSSNamespaceRule")}} の読み取り専用プロパティで、この名前空間に関連付けられた名前を文字列で返します。そのような接頭辞がない場合は、空文字列を返します。

## 値

この名前空間に関連付けられている接頭辞が入った文字列。接頭辞がない場合は空文字列となります。

## 例

このスタイルシートには、名前空間ルールが 2 つ含まれています。最初のものは接頭辞がなく、 2 つ目は接頭辞 `svg` があります。 2 つの `CSSNamespaceRule` オブジェクトが返されます。最初の `prefix` プロパティの値は空文字列になり、 2 つ目は `svg` になります。

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // 空文字列 ""
console.log(myRules[1].namespaceURI); // "svg"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
