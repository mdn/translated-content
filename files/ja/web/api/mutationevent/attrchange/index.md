---
title: "MutationEvent: attrChange プロパティ"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`attrChange`** は {{domxref("MutationEvent")}} インターフェイスの読み取り専用プロパティで、 `DOMAttrModified` イベントのトリガーとなった変更の種類を示す数値を返します。取り得る値は `MODIFICATION` (`1`)、`ADDITION` (`2`)、`REMOVAL`(`3`) の 3 つです。この値は他のイベントでは意味を持たず、`0` に設定されます。

## 値

整数です。 `0`、`1` (`MODIFICATION`)、`2` (`ADDITION`)、`3` (`REMOVAL`) のいずれかです。

## 例

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrChange);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
