---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

**`Symbol.asyncIterator`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncIterator`를 나타냅니다.
[비동기 순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_proocols#the_async_iterator_and_async_iterable_proocols)은 객체에 대한 비동기 반복기를 반환하는 메서드에 대해 이 심볼을 검색합니다. 객체가 비동기 순회가 되려면 `Symbol.asyncIterator` 키가 있어야 합니다.

{{InteractiveExample("JavaScript Demo: Symbol.asyncIterator", "taller")}}

```js interactive-example
const delayedResponses = {
  delays: [500, 1300, 3500],

  wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  },

  async *[Symbol.asyncIterator]() {
    for (const delay of this.delays) {
      await this.wait(delay);
      yield `Delayed response for ${delay} milliseconds`;
    }
  },
};

(async () => {
  for await (const response of delayedResponses) {
    console.log(response);
  }
})();

// Expected output: "Delayed response for 500 milliseconds"
// Expected output: "Delayed response for 1300 milliseconds"
// Expected output: "Delayed response for 3500 milliseconds"
```

## 값

잘 알려진 심볼 `Symbol.asyncIterator`.

{{js_property_attributes(0, 0, 0)}}

## 예제

### 사용자 정의 비동기 순회

객체에 `[Symbol.asyncIterator]` 속성을 설정하여 자신만의 비동기 순회를 정의할 수 있습니다.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
  }
})();
// Logs:
// "hello"
// "async"
// "iteration!"
```

API를 만들 때 비동기 순회는 대부분의 상황에서 콜백이나 이벤트를 완전히 대체하는 것이 아니라 데이터 스트림이나 목록과 같이 순회를 표현하도록 설계되었음을 기억하시기 바랍니다.

### 내장 비동기 순회

핵심 JavaScript 언어에는 비동기 순회 가능한 객체가 없습니다. {{domxref("ReadableStream")}}와 같은 일부 웹 API에는 기본적으로 `Symbol.asyncIterator` 메서드가 설정되어 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/ko/docs/Web/JavaScript/Reference/Statements/for-await...of)
