---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 57970dc6d2221079f08b71a36df1a9f0305da4ed
---

{{JSRef}}

{{jsxref("Date")}} 인스턴스의 **`toDateString()`** 메서드는 주어진 날짜를 현지 시간대로 해석하고 그 중 날짜 부분만 표시하는 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Date.toDateString()")}}

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```

## 구문

```js-nolint
toDateString()
```

### 매개 변수

없음.

### 반환 값

주어진 날짜의 날짜 부분을 나타내는 문자열입니다(형식에 대해선 설명 참조). 날짜가 [유효하지 않은](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) 경우 `"Invalid Date"`를 반환합니다.

## 설명

{{jsxref("Date")}} 인스턴스는 특정 시점을 참조합니다. `toDateString()`은 날짜를 현지 시간대로 해석하고 날짜 부분을 영어로 형식에 맞춰 출력합니다. 이 함수는 항상 공백으로 구분된 다음 형식을 사용합니다.

1. 요일 이름의 처음 세 글자
2. 월 이름의 첫 세 글자
3. 필요한 경우 왼쪽에 0을 추가한 두 자리 숫자의 월별 요일
4. 4자리 연도(최소), 필요한 경우 왼쪽에 0을 추가합니다. 음수 기호를 사용할 수 있습니다.

예를 들어 "Thu Jan 01 1970"처럼 말이죠.

- 시간 부분만 가져오려면 {{jsxref("Date/toTimeString", "toTimeString()")}}을 사용하시기 바랍니다.
- 날짜와 시간을 모두 가져오려면 {{jsxref("Date/toString", "toString()")}}를 사용하시기 바랍니다.
- 날짜를 현지 표준 시간대 대신 UTC로 해석하려면 {{jsxref("Date/toUTCString", "toUTCString()")}}를 사용하시기 바랍니다.
- 보다 사용자 친화적인 형식(예: 현지화)으로 날짜 형식을 맞추려면 {{jsxref("Date/toUTCString", "toUTCString()")}}를 사용합니다.

## 예제

### toDateString() 사용하기

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
