---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`fill()`** 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경합니다. 그리고 수정된 배열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.fill()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

## 구문

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 매개변수

- `value`
  - : 배열을 채울 값입니다. 배열의 모든 요소는 정확히 이 값이 될 것입니다. `value`가 객체인 경우, 배열의 각 슬롯은 해당 객체를 참조합니다.
- `start` {{optional_inline}}
  - : 채우기를 시작할 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다.
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. `start < 0`인 경우, `start + array.length`가 사용됩니다.
    - `start < -array.length` 또는 `start`가 생략된 경우, `0`이 사용됩니다.
    - `start >= array.length`이면, 아무 인덱스도 채워지지 않습니다.
- `end` {{optional_inline}}
  - : 채우기를 끝낼 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. `fill()`은 `end`까지 채우며, `end`는 포함하지 않습니다.
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. `end < 0`인 경우, `end + array.length`가 사용됩니다.
    - `end < -array.length` 이면, `0`이 사용됩니다.
    - `end >= array.length` 이거나 `end`가 생략된 경우, `array.length`가 사용되어 끝까지 모든 인덱스가 채워집니다.
    - `end`가 정수로 변환된 후, `after`보다 앞에 위치하면, 아무 인덱스도 채워지지 않습니다.

### 반환 값

`value`로 채워진 변경된 배열입니다.

## 설명

`fill()` 메서드는 [변경 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드)입니다. 이 메서드는 `this`의 length는 변경하지 않지만, `this`의 내용은 변경합니다.

`fill()` 메서드는 [희소](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열) 배열의 빈 슬롯도 `value`로 채웁니다.

`fill()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성만 있을 것으로 예상합니다. 문자열도 유사 배열이지만, 문자열은 불변이므로 이 메서드를 적용하기에는 적합하지 않습니다.

> [!NOTE]
> 빈 배열(`length = 0`)에 `Array.prototype.fill()`을 사용하면 배열에 수정할 내용이 없으므로 배열이 수정되지 않습니다.
> 배열을 선언할 때 `Array.prototype.fill()`을 사용하려면 배열의 길이가 0이 아닌지 확인하세요.
> [예제](#fill을_사용하여_빈_배열_채우기)를 참조하십시오.

## 예제

### fill() 사용하기

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 배열의 각 슬롯이 참조하는 단일 객체
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### fill()을 사용하여 전체 1 행렬로 만들기

이 예제는 Octave 또는 MATLAB의 `ones()` 함수와 같이 전체 1 행렬을 만드는 방법을 보여줍니다.

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 크기가 4이고, 1로 채워진 배열 생성
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### fill()을 사용하여 빈 배열 채우기

이 예제는 모든 요소를 특정 값으로 설정하여 배열을 채우는 방법을 보여줍니다. `end` 매개변수는 지정할 필요가 없습니다.

```js
const tempGirls = Array(5).fill("girl", 0);
```

이 배열은 처음에 인덱스가 할당되지 않은 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)이었습니다. 그래도 `fill()`은 여전히 이 배열을 채울 수 있습니다.

### 배열이 아닌 객체에서 fill() 호출하기

`fill()` 메서드는 `this`의 `length` 속성을 읽고 `start`부터 `end`까지 각 정수 키 속성 값을 설정합니다.

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.fill` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
