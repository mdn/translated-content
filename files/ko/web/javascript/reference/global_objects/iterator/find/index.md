---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

**`find()`** 메서드는 {{jsxref("Iterator")}} 인스턴스의 메서드로, {{jsxref("Array.prototype.find()")}}와 유사합니다. 이 메서드는 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 만약 테스트 함수를 만족하는 값이 없다면, {{jsxref("undefined")}}가 반환됩니다.

## 구문

```js-nolint
find(callbackFn)
```

### 매개변수

- `callbackFn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. 일치하는 요소를 찾으면 반드시 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환해야 합니다. 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 해당 함수는 다음과 같은 인자와 함께 호출됩니다.
    - `element`
      - : 처리 중인 현재 요소.
    - `index`
      - : 처리 중인 현재 요소의 인덱스.

### 반환 값

제공된 테스트 함수를 만족하는 반복자가 생성한 첫 번째 요소입니다. 그렇지 않으면, {{jsxref("undefined")}}이 반환됩니다.

## 설명

`find()` 메서드는 반복자를 순회하며 각 요소에 대해 한 번씩 `callbackFn` 함수를 호출합니다. 콜백 함수가 참 같은 값을 반환하면 즉시 해당 요소를 반환합니다. 그렇지 않으면 반복자의 끝까지 순회하고 `undefined`를 반환합니다. `find()`가 요소를 반환하면, 기본 반복자는 `return()` 메서드를 호출하여 닫힙니다.

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. 무한 반복자에서는 `find()`는 조건에 만족하는 첫 번째 요소를 발견하면 그 즉시 반환합니다. `callbackFn` 언제나 거짓 같은 값을 반환한다면, 메서드는 절대 반환하지 않습니다.

## 예제

### find() 사용하기

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
console.log(fibonacci().find(isEven)); // 2

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).find(isNegative)); // undefined
console.log(fibonacci().find(isNegative)); // Never completes
```

`find()` 메서드를 호출하면 항상 기본 반복자를 닫습니다. 이는 메서드가 조기에 반환되는 경우에도 마찬가지입니다. 반복자는 절대 중간 상태로 남겨지지 않습니다.

```js
const seq = fibonacci();
console.log(seq.find(isEven)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.find` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
