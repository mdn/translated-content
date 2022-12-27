---
title: PerformanceResourceTiming.secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
---

{{APIRef("Resource Timing API")}}

**`secureConnectionStart`** 読み取り専用プロパティは、現在の接続を保護するためにブラウザーがハンドシェイクプロセスを開始する直前に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。安全な接続が使用されていない場合、このプロパティはゼロを返します。

{{AvailableInWorkers}}

## 構文

```
resource.secureConnectionStart;
```

### 返値

セキュリティで保護された接続を介してリソースが取得された場合、現在の接続を保護するためにブラウザーがハンドシェイクプロセスを開始する直前に {{domxref("DOMHighResTimeStamp")}} が返されます。安全な接続が使用されていない場合、このプロパティはゼロを返します。

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

| 仕様書                                                                                                                                                   | ステータス                           | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-secureConnectionStart', 'secureConnectionStart')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.secureConnectionStart")}}
