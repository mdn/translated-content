---
title: "ShadowRoot: styleSheets プロパティ"
short-title: styleSheets
slug: Web/API/ShadowRoot/styleSheets
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

**`styleSheets`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウツリーに明示的にリンクされるか埋め込まれたスタイルシートを表す {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。

### 値

{{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let styleSheets = shadow.styleSheets;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
