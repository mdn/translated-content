---
title: performance.mark()
slug: Web/API/Performance/mark
---

{{APIRef("User Timing API")}}

**`mark()`** 메소드는 브라우저의 *performance entry buffer*에 주어진 이름으로 {{domxref("DOMHighResTimeStamp","timestamp")}}를 생성합니다. timestamp가 정의된 응용프로그램은 {{domxref("Performance")}} 인터페이스의 `getEntries*()` 메소드들을 통해 불러올 수 있습니다. ({{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}}, {{domxref("Performance.getEntriesByType","getEntriesByType()")}}).

{{AvailableInWorkers}}

`mark`의 {{domxref("PerformanceEntry","performance entry")}}는 다음 속성값을 갖습니다:

- {{domxref("PerformanceEntry.entryType","entryType")}} - "`mark`"로 설정됩니다.
- {{domxref("PerformanceEntry.name","name")}} - mark가 생성될 때 주어진 "`name`"으로 설정됩니다.
- {{domxref("PerformanceEntry.startTime","startTime")}} - `mark()`가 호출되었을 때의 {{domxref("DOMHighResTimeStamp","timestamp")}}가 설정됩니다.
- {{domxref("PerformanceEntry.duration","duration")}} - "`0`"으로 설정됩니다. (*duration*이 없는 mark).

만약 메서드에 주어진 `name`이 이미 {{domxref("PerformanceTiming")}} 인터페이스 상에 존재한다면 {{jsxref("SyntaxError")}}를 throw 합니다.

## Syntax

```js
performance.mark(name);
```

### Arguments

- name
  - : mark의 이름을 나타내는 {{domxref("DOMString")}}.

### Return value

void

## Example

다음 예시는 mark()를 사용하여 {{domxref("PerformanceMark")}}를 생성하고 불러오는 방법을 보여줍니다.

```js
// Create a bunch of marks.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// Get all of the PerformanceMark entries.
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 6

// Get all of the "monkey" PerformanceMark entries.
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries.length);
// 2

// Clear out all of the marks.
performance.clearMarks();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
