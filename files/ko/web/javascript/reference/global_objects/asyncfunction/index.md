---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

**`AsyncFunction`** 생성자는 새로운 {{jsxref("Statements/async_function", "async function")}} 객체를 만든다. 자바스크립트에서 모든 비동기 함수는 사실상 AsyncFunction 객체이다.

`AsyncFunction`이 전역변수가 아님에 주의한다. 다음코드를 보면 알 수 있다.

```js
Object.getPrototypeOf(async function () {}).constructor;
```

## 문법

```js
    new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### 파라미터

- `arg1, arg2, ... argN`
  - : 인수의 이름들은 함수내에서 사용되는 이름이다. 이름은 자바스크립트 식별자 로 유용한 문자열이거나 컴마로 구분된 문자열 목록이어야 한다. 예를들면 "x","theValue",or"a,b"와 같다.
- `functionBody`
  - : 함수 정의를 구성하는 자바스크립트 명령문들로 구성된 문자열.

## 상세설명

AsyncFunction 생성자를 통해 만들어진 {{jsxref("Statements/async_function", "async function")}} 객체는 함수가 만들어질때 분석된다. 이방법에서는 코드가 실행되지 않을 때도 작동하기 때문에 {{jsxref("Statements/async_function", "async function expression")}} 으로 비동기함수를 정의하고 해당 코드에서 호출할 때보다 비효율적이다.

함수에 전달된 모든 인수들은 전달된 순서대로 함수내에서 인수이름으로 식별자가 생성된 것처럼 다루어진다.

> **참고:** **주의:** `AsyncFunction` 생성자로 만들어진 {{jsxref("Statements/async_function", "async functions")}} 객체는 클로저를 생성 컨텍스트에 만들지 않는다; 이 객체들은 항상 전역 범위에서 생성됩니다.이 객체들을 실행할 때, `AsyncFunction`생성자가 호출된 범위의 변수가 아니라 자신의 지역 변수와 전역 변수에만 액세스 할 수 있습니다.이것은 비동기 함수 표현식을위한 코드와 함께 {{jsxref ( "Global_Objects/eval", "eval")}}을 사용하는 것과 다릅니다.

`AsyncFunction` 생성자를 (`new` 연산자를 사용하지 않고) 함수로 호출하는 것과 생성자로 동작시키는 것은 동일하다.

## 속성

- **`AsyncFunction.length`**
  - : `AsyncFunction` 생성자의 `length` 속성(이 값은 1임).
- **`AsyncFunction.prototype`**
  - : 모든 비동기 함수 객체에 속성을 추가할 수 있도록 함.
- **`AsyncFunction.constructor`**
  - : 초기값은 {{jsxref("AsyncFunction")}}임.
- **`AsyncFunction.prototype[@@toStringTag]`**
  - : "AsyncFunction"을 반환.

## `AsyncFunction 인스턴스`

`AsyncFunction` 인스턴스는 `AsyncFunction.prototype` 에서 메소드와 속성을 상속받는다.

여느 생성자에서와 같이 모든 `AsyncFunction` 인스턴스들을 수정할 수 있도록 생성자의 `prototype` 객체를 수정할 수 있다.

## 예제

### `AsyncFunction` 생성자를 통한 비동기 함수 만들기

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

let a = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

a(10, 20).then((v) => {
  console.log(v); // 4초 후에 30을 출력
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고 문서

- {{jsxref("Statements/async_function", "async function function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
