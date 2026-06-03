---
title: AsyncFunction() constructor
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`AsyncFunction()`** 생성자는 {{jsxref("AsyncFunction")}} 객체를 생성합니다.

`AsyncFunction`은 전역 객체가 아니라는 점에 유의하시기 바랍니다. 다음 코드를 통해 얻을 수 있습니다.

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction()` 생성자는 직접 사용하기 위한 것이 아닙니다. 그리고 {{jsxref("Function/Function", "Function()")}} 설명에 언급된 모든 주의 사항은 `AsyncFunction()`에도 적용됩니다.

## 구문

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `AsyncFunction()`은 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 혹은 그냥 없이도 호출할 수 있습니다. 둘 다 새로운 `AsyncFunction` 인스턴스를 생성합니다.

### 매개변수

{{jsxref("Function/Function", "Function()")}}를 보세요.

## 예제

### AsyncFunction() 생성자로부터 비동기 함수 생성하기

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // 4초 뒤 30을 출력합니다
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`async function`](/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
