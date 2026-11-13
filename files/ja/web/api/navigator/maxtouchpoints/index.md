---
title: "Navigator: maxTouchPoints プロパティ"
short-title: maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
l10n:
  sourceCommit: a77040afd58b77d50a6f4cbb94823c44bfba9d26
---

{{APIRef("HTML DOM")}}

**`maxTouchPoints`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、現在の端末で対応している同時タッチ接触点の最大数を返します。

## 値

数値です。

## 例

```js
if (navigator.maxTouchPoints > 1) {
  // ブラウザーがマルチタッチに対応
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
