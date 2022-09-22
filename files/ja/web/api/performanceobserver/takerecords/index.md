---
title: PerformanceObserver.takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
---

{{APIRef("Performance Timeline API")}}

{{domxref('PerformanceObserver')}} インターフェイスの **`takeRecords()`** メソッドは、パフォーマンスオブザーバーに格納されている{{domxref("PerformanceEntry","パフォーマンスエントリ")}}の現在のリストを空にして返します。

## 構文

```
var PerformanceEntry[] = performanceObserver.takeRecords();
```

### 引数

なし

### 返値

{{domxref("PerformanceEntry")}} オブジェクトのリスト

## 例

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});
var records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## 仕様書

| 仕様書                                                                                                                                   | ステータス                                               | コメント                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceobserver-takerecords', 'takeRecords()')}} | {{Spec2('Performance Timeline Level 2')}} | `takeRecords()` メソッドの初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceObserver.takeRecords")}}
