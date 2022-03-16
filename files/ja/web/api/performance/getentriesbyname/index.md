---
title: performance.getEntriesByName()
slug: Web/API/Performance/getEntriesByName
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.getEntriesByName
translation_of: Web/API/Performance/getEntriesByName
---
{{APIRef("Performance Timeline API")}}

**`getEntriesByName()`** メソッドは、指定された*名前*と*種別*の {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバー（*エントリー*）は、明示的な時点でパフォーマンス*マーク*または*メジャー*を作成することで（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すことで）作成できます。

{{AvailableInWorkers}}

## 構文

```js
entries = window.performance.getEntriesByName(name, type);
```

### 引数

- name
  - : 取得するエントリーの名前
- type {{optional_inline}}
  - : "`mark`" など、取得するエントリーの種類。有効なエントリー種別の一覧は {{domxref("PerformanceEntry.entryType")}} にあります。
</dl>

### 返値

- entries
  - : 指定された `name` と `type` を持つ {{domxref("PerformanceEntry")}} オブジェクトのリスト。 `type` 引数が指定されていない場合は、返されるエントリーを決定するために名前だけが使用されます。項目はエントリー '{{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並んでいます。指定された基準を満たすオブジェクトがない場合は、空のリストが返されます。

## 例

```js
function use_PerformanceEntry_methods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
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
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i < p.length; i++) {
    log("Begin[" + i + "]");
    check_PerformanceEntry(p[i]);
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
