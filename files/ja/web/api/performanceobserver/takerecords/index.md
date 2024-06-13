---
title: "PerformanceObserver: takeRecords() メソッド"
short-title: takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`takeRecords()`** は {{domxref('PerformanceObserver')}} インターフェイスのメソッドで、パフォーマンスオブザーバーに格納されている{{domxref("PerformanceEntry","パフォーマンス項目")}}の現在のリストを空にして返します。

## 構文

```js-nolint
takeRecords()
```

### 引数

なし。

### 返値

{{domxref("PerformanceEntry")}} オブジェクトのリストです。

## 例

### 記録を取る

次の例は、現在のパフォーマンス項目のリストを `records` に格納し、パフォーマンスオブザーバーを空にします。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
const records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
