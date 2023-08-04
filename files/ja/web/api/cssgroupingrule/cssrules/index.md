---
title: CSSGroupingRule.cssRules
slug: Web/API/CSSGroupingRule/cssRules
---

{{ APIRef("CSSOM") }}

**`cssRules`** は {{domxref("CSSGroupingRule")}} インターフェイスのプロパティで、 {{domxref("CSSRuleList")}} 型で {{domxref("CSSRule")}} オブジェクトのコレクションを返します。

## 値

{{domxref("CSSRuleList")}} です。

## 例

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
