---
title: "Performance: clearMeasures() メソッド"
short-title: clearMeasures()
slug: Web/API/Performance/clearMeasures
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`clearMeasures()`** メソッドは、すべての、または特定の {{domxref("PerformanceMeasure")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインから除去します。

## 構文

```js-nolint
clearMeasures()
clearMeasures(name)
```

### 引数

- `name` {{optional_inline}}
  - : 文字列で、 {{domxref("PerformanceMeasure")}} オブジェクトの{{domxref("PerformanceEntry.name", "名前", "", 1)}}を表します。この引数を省略すると、 {{domxref("PerformanceEntry.entryType","entryType")}} が "`measure`" であるすべての項目が除去されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 測定値を除去

パフォーマンス測定値をすべて、あるいは特定の項目だけを消去するには、次のように `clearMeasures()` メソッドを使用します。

```js
// 測定値の束を作成
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

logMeasureCount(); // "Found this many entries: 5"

// "from navigation" PerformanceMeasure 項目のみを削除
performance.clearMeasures("from navigation");
logMeasureCount(); // "Found this many entries: 3"

// すべての PerformanceMeasure 項目を削除
performance.clearMeasures();
logMeasureCount(); // "Found this many entries: 0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceMeasure")}}
