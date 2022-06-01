---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - Class
  - JavaScript
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number
---

{{JSRef}}**`Number`** 는 `37`이나 `-9.25`와 같은 숫자를 표현하고 다룰 때 사용하는 [원시 래퍼 객체](/ko/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)입니다.

`Number` 생성자는 숫자를 다루기 위해 상수와 메소드를 가지고 있습니다. 다른 타입의 값은 `Number()` 함수를 사용하여 숫자로 바꿀 수 있습니다.

JavaScript `Number` 타입은 Java 혹은 C#의 `double` 타입처럼 [IEEE 754 64비트 바이너리 배정 밀도](https://en.wikipedia.org/wiki/Floating-point_arithmetic) 값입니다. 즉, 분수 값을 나타낼 수 있지만 저장할 수 있는 값에는 몇 가지 제한이 있습니다. `Number`는 소수점 이하 17자리 정도만 유지하며 산술은 [반올림](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding)의 대상이 됩니다. `Number`가 가질 수 있는 가장 큰 값은 1.8E308 입니다. 그보다 더 큰 값은 특별한 `Number` 상수인 {{jsxref("Infinity")}}으로 대체됩니다.

JavaScript 코드에서 `37`과 같은 숫자 리터럴은 정수가 아니라 부동 소수점 값입니다. 일상적으로 흔히 사용되는 별도의 정수형은 없습니다. (JavaScript에는 이제 {{jsxref("BigInt")}} 타입이 있지만 일상적인 사용을 위해 Number를 대체하도록 설계되지 않았습니다. `37`은 여전히 `Number`일 뿐, BigInt가 아닙니다.)

`Number`는 `0b101`, `0o13`, `0x0A`와 같은 리터럴 형식으로 표현될 수도 있습니다. 수에 대해서 더 알아보고 싶으면 [어휘 문법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals)를 참조하세요.

## 설명

`Number(value)`처럼 함수로 사용하면 문자열이나 다른 값을 Number 타입으로 변환합니다. 만약 만약 인수를 숫자로 변환할 수 없으면 {{jsxref("NaN")}}을 리턴합니다.

### 리터럴 구문

```js
123; // 백 이십 삼
123.0; // 동일
123 === 123.0; // 참
```

### 함수 구문

```js
Number('123'); // 숫자 123을 반환
Number('123') === 123; // 참

Number('unicorn'); // NaN
Number(undefined); // NaN
```

## Constructor

- [`Number()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  - : 새로운 `Number` 값을 생성합니다.

## Static properties

- {{jsxref("Number.EPSILON")}}
  - : 두 개의 표현 가능한 숫자 사이의 최소 간격.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript에서 안전한 최대 정수. (`2^53 - 1`)
- {{jsxref("Number.MAX_VALUE")}}
  - : 표현 가능한 가장 큰 양수.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript에서 안전한 최소 정수. (`-(2^53 - 1)`).
- {{jsxref("Number.MIN_VALUE")}}
  - : T표현 가능한 가장 작은 양수. 즉, 0보다 크지만 0에 가장 가까운 양수.
- {{jsxref("Number.NaN")}}
  - : "**N**ot **a** **N**umber"(숫자가 아님)을 나타내는 특별한 값.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 음의 무한대를 나타내는 특수한 값. 오버플로우 시 반환됩니다.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 양의 무한대를 나타내는 특수한 값. 오버플로우 시 반환됩니다.
- {{jsxref("Number", "Number.prototype")}}
  - : `Number` 객체에 속성을 추가할 수 있습니다.

## 정적 메소드

- {{jsxref("Number.isNaN()")}}
  - : 주어진 값이 `NaN`인지 확인합니다.
- {{jsxref("Number.isFinite()")}}
  - : 주어진 값이 유한수 인지 확인합니다.
- {{jsxref("Number.isInteger()")}}
  - : 주어진 값이 정수인지 확인합니다.
- {{jsxref("Number.isSafeInteger()")}}
  - : 주어진 값이 안전한 정수(`-(2^53 - 1)`과 `2^53 - 1` 사이의 정수)인지 확인합니다.
- {{jsxref("Number.parseFloat()", "Number.parseFloat(<var>string</var>)")}}
  - : 전역 객체 {{jsxref("parseFloat", "parseFloat()")}}와 동일한 값입니다.
- {{jsxref("Number.parseInt()", "Number.parseInt(<var>string</var>, [<var>radix</var>])")}}
  - : 전역 객체 {{jsxref("parseInt", "parseInt()")}}와 동일한 값입니다.

## 인스턴스 메소드

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}
  - : 지수 표기법으로 표기된 숫자를 표현하는 문자열을 반환한다
- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : 고정 소수점 표기법으로 숫자를 표현하는 문자열을 반환합니다.
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : 이 숫자를 해당 언어 방식으로 표현된 문자열을 반환합니다. {{jsxref("Object.prototype.toLocaleString()")}} 메서드를 재정의합니다.
- {{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}
  - : 고정 소수점 또는 지수 표기법으로 지정된 정밀도로 숫자를 표현하는 문자열을 반환합니다.
- {{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}
  - : 지정한 _기수_("base")에서 지정한 개체를 표현하는 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("Number.prototype.valueOf()")}}
  - : 명시된 객체의 원시 값을 반환합니다. {{jsxref("Object.prototype.valueOf()")}} 메서드를 재정의합니다.

## 예제

### Number 객체를 사용해 숫자형 변수에 할당

다음 예제에서는 `Number` 객체의 속성을 사용하여, 여러 숫자 변수에 값을 할당합니다:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Number의 정수 범위

다음 예제는 Number 객체가 표현할 수 있는 정수의 최소값과 최대값을 보여줍니다. (자세한 내용은 ECMAScript 표준, _[6.1.6 The Number Type](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type)_ 장을 참고하세요.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

JSON으로 직렬화한 데이터를 읽을 때, 위의 범위를 벗어나는 수는 JSON 분석기의 `Number` 형변환 시 손상될 수 있습니다. 이 때는 String을 대신 사용하는 것도 방법입니다.

{{jsxref("String")}}를 사용하는 것도 대안입니다.

더 큰 수는 {{jsxref("BigInt")}} 타입으로 표현할 수 있습니다.

### Number를 사용해 Date 객체 숫자로 변환

다음 예제는 `Number`를 함수로 사용하여 {{jsxref("Date")}} 객체를 숫자 값으로 변환합니다.

```js
let d = new Date('December 17, 1995 03:24:00');
console.log(Number(d));
```

`819199440000`가 기록됩니다.

### 숫자형 문자열에서 숫자로 변환

```js
Number('123'); // 123
Number('123') === 123; // true
Number('12.3'); // 12.3
Number('12.00'); // 12
Number('123e-1'); // 12.3
Number(''); // 0
Number(null); // 0
Number('0x11'); // 17
Number('0b11'); // 3
Number('0o11'); // 9
Number('foo'); // NaN
Number('100a'); // NaN
Number('-Infinity'); // -Infinity
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- 최신 `Number` 동작(2진수와 8진수를 지원하는)의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#ecmascript-number)를 참고하세요
- {{jsxref("NaN")}}
- {{jsxref("Arithmetic operators")}}
- {{jsxref("Math")}} 전역 객체
- 임의 정밀도 정수: {{jsxref("BigInt")}}
