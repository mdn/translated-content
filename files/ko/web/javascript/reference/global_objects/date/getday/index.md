---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

{{JSRef}}

**`getDay()`** 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다. 0은 일요일을 나타냅니다. 현재의 일을 반환하려면 {{jsxref("Date.prototype.getDate()")}}를 사용하세요.

{{EmbedInteractiveExample("pages/js/date-getday.html")}}

## 구문

```js
dateObj.getDay();
```

### 반환 값

현지 시간에 따라, 주어진 날짜의 요일에 해당하는 0 이상 6 이하의 정수. (일요일은 0, 월요일은 1, 화요일은 2, ...)

## 예제

### `getDay()` 사용하기

1995년 12월 25일은 월요일입니다. 따라서 아래 코드의 두 번째 명령문은 `Xmas95`의 값에 기반하여 `weekday`에 1을 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

> **참고:** **참고:** 필요하다면, 요일의 이름(`"월요일"` 등)을 {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}과 `options` 매개변수를 사용해 얻을 수 있습니다. 이 방법을 사용하면 국제화도 더 쉬워집니다.```js
> var options = { weekday: 'long'};
> console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
> // Monday
> console.log(new Intl.DateTimeFormat('ko-KR', options).format(Xmas95));
> // 월요일
>
> ```
>
> ```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
