---
title: Array.prototype.indexOf()
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`indexOf()`** 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.indexOf()")}}

```js interactive-example
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
```

## 구문

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 매개변수

- `searchElement`
  - : 배열에서 위치를 찾을 요소입니다.
- `fromIndex` {{optional_inline}}
  - : 검색을 시작할 0 기반 인덱스로, [정수로 변환됩니다](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환).
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. 즉, `fromIndex < 0`이면, `fromIndex + array.length`가 사용됩니다. 그러나, 이 경우에도 배열은 여전히 앞에서 뒤로 검색됩니다.
    - `fromIndex < -array.length`이거나 `fromIndex`가 생략되면, `0`이 사용되어 전체 배열이 검색됩니다.
    - `fromIndex >= array.length` 이면, 배열은 검색되지 않고 `-1`이 반환됩니다.

### 반환 값

배열에서 `searchElement`의 첫 번째 인덱스이고, 찾을 수 없으면 `-1`입니다.

## 설명

`indexOf()` 메서드는 [엄격한 동등성](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)을 사용하여 배열의 요소와 `searchElement`를 비교합니다(`===` 연산자가 사용하는 것과 동일한 알고리즘). [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN) 값은 절대 동일하게 비교되지 않으므로, `searchElement`가 `NaN`인 경우 `indexOf()`는 항상 `-1`을 반환합니다.

`indexOf()` 메서드는 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯을 건너뜁니다.

`indexOf()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### indexOf() 사용하기

다음 예제는 `indexOf()`를 사용하여 배열에서 값을 찾습니다.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

`indexOf()`를 사용하여 `NaN`을 검색할 수 없습니다.

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### 요소가 나타난 모든 위치 찾기

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 배열에 요소가 있는지 확인하고 배열 업데이트하기

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`새로운 veggies 컬력션은 ${veggies}`);
  } else {
    console.log(`${veggie}는 이미 veggies 컬렉션에 존재합니다.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// 새로운 veggies 컬력션은 potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach는 이미 veggies 컬렉션에 존재합니다.
```

### 희소배열에 indexOf() 사용하기

`indexOf()`를 사용하여 희소 배열에서 빈 슬롯을 검색할 수 없습니다.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### 배열이 아닌 객체에서 indexOf() 호출하기

`indexOf()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length가 3이므로 indexOf()에서 무시됩니다.
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.indexOf` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
