---
title: "PerformanceMark: detail プロパティ"
short-title: detail
slug: Web/API/PerformanceMark/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

読み取り専用の **`detail`** プロパティは、（{{domxref("Performance.mark","performance.mark()")}} または {{domxref("PerformanceMark.PerformanceMark","PerformanceMark()")}} コンストラクターを使用して）構築時にマークに記載された任意のメタデータを返します。

## 値

（{{domxref("Performance.mark","performance.mark()")}} の `markOptions` または {{domxref("PerformanceMark.PerformanceMark","PerformanceMark()")}} コンストラクターから）設定された値を返します。

## 例

次の例は、`detail` プロパティの使い方を示しています。

```js
performance.mark("dog", { detail: "labrador" });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
