---
title: "CSSRule: parentStyleSheet プロパティ"
short-title: parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

**`parentStyleSheet`** は {{domxref("CSSRule")}} インターフェイスのプロパティで、現在のルールを定義している {{domxref("StyleSheet")}} オブジェクトを返します。

## 値

{{domxref("StyleSheet")}} オブジェクトです。

## 例

```js
const docRules = document.styleSheets[0].cssRules;
console.log(docRules[0].parentStyleSheet == document.styleSheets[0]); // returns true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
