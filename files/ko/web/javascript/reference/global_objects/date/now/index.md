---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
---

{{JSRef}}

**`Date.now()`** 메소드는 UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초를 반환합니다.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## 문법

```js
var timeInMs = Date.now();
```

### 반환 값

1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초를 나타내는 **숫자**입니다.

## 설명

now() 메소드는 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초를 {{jsxref("Number")}} 형으로 반환합니다.

now()는 {{jsxref("Date")}}의 정적 메소드이기 때문에, 항상 `Date.now()`처럼 사용하셔야 합니다.

## Polyfill

이 메소드는 ECMA-262 5판에서 표준화되었습니다. 아직 이 메소드를 지원하도록 갱신되지 않은 엔진들은 이 메소드의 미지원에 대한 차선책으로 다음 코드를 활용하실 수 있습니다.

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## 예시

### 감소된 시간 정밀도

타이밍 공격 및 핑거 프린팅에 대한 보호를 제공하기 위해 `Date.now ()`의 정밀도는 브라우저 설정에 따라 반올림될 수 있습니다.
Firefox에서는 `privacy.reduceTimerPrecision` 기본 설정이 기본적으로 활성화되어 있으며 Firefox 59에서는 기본값이 20µs입니다. Firefox 60에서는 2ms가 됩니다.

```js
// Firefox 60에서 시간 정밀도 (2ms) 감소
Date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// `privacy.resistFingerprinting`을 활성화하여 시간 정밀도 감소
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox에서는 `privacy.resistFingerprinting`을 활성화할 수도 있습니다. 정밀도는 100ms 또는 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 중 더 큰 값이 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고하세요

- {{domxref("Performance.now()")}} — provides timestamps with sub-millisecond resolution for use in measuring web page performance
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
