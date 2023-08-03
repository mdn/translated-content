---
title: 함수
slug: Glossary/Function
---

**함수**는 다른 코드에서 또는 자신에 의해 호출되거나 함수 레퍼런스를 저장한 {{Glossary("variable", "변수")}}에 의해 호출될 수 있는 코드조각이다. 함수가 호출될 때 함수의 입력으로 {{Glossary("Argument", "인수")}} 가 전달되고 함수는 선택적으로 출력값을 반환할 수 있다. 또한 {{glossary("JavaScript")}}에서 함수는 {{glossary("object", "객체")}}가 될 수도 있다.

함수명은 함수 선언문 또는 함수 표현식의 일부로써 선언된 {{Glossary("identifier","식별자")}}이다. 함수 이름의 {{Glossary("scope","범위")}}는 함수 이름의 선언식 또는 표현식인지에 따라 결정된다.

### 여러 함수 형식들

**익명 함수**는 함수명이 없는 함수이다. 함수 표현식만 익명 일 수 있으며, 함수 선언식에는 반드시 이름이 있어야한다 :

```js
// When used as a function expression
(function () {});

// or using the ECMAScript 2015 arrow notation
() => {};
```

**이름있는 함수**는 함수명을 갖는 함수이다 :

```js
// Function declaration
function foo() {}

// Named function expression
(function bar() {});

// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

**안쪽 함수**는 다른함수 내부에서 정의된 함수이다(아래 예에서는 square). **바깥 함수**는 함수를 포함하고 있는 함수이다(아래 예에서는 addSquares):

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

//Using ECMAScript 2015 arrow notation
const addSquares = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

**재귀호출 함수**는 자기 자신을 호출하는 함수이다. {{Glossary("recursion","재귀호출" )}} 참조.

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

//Using ECMAScript 2015 arrow notation
const loop = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

**즉시 실행 함수 표현** (IIFE)은 브라우저 컴파일러에 함수가 로드된 후 직접 호출되는 함수이다. IIFE를 식별하는 방법은 함수 선언의 끝에 여분의 왼쪽과 오른쪽 괄호를 두는 것이다. 이런 함수표현식의 형식은 많은 장점을 갖고 있지만 여기서는 일일이 설명하지 않는다.

```js
// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

IIFE에 대해 더 많은 설명이 필요하다면 위키피디아의 다음 페이지를 확인 바란다: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## 더 알아보기

### 기술적 참조

- [Functions](/ko/docs/Web/JavaScript/Guide/Functions)
