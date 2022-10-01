---
title: PerformanceEntry.name
slug: Web/API/PerformanceEntry/name
---

{{APIRef("Performance Timeline API")}}

{{domxref("PerformanceEntry")}} インターフェイスの **`name`** プロパティは、{{domxref("PerformanceEntry.entryType")}} プロパティによって返される値をさらに指定する値を返します。このプロパティは読み取り専用です。

{{AvailableInWorkers}}

## 構文

```
var name = entry.name;
```

### 返値

以下の表に示すように、返値は `PerformanceEntry` オブジェクトのサブタイプと {{domxref("PerformanceEntry.entryType")}} の値によって異なります。

| 値                               | サブタイプ                                                                                                 | entryType の値        | 説明                                                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxref("URL")}}         | {{domxref('PerformanceFrameTiming')}}, {{domxref('PerformanceNavigationTiming')}} | `frame`, `navigation` | ドキュメントのアドレス                                                                                                               |
| {{domxref("URL")}}         | {{domxref('PerformanceResourceTiming')}}                                                       | `resource`            | リクエストされたリソースの解決された URL。リクエストがリダイレクトされても、この値は変わりません。                                   |
| {{domxref("DOMString")}} | {{domxref('PerformanceMark')}}                                                                   | `mark`                | {{domxref("Performance.mark","performance.mark()")}} を呼び出してマークを作成したときに使用された名前。              |
| {{domxref("DOMString")}} | {{domxref('PerformanceMeasure')}}                                                               | `measure`             | メジャーが {{domxref("Performance.measure","performance.measure()")}} を呼び出して作成されたときに使用された名前。 |
| {{domxref("DOMString")}} | {{domxref('PerformancePaintTiming')}}                                                           | `paint`               | `'first-paint'` もしくは `'first-contentful-paint'` のいずれか                                                                       |

## 例

次の例は、`name` プロパティの使い方を示しています。

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

| 仕様書                                                                                                       | ステータス                                               | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-name', 'name')}} | {{Spec2('Performance Timeline Level 2')}} |          |
| {{SpecName('Performance Timeline', '#dom-performanceentry-name', 'name')}}         | {{Spec2('Performance Timeline')}}             | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry.name")}}
