---
title: PerformanceEntry.name
slug: Web/API/PerformanceEntry/name
---

{{APIRef("Performance Timeline API")}}

**`name`** 是 {{domxref("PerformanceEntry")}} 接口的属性，此属性的返回值是 {{domxref("PerformanceEntry.entryType")}} 的返回值的一个补充，例如 entry.entryType="navigation",entry.name="document". 这是一个只读属性。

## Syntax

```plain
var name = entry.name;
```

### 返回值

返回值取决于`PerformanceEntry` 对象的 subtype 和{{domxref("PerformanceEntry.entryType")}}的值，如下表所示。

| Value                    | Subtype                                                                           | entryType values      | Description                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| {{domxref("URL")}}       | {{domxref('PerformanceFrameTiming')}}, {{domxref('PerformanceNavigationTiming')}} | `frame`, `navigation` | The document's address.                                                                                       |
| {{domxref("URL")}}       | {{domxref('PerformanceResourceTiming')}}                                          | `resource`            | The resolved URL of the requested resource. This value doesn't change even if the request is redirected.      |
| {{domxref("DOMString")}} | {{domxref('PerformanceMark')}}                                                    | `mark`                | The name used when the mark was created by calling {{domxref("Performance.mark","performance.mark()")}}.      |
| {{domxref("DOMString")}} | {{domxref('PerformanceMeasure')}}                                                 | `measure`             | name used when the measure was created by calling {{domxref("Performance.measure","performance.measure()")}}. |
| {{domxref("DOMString")}} | {{domxref('PerformancePaintTiming')}}                                             | `paint`               | Either `'first-paint'` or `'first-contentful-paint'`.                                                         |

## 用例

下面的例子是 `name` 属性的用法。

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
  for (var i = 0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
//
//例如上面 p 中一个 entry p[0] = {
//  "name": "document",
//  "entryType": "navigation",
//  "startTime": 0,
//  "duration": 3611.26,
//  "initiatorType": "navigation",
//  "nextHopProtocol": "http/1.1",
//  "workerStart": 0,
//  "redirectStart": 0,
//  "redirectEnd": 0,
//  "fetchStart": 0.32,
//  "domainLookupStart": 17.64,
//  "domainLookupEnd": 17.78,
//  "connectStart": 17.86,
//  "connectEnd": 18.1,
//  "secureConnectionStart": 0,
//  "requestStart": 18.3,
//  "responseStart": 294.06,
//  "responseEnd": 1610.3600000000001,
//  "transferSize": 97683,
//  "encodedBodySize": 97112,
//  "decodedBodySize": 97112,
//  "unloadEventStart": 1614.8372840721554,
//  "unloadEventEnd": 1619.1600105887128,
//  "domInteractive": 3110.767514889843,
//  "domContentLoadedEventStart": 3125.859851800787,
//  "domContentLoadedEventEnd": 3438.5779820633365,
//  "domComplete": 3609.999662153349,
//  "loadEventStart": 3610.017623620869,
//  "loadEventEnd": 3611.2672285754975,
//  "type": "reload",
//  "redirectCount": 0
//}

//下面的函数 check_PerformanceEntry 的参数 obj 就是上面的 p[0]
//
function check_PerformanceEntry(obj) {
  var properties = ["name", "entryType", "startTime", "duration"];
  var methods = ["toJSON"];

  for (var i = 0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in obj;
    if (supported) log("..." + properties[i] + " = " + obj[properties[i]]);
    else log("..." + properties[i] + " = Not supported");
  }
  for (var i = 0; i < methods.length; i++) {
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
