---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
---

{{APIRef("Performance Timeline API")}}

**`PerformanceEntry`** 객체는 _performance timeline_ 상의 단일 성능 수치를 캡슐화 합니다. *performance entry*는 응용프로그램의 특정 지점에서 performance *{{domxref("PerformanceMark","mark")}}*나 *{{domxref("PerformanceMeasure","measure")}}*를 생성함으로써 (예를 들면 {{domxref("Performance.mark","mark()")}}를 호출하는 방법으로) 직접적으로 만들어질 수 있습니다. 또는 (이미지와 같은) 리소스를 로딩하는 등의 간접적인 방법으로 생성되기도 합니다.

`PerformanceEntry` 인스턴스는 항상 다음 서브타입들 중 하나를 따릅니다:

- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceFrameTiming")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformancePaintTiming")}}

{{AvailableInWorkers}}

## Properties

- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : A value that further specifies the value returned by the {{domxref("PerformanceEntry.entryType")}} property. The value of both depends on the subtype. See property page for valid values.
- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}} representing the type of performance metric such as, for example, "`mark`". See property page for valid values.
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the starting time for the performance metric.
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value of the duration of the performance event.

## Methods

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceEntry` object.

## Example

The following example checks all `PerformanceEntry` properties to see if the browser supports them and if so, write their values to the console.

```js
function print_PerformanceEntries() {
  // Use getEntries() to get a list of all performance entries
  var p = performance.getEntries();
  for (var i = 0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  var properties = ["name", "entryType", "startTime", "duration"];

  for (var i = 0; i < properties.length; i++) {
    // Check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " is NOT supported");
    }
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
