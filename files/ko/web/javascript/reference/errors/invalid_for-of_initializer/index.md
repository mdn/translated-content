---
title: "SyntaxError: a declaration in the head of a for-of loop can't have an initializer"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---

{{jsSidebar("Errors")}}

## 메세지

```
  SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
  SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
  SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

[for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 반복문의 식이 초기화 구문을 포함한 것이 문제입니다. 즉, |`for (var i = 0 of iterable)`| 구문을 통해 변수가 정의되고 값이 할당된 것을 말합니다. 이 구문은 for-of 반복문에서 허용되지 않습니다. 이 경우 초기화를 할 수 있는 for 반복문이 필요합니다.

## 예제

### 잘못된 for-of 반복문

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### 올바른 `for-of` 반복문

for-of 반복문에서 초기화 구문(`value = 50`)을 삭제해야 합니다. 50을 더하고 싶다면 다음 예제와 같이 반복문 안에 추가할 수 있습니다.

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## 같이 보기

- [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) – 엄격(Strict) 모드에서는 마찬가지로 초기화를 허용하지 않습니다. ([SyntaxError: for-in loop head declarations may not have initializers](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/ko/docs/Web/JavaScript/Reference/Statements/for) – 초기화를 허용합니다.
