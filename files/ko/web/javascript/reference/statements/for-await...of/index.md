---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jsSidebar("Statements")}}

**`for await...of`** 문은 [동기 이터러블](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)뿐만 아니라 [비동기 이터러블 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)를 순환하는 루프를 생성합니다. 이 문은 [비동기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function) 본문 내부 와 [모듈](/ko/docs/Web/JavaScript/Guide/Modules) 내부를 포함하여 [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await)를 사용할 수 있는 맥락에서만 사용할 수 있습니다.

{{EmbedInteractiveExample("pages/js/statement-forawaitof.html", "taller")}}

## 구문

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : 반복할 때마다 시퀀스에서 값을 받습니다. [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const), [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let), 또는 [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)를 사용한 선언이거나, [할당 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Assignment)의 대상일 수 있습니다. (예: 이전에 선언된 변수 또는 객체 속성) `var`로 선언된 변수는 루프에 대한 로컬이 아닙니다. 즉, 해당 변수는 `for await...of` 루프가 있는 동일한 범위에 있습니다.
- `iterable`
  - : 비동기 이터러블 또는 동기 이터러블입니다. 루프가 작동하는 값 시퀀스의 소스입니다.
- `statement`
  - : 반복할 때마다 실행할 명령문입니다. `variable`을 참조할 수 있습니다. [블록 문](/ko/docs/Web/JavaScript/Reference/Statements/block)을 사용하여 여러 문을 실행할 수 있습니다.

## 설명

`for await...of` 루프가 이터러블을 반복할 때, 먼저 [비동기 이터레이터](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)를 반환하는 이터러블의 [`[@@asyncIterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) 메서드를 가져와 호출합니다. `@asyncIterator` 메서드가 없으면 [동기 이터레이터](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)를 반환하는 [`[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 메서드를 찾습니다. 그런 다음 반환된 동기 이터레이터는 `next()`, `return()`, 그리고 `throw()` 메서드에서 반환된 모든 객체를 이행되거나 거부된 프로미스로 래핑하여 비동기 이터레이터로 래핑합니다. `value` 속성도 프로미스인 경우 이행됩니다. 그런 다음 루프는 최종 비동기 이터레이터의 [`next()`](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) 메서드를 반복적으로 호출하고 반환된 프로미스를 [await하며](/ko/docs/Web/JavaScript/Reference/Operators/await) 변수에 할당할 일련의 `value`를 생성합니다.

`for await...of` 루프가 일찍 종료되면(예: `break` 문이 발생하거나 오류가 발생한 경우) 정리를 수행하기 위해 이터레이터의 [`return()`](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) 메서드가 호출됩니다. 반환된 프로미스는 루프가 종료되기 전에 await됩니다.

`for await...of`는 일반적으로 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프와 동일하게 기능하며 동일한 구문과 의미를 공유합니다. 아래의 몇 가지 차이점은 있습니다.

- `for await...of`는 동기와 비동기 이터러블 모두에서 작동하지만 `for...of`는 동기 이터러블에서만 작동합니다.
- `for await...of`는 [비동기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function) 본문 내부와 [모듈](/ko/docs/Web/JavaScript/Guide/Modules)을 포함하여 [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await)를 사용할 수 있는 컨텍스트에서만 사용할 수 있습니다. 이터러블이 동기인 경우에도 루프는 여전히 매 순회마다 반환 값을 await하므로 반복되는 프로미스의 언래핑으로 인해 실행 속도가 느려집니다.
- `iterable`이 프로미스를을 yield하는 동기 이터러블인 경우 `for await...of`는 일련의 이행된 값을 생성하는 반면 `for...of`는 일련의 프로미스를 생성합니다. (그러나 오류 처리와 정리에 주의하세요. [동기 이터러블과 제너레이터에 순회](##동기_이터러블과_제너레이터_순회) 참조.)
- `for await...of`의 경우 `variable`은 `async`가 식별자 일 수 있습니다(예: `for await(async of foo)`). `for...of`는 이를 금지합니다.

## 예제

### 비동기 이터러블 순회

비동기 이터러블 프로토콜을 명시적으로 구현하는 객체를 반복할 수도 있습니다.

```js
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // 여긴 소비자가 루프 초기에 'break' 또는 'return'을 호출한 경우에 도달합니다.
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### 비동기 제너레이터 순회

비동기 제너레이터 함수의 반환 값은 비동기 이터러블 프로토콜을 준수하므로 `for await...of`를 사용하여 반복할 수 있습니다.

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

`for await...of`를 사용하여 비동기 제너레이터를 반복하는 보다 구체적인 예제를 위해 API에서 데이터를 순회하는 것을 생각해 보겠습니다.

이 예제는 먼저 데이터 스트림에 대한 비동기 이터러블을 생성한 다음, 이를 사용하여 API 응답의 크기를 찾습니다.

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// URL에서 데이터를 가져오고 비동기 제너레이터를 사용하여 응답 크기를 계산합니다.
async function getResponseSize(url) {
  const response = await fetch(url);
  // 응답 크기를 바이트 단위로 유지.
  let responseSize = 0;
  // for-await-of 루프. 비동기는 응답의 각 부분을 순회.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // 총 응답 길이 증가.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`); // "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### 동기 이터러블과 제너레이터 순회

`for await...of` 루프에서 동기 이터러블과 동기 제너레이터도 사용할 수 있습니다. 이 경우, 산출된 값을 루프 제어 변수에 할당하기 전에 내부적으로 await합니다.

```js
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async () => {
  for await (const num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

//  for-of 루프와 비교

for (const numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

> **참고:** 동기 제너레이터에서 거부된 프로미스 yield에 유의하세요. 이 경우 `for await...of`는 거부된 프로미스를 처리할 때 throw를 하고, 해당 제너레이터의 `finally` 블록을 **호출하지 않습니다**. 이것은 할당된 일부 리소스를 `try/finally`로 해제해야 하는 경우에 바람직하지 않을 수 있습니다.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught 3

// for-of 루프와 비교

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("caught", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// caught 5
// called finally
```

동기 제어레이터의 `finally` 블록을 항상 호출되게 만드려면, 루프의 적절한 형식(비동기 제너레이터의 경우 `for await...of`, 동기 제너레이터의 경우 `for...of`)을 사용하고 루프 내에서 명시적으로 yield된 프로미스를 await해야 합니다.

```js
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught 3
// called finally
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
