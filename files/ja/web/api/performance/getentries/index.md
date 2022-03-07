---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.getEntries
translation_of: Web/API/Performance/getEntries
---
{{APIRef("Performance Timeline API")}}

**`getEntries()`** メソッドは、そのページのすべての {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバー（エントリー）は、明示的な時点でパフォーマンスマークまたはメジャーを作成することで（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すことで）作成できます。特定の種類のパフォーマンスエントリーや特定の名前のパフォーマンスエントリーにのみ関心がある場合は、 {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} と {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} を参照してください。

{{AvailableInWorkers}}

## 構文

一般的な構文:

```js
entries = window.performance.getEntries();
```

### 返値

- entries
  - : {{domxref("PerformanceEntry")}} オブジェクトの配列。項目はエントリー '{{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並んでいます。

## 例

```js
function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  let p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (let i=0; i < p.length; i++) {
    console.log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i < p.length; i++) {
    console.log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
