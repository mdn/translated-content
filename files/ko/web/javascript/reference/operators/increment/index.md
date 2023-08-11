---
title: 증가 연산자(++)
slug: Web/JavaScript/Reference/Operators/Increment
---

{{jsSidebar("Operators")}}

**증가(`++`) 연산자** 는 피연산자를 증가(1을 더함)시키고 연산자의 위치에 따라 증가하기 전이나 후의 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## 구문

```js-nolint
x++
++x
```

## 설명

만약 피연산자 뒤에 연산자를 붙여서 사용한다면 (예를 들어 `x++`) 증가 연산자는 수를 증가시키고 증가하기 전 값을 반환합니다.

만약 피연산자 앞에 연산자를 붙여서 사용한다면(예를 들어 `++x`) 증가 연산자는 수를 증가시키고 증가 후 값을 반환합니다.

증가 연산자는 참조인 피연산자 변수 및 객체 속성, 다시말해 유효한 [할당 대상](/ko/docs/Web/JavaScript/Reference/Operators/Assignment)에만 적용할 수 있습니다. `++x` 자체는 참조가 아닌 값으로 평가되기 때문에 여러 증가 연산자를 연속적으로 사용할 수 없습니다.

```js example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## 예제

### 후위 증가

```js
let x = 3;
const y = x++;

// x = 4
// y = 3
```

### 전위 증가

```js
let x = 3;
const y = ++x;

// x = 4
// y = 4
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
- [거듭제곱 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [단항 더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
