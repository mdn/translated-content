---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef}}

**`getHours()`** 메서드는 주어진 날짜의 현지 시간 기준 시를 반환합니다.

{{EmbedInteractiveExample("pages/js/date-gethours.html")}}

## 구문

```js
dateObj.getHours();
```

### 반환 값

주어진 날짜의 현지 시간 기준 시를 나타내는 0에서 23 사이의 정수.

## 예제

### `getHours()` 사용하기

아래의 두 번째 명령문은 {{jsxref("Date")}} 객체 `Xmas95` 날짜의 시를 `hours` 변수에 할당합니다.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
