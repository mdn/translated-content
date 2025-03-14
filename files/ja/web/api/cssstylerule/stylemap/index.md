---
title: CSSStyleRule.styleMap
slug: Web/API/CSSStyleRule/styleMap
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}

**`styleMap`** は {{domxref("CSSStyleRule")}} インターフェイスの読み取り専用プロパティで、このルールのプロパティ／値の組にアクセスするための {{domxref('StylePropertyMap')}} オブジェクトを返します。

## 値

{{domxref('StylePropertyMap')}} オブジェクトです。

## 例

以下の例では、　`styleMap` を使用して {{domxref('StylePropertyMap.set()')}} メソッドを使用し、スタイルを変更する方法を示しています。

```js
const stylesheet = document.styleSheets[0];

Object.values(stylesheet.cssRules).forEach((block) => {
  if (block.selectorText === "button") {
    block.styleMap.set("--mainColor", "black");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
