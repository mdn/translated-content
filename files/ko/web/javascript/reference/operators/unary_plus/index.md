---
title: 단항 더하기 (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
---

{{jsSidebar("Operators")}}

단항 더하기 연산자(`+`)는 피연산자 앞에 위치하며 피연산자를 평가하지만, 만약 피연산자가 숫자가 아니라면 숫자로 변환을 시도합니다.

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## 구문

```js
+x;
```

## 설명

단항 부정 (`-`)도 숫자가 아닌 값을 변환할 수 있지만, 단항 더하기는
어떤 것을 숫자로 변환하는 가장 빠르고 선호하는 방법입니다. 왜냐하면 숫자에 대해 다른 연산을 수행하지 않기 때문입니다.
정수와 실수의 문자열 표현뿐 아니라 문자열이 아닌 값인 `true`, `false` 및 `null` 또한 변환할 수 있습니다.
10진수 및 16진수(`0x` 접두사) 형식의 정수 모두 지원됩니다. 음수도 지원됩니다(16진수 제외).
BigInt 값에 연산자를 사용하면 TypeError가 발생합니다. 특정 값을 구문 분석할 수 없으면 {{jsxref("NaN")}}으로 평가됩니다.

## 예제

### 숫자에 사용하기

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### 숫자가 아닌 값에 사용하기

```js
+true; // 1
+false; // 0
+null; // 0
+function (val) {
  return val;
}; // NaN
+1n; // TypeError 발생: BigInt 값을 숫자로 변경할 수 없습니다
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)
- [빼기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [나누기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Division)
- [곱하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [나머지 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [지수 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
