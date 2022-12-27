---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
---

{{APIRef("Performance Timeline API")}}

**`PerformanceObserverEntryList`** インターフェイスは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを介して明示的に*監視された* {{domxref("PerformanceEntry","パフォーマンスイベント", '', 'true')}} のリストです。

> **メモ:** このインターフェイスは {{domxref("Window")}} と {{domxref("Worker")}} に公開されています。

## メソッド

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : 与えられた*フィルタ*に基づいて明示的に*観測された* {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : 与えられた*エントリタイプ*の明示的に*観測された*{{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : 指定された*名前*と*エントリタイプ*に基づいて、明示的に*監視されている* {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。

## 例

```js
// Create observer for all performance event types
// list is of type PerformanceObserveEntryList
var observe_all = new PerformanceObserver(function(list, obs) {
   var perfEntries = list.getEntries();
   for (var i = 0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
      // do something with it
   }
}
```

## 仕様書

| 仕様書                                                                                                                                                       | ステータス                                               | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------- |
| {{SpecName('Performance Timeline Level 2', '#idl-def-performanceobserverentrylist', 'PerformanceObserverEntryList')}} | {{Spec2('Performance Timeline Level 2')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceObserverEntryList")}}
