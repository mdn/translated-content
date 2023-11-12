---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef}}

**`toString()`** 메서드는 {{jsxref("Date")}} 객체의 시간을 문자열로 반환합니다.

{{EmbedInteractiveExample("pages/js/date-tostring.html")}}

## 구문

```js
dateObj.toString();
```

### 반환 값

주어진 날짜를 나타내는 문자열.

## 설명

{{jsxref("Date")}} 객체는 `toString()` 메서드를 {{jsxref("Object.prototype")}}이 아닌 {{jsxref("Date.prototype")}}에서 상속받습니다. `Date.prototype.toString()`의 반환값은 ECMA-262에 명시되어있으며 다음과 같이 요약할 수 있습니다.

- 요일: 세 글자 영어 요일명. 예: "Sat"
- 공백
- 월: 세 글자 영어 월 이름. 예: "Sep"
- 공백
- 일: 두 글자 숫자. 예: "01"
- 공백
- 연: 네 글자 숫자. 예: "2018"
- 공백
- 시: 두 글자 숫자. 예: "14"
- 콜론
- 분: 두 글자 숫자. 예: "53"
- 콜론
- 초: 두 글자 숫자. 예: "26"
- 공백
- 문자열 "GMT"
- 시간대 차이의 부호.

  - 0 이상일 경우 "+"
  - 0 미만일 경우 "-"

- 두 글자 숫자로 표현한 시 차이. 예: "14"
- 두 글자 숫자로 표현한 분 차이. 예: "00"
- 선택사항: 다음으로 구성한 시간대의 이름.

  - 공백
  - 여는 소괄호
  - 구현마다 다를 수 있는 시간대 이름. 약어와 전체 이름 둘 다 가능. 예: "Korea Standard Time", "한국 표준시" 또는 "KST"
  - 닫는 소괄호

예: "Sat Sep 01 2018 14:53:26 GMT+0900 (KST)"

ECMAScript 2018(제9판) 전까지 `toString()`의 반환 형식은 구현에 따라 다를 수 있었습니다. 따라서 특정 형식에 의존하지 않아야 합니다.

`toString()` 메서드는 날짜를 문자열로 표현해야 할 때 자동으로 쓰입니다. `console.log(new Date())`와 `const today = 'Today is ' + new Date()` 등의 경우를 예로 들 수 있습니다.

`toString()`은 제네릭 메서드로 `this`의 값이 {{jsxref("Date")}}일 필요는 없습니다. 그러나 내부적으로 `[[TimeValue]]` 속성이 필요한데, 이는 JavaScript로는 설정할 수 없어 결국 사용이 `Date` 인스턴스로 제한됩니다. `Date` 외의 다른 객체에서 호출하면 {{jsxref("TypeError")}}가 발생합니다.

## 예제

### `toString()` 사용

```js
var x = new Date();
var myVar = x.toString(); // assigns a string value to myVar in the same format as:
// Mon Sep 08 1998 14:36:22 GMT+0900 (KST)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
