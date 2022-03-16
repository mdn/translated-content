---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
tags:
  - AggregateError
  - Class
  - Interface
  - JavaScript
  - Polyfill
browser-compat: javascript.builtins.AggregateError
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError
---
{{JSRef}}

**`AggregateError`** 객체는 다수의 에러가 한 에러로 랩핑되어야 할 때의 오류를 나타냅니다. 한 작업에서 여러개의 오류가 보고될 때 발생하는데, 대표적으로 {{JSxRef("Promise.any()")}}에 전달된 모든 promise들이 거부되었을 때 발생합니다.

## 생성자

- {{jsxref("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : 새로운`AggregateError` 객체를 생성합니다.

## 인스턴스 속성

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : 에러 메시지, 기본값 `""`.
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : 에러 이름, 기본값`AggregateError`.
- `AggregateError`: `errors`
  - : `AggregateError`와 함께 인스턴스화되는 반복 가능한 객체를 반영하는 배열. 예를 들면 `AggregateError`가 {{JSxRef("AggregateError/AggregateError", "AggregateError()")}} 생성자로 생성된다면, 반복가능한 어떤 객체로든 만들어진 배열이 생성자에 첫 번째 인자로 전달됩니다.  
  
## 예제

### AggregateError 다루기

```js
Promise.any([
  Promise.reject(new Error("some error")),
]).catch(e => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
});
```

### AggregateError 발생시키기

```js
try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Error")}}
- {{JSxRef("Promise.any")}}
