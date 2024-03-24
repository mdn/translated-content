---
title: 함수 (function)
slug: Glossary/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**함수(function)** 는 다른 코드에서 또는 자신에 의해 호출되거나 함수 레퍼런스를 저장한 {{Glossary("variable", "변수")}}에 의해 호출될 수 있는 코드 조각입니다. 함수가 호출될 때, 함수의 입력으로 {{Glossary("Argument", "인수")}} 가 전달되고 함수는 선택적으로 출력값을 반환할 수 있습니다. 또한 {{glossary("JavaScript")}}에서 함수는 {{glossary("object", "객체")}}이기도 합니다.

함수명은 함수 선언문 또는 함수 표현식의 일부로써 선언된 {{Glossary("identifier","식별자")}}입니다. 함수 이름의 {{Glossary("scope","범위")}}는 함수 이름의 선언식 또는 표현식인지에 따라 결정됩니다.

### 여러 함수 형식들

**익명 함수**는 함수명이 없는 함수입니다. 함수 표현식만 이름이 없을 수 있으며, 함수 선언식에는 반드시 이름이 있어야 합니다.

```js
// 함수 표현식으로 만든 익명 함수
(function () {});

// 화살표 표기법으로 만든 익명 함수
() => {};
```

다음 용어는 ECMAScript 언어 명세에서 사용되지 않으며, 다양한 함수를 나타내는 데 사용되는 전문 용어입니다.

**이름있는 함수**는 함수명을 갖는 함수입니다.

```js
// 함수 선언식
function foo() {}

// 이름이 있는 함수 표현식
(function bar() {});

// 화살표 표기법
const baz = () => {};
```

**내부 함수**는 다른 함수 내부에서 정의된 함수입니다(아래 예에서는 `square`). **외부 함수**는 함수를 포함하고 있는 함수입니다(아래 예에서는 `addSquares`).

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// 화살표 함수
const addSquares2 = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

**재귀호출 함수**는 자기 자신을 호출하는 함수입니다. {{Glossary("Recursion", "재귀호출")}}을 참조하세요.

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

// 화살표 함수
const loop2 = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

**즉시 실행 함수 표현식** (IIFE)은 브라우저 컴파일러에 함수가 로드된 후 직접 호출되는 함수입니다. IIFE는 함수 선언의 끝에 추가로 붙은 왼쪽과 오른쪽 괄호를 통해 식별할 수 있습니다.

익명 여부와 무관하게 함수 표현식은 즉시 호출할 수 있습니다.

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

IIFE가 함수 "표현식"이어야 하기 때문에, 선언된 함수는 이 방법으로 즉시 호출할 수 없습니다.

```js example-bad
function foo() {
  console.log('Hello Foo');
}();
```

IIFE에 대해 더 많은 설명이 필요하다면, 위키피디아의 [즉시 실행 함수 표현식(Immediately Invoked Function Expression)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)을 확인해주세요.

## 같이 보기

- [함수](/ko/docs/Web/JavaScript/Guide/Functions)
- [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
