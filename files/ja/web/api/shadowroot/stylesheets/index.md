---
title: ShadowRoot.styleSheets
slug: Web/API/ShadowRoot/styleSheets
---

{{APIRef("CSSOM")}}

**`styleSheets`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウツリーに明示的にリンクされるか埋め込まれたスタイルシートを表す {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。

## 構文

```js
shadowRoot.styleSheets;
```

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
