---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

**`fill()`** 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## 구문

```js
    arr.fill(value[, start[, end]])
```

### 매개변수

- `value`
  - : 배열을 채울 값.
- `start` {{optional_inline}}
  - : 시작 인덱스, 기본 값은 0.
- `end` {{optional_inline}}
  - : 끝 인덱스, 기본 값은 `this.length`.

### 반환 값

변형한 배열.

## 설명

`fill` 메서드는 `value`, `start`, `end`의 3개 인자를 가집니다. `start`와 `end` 인자는 선택 사항으로써 기본값으로 각각 `0`과, `this` 객체의 `length`를 가집니다.

`length`가 배열의 길이일 때, `start`가 음수이면 시작 인덱스는 `length+start`입니다. `end`가 음수이면 끝 인덱스는 `length+end`입니다.

`fill`은 일반 함수이며, `this` 값이 배열 객체일 필요는 없습니다.

`fill` 메서드는 변경자 메서드로, 복사본이 아니라 `this` 객체를 변형해 반환합니다.

`value`에 객체를 받을 경우 그 참조만 복사해서 배열을 채웁니다.

## 예제

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## 폴리필

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, "fill", {
    value: function (value) {
      // Steps 1-2.
      if (this == null) {
        throw new TypeError("this is null or not defined");
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      // Step 11.
      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    },
  });
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
