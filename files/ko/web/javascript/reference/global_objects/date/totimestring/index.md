---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

{{jsxref("Date")}} 인스턴스의 **`toTimeString()`** 메서드는 현지 시간대로 해석된 날짜의 시간 부분을 표현하는 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Date.toTimeString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 구문

```js-nolint
toTimeString()
```

### 매개 변수

없음.

### 반환 값

주어진 날짜의 시간 부분을 표현하는 문자열입니다 (형식에 대해서는 설명을 참고하시기 바랍니다). 날짜가 [유효하지 않으면](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) `"Invalid Date"`을 반환합니다.

## 설명

{{jsxref("Date")}} 인스턴스는 특정 시점을 참조합니다. `toTimeString()`은 날짜를 현지 시간대로 해석하고 시간 부분의 형식을 영어로 지정합니다. 항상 `hh:mm:ss GMT±xxxx (TZ)` 형식을 사용합니다.

| 형식 문자열 | 설명                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------- |
| `hh`        | 시간, 필요 시 0으로 시작하는 2자리 숫자                                                             |
| `mm`        | 분, 필요 시 0으로 시작하는 2자리 숫자                                                               |
| `ss`        | 초, 필요 시 0으로 시작하는 2자리 숫자                                                               |
| `±xxxx`     | 현지 시간대의 오프셋. 시간을 나타내는 2자리 숫자와 분을 나타내는 2자리 숫자 (e.g. `-0500`, `+0800`) |
| `TZ`        | 시간대의 이름(e.g. `PDT`, `PST`)                                                                    |

예: "04:42:04 GMT+0000 (협정 세계시)".

- 날짜 부분만 가져오려면 {{jsxref("Date/toDateString", "toDateString()")}}를 사용합니다.
- 날짜와 시간을 모두 가져오려면 {{jsxref("Date/toString", "toString()")}}를 사용합니다.
- 날짜를 현지 표준 시간대 대신 UTC로 해석하려면 {{jsxref("Date/toUTCString", "toUTCString()")}}를 사용합니다.
- 보다 사용자 친화적인 형식(예: 현지화)으로 날짜 형식을 지정하려면 {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}를 사용합니다.

## 예제

### toTimeString() 사용하기

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
