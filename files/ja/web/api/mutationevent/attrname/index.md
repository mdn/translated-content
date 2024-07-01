---
title: "MutationEvent: attrName プロパティ"
short-title: attrName
slug: Web/API/MutationEvent/attrName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`attrName`** は {{domxref("MutationEvent")}} インターフェイスの読み取り専用プロパティで、 `DOMAttrModified` イベントの影響を受けるノードの名前を文字列で返します。これは他のイベントでは意味を持たず、空文字列 (`""`) に設定されます。

## 値

文字列です。

## 例

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrName);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
