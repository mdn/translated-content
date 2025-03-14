---
title: "PerformanceObserverEntryList: getEntries() メソッド"
short-title: getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`getEntries()`** は {{domxref("PerformanceObserverEntryList")}} インターフェイスのメソッドで、明示的に監視された{{domxref("PerformanceEntry","パフォーマンス項目", '', 'true')}}オブジェクトのリストを返します。このリストのメンバーは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを呼んで指定された{{domxref("PerformanceEntry.entryType","項目型", '', 'true')}}のセットによって決定されます。このリストは、オブザーバーのコールバック関数（コールバックの最初の引数）で利用できます。

## 構文

```js-nolint
getEntries()
```

### 返値

明示的に監視された {{domxref("PerformanceEntry")}} オブジェクトのリスト。項目は、項目の{{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列順に整列されます。 オブジェクトが見つからない場合は、空のリストが返されます。

## 例

### getEntries, getEntriesByName, getEntriesByType の扱い

次の例は、`getEntries()`、{{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}}、{{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}} の各メソッドの違いを示しています。

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
