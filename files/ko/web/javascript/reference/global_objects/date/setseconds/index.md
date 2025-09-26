---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

`setSeconds()` 메서드는 현지 시간에 따라 지정된 날짜의 초를 설정합니다.

{{InteractiveExample("JavaScript Demo: Date.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## 구문

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### 매개변수

- `secondsValue`
  - : 초를 나타내는 0에서 59 사이의 정수입니다.
- `msValue` {{Optional_inline}}
  - : 선택 과목. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`msValue` 매개 변수를 지정하지 않으면
{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} 메서드에서
반환된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 `setSeconds()`는 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고
시도합니다. 예를 들어, `secondsValue`에 100을 사용하면 {{jsxref("Date")}} 객체에 저장된 분 값이 1 증가하고
초 값은 40이 됩니다.

## 예제

### `setSeconds()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
