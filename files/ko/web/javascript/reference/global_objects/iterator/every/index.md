---
title: Iterator.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 인스턴스의 **`every()`** 메서드는 {{jsxref("Array.prototype.every()")}}와 비슷합니다. 반복자가 생성한 모든 요소가 주어진 함수에 의해 구현된 테스트를 통과하는지 여부를 시험합니다. 이 메서드는 불리언 값을 반환합니다.

## 구문

```js-nolint
every(callbackFn)
```

### 매개변수

- `callbackFn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. 해당 요소가 테스트를 통과하면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환해야 하며, 그렇지 않을 경우 [거짓 같은 값](/ko/docs/Glossary/Falsy)을 반환해야 합니다. 해당 함수는 다음과 같은 인자와 함께 호출됩니다.
    - `element`
      - : 처리 중인 현재 요소.
    - `index`
      - : 처리 중인 현재 요소의 인덱스.

### 반환 값

`callbackFn`이 모든 요소에 대해 {{Glossary("truthy", "참 같은 값")}}을 반환한다면 `true`, 그렇지 않으면 `false`를 반환합니다.

## 설명

`every()` 메서드는 반복자를 순회하며 각 요소에 대해 한 번씩 `callbackFn` 함수를 호출합니다. 해당 함수가 거짓 같은 값을 반환하면 즉시 `false`를 반환합니다. 그렇지 않으면 반복자의 끝까지 순회한 후 `true`를 반환합니다. `every()`가 `false`를 반환하면, 기본 반복자는 `return()` 메서드를 호출하면서 닫힙니다.

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. 무한 반복자의 경우, `every()`는 첫 번째 거짓 같은 값을 발견하는 즉시 `false`를 반환합니다. `callbackFn`이 항상 참 같은 값을 반환하면, 이 메서드는 절대 반환되지 않습니다.

## 예제

### every() 사용하기

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // 절대 완료 안됨
```

`every()` 메서드를 호출하면 항상 기본 반복자를 닫습니다. 이는 메서드가 조기에 반환되는 경우에도 마찬가지입니다. 반복자는 절대 중간 상태로 남겨지지 않습니다.

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.every` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
