---
title: Promise() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
---

{{JSRef}}

**`Promise`** 생성자는 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용합니다.

{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}

## 구문

```js
new Promise(executor);
```

### 매개변수

- `executor`
  - : `resolve` 및 `reject` 인수를 전달할 실행 함수. 실행 함수는 프로미스 구현에 의해 `resolve`와 `reject` 함수를 받아 즉시 실행됩니다(실행 함수는 `Promise` 생성자가 생성한 객체를 반환하기도 전에 호출됩니다). `resolve` 및 `reject` 함수는 호출할 때 각각 프로미스를 이행하거나 거부합니다. 실행 함수는 보통 어떤 비동기 작업을 시작한 후 모든 작업을 끝내면 `resolve`를 호출해 프로미스를 이행하고, 오류가 발생한 경우 `reject`를 호출해 거부합니다. 실행 함수에서 오류를 던지면 프로미스는 거부됩니다. 실행 함수의 반환값은 무시됩니다.

## 예제

`Promise` 객체는 `new` 키워드와 생성자를 사용해 만듭니다. 생성자는 매개변수로 "실행 함수"를 받습니다. 이 함수는 매개 변수로 두 가지 함수를 받아야 하는데, 첫 번째 함수(`resolve`)는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 때 호출해야 하고, 두 번째 함수(`reject`)는 작업이 실패하여 오류의 원인을 반환할 때 호출하면 됩니다. 두 번째 함수는 주로 오류 객체를 받습니다.

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
```

함수에 프로미스 기능을 추가하려면, 간단하게 프로미스를 반환하도록 하면 됩니다.

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [프로미스 사용하기](/ko/docs/Web/JavaScript/Guide/Using_promises)
