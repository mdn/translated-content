---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

**`find()`** 메서드는 주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**을 반환합니다. 그런 요소가 없다면 {{jsxref("undefined")}}를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-find.html")}}

찾은 요소의 값 대신 **인덱스**를 반환하는 {{jsxref("Array.findIndex", "findIndex()")}} 메서드도 살펴보세요.

배열 요소의 위치를 찾고자 하는 경우에는 {{jsxref("Array.prototype.indexOf()")}}를 사용하세요.

배열 요소가 해당 배열에 존재하는지 확인하고자 하는 경우에는 {{jsxref("Array.prototype.indexOf()")}} 또는 {{jsxref("Array.prototype.includes()")}}를 사용세요.

## 구문

```js
    arr.find(callback[, thisArg])
```

### 매개변수

- `callback`
  - : 배열의 각 값에 대해 실행할 함수. 아래의 세 인자를 받습니다.
    - `element`
      - : 콜백함수에서 처리할 현재 요소.
    - `index`{{optional_inline}}
      - : 콜백함수에서 처리할 현재 요소의 인덱스.
    - `array`{{optional_inline}}
      - : `find` 함수를 호출한 배열.
- `thisArg`
  - : 선택 항목. 콜백이 호출될 때 `this`로 사용할 객체.

### 반환 값

주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**. 그 외에는 {{jsxref("undefined")}}.

## 설명

`find` 메서드는 `callback` 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 `callback` 함수를 실행합니다. 만약 어느 요소를 찾았다면 `find` 메서드는 해당 요소의 값을 즉시 반환하고, 그렇지 않았다면 {{jsxref("undefined")}}를 반환합니다. `callback`은 `0` 부터 `length - 1` 까지 배열의 모든 인덱스에 대해 호출되며, 값이 지정되지 않은 요소도 포함하여 모든 인덱스에 대해 호출됩니다. 따라서, 희소 배열 (sparse arrays)의 경우에는 값이 지정된 요소만 탐색하는 다른 메소드에 비해 더 비효율적입니다.

`callback`은 다음의 세가지 인자를 가지고 호출됩니다: 요소의 값, 요소의 인덱스, 순회의 대상이 되는 배열.

`thisArg` 파라미터가 주어진 경우에는 제공되었다면 `thisArg`가 `callback`안에서 `this`로 사용되고, 그렇지 않은 경우 {{jsxref("undefined")}} 가 `this`로 사용됩니다.

`find`는 호출의 대상이 된 배열을 변경(mutate)하지 않습니다.

`find`가 처리할 배열 요소의 범위는 첫 `callback`이 호출되기 전에 먼저 결정됩니다. `find`메서드가 실행 된 이후에 배열에 추가된 요소들에 대해서는 `callback`이 호출되지 않습니다. 아직 `callback`이 호출되지 않았던 배열 요소가 `callback`에 의해서 변경된 경우, `find`가 해당 요소의 인덱스를 방문할 때의 값으로 `callback`함수에 전달될 것입니다. 즉, 삭제된 요소에도 `callback`이 호출됩니다.

## 예제

### 속성 중 하나를 사용하여 배열에서 객체 찾기

```js
var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

#### ES2015 화살표 함수 사용하기

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find((fruit) => fruit.name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 배열에서 소수 찾기

다음 예제에서는 배열의 요소 중 소수인 요소를 찾습니다(소수가 없는 경우에는 {{jsxref("undefined")}}를 반환).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### 탐색 중 삭제된 배열 요소

다음 예제에서는 삭제되어 존재하지 않는 배열의 요소에도 `callback`이 호출되어 해당 시점의 값이 `callback`에 전달되는 것을 보여줍니다.

```js
// Declare array with no element at index 2, 3 and 4
var a = [0, 1, , , , 5, 6];

// Shows all indexes, not just those that have been assigned values
a.find(function (value, index) {
  console.log("Visited index " + index + " with value " + value);
});
// Shows all indexes, including deleted
a.find(function (value, index) {
  // Delete element 5 on first iteration
  if (index == 0) {
    console.log("Deleting a[5] with value " + a[5]);
    delete a[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index " + index + " with value " + value);
});
```

## 폴리필

`find`는 ECMAScript 2015 명세에 추가됐으므로 어떤 표준 구현체에서는 사용지 못할 수도 있습니다. 다른 모든 코드 이전에 아래 코드를 포함하면 `find`를 지원하지 않는 환경에서도 사용할 수 있습니다.

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true,
  });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.findIndex()")}} – 찾기 이후 인덱스 반환
- {{jsxref("Array.prototype.includes()")}} – 배열에 어떤 값이 존재하는지 검사
- {{jsxref("Array.prototype.filter()")}} – 매칭되는 모든 요소 찾기
- {{jsxref("Array.prototype.every()")}} – 모든 요소에 대해서 검사
