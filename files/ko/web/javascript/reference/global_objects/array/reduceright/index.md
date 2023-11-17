---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
---

{{JSRef}}

**`reduceRight()`** 메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}

왼쪽에서 오른쪽으로 {{jsxref("Array.prototype.reduce()")}}도 참조하십시오.

## 구문

```js
    arr.reduceRight(callback[, initialValue])
```

### 매개변수

- `callback`
  - : 4 개의 인수를 취하여 배열의 각 값에 대해 실행할 함수입니다._ `previousValue`
    _ : 콜백의 마지막 호출에서 이전에 리턴 된 값 또는 제공된 경우 initialValue. (아래 참조).
    - `currentValue`
      - : 배열에서 처리중인 현재 요소입니다.
    - `index`
      - : 배열에서 처리중인 현재 요소의 인덱스입니다.
    - `array`
      - : 배열 reduce가 호출되었습니다.
- `initialValue`
  - : 선택 과목. 콜백의 최초의 호출의 최초의 인수로서 사용하는 객체입니다.

### 반환 값

누적 계산의 결과를 반환합니다.

## 설명

`reduceRight는 배열의 구멍을 제외하고 배열에있는 각 요소에 대해 콜백 함수를 한 번 실행합니다.이 인수는 초기 값 (또는 이전 콜백 호출의 값), 현재 요소의 값, 현재 인덱스 및 반복이 일어나는 배열.`

reduceRight 콜백 호출은 다음과 같습니다.

```js
array.reduceRight(function (previousValue, currentValue, index, array) {
  // ...
});
```

함수가 처음 호출 될 때 previousValue 및 currentValue는 두 값 중 하나가 될 수 있습니다. reduceValue에 대한 호출에 initialValue가 제공된 경우 previousValue는 initialValue와 같고 currentValue는 배열의 마지막 값과 같습니다. initialValue가 제공되지 않으면 previousValue는 배열의 마지막 값과 같고 currentValue는 두 번째 - 마지막 값과 같습니다.

배열이 비어 있고 initialValue가 제공되지 않으면 {{jsxref ( "TypeError")}}가 발생합니다. 배열에 요소가 1 개만 있어도 (위치에 관계없이) initialValue가 제공되지 않았던 경우, 또는 initialValue가 준비되어 있지만 배열이 비어있는 경우, 콜백을 호출하지 않고 솔로 값이 반환됩니다.

함수의 일부 실행 예제는 다음과 같습니다.

```js
[0, 1, 2, 3, 4].reduceRight(
  function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  },
);
```

콜백은 네 번 호출되며 각 호출의 인수와 반환 값은 다음과 같습니다.

| `previousValue` | `currentValue` | `index` | `array` | return value      |      |
| --------------- | -------------- | ------- | ------- | ----------------- | ---- |
| first call      | `4`            | `3`     | `3`     | `[0, 1, 2, 3, 4]` | `7`  |
| second call     | `7`            | `2`     | `2`     | `[0, 1, 2, 3, 4]` | `9`  |
| third call      | `9`            | `1`     | `1`     | `[0, 1, 2, 3, 4]` | `10` |
| fourth call     | `10`           | `0`     | `0`     | `[0, 1, 2, 3, 4]` | `10` |

reduceRight에 의해 반환 된 값은 마지막 콜백 호출 (10)의 값이됩니다.

initialValue를 제공하면 결과는 다음과 같습니다.

```js
[0, 1, 2, 3, 4].reduceRight(function (
  previousValue,
  currentValue,
  index,
  array,
) {
  return previousValue + currentValue;
}, 10);
```

| `previousValue` | `currentValue` | `index` | `array` | return value      |      |
| --------------- | -------------- | ------- | ------- | ----------------- | ---- |
| first call      | `10`           | `4`     | `4`     | `[0, 1, 2, 3, 4]` | `14` |
| second call     | `14`           | `3`     | `3`     | `[0, 1, 2, 3, 4]` | `17` |
| third call      | `17`           | `2`     | `2`     | `[0, 1, 2, 3, 4]` | `19` |
| fourth call     | `19`           | `1`     | `1`     | `[0, 1, 2, 3, 4]` | `20` |
| fifth call      | `20`           | `0`     | `0`     | `[0, 1, 2, 3, 4]` | `20` |

reduceRight에 의해 이번에 반환 된 값은 물론 20입니다.

## 예제

### 배열 내 모든 값의 합계 구하기

```js
var sum = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
});
// sum is 6
```

### 이중 배열 전개하기

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### reduce와 reduceRight의 차이점

```js
var a = ["1", "2", "3", "4", "5"];
var left = a.reduce(function (prev, cur) {
  return prev + cur;
});
var right = a.reduceRight(function (prev, cur) {
  return prev + cur;
});

console.log(left); // "12345"
console.log(right); // "54321"
```

## 폴리필

`reduceRight`는 5 판에서 ECMA-262 표준에 추가되었습니다. 표준의 모든 구현에 존재하지 않을 수도 있습니다. 이 문제를 해결하려면 스크립트 시작 부분에 다음 코드를 삽입하여 reduceRight를 기본적으로 지원하지 않는 구현에서 사용할 수있게하십시오.

```js
// ECMA-262, 5 판, 15.4.4.22의 제작 단계
// 참조 : http://es5.github.io/#x15.4.4.22
if ("function" !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callback /*, initialValue*/) {
    "use strict";
    if (null === this || "undefined" === typeof this) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if ("function" !== typeof callback) {
      throw new TypeError(callback + " is not a function");
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = len - 1,
      value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !(k in t)) {
        k--;
      }
      if (k < 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.reduce()")}}
