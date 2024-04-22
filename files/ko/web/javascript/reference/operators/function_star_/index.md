---
title: function* expression
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}

**`function*`** keyword 는 표현식 내에서 generator function 을 정의합니다.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

## Syntax

```js
    function* [name]([param1[, param2[, ..., paramN]]]) {
       statements
    }
```

### Parameters

- `name`
  - : 함수명. 생략하면, 익명 함수가 됩니다. 함수명은 함수내에만 한정됩니다.
- `paramN`
  - : 함수에 전달되는 인수의 이름. 함수는 최대 255 개의 인수를 가질 수 있습니다.
- `statements`
  - : 함수의 본체를 구성하는 구문들.

## Description

`function*` expression 은 {{jsxref('Statements/function*', 'function* statement')}} 과 매우 유사하고 형식도 같습니다. `function*` expression 과 `function*` statement 의 주요한 차이점은 함수명으로, _`function*`_ expressions 에서는 익명 함수로 만들기 위해 함수명이 생략될 수 있습니다.보다 자세한 내용은 [functions](/ko/docs/Web/JavaScript/Reference/Functions) 을 참조하십시오.

## Examples

아래의 예제는 이름이 없는 generator function 을 정의하고 이를 x 에 할당합니다. function 은 인자로 들어온 값의 제곱을 생산(yield)합니다.

```js
var x = function* (y) {
  yield y * y;
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/ko/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
