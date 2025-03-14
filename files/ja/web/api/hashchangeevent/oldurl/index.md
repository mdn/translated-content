---
title: "HashChangeEvent: oldURL プロパティ"
slug: Web/API/HashChangeEvent/oldURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

**`oldURL`** は {{domxref("HashChangeEvent")}} インターフェイスの読み取り専用プロパティで、ウィンドウが移動する前の URL を返します。

## 値

文字列です。

## 例

```js
window.addEventListener("hashchange", (event) => {
  console.log(`Hash changed from ${event.oldURL}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
