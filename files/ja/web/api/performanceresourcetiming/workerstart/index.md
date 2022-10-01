---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
---

{{APIRef("Resource Timing API")}}

{{domxref("PerformanceResourceTiming")}} インターフェイスの **`workerStart`** 読み取り専用プロパティは、Service Worker スレッドが既に実行されている場合は {{domxref("FetchEvent")}} を送出する直前、または Service Worker スレッドがまだ実行されていない場合は開始される直前に {{domxref("DOMHighResTimeStamp")}} を返します。リソースが Service Worker によってインターセプトされない場合、このプロパティは常に 0 を返します。

{{AvailableInWorkers}}

## 構文

```
resource.workerStart;
```

### 値

{{domxref("DOMHighResTimeStamp")}}

## 例

次の例では、すべての "`resource`" {{domxref("PerformanceEntry.entryType","type")}} イベントの `*Start` プロパティと `*End` プロパティの値が記録されます。

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the PerformanceEntry *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart",
                "workerStart"];

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
  }
}
```

## 仕様書

| 仕様書                                                                                                                       | ステータス                           | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-workerStart', 'workerStart')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.workerStart")}}
