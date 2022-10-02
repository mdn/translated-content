---
title: PerformanceEntry.toJSON()
slug: Web/API/PerformanceEntry/toJSON
---

{{APIRef("Performance Timeline API")}}

**`toJSON()`** メソッドは*シリアライザ*で、{{domxref("PerformanceEntry","パフォーマンスエントリ")}}オブジェクトの JSON 表現を返します。

{{AvailableInWorkers}}

## 構文

```
json = perfEntry.toJSON();
```

### 引数

なし

### 返値

- json
  - : {{domxref("PerformanceEntry")}} オブジェクトのシリアル化である JSON オブジェクト

## 例

次の例は、`toJSON()` メソッドの使用方法を示しています。

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

| 仕様書                                                                                                               | ステータス                                               | コメント                      |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-tojson', 'toJSON')}} | {{Spec2('Performance Timeline Level 2')}} | `toJSON()` メソッドの初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry.toJSON")}}
