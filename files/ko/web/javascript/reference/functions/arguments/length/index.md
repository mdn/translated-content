---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
---

{{jsSidebar("Functions")}}

**`arguments.length`** 속성은 함수에 전달된 인수의 수를 포함하고 있습니다.

## 구문

```
    arguments.length
```

## 설명

arguments.length 속성은 실제로 함수에 전달된 arguments 의 수를 제공합니다. 이것은 정의된 매개변수의 수보다 작을 수도 클 수도 있습니다. ({{jsxref("Function.length")}} 보기).

## 예제

### `arguments.length` 사용하기

이 예시에서는 둘 또는 그 이상의 수를 더할 수 있는 함수를 정의합니다.

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
