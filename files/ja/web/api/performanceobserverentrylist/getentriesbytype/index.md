---
title: "PerformanceObserverEntryList: getEntriesByType() メソッド"
short-title: getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`getEntriesByType()`** は {{domxref("PerformanceObserverEntryList")}} インターフェイスのメソッドで、指定された{{domxref("PerformanceEntry.entryType","パフォーマンス項目型", "", "true")}}の、明示的に監視された{{domxref("PerformanceEntry", "パフォーマンス項目", "", 1)}}オブジェクトのリストを返します。リストのメンバーは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを呼び出す際に指定された{{domxref("PerformanceEntry.entryType","項目型", '', 'entry')}}の集合によって決定されます。 このリストは、オブザーバーのコールバック関数（コールバックの最初の引数）で利用できます。

## 構文

```js-nolint
getEntriesByType(type)
```

### 引数

- `type`
  - : 取得する項目の型（`"mark"`など）。有効な項目型は、{{domxref("PerformanceEntry.entryType")}} に列挙されます。

### 返値

指定された型を持つ、明示的に監視された {{domxref("PerformanceEntry")}} オブジェクトのリストです。 アイテムは、項目の {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列順に並びます。 指定された型を持つオブジェクトがない場合、または引数が指定されていない場合、空のリストが返されます。

## 例

### getEntries, getEntriesByName, getEntriesByType の扱い

次の例は、{{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}、{{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}}、`getEntriesByType()` の各メソッドの違いを示しています。

```js
const observer = new PerformanceObserver((list, obs) => {
  // すべての項目をログ出力
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name} の時間: ${entry.duration}`);
  });

  // "debugging" という名前の "measure" 型の項目をログ出力
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name} の時間: ${entry.duration}`);
  });

  // "mark" 型の項目をログ出力
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name} の開始時刻: ${entry.startTime}`);
  });
});

// さまざまなパフォーマンスイベント型を監視
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
