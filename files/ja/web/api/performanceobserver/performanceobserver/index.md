---
title: "PerformanceObserver: PerformanceObserver() コンストラクター"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

**`PerformanceObserver()`** コンストラクターは、新しい {{domxref("PerformanceObserver")}} オブジェクトを、指定されたオブザーバー `callback` を使用して作成します。オブザーバーコールバックは、{{domxref("PerformanceEntry","パフォーマンス項目イベント", '', 'true')}}が登録された{{domxref("PerformanceEntry.entryType","項目型",'','true')}}に対して記録されたときに、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを介して呼び出されます。

## 構文

```js-nolint
new PerformanceObserver(callback)
```

### 引数

- `callback`
  - : 監視対象のパフォーマンスイベントが記録されたときに呼び出される `PerformanceObserverCallback` コールバック。コールバックが呼び出されるとき、以下の引数が利用できます。
    - `entries`
      - : {{domxref("PerformanceObserverEntryList","パフォーマンスオブザーバー項目のリスト",'','true')}}です。
    - `observer`
      - : 上記の項目を受け取っている {{domxref("PerformanceObserver","observer")}} オブジェクトです。
    - `droppedEntriesCount` {{optional_inline}}
      - : バッファーが一杯になったためにバッファーから失われた項目の数です。[`buffered`](/ja/docs/Web/API/PerformanceObserver/observe#parameters) フラグを参照してください。

### 返値

監視対象のパフォーマンスイベントが発生したときに指定されたコールバック (`callback`) を呼び出す新しい {{domxref("PerformanceObserver")}} オブジェクト。

## 例

### PerformanceObserver の作成

次の例では、 "mark" ({{domxref("PerformanceMark")}}) および "measure" ({{domxref("PerformanceMeasure")}}) イベントを監視する `PerformanceObserver` を作成します。
`perfObserver` コールバックは `list` ({{domxref("PerformanceObserverEntryList")}}) を提供し、監視しているパフォーマンス項目を取得することができます。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

### 失われたバッファー項目

{{domxref("PerformanceObserver")}} に `buffered` フラグを使用して、過去のパフォーマンス項目を使用することができます。
ただし、バッファーサイズには制限があります。パフォーマンスオブザーバーのコールバックにはオプションで `droppedEntriesCount` 引数が格納され、バッファーストレージが一杯になったために失われた項目の数を通知します。

```js
function perfObserver(list, observer, droppedEntriesCount) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
  if (droppedEntriesCount > 0) {
    console.warn(
      `${droppedEntriesCount} entries got dropped due to the buffer being full.`,
    );
  }
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });
```

通常、リソースタイミング項目はたくさんあり、これらの項目については、 {{domxref("performance.setResourceTimingBufferSize()")}} を使用してより大きなバッファーを設定し、 {{domxref("Performance/resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントを監視することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
