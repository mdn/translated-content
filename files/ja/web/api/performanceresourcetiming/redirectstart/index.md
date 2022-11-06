---
title: PerformanceResourceTiming.redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
---

{{APIRef("Resource Timing API")}}

**`redirectStart`** 読み取り専用プロパティは、リダイレクトを開始するフェッチの開始時間を表す {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

リソースの取得時に HTTP リダイレクトがあり、いずれかのリダイレクトが現在の文書と同じ起点からのものではないが、タイミング許可チェックアルゴリズムがリダイレクトされた各リソースに合格した場合、このプロパティはリダイレクトを開始するフェッチの開始時間を返します。そうでなければ、ゼロが返されます。

{{AvailableInWorkers}}

## 構文

```
resource.redirectStart;
```

### 返値

リダイレクトを開始するフェッチの開始時間を表す {{domxref("DOMHighResTimeStamp","timestamp")}}。

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
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-redirectStart', 'redirectStart')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.redirectStart")}}
