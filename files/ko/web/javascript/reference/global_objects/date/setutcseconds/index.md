---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

**setUTCSeconds()** 메서드는 표준시에 따라 지정된 날짜의 초를 설정합니다.

{{InteractiveExample("JavaScript Demo: Date.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

## 구문

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### 매개변수

- `secondsValue`
  - : 초를 나타내는 0에서 59 사이의 정수입니다.
- `msValue`
  - : 선택적 입력 값. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다.

### 반환값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`msValue` 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} 메서드에서 반환 된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 `setUTCSeconds()`가 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어, `secondsValue`에 100을 사용하면 {{jsxref("Date")}} 객체에 저장된 분이 1씩 증가하고 40초 동안 사용됩니다.

## 예제

### `setUTCSeconds()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
