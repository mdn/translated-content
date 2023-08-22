---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef}}

**`getDate()`** 메서드는 주어진 날짜의 현지 시간 기준 일을 반환합니다.

{{EmbedInteractiveExample("pages/js/date-getdate.html")}}

## 구문

```js
dateObj.getDate();
```

### 반환 값

현지 시간에 따라, 주어진 날짜의 일에 해당하는 1 이상 31 이하의 정수.

## 예제

### `getDate()` 사용하기

아래 코드의 두 번째 명령문은 `Xmas95`의 값에 기반하여 `day`에 2를 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();

console.log(day); // 25
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
