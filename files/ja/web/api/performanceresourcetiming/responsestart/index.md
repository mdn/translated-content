---
title: PerformanceResourceTiming.responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
---

{{APIRef("Resource Timing API")}}

**`responseStart`** 読み取り専用プロパティは、ブラウザーがサーバ、キャッシュ、またはローカルリソースからレスポンスの最初のバイトを受信した直後に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

{{AvailableInWorkers}}

## 構文

```
resource.responseStart;
```

### 返値

ブラウザーがサーバからのレスポンスの最初のバイトを受信した直後の {{domxref("DOMHighResTimeStamp")}}。

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
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-responseStart', 'responseStart')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.responseStart")}}
