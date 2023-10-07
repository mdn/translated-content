---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
---

{{APIRef("Performance Timeline API")}}

**`PerformanceObserver`** インターフェイスは、パフォーマンス測定イベントを監視し、ブラウザーのパフォーマンスタイムラインに記録されているので、新しい{{domxref("PerformanceEntry","performance entries", '', 'true')}} の通知を受けるために使用されます。

{{AvailableInWorkers}}

## コンストラクター

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : 新しい `PerformanceObserver` オブジェクトを作成して返します。

## メソッド

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : 監視する{{domxref("PerformanceEntry.entryType","エントリタイプ")}}のセットを指定します。指定された `entryTypes` の 1 つに対して {{domxref("PerformanceEntry","パフォーマンスエントリ")}} が記録されている場合、パフォーマンスオブザーバのコールバック関数が呼び出されます。
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : パフォーマンスオブザーバのコールバックが{{domxref("PerformanceEntry","パフォーマンスエントリ")}}を受け取らないようにします。
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : パフォーマンスオブザーバに格納されている{{domxref("PerformanceEntry","パフォーマンスエントリ")}} の現在のリストを空にして返します。

<!---->

## 例

```js
function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PerformanceObserver")}}

## あわせて参照

- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
