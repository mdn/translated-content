---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
---

{{APIRef("Resource Timing API")}}

**`redirectEnd`** 読み取り専用プロパティは、最後のリダイレクトのレスポンスの最後のバイトを受信した直後に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

リソースを取得するとき、複数の HTTP リダイレクトがあり、いずれかのリダイレクトが現在のドキュメントとは異なる起点を持ち、タイミング許可チェックアルゴリズムがリダイレクトされたリソースごとに渡される場合、このプロパティは、最後のリダイレクトのレスポンスの最後のバイトを受信した直後の時間を返します。そうでなければ、ゼロが返されます。

{{AvailableInWorkers}}

## 構文

```
resource.redirectEnd;
```

### 返値

最後のリダイレクトの応答の最後のバイトを受信した直後の {{domxref("DOMHighResTimeStamp","timestamp")}}。

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

| 仕様                                                                                                                         | ステータス                           | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-redirectEnd', 'redirectEnd')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.redirectEnd")}}
