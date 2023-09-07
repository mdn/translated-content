---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

{{jsSidebar("Operators")}}

**`typeof`** 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## 구문

`typeof` 연산자는 피연산자 앞에 위치합니다.

```js-nolint
typeof operand;
typeof (operand);
```

### 매개변수

- `operand`
  - : 자료형을 가져올 객체 또는 {{glossary("Primitive", "원시값")}}을 나타내는 표현식.

## 설명

`typeof`가 반환할 수 있는 값을 아래 표에서 볼 수 있습니다. 자료형과 원시값에 대한 자세한 정보는 [JavaScript 자료형과 자료구조](/ko/docs/Web/JavaScript/Data_structures) 페이지를 참고하세요.

| Type                                                                         | Result                          |
| ---------------------------------------------------------------------------- | ------------------------------- |
| {{glossary("Undefined")}}                                                    | `"undefined"`                   |
| {{glossary("Null")}}                                                         | `"object"` ([아래](#null) 참고) |
| {{glossary("Boolean")}}                                                      | `"boolean"`                     |
| {{glossary("Number")}}                                                       | `"number"`                      |
| {{glossary("BigInt")}}                                                       | `"bigint"`                      |
| {{glossary("String")}}                                                       | `"string"`                      |
| {{glossary("Symbol")}} (ECMAScript 2015에서 추가)                            | `"symbol"`                      |
| 호스트 객체 (JS 환경에서 제공)                                               | _구현체마다 다름_               |
| {{glossary("Function")}} 객체 (ECMA-262 표현으로는 [[Call]]을 구현하는 객체) | `"function"`                    |
| 다른 모든 객체                                                               | `"object"`                      |

> **참고:** ECMAScript 2019 and older permitted implementations to have `typeof` return any implementation-defined string value for non-callable non-standard exotic objects.
>
> The only known browser to have actually taken advantage of this is old Internet Explorer (see [below](#IE-specific_notes)).

## 예제

```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number(1) === "number"; // but never use this form!

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof typeof 1 === "string"; // typeof always returns a string
typeof String("abc") === "string"; // but never use this form!

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(true) === "boolean"; // but never use this form!

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";

// The following is confusing. Don't use!
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

## 추가 정보

### `null`

```js
// This stands since the beginning of JavaScript
typeof null === "object";
```

자바스크립트를 처음 구현할 때, 자바스크립트 값은 타입 태그와 값으로 표시되었습니다. 객체의 타입 태그는 0이었습니다. `null`은 Null pointer(대부분의 플랫폼에서 `0x00`)로 표시되었습니다. 그 결과 null은 타입 태그로 0을 가지며, 따라서 `typeof`는 object를 반환합니다. ([참고 문서](https://2ality.com/2013/10/typeof-null.html))

ECMAScript에 수정이 제안(opt-in을 통해)되었으나 [거절되었습니다](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). 제안된 것은 다음과 같습니다. `typeof null === 'null'.`

### Regular expressions

Callable regular expressions were a non-standard addition in some browsers.

```js
typeof /s/ === "function"; // Chrome 1-12 Non-conform to ECMAScript 5.1
typeof /s/ === "object"; // Firefox 5+  Conform to ECMAScript 5.1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## IE 참고사항

On IE 6, 7, and 8 a lot of host objects are objects and not functions. For example:

```js
typeof alert === "object";
```

## 같이 보기

- {{jsxref("Operators/instanceof", "instanceof")}}
