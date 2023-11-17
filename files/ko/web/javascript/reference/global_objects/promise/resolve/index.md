---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}

**`Promise.resolve(value)`** 메서드는 주어진 값으로 이행하는 {{jsxref("Promise.then")}} 객체를 반환합니다. 그 값이 프로미스인 경우, 해당 프로미스가 반환됩니다. 그 값이 thenable(예, {{jsxref("Promise.then", "\"then\" 메소드")}} 가 있음)인 경우, 반환된 프로미스는 그 thenable을 "따르며", 그 최종 상태를 취합니다. 그렇지 않으면 반환된 프로미스는 그 값으로 이행합니다. 이 함수는 프로미스형의 객체(무언가를 결정하는 프로미스를 결정하는 프로미스 등)의 중첩된 레이어를 단일 레이어로 펼칩니다.

> **경고:** **주의**: 스스로를 결정하는 thenable 에서 `Promise.resolve` 를 호출하면 안됩니다. 이는 무한히 중첩된 프로미스를 펼치려고하므로 무한 재귀를 유발할 것입니다. Angular 에서 `async` Pipe 를 함께 사용한 [예제](https://stackblitz.com/edit/angular-promiseresovle-with-async-pipe?file=src/app/app.component.ts)입니다. 자세한 내용은 [여기](https://angular.io/guide/template-syntax#avoid-side-effects)에서 확인하세요.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## 구문

```js
Promise.resolve(value);
```

### 파라미터

- value
  - : 이 `Promise`에 의해 결정되는 인수. `Promise` 또는 이행할 thenable 일수도 있습니다.

### 반환 값

<dl><dd><p>주어진 값으로 이행된 {{jsxref("Promise")}} 또는 값이 promise 객체인 경우, 값으로 전달된 promise.</p></dd></dl>

## 설명

정적 `Promise.resolve` 함수는 이행된 `Promise` 를 반환합니다.

## 예시

### 정적 `Promise.resolve` 메소드 사용

```js
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // 호출되지 않음
  },
);
```

### 배열 이행

```js
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
  console.log(v[0]); // 1
});
```

### 또 다른 `Promise` 이행

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function (value) {
  console.log("value: " + value);
});
console.log("original === cast ? " + (original === cast));

// 로그 순서:
// original === cast ? true
// value: 33
```

로그의 순서가 반대인 이유는 `then` 핸들러가 비동기로 호출되기 때문입니다. [여기](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#then_%EB%A9%94%EC%84%9C%EB%93%9C_%EC%82%AC%EC%9A%A9)에서 `then` 이 동작하는 방식에 대해 확인하세요.

### thenable 이행 및 오류 발생

```js
// thenable 객체 이행
var p1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, 객체는 Promise 로 변환됨

p1.then(
  function (v) {
    console.log(v); // "fulfilled!"
  },
  function (e) {
    // 호출되지 않음
  },
);

// thenable 이 콜백 이전에 오류를 throw
// Promise 거부
var thenable = {
  then: function (resolve) {
    throw new TypeError("Throwing");
    resolve("Resolving");
  },
};

var p2 = Promise.resolve(thenable);
p2.then(
  function (v) {
    // 호출되지 않음
  },
  function (e) {
    console.log(e); // TypeError: Throwing
  },
);

// thenable 이 콜백 이후에 오류를 throw
// Promise 이행
var thenable = {
  then: function (resolve) {
    resolve("Resolving");
    throw new TypeError("Throwing");
  },
};

var p3 = Promise.resolve(thenable);
p3.then(
  function (v) {
    console.log(v); // "Resolving"
  },
  function (e) {
    // 호출되지 않음
  },
);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Promise")}}
