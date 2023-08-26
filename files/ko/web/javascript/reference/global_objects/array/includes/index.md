---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
---

{{JSRef}}

**`includes()`** 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## 구문

```js
    arr.includes(valueToFind[, fromIndex])
```

### 매개변수

- `valueToFind`
  - : 탐색할 요소.> **참고:** 문자나 문자열을 비교할 때, `includes()`는 **대소문자를 구분**합니다.
- `fromIndex` {{optional_inline}}
  - : 이 배열에서 searchElement 검색을 시작할 위치입니다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.

### 반환 값

{{jsxref("Boolean")}}.

## 예제

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### `fromIndex` 가 배열의 길이보다 같거나 큰 경우

`fromIndex` 가 배열의 길이보다 같거나 크다면, `false` 를 반환합니다. 배열은 검색되지 않을 것입니다.

```js
var arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### 0보다 작은 인덱스의 계산

`fromIndex` 가 음수라면, 이 계산된 인덱스는 `valueToFind` 를 찾기 시작할 배열의 위치로 사용되기 위해 연산됩니다. 만약 계산된 인덱스가 `-1 * array.length` 보다 작거나 같다면, 전체 배열이 검색될 것입니다.

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

var arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### 제네릭 메소드로 사용되는 `includes()`

`includes()` 메서드는 의도적으로 제네릭입니다. 배열 객체가 되기 위한 `this` 값을 요구하지 않아, 다른 종류의 객체에 적용될 수 있습니다 (e.g. 유사 배열 객체). 아래 예시는 이 함수의 [arguments](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체로 호출되는 `includes()` 메소드를 보여줍니다.

```js
(function () {
  console.log([].includes.call(arguments, "a")); // true
  console.log([].includes.call(arguments, "d")); // false
})("a", "b", "c");
```

## 폴리필

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
