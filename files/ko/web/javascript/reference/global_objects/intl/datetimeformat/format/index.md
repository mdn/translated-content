---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: 7ca252a5316512d024673614b5c361680c944daf
---

{{JSRef}}

{{jsxref("Intl.DateTimeFormat")}} 인스턴스의 **`format()`** 메서드는 지역과 `Intl.DateTimeFormat` 객체의 형식 옵션에 맞는 날짜를 출력합니다.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.format", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date1 = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options1);
console.log(dateTimeFormat1.format(date1));
// Expected output: "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options1);
console.log(dateTimeFormat2.format(date1));
// Expected output: "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options1);
console.log(dateTimeFormat3.format(date1));
// Expected output: "Friday, June 1, 2012"
```

## 구문

```js-nolint
format(date)
```

### 매개변수

- `date`
  - : 형식을 지정할 날짜.

### 반환 값

지정된 `date`를 나타내는 문자열로, 이 {{jsxref("Intl.DateTimeFormat")}} 객체의 로케일 및 서식 옵션에 따라 형식이 지정됩니다.

> [!NOTE]
> 대부분의 경우 `format()`이 반환하는 서식은 일관적입니다. 그러나 동일한 로케일 내에서도 구현에 따라 출력이 다를 수 있습니다. 출력 변형은 설계에 따른 것이며 사양에서 허용합니다. 또한 사용자의 예상과 다를 수도 있습니다. 예를 들어, 문자열이 줄 바꿈 없는 공백을 사용하거나 양방향 제어 문자로 둘러싸여 있을 수 있습니다. `format()`의 결과를 하드코딩된 상수와 비교해서는 안 됩니다.

## 예제

### format 사용하기

단일 날짜의 서식을 지정하려면 `format` 접근자 함수를 사용합니다.
아래는 세르비아의 경우입니다.

```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// "недеља, 7. април 2013."
```

### map과 함께 format 사용하기

배열의 모든 날짜에 서식을 지정하려면 `format` 접근자 함수를 사용합니다.
이 함수는 함수를 가져온 {{jsxref("Intl.DateTimeFormat")}}에 바인딩되어 있으므로
{{jsxref("Array.prototype.map()")}}에 직접
전달할 수 있습니다.

```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// "setembro de 2012; dezembro de 2012; abril de 2012"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
