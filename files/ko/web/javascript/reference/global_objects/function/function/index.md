---
title: Function() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Function()`** 생성자는 {{jsxref("Function")}} 객체를 생성합니다. 이 생성자를 직접 호출하면 동적으로 함수를 만들 수 있지만, {{jsxref("Global_Objects/eval", "eval()")}} 함수와 비슷한 보안 및 미미한 성능 상의 문제가 있습니다. 하지만 지역 범위에 접근할 수 있는 `eval`과 달리, `Function` 생성자는 오직 전역 범위에서만 실행되는 함수를 생성합니다.

{{InteractiveExample("JavaScript Demo: Function()", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Expected output: 8
```

## 구문

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> **참고:** `Function()`은 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)를 사용하여 호출하거나 없이 호출할 수 있습니다. 두 방법 모두 새로운 `Function` 인스턴스를 생성합니다.

### 매개변수

- `arg1`, …, `argN` {{optional_inline}}

  - : 함수가 공식적인 인수 이름으로 사용할 이름. 각 이름은 유효한 JavaScript 매개변수를 나타내는 문자열이어야 합니다(일반 [식별자](/ko/docs/Glossary/Identifier), [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters), 또는 [구조 분해된](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 매개변수 중 하나이며, 선택적으로 [기본값](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)을 가질 수 있음). 또는 이런 문자열들이 쉼표로 구분된 목록이어야 합니다.

    매개변수는 함수 표현식과 동일한 방식으로 구문 분석되기 때문에 공백과 주석이 허용됩니다. 예: `"x", "theValue = 42", "[a, b] /* numbers */"` 또는 `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"`도 맞지만 읽기가 매우 혼란스러울 수 있습니다.)

- `functionBody`
  - : 함수 정의를 구성하는 JavaScript 문이 포함된 문자열.

## 설명

`Function` 생성자를 사용하여 생성된 `Function` 객체는 함수가 생성될 때 구문 분석됩니다. 이는 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)이나 [함수 선언](/ko/docs/Web/JavaScript/Reference/Statements/function)을 사용하여 함수를 생성하고 코드 내에서 호출하는 것보다 비효율적입니다. 이런 함수들은 코드의 나머지 부분과 함께 구문 분석되기 때문입니다.

함수에 전달된 모든 인수 중 마지막을 제외한 나머지는 생성될 함수의 매개변수 식별자의 이름으로, 전달된 순서대로 처리됩니다. 함수는 동적으로 함수 표현식으로 컴파일되며, 다음과 같은 방식으로 소스가 조합됩니다.

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

이는 함수의 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 메서드를 호출하여 관찰할 수 있습니다.

그러나 일반적인 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)과는 달리, `anonymous`라는 이름이 `functionBody`의 범위에 추가되지 않습니다. 이는 `functionBody`가 전역 범위에만 접근할 수 있기 때문입니다. 만약 `functionBody`가 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)(함수 본문 자체가 `"use strict"` 지시어를 가져야 합니다. 문맥으로부터 엄격 모드 설정을 상속받지 않기 때문입니다)에 있지 않다면, 함수 자체를 참조하기 위해 [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee)를 사용할 수 있습니다. 대안으로, 재귀 부분을 내부 함수로 정의할 수 있습니다.

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

두 개의 동적으로 조합된 소스 부분 — 매개변수 목록 `args.join(",")`와 `functionBody` — 은 각각 구문적으로 유효한지 확인하기 위해 먼저 별도로 구문 분석됩니다. 이는 주입 공격과 같은 시도를 방지합니다.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

## 예제

### Function 생성자와 함께 인수 명시하기

다음 코드는 두 개의 인수를 받는 `Function` 객체를 생성합니다.

```js
// 예제는 여러분의 JavaScript 콘솔에서 바로 실행할 수 있습니다

// 두 개의 인수를 받는 함수를 생성하고, 인수의 합을 반환합니다
const adder = new Function("a", "b", "return a + b");

// 함수 호출
adder(2, 6);
// 8
```

인수 `a`와 `b`는 함수 본문 `return a + b`에서 사용하는 공식적인 인수 이름입니다.

### 함수 선언 혹은 함수 표현식으로부터 함수 객체 생성하기

```js
// 함수 생성자는 세미콜론으로 분리된 여러 문을 취할 수 있습니다. 함수 표현식은 함수 이름과 함께 return 문이 필요합니다.

// 여기서 new Function 이 호출되는 것을 확인하세요. 이렇게 하면 우리가 생성한 함수를 바로 호출할 수 있습니다.
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// 함수 호출
sumOfArray([1, 2, 3, 4]);
// 10

// 생성 시점에서 new Function 을 호출하지 않으면, 이를 호출하기 위해 Function.call() 메서드를 사용할 수 있습니다
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// 함수 호출
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// 함수 선언은 반환문이 필수가 아닙니다
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// 함수 호출
sayHello("world");
// Hello, world
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`function`](/ko/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Functions", "", 1)}}
