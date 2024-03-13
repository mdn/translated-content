---
title: Function.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

{{jsxref("Function", "함수")}} 인스턴스의 **`length`** 데이터 속성은 함수가 기대하는 인자의 수를 나타냅니다.

{{EmbedInteractiveExample("pages/js/function-length.html")}}

## 값

숫자

{{js_property_attributes(0, 0, 1)}}

## 설명

`length`는 함수 객체의 속성으로, 함수가 얼마나 많은 인수를 기대하는지 나타냅니다, 즉 형식 매개변수의 수.
이 수는 {{jsxref("Functions/rest_parameters", "나머지 매개변수", "", 1)}}를 포함하지 않습니다.
그에 반해, {{jsxref("Functions/arguments/length", "arguments.length")}}는 함수에
지역(local)이고 실제로 함수에 전달된 인수의 수를 제공합니다.

{{jsxref("Function")}} 객체의 `length` 속성은 함수가 얼마나 많은 인수를 기대하는지 나타냅니다. 이는 형식 매개변수의
수 입니다. 이 숫자는 {{jsxref("Functions/rest_parameters", "나머지 매개변수", "", 1)}}를 포함하지
않으며 기본 값을 가진 첫 번째 매개변수 이전의 매개 변수만 포함합니다. 반면
{{jsxref("Functions/arguments/length", "arguments.length")}}는 하나의 함수에 국한되어
실제로 함수에 전달된 인수의 수를 제공합니다.

{{jsxref("Function")}} 생성자는 그 자체로 `function` 객체입니다. 그 `length` 데이터 속성은 값이
`1`입니다.

역사적인 이유로 인해 `Function.prototype`은 호출 가능한 자체입니다. `Function.prototype`의
`length`속성 값은 `0`입니다.

## 예제

### 함수 length 사용하기

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, 나머지 매개변수는 세지 않습니다

console.log(((a, b = 1, c) => {}).length);
// 1, 기본값을 가진 매개변수 이전의 매개변수만 셉니다
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Function")}}
