---
title: CSSStyleRule.selectorText
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 9ae60309a7823b7edb853355d2da67af30363460
---

{{APIRef("CSSOM") }}

**`selectorText`** は {{domxref("CSSStyleRule")}} インターフェイスのプロパティで、この `CSSStyleRule` に関連付けられたセレクターを取得および設定します。

## 値

文字列です。

## 例

この CSS は 1 つのスタイルルールを含んでいます。これは最初の {{domxref("CSSRule")}} となり、 `document.styleSheets[0].cssRules` で返されます。従って、 `myRules[0].selectorText` はセレクターの文字列を返します。この場合は `"h1"` となります。

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // a string containing "h1".
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
