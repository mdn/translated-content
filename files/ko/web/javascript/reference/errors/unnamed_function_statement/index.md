---
title: "SyntaxError: function statement requires a name"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---

{{jsSidebar("Errors")}}

## 메세지

```
    Syntax Error: Expected identifier (Edge)
    SyntaxError: function statement requires a name [Firefox]
    SyntaxError: Unexpected token ( [Chrome]
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

[함수 구문](/ko/docs/Web/JavaScript/Reference/Statements/function)(Function statement)은 이름이 필수입니다. 함수가 정의된 방법에 따라 함수의 이름을 짓거나 함수 표현식(Function expression) {{Glossary("IIFE")}}으로 작성하거나, 함수가 맥락에 맞게 제대로 작성되었는지 확인해야 합니다.

## 예제

### 구문 vs 표현식

[함수 구문](/ko/docs/Web/JavaScript/Reference/Statements/function)(또는 함수 선언)은 이름이 필요하므로 아래 예제는 동작하지 않습니다:

```js example-bad
function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
```

대신 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)을 사용할 수 있습니다:

```js example-good
var greet = function () {
  return "Hello world";
};
```

또는, 선언하자마자 바로 실행되는 [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression)를 사용할 수 있습니다. 이 경우 몇 개의 괄호가 더 필요합니다:

```js example-good
(function () {})();
```

### 레이블을 붙인 함수

만약 함수 [레이블](/ko/docs/Web/JavaScript/Reference/Statements/label)을 사용하는 경우 `function` 키워드 뒤에 함수 이름이 필요하므로 아래 예제는 동작하지 않습니다:

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

아래 예제는 동작합니다:

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### 객체 메소드

만약 객체 메소드를 만드는 경우 먼저 객체를 만들어야 합니다. 객체 메소드의 경우 아래 예제와 같이 `function` 키워드 뒤에 이름이 없어도 정상적으로 동작합니다.

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  },
};
```

### 콜백 구문

콜백을 사용하는 경우 구문을 확인해야 합니다. 괄호와 쉼표는 구문을 어렵게 만듭니다.

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

올바르게 변경하면:

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## 같이 보기

- [함수](/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)
- [함수 구문](/ko/docs/Web/JavaScript/Reference/Statements/function)
- [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [레이블](/ko/docs/Web/JavaScript/Reference/Statements/label)
