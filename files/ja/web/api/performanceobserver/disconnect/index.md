---
title: PeformanceObserver.disconnect()
slug: Web/API/PerformanceObserver/disconnect
---

{{APIRef("Performance Timeline API")}}

{{domxref('PerformanceObserver')}} インターフェイスの **`disconnect()`** メソッドは、パフォーマンスオブザーバーが{{domxref("PerformanceEntry","パフォーマンスエントリ", '', 'true')}}イベントを受け取らないようにするために使用されます。

## 構文

```
performanceObserver.disconnect();
```

## 例

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
  // ...
  // Disable additional performance events
  observer.disconnect();
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## 仕様書

| 仕様書                                                                                                                               | ステータス                                               | コメント                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | --------------------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceobserver-disconnect', 'disconnect()')}} | {{Spec2('Performance Timeline Level 2')}} | `disconnect()` メソッドの初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceObserver.disconnect")}}
