---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef}}

**`getFullYear()`** 메서드는 주어진 날짜의 현지 시간 기준 연도를 반환합니다.

{{jsxref("Date.prototype.getYear()", "getYear()")}} 메서드 대신 이 메서드를 사용하세요.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html")}}

## 구문

```js
dateObj.getFullYear();
```

### 반환 값

현지 시간에 따라, 주어진 날짜의 연도에 해당하는 숫자.

## 설명

`getFullYear()`가 반환하는 값은 절댓값입니다. `getFullYear()`는 1000년과 9999년 사이의, 1995년과 같은 날짜에 대해서는 네 자리 숫자를 반환합니다. 이 메서드를 사용해야 2000년 이후의 날짜에 대해서도 호환을 유지할 수 있습니다.

## 예제

### `getFullYear()` 사용하기

다음 예제에서는 현재 연도의 네 자릿값을 변수 `year`에 할당합니다.

```js
var today = new Date();
var year = today.getFullYear();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
