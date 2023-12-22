---
title: "MutationEvent: relatedNode プロパティ"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`relatedNode`** は {{domxref("MutationEvent")}} インターフェイスの読み取り専用プロパティで、 `DOMSubtreeModified` のサブツリー内の変更されたノードのように、イベントに関連するノードを示す文字列を返します。

## 値

文字列です。

## 例

```js
element.addEventListener(
  "DOMSubtreeModified",
  (event) => {
    console.log(event.relatedNode);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
