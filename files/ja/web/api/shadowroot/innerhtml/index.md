---
title: "ShadowRoot: innerHTML プロパティ"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

**`innerHTML`** は {{domxref("ShadowRoot")}} インターフェイスのプロパティで、 `ShadowRoot` の内部の DOM ツリーに対する参照を設定したり返したりします。

## 値

文字列です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
