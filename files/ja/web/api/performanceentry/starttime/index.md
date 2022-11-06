---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
---

{{APIRef("Performance Timeline API")}}

**`startTime`** プロパティは、{{domxref("PerformanceEntry","performance entry")}} のうち最初に記録された {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

{{AvailableInWorkers}}

このプロパティによって返される値は、パフォーマンスエントリの{{domxref("PerformanceEntry.entryType","タイプ")}}によって異なります。

- "`frame`" - フレームが開始されたときに{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`mark`" - マークが{{domxref("Performance.mark","performance.mark()")}} の呼び出しによって作成された場合は、{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`measure`" - メジャーが　{{domxref("Performance.measure","performance.measure()")}} の呼び出しによって作成された場合、{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`navigation`" - "`0`" の値を持つ{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します
- "`resource`" - ブラウザー{{domxref( "PerformanceEntry.fetchStart","リソースの取得")}}の直前に{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します

このプロパティは {{readonlyInline}} です。

## 構文

```
entry.startTime;
```

### 返値

{{domxref("PerformanceEntry","パフォーマンスエントリ")}}が作成されたときの最初のタイムスタンプを表す {{domxref("DOMHighResTimeStamp")}}。

> **メモ:** パフォーマンスエントリが "`resource`" の {{domxref("PerformanceEntry.entryType","entryType")}} を持つ場合 (つまり、エントリが{{domxref("PerformanceResourceTiming")}} オブジェクトである場合)、このプロパティは{{domxref("PerformanceEntry.fetchStart")}} {{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します。

## 例

次の例は、`startTime` プロパティの使用方法を示しています。

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

| 仕様書                                                                                                                       | ステータス                                               | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-starttime', 'startTime')}} | {{Spec2('Performance Timeline Level 2')}} |          |
| {{SpecName('Performance Timeline', '#dom-performanceentry-starttime', 'startTime')}}             | {{Spec2('Performance Timeline')}}             | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry.startTime")}}
