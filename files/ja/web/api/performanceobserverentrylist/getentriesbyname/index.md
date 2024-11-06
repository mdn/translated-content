---
title: "PerformanceObserverEntryList: getEntriesByName() メソッド"
short-title: getEntriesByName()
slug: Web/API/PerformanceObserverEntryList/getEntriesByName
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

**`getEntriesByName()`** は {{domxref("PerformanceObserverEntryList")}} インターフェイスのメソッドで、指定された名前 ({{domxref("PerformanceEntry.name","name")}}) と項目型 ({{domxref("PerformanceEntry.entryType","entryType")}}) について、明示的に監視された {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバーは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを呼び出す際に指定された{{domxref("PerformanceEntry.entryType","項目型", '', 'entry')}}の集合によって決定されます。 このリストは、オブザーバーのコールバック関数（コールバックの最初の引数）で利用できます。

## 構文

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### 引数

- `name`
  - : 取得する項目名を表す文字列。
- `type` {{optional_inline}}
  - : 取得する項目の型を表す文字列。例えば `"mark"` などです。有効な項目型は、{{domxref("PerformanceEntry.entryType")}} に掲載されています。

### 返値

明示的に監視されている{{domxref("PerformanceEntry","パフォーマンス項目", '', 'true')}}オブジェクトで、指定された名前 (`name`) と型 (`type`) を持つもののリストです。`type` 引数が指定されなかった場合、返値の項目は `name` のみで決定されます。 項目は、項目の {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列順に並べられます。 指定された条件に一致するオブジェクトが存在しない場合、空のリストが返されます。

## 例

### getEntries, getEntriesByName, getEntriesByType の扱い

次の例は、{{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}、`getEntriesByName()`、{{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}} の各メソッドの違いを示しています。

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
