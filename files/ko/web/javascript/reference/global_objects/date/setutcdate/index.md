---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

**`setUTCDate()`** 메서드는 UTC 시간을 기준으로 지정된 {{jsxref("Date")}} 인스턴스의 날짜를 변경합니다.

표준시 대신 현지 시간을 기준으로 하는 {{jsxref("Date")}} 인스턴스의 날짜를 변경하려면 {{jsxref("Date.prototype.setDate", "setDate()")}} 메소드를 사용하세요.

{{InteractiveExample("JavaScript Demo: Date.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## 구문

```js-nolint
setUTCDate(dayValue)
```

### 매개변수

- `dayValue`
  - : 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`dayValue`가 해당 월의 날짜 값 범위를 벗어나면 `setDate()`는 그에 맞춰 {{jsxref("Date")}} 객체를 업데이트합니다.

예를 들어 `dayValue`에 0을 입력하면 날짜는 전월 말일로 설정됩니다. `dayValue`에 40을 사용하고 {{jsxref("Date")}} 객체에 저장된 월이 6월이면 날짜는 10으로 변경되고 월은 7월로 증가합니다.

`dayValue`에 음수를 입력하면 전월 말일부터 역순으로 날짜가 설정됩니다. -1을 사용하면 날짜가 이전 달의 마지막 날 1일로 설정됩니다.

## 예제

### `setUTCDate()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
