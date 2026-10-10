---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceEntry`** 객체는 브라우저의 성능 타임라인을 구성하는 하나의 성능 지표를 캡슐화합니다.

Performance API는 `PerformanceEntry`를 특수화한 하위 클래스 형태로 내장 지표를 제공합니다. 여기에는 리소스 로딩, 이벤트 타이밍 등에 대한 항목이 포함됩니다.

또한 애플리케이션의 특정 지점에서 {{domxref("Performance.mark()")}}나 {{domxref("Performance.measure()")}} 메서드를 호출하여 성능 항목을 직접 생성할 수도 있습니다. 이를 통해 여러분만의 지표를 성능 타임라인에 추가할 수 있습니다.

`PerformanceEntry` 인스턴스는 항상 다음 하위 클래스 중 하나에 속합니다.

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongAnimationFrameTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceScriptTiming")}}
- {{domxref("PerformanceServerTiming")}}
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## 인스턴스 속성

- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : 성능 항목의 이름을 나타내는 문자열입니다. 값은 하위 유형에 따라 다릅니다.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : 성능 지표의 종류를 나타내는 문자열입니다. 예를 들어 {{domxref("PerformanceMark")}}인 경우 `"mark"`가 됩니다.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : 성능 지표의 시작 시간을 나타내는 {{domxref("DOMHighResTimeStamp")}}입니다.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : 성능 항목의 지속 시간을 나타내는 {{domxref("DOMHighResTimeStamp")}}입니다.

## 인스턴스 메서드

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : `PerformanceEntry` 객체의 JSON 표현을 반환합니다.

## 예제

### 성능 항목 다루기

다음 예제는 {{domxref("PerformanceMark")}}와 {{domxref("PerformanceMeasure")}} 유형의 `PerformanceEntry` 객체를 생성합니다.
`PerformanceMark`와 `PerformanceMeasure` 하위 클래스는 `PerformanceEntry`로부터 `duration`, `entryType`, `name`, `startTime` 속성을 상속받아, 각 하위 클래스에 맞는 값으로 설정합니다.

```js
// 로그인이 시작되는 코드 위치에 배치
performance.mark("login-started");

// 로그인이 완료되는 코드 위치에 배치
performance.mark("login-finished");

// 로그인 소요 시간 측정
performance.measure("login-duration", "login-started", "login-finished");

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
