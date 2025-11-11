---
title: 나누기 할당 (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
---

{{jsSidebar("Operators")}}

나누기 할당 연산자(`/=`)는 오른쪽 피연산자의 값으로 변수를 나눈 결과를 다시 변수에 할당합니다.

{{InteractiveExample("JavaScript Demo: Expressions - Division assignment operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## 구문

```js
x /= y; // x = x / y
```

## 예제

### 나누기 할당 사용하기

```js
// bar = 5
// 위와 같은 변수를 가정하고, 아래의 모든 연산을 순서대로 실행할 때

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
bar /= "foo"; // NaN
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [나누기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Division)
