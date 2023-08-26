---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}} {{SeeCompatTable}}

**`flatMap()`** 메서드는 먼저 매핑함수를 사용해 각 엘리먼트에 대해 map 수행 후, 결과를 새로운 배열로 평탄화합니다. 이는 깊이 1의 [flat](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 이 뒤따르는 [map](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 과 동일하지만, `flatMap` 은 아주 유용하며 둘을 하나의 메소드로 병합할 때 조금 더 효율적입니다.

## 구문

```js
    arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
```

### 매개변수

- `callback`

  - : 새로운 배열의 엘리먼트를 생성하는 함수. 3개의 아규먼트를 갖습니다.

    - `currentValue`
      - : 배열에서 처리되는 현재 엘리먼트.
    - `index`{{optional_inline}}
      - : 배열에서 처리되고 있는 현재 엘리먼트의 인덱스.
    - `array`{{optional_inline}}
      - : `map` 이 호출된 배열.

- `thisArg`{{optional_inline}}
  - : `callback` 실행에서 `this` 로 사용할 값.

### 반환 값

각 엘리먼트가 callback 함수의 결과이고, 깊이 1로 평탄화된 새로운 배열.

## 설명

callback 함수의 상세 설명은 {{jsxref("Array.prototype.map()")}} 문서를 보시기 바랍니다. `flatMap` 메소드는 깊이 1의 [`flat`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 이 뒤따르는 [`map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 과 동일합니다.

## 예제

### `map` 과 `flatMap`

```js
let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 한 레벨만 평탄화됨
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

위 코드는 map 자체만을 사용해서 구현할 수 있지만, 다음은 `flatMap` 의 유즈케이스를 더 잘 보여주는 예시입니다.

문장의 리스트로부터 단어의 리스트를 생성해봅시다.

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in","","California"]
```

출력 리스트의 길이는 입력 리스트의 길이와 다를 수 있습니다.

### `flatMap()` 을 이용한 아이템 추가 및 제거

`flatMap`은 `map`을 하는 과정에서 아이템을 추가하거나 제거하여 아이템 개수를 바꿀 수 있습니다. 다른 말로는 각각의 아이템에 대하여 1:1대응관계 뿐만 아니라 다대다 대응도 가능하다는 것입니다. 이러한 측면에서 [filter](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)가 하는 역할의 반대역할을 한다고 볼 수 있습니다. 단순히 아무런 변화를 주고 싶지 않을때에는 원소 하나를 가진 배열을 반환할 수도, 아이템을 추가하고 싶을 때는 다-원소 배열을 반환할 수도, 아이템을 제거하고 싶을 때에는 빈 배열을 반환할 수도 있습니다.

```js
// 다음은 음수는 제거하고 홀수는 1과 짝수로 분리하는 예시입니다.
let a = [5, 4, -3, 20, 17, -33, -4, 18];
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap((n) => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1]));

// expected output: [4, 1, 4, 20, 16, 1, 18]
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 대안

### `reduce` 와 `concat`

```js
var arr1 = [1, 2, 3, 4];

arr1.flatMap((x) => [x * 2]);
// 다음과 동일합니다
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
