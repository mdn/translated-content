---
title: Iterator.prototype.drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 인스턴스의 **`drop()`** 메서드는 이 반복자의 시작점에서 주어진 숫자만큼의 요소를 지나치는 새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다.

## 구문

```js-nolint
drop(limit)
```

### 매개변수

- `limit`
  - : 순회 시작점부터 버릴 요소의 수.

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers)를 반환합니다. 반환된 반복자 헬퍼의 `next()` 메서드가 처음 호출될 때, 현재 반복자는 즉시 `limit` 개의 요소만큼 전진하고, 그 다음 요소(`limit+1`번째 요소)를 산출합니다. 그 후 반복자 헬퍼는 남은 요소들을 하나씩 산출합니다. 만약 현재 반복자가 `limit`개 미만의 요소를 가지고 있다면, 새로운 반복자 헬퍼는 `next()`가 처음 호출될 때 즉시 완료됩니다.

### 예외

- {{jsxref("RangeError")}}
  - : [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)시 `limit`가 {{jsxref("NaN")}} 되거나 음수일 경우에 발생합니다.

## 예제

### drop() 사용하기

다음 예제는 피보나치 수열의 항을 생성하는 반복자를 만들되, 처음 두 항을 버리고 3번째 항부터 시작하는 반복자를 생성합니다.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

이는 아래와 동일합니다.

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### for...of 루프와 같이 drop() 사용하기

`drop()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. 반복자도 순회 가능하기 때문에, 반환된 헬퍼를 {{jsxref("Statements/for...of", "for...of")}} 루프로 반복할 수 있습니다.

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### drop()과 take() 결합하기

반복자의 일부를 얻기 위해 `drop()`과 {{jsxref("Iterator.prototype.take()")}}을 같이 사용할 수 있습니다.

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
  // 처음 5개를 취하고, 처음 2개를 탈락시킵니다
  console.log(n);
}
// 로그:
// 2
// 3
// 5
```

### drop 갯수의 상단과 하단

`limit`가 음수거나 {{jsxref("NaN")}}일 경우 {{jsxref("RangeError")}}가 발생합니다.

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

`limit`가 반복자가 생성할 수 있는 총 요소 수보다 큰 경우(예: {{jsxref("Infinity")}}), 반환된 반복자 헬퍼는 `next()`가 처음 호출될 때 즉시 모든 요소를 버리고 완료됩니다. 만약 현재 반복자가 무한한 경우, 반환된 반복자 헬퍼는 절대 완료되지 않을 것입니다.

```js
fibonacci().drop(Infinity).next(); // Never ends
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Iterator.prototype.drop` 폴리필](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
