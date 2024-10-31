---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

**`Promise.withResolvers()`** 정적 메서드는 새로운 {{jsxref("Promise")}} 객체와, 그 객체를 이행하거나 거부할 수 있는 두 함수를 포함하는 객체를 반환합니다. 이 두 함수들은 {{jsxref("Promise/Promise", "Promise()")}} 생성자의 실행자 함수에 전달되는 매개변수에 해당합니다.

## 구문

```js-nolint
Promise.withResolvers()
```

### 매개변수

없음.

### 반환 값

다음 속성을 포함하는 일반 객체.

- `promise`
  - : {{jsxref("Promise")}} 객체.
- `resolve`
  - : promise를 이행하는 함수입니다. 이 함수의 의미에 대해서는 {{jsxref("Promise/Promise", "Promise()")}} 생성자 참고 문서를 참조하세요.
- `reject`
  - : promise를 거부하는 함수입니다. 이 함수의 의미에 대해서는 {{jsxref("Promise/Promise", "Promise()")}} 생성자 참고 문서를 참조하세요.

## 설명

`Promise.withResolvers()`는 다음 코드와 동일합니다.

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

해당 메서드는 더 간결하며 {{jsxref("Statements/let", "let")}}을 사용할 필요가 없습니다.

`Promise.withResolvers()`를 사용할 때의 주요 차이점은 이행 및 거부 함수가 이제 promise 자체와 동일한 스코프에 위치한다는 점입니다. 이는 실행자 내부에서 한 번만 생성되고 사용되는 것과는 다릅니다. 이러한 구조는 특히 스트림과 큐에서 반복 이벤트를 다룰 때 해당 함수들을 재사용할 수 있는 고급 사용 사례를 가능하게 합니다. 또한 많은 로직을 실행자 내부에 감싸는 것보다 중첩이 줄어드는 경향이 있습니다.

`Promise.withResolvers()`는 제네릭 메서드이며 서브클래싱을 지원합니다. 즉, `Promise`의 서브클래스에서도 호출할 수 있고, 그 결과는 해당 서브클래스 타입의 promise를 포함합니다. 이를 위해 서브클래스의 생성자는 [`Promise()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 생성자와 동일한 시그니처를 구현해야 하며, 즉 `resolve`와 `reject` 콜백을 매개변수로 받을 수 있는 단일 `executor` 함수를 받아야 합니다.

## 예제

### 스트림을 비동기 이터러블로 변환하기

`Promise.withResolvers()`의 사용 사례는 어떤 이벤트 리스너에 의해 이행되거나 거부되어야 하는 promise가 있을 때입니다. 이 이벤트 리스너는 promise 실행자 내부에 감쌀 수 없습니다. 다음 예제는 Node.js의 [읽기 가능한 스트림](https://nodejs.org/api/stream.html#class-streamreadable)을 [비동기 이터러블](/ko/docs/Web/JavaScript/Reference/Statements/async_function*)로 변환하는 과정을 보여줍니다. 여기서 각 `promise`는 사용 가능한 단일 데이터 배치를 나타내며, 현재 배치가 읽힐 때마다 다음 배치를 위한 새로운 promise가 생성됩니다. 이벤트 리스너는 한 번만 연결되지만, 매번 다른 버전의 `resolve` 및 `reject` 함수를 호출한다는 점에 주목하세요.

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### 프라미스가 아닌 생성자에서 withResolvers() 호출하기

`Promise.withResolvers()`는 제네릭 메서드입니다. 이 메서드는 `Promise()` 생성자와 동일한 시그니처를 구현한 생성자에서 호출할 수 있습니다. 예를 들어, `executor`에 `resolve`와 `reject` 함수로 `console.log`를 전달하는 생성자에서도 이 메서드를 호출할 수 있습니다.

```js
class NotPromise {
  constructor(executor) {
    // "resolve"와 "reject" 함수는 네이티브 프로미스의 것과 전혀 다르게 동작하지만,
    // Promise.withResolvers()는 그냥 이 함수들을 반환합니다.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// 로그 출력: Resolved hello
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Promise.withResolvers` Polyfill](https://github.com/zloirock/core-js#promisewithresolvers)
- [promises 사용](/ko/docs/Web/JavaScript/Guide/Using_promises) 안내서
- {{jsxref("Promise")}}
- [`Promise()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
