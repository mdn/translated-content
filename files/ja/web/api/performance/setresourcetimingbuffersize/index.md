---
title: performance.setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.setResourceTimingBufferSize
translation_of: Web/API/Performance/setResourceTimingBufferSize
---
{{APIRef("Resource Timing API")}}

**`setResourceTimingBufferSize()`** メソッドは、ブラウザーのリソースタイミングバッファーサイズを、指定された数の "`resource`" の {{domxref("PerformanceEntry.entryType","パフォーマンスエントリー種別")}}のオブジェクトに設定します。

ブラウザーの推奨リソースタイミングバッファサイズは少なくとも{{domxref("PerformanceEntry","パフォーマンスエントリー")}}オブジェクト 150 件分です。

{{AvailableInWorkers}}

## 構文

```js
performance.setResourceTimingBufferSize(maxSize);
```

### 引数

- maxSize
  - : `number` で、ブラウザーがパフォーマンスエントリーバッファーに保持する必要がある{{domxref("PerformanceEntry","パフォーマンスエントリー")}}オブジェクトの最大数を表します。

### 返値

- なし
  - : このメソッドには返値はありません。

## 例

```js
function setResourceTimingBufferSize(maxSize) {
  if (performance === undefined) {
    log("Browser does not support Web Performance");
    return;
  }
  var supported = typeof performance.setResourceTimingBufferSize == "function";
  if (supported) {
    log("... Performance.setResourceTimingBufferSize() = Yes");
    performance.setResourceTimingBufferSize(maxSize);
  } else {
    log("... Performance.setResourceTimingBufferSize() = NOT supported");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
