---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
browser-compat: javascript.builtins.GeneratorFunction
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---
{{JSRef}}

**`GeneratorFunction` 생성자**는 새로운 {{jsxref("Statements/function*", "generator function")}} 객체를 생성한다. JavaScript 에서 모든 generator function 은 실제로 `GeneratorFunction` object 이다.

주의할 점은, `GeneratorFunction` 이 전역 객체(global object)가 아니란 점이다. GeneratorFunction은 다음의 코드를 실행해서 얻을 수 있다.

```js
Object.getPrototypeOf(function*(){}).constructor
```

## Syntax

```js
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, ... , argN, functionBody)
```

### Parameters

- `arg1, arg2, ... argN`
  - : 이 함수에서 공식적인 argument 이름들로 사용되는 이름들이다. 각각은 유효한 Javascript 식별자이거나 쉼표로 구분된 문자열 리스트에 해당되는 문자열이어야 한다; for example "`x`", "`theValue`", or "`a,b`".
- `functionBody`
  - : 함수 정의를 구성하는 JavaScript 문이 포함된 문자열.

## Description

`GeneratorFunction` 생성자로 생성된 {{jsxref("Statements/function*", "generator function")}} 객체는 그 함수가 생성될 때 분석한다. 이러한 함수들이 나머지 코드들과 함께 분석되기 때문에, {{jsxref("Statements/function*", "function* expression")}}으로 generator function을 선언하고 코드 내에서 호출하는 것보다 덜 효율적입니다.

그 함수로 전달된 모든 arguments는 생성될 함수 안에서 파라미터의 식별자 이름으로 그것들이 전달된 순서대로 처리된다.

> **참고:** {{jsxref("Statements/function*", "generator function")}} created with the `GeneratorFunction` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `GeneratorFunction` constructor was called. This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for a generator function expression.

new 없이 `GeneratorFunction` 생성자를 함수처럼 사용하는 것은 생성자처럼 사용하는 것과 동일한 효과를 갖는다.

## Examples

### GeneratorFunction 생성자로 generator function 생성하기

```js
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function* function")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
