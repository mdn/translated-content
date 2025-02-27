---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

{{jsxref("Iterator")}} 인스턴스의 **`filter()`** 메서드는 제공된 콜백 함수가 `true`를 반환하는 반복자의 요소만 산출한 새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다.

## 구문

```js-nolint
filter(callbackFn)
```

### 매개변수

- `callbackFn`
  - : 반복자에 의해 생성된 각 요소에 대해 실행될 함수. 해당 요소가 테스트를 통과하면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환해야 하며, 그렇지 않을 경우 [거짓 같은 값](/ko/docs/Glossary/Falsy)을 반환해야 합니다. 해당 함수는 다음과 같은 인자와 함께 호출됩니다.
    - `element`
      - : 처리 중인 현재 요소.
    - `index`
      - : 처리 중인 현재 요소의 인덱스.

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다. 반환된 반복자 헬퍼의 `next()` 메서드가 호출될 때마다, 콜백 함수가 `true`를 반환하는 다음 요소를 반환합니다. 현재 반복자가 완료될 때, 반복자 헬퍼는 역시 종료됩니다(`next()` 메서드는 `{ value: undefined, done: true }`를 산출합니다).

## 설명

배열 메서드에 비해 반복자 헬퍼의 주요 장점은 무한 반복자와 작업할 수 있다는 점입니다. 무한 반복자에서는 `filter()`는 주어진 조건을 만족하는 요소만을 순회할 수 있습니다.

## 예제

### filter() 사용하기

다음 예제는 피보나치 수열의 항을 산출하는 반복자를 만든 다음 짝수인 처음 몇 개의 항을 읽어오는 예제입니다.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### filter()를 for...of 루프와 함께 사용하기

`filter()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. 반복자도 순회 가능하기 때문에, 반환된 헬퍼를 {{jsxref("Statements/for...of", "for...of")}} 루프로 반복할 수 있습니다.

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```

이는 다음과 동일합니다.

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.filter` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
