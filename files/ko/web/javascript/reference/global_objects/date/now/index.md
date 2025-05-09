---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

**`Date.now()`** 정적 메소드는, UTC 기준으로 1970년 1월 1일 0시 0분 0초인 [epoch](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)부터 현재까지 경과된 밀리초를 반환합니다.

{{InteractiveExample("JavaScript Demo: Date.now()")}}

```js interactive-example
// This example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);
```

## 구문

```js-nolint
Date.now()
```

### 매개변수

없음

### 반환 값

현재 시각을 밀리초 [타임스탬프](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)로 나타내는 숫자입니다.

## 설명

### 감소한 시간 정밀도

타이밍 공격 및 [핑거프린팅](/ko/docs/Glossary/Fingerprinting)에 대한 보호를 제공하기 위해, `Date.now()`의 정밀도는 브라우저 설정에 따라 반올림될 수 있습니다. Firefox에서는 `privacy.reduceTimerPrecision` 설정이 기본적으로 활성화되어 있으며, 2ms로 설정되어 있습니다. `privacy.resistFingerprinting`을 활성화할 수도 있는데, 이 경우 정밀도는 100ms 또는 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 값 중 더 큰 값이 됩니다.

예를 들어, `privacy.resistFingerprinting`이 활성화된 경우, 시간 정밀도가 감소하며 `Date.now()`의 결과는 항상 2의 배수 또는 100의 배수(또는 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`)가 됩니다.

```js
// Firefox 60에서 감소한 시간 정밀도 (2ms)
Date.now();
// 값은 아마도 아래와 같습니다.
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting`를 활성화해 감소한 시간 정밀도
Date.now();
// 값은 아마도 아래와 같습니다.
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 예제

### 경과시간 측정

`Date.now()`를 사용하면 현재 시간을 밀리초 단위로 구할 수 있으며, 그런 다음 이전 시간을 빼면 두 호출 사이에 경과한 시간을 알아낼 수 있습니다.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

더 복잡한 시나리오의 경우 대신 [퍼포먼스 API](/ko/docs/Web/API/Performance_API/High_precision_timing)를 사용할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Date.now` 폴리필](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
