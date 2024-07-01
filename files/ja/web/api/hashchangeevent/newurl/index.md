---
title: "HashChangeEvent: newURL プロパティ"
slug: Web/API/HashChangeEvent/newURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

**`newURL`** は {{domxref("HashChangeEvent")}} インターフェイスの読み取り専用プロパティで、ウィンドウが移動する先の新しい URL を返します。

## 値

文字列です。

## 例

```js
window.addEventListener("hashchange", (event) => {
  console.log(`Hash changed to ${event.newURL}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
