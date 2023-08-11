---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

**`getMinutes()`** 메서드는 `Date` 인스턴스의 분을 현지 시간 기준으로 반환합니다.

{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}

## 구문

```js
dateObj.getMinutes();
```

### 반환 값

주어진 날짜의 현지 시간 기준 분을 나타내는 0에서 59 사이의 정수.

## 예제

### `getMinutes()` 사용하기

다음 예제는 {{jsxref("Date")}} 객체 `Xmas95`의 분을 사용해 변수 `minutes`에 15를 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
