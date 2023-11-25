---
title: "MutationEvent: newValue プロパティ"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`newValue`** は {{domxref("MutationEvent")}} インターフェイスの読み取り専用プロパティで、文字列を返します。 `DOMAttrModified` イベントでは、 {{domxref("Attr")}} ノードの新しい値を表します。 `DOMCharacterDataModified` イベントでは、{{domxref("CharacterData")}} ノードの新しい値を表します。それ以外の場合は、空文字列 (`""`) を返します。

## 値

文字列です。

## 例

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.newValue);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
