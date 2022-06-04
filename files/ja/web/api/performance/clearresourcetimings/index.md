---
title: performance.clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.clearResourceTimings
translation_of: Web/API/Performance/clearResourceTimings
---
{{APIRef("Resource Timing API")}}

**`clearResourceTimings()`** メソッドは、{{domxref("PerformanceEntry.entryType","entryType")}} が "`resource`" のすべての {{domxref("PerformanceEntry","パフォーマンスエントリー")}}をブラウザーのパフォーマンスデータバッファーから削除し、パフォーマンスデータバッファーのサイズをゼロに設定します。ブラウザーのパフォーマンスデータバッファーのサイズを設定するには、{{domxref("Performance.setResourceTimingBufferSize()")}} メソッドを使用してください。

{{AvailableInWorkers}}

## 構文

```js
performance.clearResourceTimings();
```

### 引数

- void
  - :

### 返値

- なし
  - : このメソッドに返値はありません。

## 例

```js
function load_resource() {
  var image = new Image();
  image.src = "https://developer.mozilla.org/static/img/opengraph-logo.png";
}
function clear_performance_timings() {
  if (performance === undefined) {
    log("Browser does not support Web Performance");
    return;
  }
  // Create a resource timing performance entry by loading an image
  load_resource();

  var supported = typeof performance.clearResourceTimings == "function";
  if (supported) {
    console.log("Run: performance.clearResourceTimings()");
    performance.clearResourceTimings();
  } else {
    console.log("performance.clearResourceTimings() NOT supported");
    return;
  }
  // getEntries should now return zero
  var p = performance.getEntriesByType("resource");
  if (p.length == 0)
    console.log("... Performance data buffer cleared");
  else
    console.log("... Performance data buffer NOT cleared!");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
