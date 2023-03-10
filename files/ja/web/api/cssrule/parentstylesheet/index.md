---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: d44ea6b0f1f4acae9c49790d0160960e67212d58
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
