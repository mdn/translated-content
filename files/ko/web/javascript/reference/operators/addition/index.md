---
title: 더하기 (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 93d2d79c1c68af93f2730d27cdea9d527eee0d7a
---

{{jsSidebar("Operators")}}

더하기 연산자(`+`)는 숫자 피연산자의 합을 구하거나, 문자열을 서로 연결합니다.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## 구문

```js-nolint
x + y
```

## 설명

`+` 연산자는 숫자 덧셈과 문자열 연결 두 가지 작업을 수행합니다. 계산 시에 먼저 [두 개의 피연산자를 원시 타입으로 변환합니다](/ko/docs/Web/JavaScript/Data_structures#primitive_coercion). 그 후에, 두 피연산자의 타입을 확인합니다.

- 만약 한쪽의 피연산자가 문자열인 경우, 나머지 한쪽의 피연산자도 [문자열로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)시킨 뒤 연결합니다.
- 만약 두 피연산자가 모두 [BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)인 경우, BigInt 덧셈을 수행합니다. 만약 한쪽의 피연산자가 BigInt이지만 나머지 한쪽의 피연산자가 BigInt가 아닌 경우, [`TypeError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError)가 발생합니다.
- 그 외의 경우, 두 피연산자를 모두 [숫자로 변환시키고](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), 숫자 덧셈이 수행됩니다.

종종 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals)이나 [`String.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/concat)이 문자열 연결과 동일하다고 생각하지만, 그렇지 않습니다. 더하기 연산자는 먼저 [`valueOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)를 호출하여 표현식을 원시 타입으로 변환합니다. 반면에, 템플릿 리터럴과 `concat()`은 먼저 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)을 호출합니다. 만약 표현식에 [`@@toPrimitive`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 메서드가 있는 경우, 문자열 연결은 `"default"`를 힌트로 사용하고, 템플릿 리터럴은 `"string"`을 사용합니다. 이 차이는 문자열과 원시 표현이 다른 객체에 중요합니다. 예를 들어 `valueOf()` 메서드가 에러를 내는 [Temporal](https://github.com/tc39/proposal-temporal) 같은 객체가 있습니다.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

[문자열 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)을 위해 `"" + x`를 사용하는 것은 좋지 않습니다.

## 예제

### Number 덧셈

```js
// Number + Number -> 덧셈
1 + 2; // 3

// Boolean + Number -> 덧셈
true + 1; // 2

// Boolean + Boolean -> 덧셈
false + false; // 0
```

## BigInt 덧셈

```js
// BigInt + BigInt -> 덧셈
1n + 2n; // 3n

// BigInt + Number -> TypeError 발생
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// BigInt와  non-BigInt를 더하기 위해선, 피연산자 중 하나를 변환하십시오.
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### 문자열 연결

```js
// String + String -> 연결
"foo" + "bar"; // "foobar"

// Number + String -> 연결
5 + "foo"; // "5foo"

// String + Boolean -> 연결
"foo" + false; // "foofalse"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [빼기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [나누기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Division)
- [곱하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [나머지 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [거듭제곱 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [단항 플러스 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
