---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
---

{{APIRef("Performance Timeline API")}}

**`PerformanceObserver()`** コンストラクターは、指定された observer `callback` を使用して新しい {{domxref("PerformanceObserver")}} オブジェクトを作成します。observer callback は、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを介して、登録された {{domxref("PerformanceEntry.entryType","エントリタイプ",'','true')}} に対して {{domxref("PerformanceEntry","パフォーマンスエントリイベント", '', 'true')}} が記録されたときに呼び出されます。

## 構文

```
var observer = new PerformanceObserver(callback);
```

### 引数

- `callback`
  - : 監視対象のパフォーマンスイベントが記録されたときに呼び出される `PerformanceObserverCallback` コールバック。コールバックが呼び出されるとき、その最初の引数は {{domxref("PerformanceObserverEntryList","パフォーマンスオブザーバエントリのリスト",'','true')}} で、2 番目の引数は {{domxref("PerformanceObserver","observer")}} オブジェクトです。

### 返値

監視対象のパフォーマンスイベントが発生したときに指定された `callback` を呼び出す新しい {{domxref("PerformanceObserver")}} オブジェクト。

## 例

```js
var observer = new PerformanceObserver(function (list, obj) {
  var entries = list.getEntries();
  for (var i = 0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PerformanceObserver.PerformanceObserver")}}
