---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
tags:
  - API
  - CSSOM
  - CSSRule
  - プロパティ
  - リファレンス
browser-compat: api.CSSRule.parentStyleSheet
translation_of: Web/API/CSSRule/parentStyleSheet
---
{{ APIRef("CSSOM") }}

**`parentStyleSheet`** は {{domxref("CSSRule")}} インターフェイスのプロパティで、現在のルールを定義している {{domxref("StyleSheet")}} オブジェクトを返します。

## 値

{{domxref("StyleSheet")}} オブジェクトです。

## 例

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.parentStyleSheet);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
