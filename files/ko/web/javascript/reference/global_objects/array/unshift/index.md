---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

**`unshift()`** 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## 구문

```js
arr.unshift([...elementN]);
```

### 매개변수

- `elementN`
  - : 배열 맨 앞에 추가할 요소.

### 반환 값

메서드를 호출한 배열의 새로운 {{jsxref("Array.length", "length")}} 속성.

## 설명

`unshift` 메서드는 배열 형태의 객체 시작점에 주어진 값을 삽입합니다.

`unshift`는 제네릭하도록 설계되었으며, 배열 형태를 가진 객체가 {{jsxref("Function.call", "호출", "", 1)}}하거나 객체에 {{jsxref("Function.apply", "적용", "", 1)}}할 수 있습니다. `length` 속성을 가지지 않고, 대신 마지막 요소를 0부터 시작하는 순차적 인덱스로만 나타내는 객체에서는 의도한 것과 다르게 행동할 수 있습니다.

## 예제

```js
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
