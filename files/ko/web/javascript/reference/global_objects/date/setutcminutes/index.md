---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---

{{JSRef}}

**`setUTCMinutes()`** 메서드는 표준시에 따라 지정된 날짜의 분을 설정합니다.

{{InteractiveExample("JavaScript Demo: Date.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
```

## 구문

```js-nolint
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### 매개변수

- `minutesValue`
  - : 분을 나타내는 0에서 59 사이의 정수입니다.
- `secondsValue`
  - : 선택적 입력 값. 초를 나타내는 0에서 59 사이의 정수입니다. `secondsValue` 매개 변수를 지정하면 `minutesValue`도 지정해야합니다.
- `msValue`
  - : 선택적 입력 값. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. `msValue` 매개 변수를 지정하는 경우 `minutesValue` 및 `secondsValue`도 지정해야합니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`secondsValue` 및 `msValue` 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} 및 {{jsxref("Date.prototype.getUTCMilliseconds","getUTCMilliseconds()")}} 메소드가 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 `setUTCMinutes()`는 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 `secondsValue`에 100을 사용하면 분은 1 (`minutesValue + 1`)만큼 증가하고 40은 초 단위로 사용됩니다.

## 예제

### `setUTCMinutes()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
