---
title: performance.clearMarks()
slug: Web/API/Performance/clearMarks
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.clearMarks
translation_of: Web/API/Performance/clearMarks
---
{{APIRef("User Timing API")}}

**`clearMarks()`** メソッドは、ブラウザーのパフォーマンスエントリーバッファーから*名前付きマーク*を削除します。このメソッドが引数なしで呼び出された場合、{{domxref("PerformanceEntry.entryType","エントリー種別", "", 1)}}が "`mark`" の{{domxref("PerformanceEntry","パフォーマンスエントリー", "", 1)}}がすべてパフォーマンスエントリーバッファーから削除されます。

{{AvailableInWorkers}}

## 構文

```js
performance.clearMarks();
performance.clearMarks(name);
```

### 引数

- name {{optional_inline}}
  - : タイムスタンプの名前を表す {{domxref("DOMString")}} です。 この引数を省略すると、{{domxref("PerformanceEntry.entryType","エントリー種別", "", 1)}}が "`mark`" であるすべての{{domxref("PerformanceEntry","パフォーマンスエントリー", "", 1)}}が削除されます。

### 返値

- void
  - :

## 例

次の例は、`clearMarks()` メソッドの両方の使用法を示しています。

```js
// PerformanceMark のエントリーがいくつあるかを表示する小さなヘルパーを作成します。
function logMarkCount() {
  console.log(
    "Found this many entries: " + performance.getEntriesByType("mark").length
  );
}

// Create a bunch of marks.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

logMarkCount() // "Found this many entries: 6"

// Delete just the "squirrel" PerformanceMark entries.
performance.clearMarks('squirrel');
logMarkCount() // "Found this many entries: 4"

// Delete all of the PerformanceMark entries.
performance.clearMarks();
logMarkCount() // "Found this many entries: 0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
