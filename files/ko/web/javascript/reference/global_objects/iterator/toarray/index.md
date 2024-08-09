---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 인스턴스의 **`toArray()`** 메서드는 해당 반복자로부터 산출된 요소와 함께 새로운 {{jsxref("Array")}} 인스턴스를 생성합니다.

## 구문

```js-nolint
toArray()
```

### 매개변수

없음.

### 반환 값

생성된 순서대로 반복자로부터 온 객체를 포함하는 {{jsxref("Array")}} 인스턴스입니다.

## 예제

### toArray() 사용하기

`iterator.toArray()`는 여러 개의 반복자 헬퍼 메서드가 관련된 경우 체인 연결이 더 쉽다는 점을 제외하면 `Array.from(iterator)` 및 '[...iterator]`와 동일합니다. 다음 예제는 피보나치 수열의 항을 산출하는 반복자를 만들고, 처음 10개의 항을 가져와 홀수를 거른 다음 결과를 배열로 변환하는 예제입니다.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const array = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();

console.log(array); // [2, 8, 34]
```

이 처리의 마지막 단계로 `toArray()`를 호출하는 것이 좋습니다. 예를 들어 `fibonacci().take(10).toArray().filter(...)`는 반복자 헬퍼가 느리고 임시 배열을 생성하지 않기 때문에 효율성이 떨어집니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.toArray` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
