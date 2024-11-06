---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

**`getSeconds()`** 메서드는 `Date` 객체의 초 값을 현지 시간에 맞춰 반환합니다.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## 구문

```js
dateObj.getSeconds();
```

### 반환 값

현지 시간 기준 초를 나타내는 0에서 59 사이의 정수.

## 예제

### `getSeconds()` 사용하기

다음 예제는 {{jsxref("Date")}} 객체 `Xmas95`의 값을 사용해 변수 `seconds`에 30을 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
