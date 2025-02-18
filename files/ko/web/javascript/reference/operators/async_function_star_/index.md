---
title: async function* 표현식
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 40574fa665cd58de35cc2d30de2a46f5e9d3b484
---

{{jsSidebar("Operators")}}

**`async function*`** 키워드는 표현식 내부에서 비동기 제너레이터 함수를 정의하는데 사용됩니다.

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 구문

```js
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* … ,*/ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

### 매개변수

- `name` {{optional_inline}}
  - : 함수 이름입니다. 익명 함수의 경우 생략할 수 있습니다. 이름은 함수 본문 내에서만 유효합니다.
- `paramN` {{optional_inline}}
  - : 함수에 전달되는 인수의 이름입니다. 함수는 최대 255개의 인수를 가질 수 있습니다.
- `statements` {{optional_inline}}
  - : 함수 본문을 구성하는 구문입니다.

## 설명

`async function*` 표현식은 {{jsxref('Statements/async_function*', 'async function* statement', "", 1)}}과 상당히 유사하며 문법도 거의 동일합니다. 둘의 큰 차이점은 함수 이름인데, `async function*` 표현식에서는 함수 이름을 생략해 익명 비동기 제너레이터 함수를 만들 수 있습니다. 더 자세한 내용은 {{jsxref("Functions", "함수")}}에 대한 챕터를 참고하세요.

## 예제

### async function\* 사용하기

다음 예제는 이름이 없는 비동기 제너레이터 함수를 정의하고 `x`에 할당한 후, 인수를 제곱한 값을 반환합니다.

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/async_function*", "async function*")}} statement
- {{jsxref("AsyncGeneratorFunction")}} object
- [이터레이션 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} object
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Functions", "Functions", "", 1)}}
