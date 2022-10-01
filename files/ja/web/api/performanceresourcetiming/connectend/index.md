---
title: PerformanceResourceTiming.connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
---

{{APIRef("Resource Timing API")}}

**`connectEnd`** 読み取り専用プロパティは、ブラウザーがリソースを取得するためにサーバーへの接続を確立し終わった直後に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。タイムスタンプ値には、トランスポート接続を確立するための時間間隔、および SSL ハンドシェイクや SOCKS 認証などの他の時間間隔が含まれます。

{{AvailableInWorkers}}

## 構文

```
resource.connectEnd;
```

### 返値

接続確立後の時間を表す {{domxref("DOMHighResTimeStamp")}}。

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
  // Print timestamps of the *start and *end properties
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

| 仕様書                                                                                                                   | ステータス                           | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-connectEnd', 'connectEnd')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.connectEnd")}}
