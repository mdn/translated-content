---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
---
{{JSRef}}

**`length`** 속성은 함수가 기대하는 인수의 수를 나타냅니다.

{{EmbedInteractiveExample("pages/js/function-length.html")}}

{{js_property_attributes(0,0,1)}}

## 설명

`length`는 함수 객체의 속성으로, 함수가 얼마나 많은 인수를 기대하는지 나타냅니다, 즉 형식 매개변수의 수. 이 수는 {{jsxref("rest_parameters", "나머지 매개변수", "", 1)}}를 포함하지 않습니다. 그에 반해, {{jsxref("Functions/arguments/length", "arguments.length")}}는 함수에 지역(local)이고 실제로 함수에 전달된 인수의 수를 제공합니다.

### `Function` 생성자의 데이터 속성

{{jsxref("Function")}} 생성자는 그 자체로 {{jsxref("Function")}} 객체입니다. 그 `length` 데이터 속성은 값이 1입니다. 속성의 attribute: 쓰기가능(Writable): `false`, 열거가능(Enumerable): `false`, 설정가능(Configurable): `true`.

### `Function` 프로토타입 객체의 속성

{{jsxref("Function")}} 프로토타입 객체의 length 속성은 값이 0입니다.

## 예제

```js
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 등. */
console.log((function(...args) {}).length); /* 0, 나머지 매개변수는 계산되지 않음 */
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Function")}}
