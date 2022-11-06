---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
---

{{APIRef("Resource Timing API")}}

**`requestStart`** 読み取り専用プロパティは、ブラウザーがサーバ、キャッシュ、またはローカルリソースにリソースのリクエストを開始する直前の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。トランスポート接続が失敗してブラウザーがリクエストを終了すると、返される値は再試行要求の開始になります。

`requestStart` には _end_ プロパティはありません。

{{AvailableInWorkers}}

## 構文

```
resource.requestStart;
```

### 返値

ブラウザーがサーバからのリソースのリクエストを開始する直前の時間を表す {{domxref("DOMHighResTimeStamp")}}

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
                "secureConnectionStart"];

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

| 仕様書                                                                                                                           | ステータス                           | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-requestStart', 'requestStart')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.requestStart")}}
