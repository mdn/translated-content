---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Performance API")}}

**`PerformanceObserverEntryList`** インターフェイスは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを介して明示的に*監視された* {{domxref("PerformanceEntry","パフォーマンスイベント", '', 'true')}} のリストです。

## インスタンスメソッド

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : 明示的に観測されたすべての {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : 与えられた項目型の明示的に観測されたすべての {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : 指定された名前と項目型に基づいて、明示的に監視されているすべての {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。

## 例

### PerformanceObserverEntryList の使用

次の例では、`list` は `PerformanceObserverEntryList` オブジェクトです。{{domxref("PerformanceObserverEntryList.getEntries","getEntries()")}} メソッドが呼ばれ、この場合 "measure" と "mark" という明示的に監視されている {{domxref("PerformanceEntry")}} オブジェクトをすべて取得します。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name} の開始時刻: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name} の時間: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
