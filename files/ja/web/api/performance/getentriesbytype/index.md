---
title: performance.getEntriesByType()
slug: Web/API/Performance/getEntriesByType
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.getEntriesByType
translation_of: Web/API/Performance/getEntriesByType
---
{{APIRef("Performance Timeline API")}}

**`getEntriesByType()`** メソッドは、指定された型の {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバー（エントリー）は、明示的な時点でパフォーマンス*マーク*または*メジャー*を作成することで（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すことで）作成できます。

{{AvailableInWorkers}}

## 構文

```js
entries = window.performance.getEntriesByType(type);
```

### 引数

- type
  - : "`mark`" など、取得するエントリーの種類。有効なエントリー種別の一覧は {{domxref("PerformanceEntry.entryType")}} にあります。

### 返値

- entries
  - : 指定された `type` を持つ {{domxref("PerformanceEntry")}} オブジェクトのリスト。項目はエントリーの {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並んでいます。指定された `type` を持つオブジェクトがない場合、または引数が指定されていない場合は、空のリストが返されます。

## 例

```js
function usePerformanceEntryMethods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  performance.mark("Begin");
  doWork(100000);
  performance.mark("End");
  doWork(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i < p.length; i++) {
    log("Begin[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (var i=0; i < p.length; i++) {
    log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i < p.length; i++) {
    log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
