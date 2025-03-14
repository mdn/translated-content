---
title: "PerformanceMeasure: detail プロパティ"
short-title: detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

読み取り専用の **`detail`** プロパティは、（{{domxref("Performance.measure","performance.measure()")}} を使用して）構築時にマークに記載された任意のメタデータを返します。

## 値

（{{domxref("Performance.measure","performance.measure()")}} の `markOptions` から）設定された値を返します。

## 例

次の例は、`detail` プロパティの使い方を示しています。

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
