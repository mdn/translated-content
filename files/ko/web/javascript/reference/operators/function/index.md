---
title: 함수 표현식
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

**`function`** 키워드는 어떤 표현식(expression) 내에서 함수를 정의하는 데 사용될 수 있습니다.

또한 [Function](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function) 생성자와 [함수 선언(function declaration)](/ko/docs/Web/JavaScript/Reference/Statements/function)을 이용해 함수를 정의할 수도 있습니다.

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html")}}

## 구문

```js
    var myFunction = function [name]([param1[, param2[, ..., paramN]]]) { statements };
```

[ES2015](/ko/docs/)에서 [화살표 함수(arrow functions)](/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)를 사용할 수도 있습니다.

### 매개변수

- `name`
  - : 함수 이름. 함수가 이름 없는(anonymous) 함수인 경우, 생략될 수 있음. 이 함수 이름은 함수의 몸통 내에서만 사용할 수 있습니다.
- `paramN`
  - : 함수로 전달되는 인수(argument) 의 이름.
- `statements`
  - : 함수 몸통을 구성하는 문(statement).

## 설명

함수 표현식(function expression)은 function 문과 매우 비슷하고 구문(syntax)이 거의 같습니다 (자세한 사항은 [function 문](/ko/docs/Web/JavaScript/Reference/Statements/function) 참조). 함수 표현식과 function 문 사이의 주요 차이점은 함수 이름으로, 함수 표현식으로 _익명_ 함수를 만들 경우 이 이름을 생략할 수 있습니다. 함수 표현식은 정의하자마자 실행되는 [IIFE (즉시 호출되는 함수 표현식)](/ko/docs/Glossary/IIFE)로 사용될 수 있습니다. 더 자세한 정보는 [함수](/ko/docs/Web/JavaScript/Reference/Functions) 장 참조.

### Function expression 끌어올리기

자바스크립트에서 함수 표현식은 {{jsxref("Statements/function", "함수 선언", "#Function_declaration_hoisting")}}과는 달리 끌어올려지지 않습니다. 함수 표현식을 정의하기 전에는 사용할 수 없습니다.

```js
console.log(notHoisted); // undefined
//even the variable name is hoisted, the definition wasn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 유명(named) 함수 표현식

함수 몸통 안 쪽에서 현재 함수를 참고하고 싶다면, 유명 함수를 생성해야 합니다. **_이 함수 이름은 함수의 몸통(범위) 안에서만 사용할 수 있습니다_**. 이로써 비표준 [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee) 속성을 사용하는 것을 피할 수도 있습니다.

```js
var math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

함수가 할당된 변수는 `name` 속성을 가지게됩니다. 다른 변수에 할당되더라도 그 name 속성의 값은 변하지 않습니다. 함수의 이름이 생략되었다면, name 속성의 값은 그 변수의 이름(암묵적 이름)이 될 것입니다. 함수의 이름이 있다면 name 속성의 값은 그 함수의 이름(명시적 이름)이 될 것입니다. 이는 [화살표 함수(arrow functions)](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)에도 적용됩니다 (화살표 함수는 이름을 가지지 않으므로 해당 변수에 암묵적인 이름만 줄 수 있습니다).

```js
var foo = function () {};
foo.name; // "foo"

var foo2 = foo;
foo2.name; // "foo"

var bar = function baz() {};
bar.name; // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
```

## Examples

다음 예제는 이름 없는 함수를 정의하고 그 함수를 `x`에 할당합니다. 함수는 인수의 제곱을 반환합니다:

```js
var x = function (y) {
  return y * y;
};
```

[callback](/ko/docs/Glossary/Callback_function)으로 더 자주 사용됩니다:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Arrow_functions", "Arrow functions")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
