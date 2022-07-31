---
title: performance.clearMeasures()
slug: Web/API/Performance/clearMeasures
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.clearMeasures
translation_of: Web/API/Performance/clearMeasures
---
{{APIRef("User Timing API")}}

**`clearMeasures()`** メソッドは、ブラウザーのパフォーマンスエントリーバッファーから*名前付きメジャー*を削除します。このメソッドが引数なしで呼び出された場合、{{domxref("PerformanceEntry.entryType","エントリー種別", "", 1)}}が "`measure`" の{{domxref("PerformanceEntry","パフォーマンスエントリー", "", 1)}}がすべてパフォーマンスエントリーバッファーから削除されます。

{{AvailableInWorkers}}

## 構文

```js
performance.clearMeasures();
performance.clearMeasures(name);
```

### 引数

- name {{optional_inline}}
  - : タイムスタンプの名前を表す {{domxref("DOMString")}} です。 この引数を省略すると、{{domxref("PerformanceEntry.entryType","エントリー種別", "", 1)}}が "`measure`" であるすべての{{domxref("PerformanceEntry","パフォーマンスエントリー", "", 1)}}が削除されます。

### 返値

- void
  - :

## 例

次の例は、`clearMeasures()` メソッドの両方の使用方法を示しています。

```js
// Create a small helper to show how many PerformanceMeasure entries there are.
function logMeasureCount() {
  console.log(
    "Found this many entries: " + performance.getEntriesByType("measure").length
  );
}

// Create a bunch of measures.
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

logMeasureCount() // "Found this many entries: 5"

// Delete just the "from navigation" PerformanceMeasure entries.
performance.clearMeasures("from navigation");
logMeasureCount() // "Found this many entries: 3"

// Delete all of the PerformanceMeasure entries.
performance.clearMeasures();
logMeasureCount() // "Found this many entries: 0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
