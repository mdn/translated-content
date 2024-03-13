---
title: 거듭제곱 (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
---

{{jsSidebar("Operators")}}

거듭제곱 연산자(`**`)는 왼쪽 피연산자를 밑, 오른쪽 피연산자를 지수로 한 값을 구합니다.
{{jsxref("BigInt")}}도 피연산자로 받을 수 있다는 점을 제외하면 {{jsxref("Math.pow()")}}와 같습니다.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## 구문

```js
x ** y;
```

## 설명

거듭제곱 연산자는 우측 결합성을 가집니다. 따라서 `a ** b ** c`는 `a ** (b ** c)`와 같습니다.

PHP, Python 등 거듭제곱 연산자(`**`)를 포함하는 언어의 대부분은 거듭제곱 연산자가 단항 연산자(단항
`+`, `-` 등)보다 높은 우선순위를 가집니다. 그러나 Bash처럼 단항 연산자가 더 높은 우선순위를
가지는 예외의 언어도 있습니다.

반면 JavaScript에서는 모호한 거듭제곱 표현식을 작성하는 것이 불가능합니다. 단항
연산자(`+/-/~/!/delete/void/typeof`)를 밑 피연산자의 바로 앞에 사용할 수 없으며, 사용하려고 하면
{{jsxref("SyntaxError")}}가 발생합니다.

```js
-2 ** 2;
// Bash에서는 4, 다른 언어에서는 -4
// 모호한 식이므로 JavaScript에서 유효하지 않음

-(2 ** 2);
// JavaScript에서 -4, 저자의 의도가 명확함
```

참고로 어떤 언어에선 캐럿 기호 <kbd>^</kbd>를 거듭제곱에 사용하지만, JavaScript에서 캐럿은
[비트 XOR 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)에서
사용합니다.

## 예제

### 기본 거듭제곱

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
NaN ** 2; // NaN
```

### 연관성

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 단항 연산자와 사용하기

거듭제곱 결과의 부호를 반전하려면,

```js
-(2 ** 2); // -4
```

거듭제곱 표현식의 밑에 음수를 제공하려면,

```js
(-2) ** 2; // 4
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
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [단항 플러스 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
