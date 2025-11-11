---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 2ce8f6f9d08cd6f10b77c4853ef5494c690b56b1
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 인스턴스의 **`take()`** 메서드는 이 반복자에서 주어진 숫자만큼의 요소를 산출하고 종료하는 새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다.

## 구문

```js-nolint
take(limit)
```

### 매개변수

- `limit`
  - : 순회 시작점부터 취할 요소의 수.

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다. 반환된 반복자 헬퍼는 원래 반복자의 요소들을 하나씩 산출하고, `limit` 개수만큼의 요소가 산출되었거나 원래 반복자가 소진되었을 때, 둘 중 먼저 발생하는 경우 완료됩니다 (`next()` 메서드가 `{ value: undefined, done: true }`를 생성합니다).

### 예외

- {{jsxref("RangeError")}}
  - : [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)시 `limit`가 {{jsxref("NaN")}} 되거나 음수일 경우에 발생합니다.

## 예제

### take() 사용하기

다음 예제는 피보나치 수열의 항을 생성하는 반복자를 들고, 처음 세 항을 출력합니다.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### for...of 루프와 같이 take() 사용하기

`take()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. 반복자도 순회 가능하기 때문에, 반환된 헬퍼를 {{jsxref("Statements/for...of", "for...of")}} 루프로 반복할 수 있습니다.

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// Logs:
// 1
// 1
// 2
// 3
// 5
```

`fibonacci()`는 무한 반복자이기 때문에 직접적으로 순회시키기 위해 `for` 루프를 사용할 필요가 없습니다.

### drop()과 take() 결합하기

반복자의 일부를 얻기 위해 `take()`과 {{jsxref("Iterator.prototype.drop()")}}을 같이 사용할 수 있습니다.

```js
for (const n of fibonacci().drop(2).take(5)) {
  // 첫 두 개의 요소를 버리고, 다음 5개를 취합니다
  console.log(n);
}
// 로그:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // 처음 5개를 취하고, 처음 2개를 버립니다
  console.log(n);
}
// 로그:
// 2
// 3
// 5
```

### take 갯수의 상단과 하단

`limit`가 음수거나 {{jsxref("NaN")}}일 경우 {{jsxref("RangeError")}}가 발생합니다.

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

`limit`가 반복자가 생성할 수 있는 총 요소 수보다 큰 경우({{jsxref("Infinity")}}와 같이), 반환된 반복자 헬퍼는 기본적으로 원래 반복자와 같이 행동합니다.

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// 로그:
// 1
// 2
// 3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.take` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.drop()")}}
