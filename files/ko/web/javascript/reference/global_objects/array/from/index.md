---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

{{JSRef}}

**`Array.from()`** 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운`Array` 객체를 만듭니다.

{{EmbedInteractiveExample("pages/js/array-from.html")}}

## 구문

```js
    Array.from(arrayLike[, mapFn[, thisArg]])
```

### 매개변수

- `arrayLike`
  - : 배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.
- `mapFn`{{Optional_inline}}
  - : 배열의 모든 요소에 대해 호출할 맵핑 함수.
- `thisArg`{{Optional_inline}}
  - : `mapFn` 실행 시에 `this`로 사용할 값.

### 반환 값

새로운 {{jsxref("Array")}} 인스턴스.

## 설명

다음과 같은 경우에 `Array.from()`으로새`Array`를 만들 수 있습니다.

- 유사 배열 객체 (`length` 속성과 인덱싱 된 요소를 가진 객체)
- [순회 가능한 객체](/ko/docs/Web/JavaScript/Guide/iterable) ({{jsxref("Map")}}, {{jsxref("Set")}} 등객체의 요소를 얻을 수 있는 객체)

`Array.from()`은 선택 매개변수인 `mapFn`를 가지는데, 배열(혹은 배열 서브클래스)의 각 요소를{{jsxref("Array.prototype.map", "맵핑", "", 0)}}할 때 사용할 수 있습니다. 즉,`Array.from(obj, mapFn, thisArg)`는 중간에 다른 배열을 생성하지 않는다는 점을 제외하면`Array.from(obj).map(mapFn, thisArg)`와 같습니다. 이 특징은 [typed arrays](/ko/docs/Web/JavaScript/Typed_arrays)와 같은 특정 배열 서브클래스에서 중간 배열 값이 적절한 유형에 맞게 생략되기 때문에 특히 중요합니다.

`from()` 메서드의 `length` 속성은 1입니다.

ES2015 이후, 클래스 구문은 내장 및 새 클래스의 상속을 가능케 했습니다. 그 결과로 `Array.from`과 같은 정적 메서드는 `Array`의 서브클래스에 의해 상속되며, `Array` 대신 자신의 인스턴스를 만듭니다.

## 예제

### `String`에서 배열 만들기

```js
Array.from("foo");
// ["f", "o", "o"]
```

### `Set`에서 배열 만들기

```js
const s = new Set(["foo", window]);
Array.from(s);
// ["foo", window]
```

### `Map`에서 배열 만들기

```js
const m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### 배열 형태를 가진 객체(`arguments`)에서 배열 만들기

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]
```

### `Array.from`과 화살표 함수 사용하기

```js
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### 시퀀스 생성기(range)

```js
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## 폴리필

`Array.from`은 ECMA-262 표준 제6판에 추가됐습니다.따라서 어떤 표준 구현체에서는 사용할 수 없을 수도 있습니다. 다른 모든 코드 이전에 아래 코드를 포함하면 지원하지 않는 플랫폼에서도`Array.from`을 사용할 수 있습니다. 아래 알고리즘은[`Object`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)와[`TypeError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError)가 변형되지 않고,`callback.call`의 계산 값이 원래의[`Function.prototype.call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)과 같은 경우ECMA-262 제6판이 명시한 것과 동일합니다. 또한 반복가능자(iterable)는 완벽하게 폴리필 할 수 없기에 본 구현은 ECMA-262 제6판의 제네릭 반복가능자를 지원하지 않습니다.

```js
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined",
        );
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function",
          );
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
