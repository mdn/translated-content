---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
---

{{APIRef("Performance Timeline API")}}

The **`entryType`** 返回一个代表 performance metric 类型的{{domxref("DOMString")}} , 例如被 performance.mark("begin") 所创建的 entry 的 entryType 就是 "`mark`". 此属性只读。

## 语法

```plain
var type = entry.entryType;
```

### 返回值

返回值取决于 `PerformanceEntry` 对象的 subtype，entryType 的取值会影响{{domxref('PerformanceEntry.name')}} 属性，具体如下表所示。

| Value                 | Subtype                                                                           | Type of name property    | Description of name property                                                                                  |
| --------------------- | --------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `frame`, `navigation` | {{domxref('PerformanceFrameTiming')}}, {{domxref('PerformanceNavigationTiming')}} | {{domxref("URL")}}       | The document's address.                                                                                       |
| `resource`            | {{domxref('PerformanceResourceTiming')}}                                          | {{domxref("URL")}}       | The resolved URL of the requested resource. This value doesn't change even if the request is redirected.      |
| `mark`                | {{domxref('PerformanceMark')}}                                                    | {{domxref("DOMString")}} | The name used when the mark was created by calling {{domxref("Performance.mark","performance.mark()")}}.      |
| `measure`             | {{domxref('PerformanceMeasure')}}                                                 | {{domxref("DOMString")}} | name used when the measure was created by calling {{domxref("Performance.measure","performance.measure()")}}. |
| `paint`               | {{domxref('PerformancePaintTiming')}}                                             | {{domxref("DOMString")}} | Either `'first-paint'` or `'first-contentful-paint'`.                                                         |

## 范例

下面的代码说明了 `entryType` 属性的用法。

```js
function run_PerformanceEntry() {
  // check for feature support before continuing
  if (performance.mark === undefined) {
    console.log("performance.mark not supported");
    return;
  }

  // Create a performance entry named "begin" via the mark() method
  performance.mark("begin");

  // Check the entryType of all the "begin" entries
  var entriesNamedBegin = performance.getEntriesByName("begin");
  //entriesNamedBegin
  //    Array [ PerformanceMark ]
  //entriesNamedBegin[0]
  //    PerformanceMark { name: "begin", entryType: "mark", startTime: 94661370.14, duration: 0 }
  //entriesNamedBegin[0].entryType
  //    "mark"
  //entriesNamedBegin[0].name
  //    "begin"

  for (var i = 0; i < entriesNamedBegin.length; i++) {
    var typeOfEntry = entriesNamedBegin[i].entryType;
    console.log("Entry is type: " + typeOfEntry);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
