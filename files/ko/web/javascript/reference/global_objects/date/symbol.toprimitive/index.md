---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
original_slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---

{{JSRef}}

**`[@@toPrimitive]()`** 메서드는 `Date` 개체를 원시 값으로 변환합니다.

{{InteractiveExample("JavaScript Demo: Date.prototype[Symbol.toPrimitive]")}}

```js interactive-example
// Depending on timezone, your results will vary
const date = new Date("20 December 2019 14:48");

console.log(date[Symbol.toPrimitive]("string"));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]("number"));
// Expected output: 1576833480000
```

## 구문

```js-nolint
Date()[Symbol.toPrimitive](hint)
```

### 반환 값

{{jsxref("Date")}} 객체로부터 받은 원시 값. 인수에 따라서, 메서드는 문자열이나 숫자를 반환할 수 있습니다.

## 설명

{{jsxref("Date")}} 객체의 `[@@toPrimitive]()` 메서드는 숫자 형식이나 문자열 형식인 원시 값을 반환합니다.

`hint`가 `string`이나 `default`이면, `[@@toPrimitive]()`는 {{jsxref("Object.prototype.toString()", "toString")}} 메서드를 호출하려고 합니다. `toString` 속성이 존재하지 않다면, {{jsxref("Object.prototype.valueOf()", "valueOf")}} 메서드를 호출하려 할 것이고 `valueOf`이 존재하지 않다면, `[@@toPrimitive]()`는 {{jsxref("TypeError")}}를 발생시킵니다.

`hint`가 `number`이면, `[@@toPrimitive]()`는 한 번 `valueOf`를 호출하려고 시도합니다, 그리고 실패한다면, `toString`를 호출합니다.

JavaScript는 `[@@toPrimitive]()` 메서드를 원시 값으로 변환하기 위해 호출합니다. 당신은 `[@@toPrimitive]()` 메서드를 호출할 필요가 거의 없습니다. JavaScript가 원시 값이 예상되는 객체를 발견할 때 자동으로 호출합니다.

## 예제

### 원시 날짜 반환

```js
const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("string");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("number");
// Returns "1590757517834"

testDate[Symbol.toPrimitive]("default");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Symbol.toPrimitive")}}
