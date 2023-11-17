---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

**`getMonth()`** 메서드는 `Date` 객체의 월 값을 현지 시간에 맞춰 반환합니다. 월은 0부터 시작합니다.

{{EmbedInteractiveExample("pages/js/date-getmonth.html")}}

## 구문

```js
dateObj.getMonth();
```

### 반환 값

현지 시간 기준 월을 나타내는 0에서 11 사이의 정수. 0은 1월, 1은 2월... 을 나타냅니다.

## 예제

### `getMonth()` 사용하기

다음 예제는 {{jsxref("Date")}} 객체 `Xmas95`의 값을 사용해 변수 `month`에 11을 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

> **참고:** **참고:** 필요한 경우 {{jsxref("DateTimeFormat", "Intl.DateTimeFormat()")}}과 `options` 매개변수를 사용해 해당하는 달의 이름(`"January"` 등)을 가져올 수 있습니다. 이 방법을 사용하면 국제화도 보다 편리합니다.

```js
var options = { month: "long" };
console.log(new Intl.DateTimeFormat("ko-KR", options).format(Xmas95));
// 12월
console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
// December
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
