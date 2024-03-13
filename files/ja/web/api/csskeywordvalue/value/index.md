---
title: "CSSKeywordValue: value プロパティ"
slug: Web/API/CSSKeywordValue/value
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

**`value`** は {{domxref("CSSKeywordValue")}} インターフェイスのプロパティで、 `CSSKeywordValue` の値を取得または設定します。

## 値

文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 設定時に `value` プロパティが空文字列になった場合。

## 例

次の例では、CSS の {{cssxref('display')}} プロパティを既定値へリセットします。

```js
let indicator = document.getElementById("indicator");
indicator.attributeStyleMap.set("display", new CSSKeywordValue("initial"));
indicator.attributeStyleMap.get("display").value; // 'initial'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
