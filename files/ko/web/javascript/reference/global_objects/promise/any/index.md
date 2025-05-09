---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`Promise.any()`** 정적 메서드는 순회 가능한 여러 프로미스를 입력으로 받아 단일 {{jsxref("Promise")}}를 반환합니다. 이 반환된 프로미스는 입력으로 들어온 여러 프로미스 중 하나라도 이행되면 이를 이행 값으로 하는 프로미스를 반환합니다. 입력의 모든 프로미스가 거부되면(빈 반복이 전달된 경우 포함) 최종적으로 이 메서드도 거부되며, 거부된 사유가 배열이 포함된 {{jsxref("AggregateError")}}가 반환됩니다.

{{InteractiveExample("JavaScript Demo: Promise.any()")}}

```js interactive-example
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
```

## 구문

```js-nolint
Promise.any(iterable)
```

### 매개변수

- `iterable`
  - : {{jsxref("Array")}}와 같은 프로미스의 [순회 가능 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)입니다.

### 반환 값

다음의 {{jsxref("Promise")}} 입니다.

- 전달된 `iterable`이 비어있다면, **이미 거부된** 프로미스를 반환합니다.
- 주어진 `iterable` 내의 프로미스 중 하나라도 이행되면, **비동기적으로 이행된** 프로미스를 반환합니다. 이행 값은 가장 먼저 이행된 프로미스의 이행 값입니다.
- 주어진 `iterable`내의 모든 프로미스가 거부되면, **비동기적으로 거부된** 프로미스를 반환합니다. 거부 이유는 `errors` 속성에 여러 거부 이유의 배열이 있는 {{jsxref("AggregateError")}}입니다. 오류는 완료 순서와 관계없이 전달된 프로미스의 순서대로 정렬됩니다. 전달된 `iterable`이 비어있지 않지만 대기 중인 프로미스가 없는 경우, 반환된 프로미스는 여전히 비동기적으로(동기적이 아닌) 거부됩니다.

## 설명

`Promise.any()` 메서드는 [프로미스 동시성](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) 메서드 중 하나입니다. 이 메서드는 이행되는 첫 번째 프로미스를 반환하는 데 유용합니다. 프로미스가 이행되면 즉시 단락(short-circuit)되므로, 하나를 찾은 후에는 다른 프로미스들의 완료를 기다리지 않습니다.

{{jsxref("Promise.all()")}}과 달리, 이행 값들의 배열을 반환하는 대신 하나의 이행 값만 얻습니다(적어도 하나의 프로미스가 이행된다고 가정할 때). 이는 하나의 프로미스만 이행되면 되고 어떤 것이 이행되는지는 상관없을 때 유용할 수 있습니다. 또 다른 차이점은 이 메서드가 빈 순회 가능 객체를 받으면 거부한다는 것입니다. 왜냐하면 사실상 순회 가능 객체에 이행되는 항목이 없기 때문입니다. `Promise.any()`와 `Promise.all()`을 {{jsxref("Array.prototype.some()")}}과 {{jsxref("Array.prototype.every()")}}에 비교할 수 있습니다.

또한, 첫 번째로 정착된 값(이행 또는 거부)을 반환하는 {{jsxref("Promise.race()")}}와 달리, 이 메서드는 첫 번째로 이행된 값을 반환합니다. 이 메서드는 첫 번째 프로미스가 이행될 때까지 모든 거부된 프로미스를 무시합니다.

## 예제

### Promise.any() 사용하기

`Promise.any()`는 프로미스가 먼저 거부되더라도 이행되는 첫 번째 프로미스로 이행됩니다. 이는 첫 번째로 정착되는 프로미스로 이행 또는 거부되는 {{jsxref("Promise.race()")}}와 대조됩니다.

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast 가 먼저 이행됩니다
});
// Logs:
// Done quick
```

### AggregateError와 함께 거부

`Promise.any()`는 어떠한 프로미스도 이행되지 않은 경우 {{jsxref("AggregateError")}}와 함께 거부됩니다.

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### 처음 불러온 이미지 보여주기

이 예시에서는 이미지를 가져와서 Blob을 반환하는 함수가 있습니다. `Promise.any()`를 사용하여 두 개의 이미지를 가져와서 사용 가능한 첫 이미지(즉, 프로미스가 이행된 이미지)를 표시합니다.

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Promise.any` 폴리필](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
