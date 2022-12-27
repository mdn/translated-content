---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
---

{{APIRef("Performance Timeline API")}}

**`duration`** プロパティは、{{domxref("PerformanceEntry","パフォーマンスエントリ")}}の期間である{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します。

{{AvailableInWorkers}}

このプロパティによって返される値は、パフォーマンスエントリの{{domxref("PerformanceEntry.entryType","タイプ")}}によって異なります。

- "`frame`" - 連続する 2 つのフレームの `startTime` 間の差を示す{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`mark`" - "`0`" を返します (マークには長さがありません)
- "`measure`" - メジャーの期間である{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`navigation`" - それぞれ {{domxref("PerformanceNavigationTiming.loadEventEnd")}} と {{domxref("PerformanceEntry.startTime")}} のプロパティの差である{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`resource`" - リソースの {{domxref("PerformanceEntry.responseEnd","responseEnd")}} {{domxref("DOMHighResTimeStamp","タイムスタンプ")}}とその {{domxref("PerformanceEntry.startTime","startTime")}} {{domxref("DOMHighResTimeStamp","タイムスタンプ")}}の差を返します

このプロパティは {{readonlyInline}} です。

## 構文

```
entry.duration;
```

### 返値

{{domxref("PerformanceEntry","パフォーマンスエントリ")}}の長さを表す {{domxref("DOMHighResTimeStamp")}}。期間の概念が特定のパフォーマンスメトリックに適用されない場合、ブラウザーは期間 0 を返すように選択することがあります。

> **メモ:** パフォーマンスエントリが "`resource`" の {{domxref("PerformanceEntry.entryType","entryType")}} を持つ場合 (つまり、エントリが {{domxref("PerformanceResourceTiming")}} オブジェクトである場合)、このプロパティは {{domxref("PerformanceEntry.responseEnd")}} と {{domxref("PerformanceEntry.startTime")}} の差の{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します。

## 例

次の例は、`duration` プロパティの使用方法を示しています。

```js
function run_PerformanceEntry() {
  log("PerformanceEntry support ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  var properties = ["name", "entryType", "startTime", "duration"];
  var methods = ["toJSON"];

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in obj;
    if (supported)
      log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      log("..." + properties[i] + " = Not supported");
  }
  for (var i=0; i < methods.length; i++) {
    // check each method
    var supported = typeof obj[methods[i]] == "function";
    if (supported) {
      var js = obj[methods[i]]();
      log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      log("..." + methods[i] + " = Not supported");
    }
  }
}
```

## 仕様書

| 仕様書                                                                                                                   | ステータス                                               | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-duration', 'duration')}} | {{Spec2('Performance Timeline Level 2')}} |          |
| {{SpecName('Performance Timeline', '#dom-performanceentry-duration', 'duration')}}             | {{Spec2('Performance Timeline')}}             | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry.duration")}}
