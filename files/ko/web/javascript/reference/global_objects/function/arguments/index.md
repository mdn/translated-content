---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}} {{deprecated_header}}

> **`function.arguments`** 속성은 함수로 부터 넘겨 받은 arguments에 해당하는 배열과 같은 객체이다. 간단하게 {{jsxref("Functions/arguments", "arguments")}}를 대신 사용하자. 이 속성은 strict mode에서 [꼬리 호출 최적화](http://www.ecma-international.org/ecma-262/6.0/#sec-addrestrictedfunctionproperties) 때문에 금지 된다.

## 설명

`function.arguments` 문법은 deprecated 되었다. 함수 내 에서 사용 가능한 객체{{jsxref("Functions/arguments", "arguments")}}에 접근하는 추천되는 방법은 단순히 {{jsxref("Functions/arguments", "arguments")}}변수로 참조하는 것이다.

반복문의 경우, 함수 `f` 가 여러번 호출 스택에 나타나면, `f.arguments`의 값은 함수의 가장 최근 호출 arguments를 나타낸다.

arguments의 값은 함수 실행 과정에서 특별한 호출이 없다면 일반적으로 null 이다 (즉, 함수가 호출은 되었으나 반환되지 않음).

## 예제

### arguments object를 사용한 예시

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## 명세서

`function.arguments`는 표준이 아니다. ECMAScript 3에서 {{jsxref("Functions/arguments", "arguments")}}를 참조하기 때문에 deprecated 되었다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Functions/arguments", "arguments")}} 객체
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
