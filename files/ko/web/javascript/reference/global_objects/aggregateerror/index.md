---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`AggregateError`** 객체는 다수의 오류가 한 오류로 포장되어야 할 때의 오류를 나타냅니다.
한 작업에서 여러 개의 오류가 보고될 때 발생하는데, 대표적으로 {{JSxRef("Promise.any()")}}에 전달된 모든
프로미스가 거부되었을 때 발생합니다.

`AggregateError`은 {{jsxref("Error")}}의 하위 클래스 입니다.

## 생성자

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : 새로운`AggregateError` 객체를 생성합니다.

## 인스턴스 속성

인스턴스 속성은 부모인 {{jsxref("Error")}}로부터 상속받습니다.

아래 속성은 `AggregateError.prototype`에 정의되어 있으며 모든 인스턴스 객체와 공유합니다.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `AggregateError` 인스턴스에서 초기 값은
    {{jsxref("AggregateError/AggregateError", "AggregateError")}} 생성자입니다.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : 오류의 유형에 대한 이름을 나타냅니다. `AggregateError.prototype.name`의 초기 값은 `"AggregateError"`입니다.

아래 속성은 `AggregateError` 인스턴스의 자체 속성입니다.

- {{jsxref("AggregateError/errors", "errors")}}
  - : 집계된 오류를 나타내는 배열입니다.

## 인스턴스 메서드

인스턴스 메서드는 부모인 {{jsxref("Error")}}로부터 상속받습니다.

## 예제

### AggregateError 처리하기

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### AggregateError 발생시키기

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Error")}}
- {{JSxRef("Promise.any")}}
