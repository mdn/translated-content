---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** 메서드는 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환합니다. 배열 탐색은 `fromIndex`에서 시작하여 뒤로 진행합니다.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## 구문

```js
    arr.lastIndexOf(searchElement[, fromIndex])
```

### 매개변수

- `searchElement`
  - : 배열에서 찾을 요소.
- `fromIndex` {{optional_inline}}
  - : 역순으로 검색을 시작할 인덱스. 배열의 길이에서 1을 뺀 값(`arr.length - 1`)이 기본값이므로 지정하지 않을 경우 전체 배열을 검색합니다. 주어진 값이 배열의 길이 이상이면 전체 배열을 검색합니다. 값이 음수인 경우, 배열의 마지막부터 시작하는 인덱스로 처리합니다. 다만, 음수를 제공하더라도 검색 순서는 뒤에서 앞입니다. 위의 모든 절차를 거친 최종 계산값이 0 미만인 경우, `lastIndexOf()`는 항상 -1을 반환합니다. 즉, 배열을 탐색하지 않습니다.

### 반환 값

주어진 값과 일치하는 마지막 요소의 인덱스, 없으면 -1.

## 설명

`lastIndexOf`는 일치 연산(`===` 연산자와 동일)을 사용해 `searchElement`와 각 요소를 비교합니다.

## 예제

### `lastIndexOf` 사용하기

다음 예제에서는 `lastIndexOf`를 사용하여 배열의 값을 찾습니다.

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

### 요소의 모든 항목 찾기

다음 예제에서는 `lastIndexOf`를 사용하여 {{jsxref("Array.prototype.push", "push")}}를 사용하여 지정된 배열의 요소 색인을 모두 찾아서 다른 배열에 추가합니다.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

배열의 첫 번째 요소 인 경우 요소가 fromIndex 매개 변수와 관계없이 항상 발견되므로 idx == 0 사례를 여기에서 개별적으로 처리해야합니다. 이는 {{jsxref ( "Array.prototype.indexOf", "indexOf")}} 메소드와 다릅니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
