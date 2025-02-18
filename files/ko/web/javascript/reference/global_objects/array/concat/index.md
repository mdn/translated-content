---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`concat()`** 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## 구문

```js-nolint
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* …, */ valueN)
```

### 매개변수

- `valueN` {{optional_inline}}
  - : 새 배열로 연결할 배열 및/또는 값입니다. 모든 `valueN` 매개변수가 생략된 경우,
    `concat`은 호출된 기존 배열의 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 반환합니다. 자세한 내용은 아래 설명을 참조하세요.

### 반환값

새로운 {{jsxref("Array")}} 객체.

## 설명

`concat` 메서드는 새 배열을 만듭니다. 먼저 배열은 호출된 객체의 요소로 채워집니다. 그런 다음, 각 인자의 값이 배열에 연결됩니다. 일반 객체나 원시 값의 경우, 인자 자체가 최종 배열의 요소가 되고, [`Symbol.isConcatSpreadable`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) 속성이 참 값으로 설정된 배열 또는 유사 배열 객체인 경우, 인자의 각 요소가 최종 배열에 독립적으로 추가됩니다. `concat` 메서드는 중첩된 배열 인자로 재귀하지 않습니다.

`concat()` 메서드는 [복사 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#메서드_복사_및_메서드_변경)입니다. 이 메서드는 이 배열 또는 인자로 제공된 배열을 변경하지 않는 대신, 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 반환합니다.

`concat()` 메서드는 소스 배열 중 하나라도 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)이 있다면 배열의 빈 슬롯을 보존합니다.

`concat()` 메서드는 [범용 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값은 다른 인자와 동일한 방식으로 처리됩니다(객체로 먼저 변환된다는 점을 제외하면). 즉, 일반 객체는 결과 배열 바로 앞에 붙고, `@@isConcatSpreadable`이 참인 유사 배열 객체는 결과 배열에 전개됩니다.

## 예제

### 두 배열 연결

다음 예제는 두 배열을 연결합니다.

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// 결과는 ['a', 'b', 'c', 1, 2, 3]
```

### 세 배열 연결

다음 예제는 세 배열을 연결합니다.

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// 결과는 [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 값을 배열에 연결

다음 코드는 세 개의 값을 배열에 연결합니다.

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// 결과는 ['a', 'b', 'c', 1, 2, 3]
```

### 중첩된 배열 연결

다음 코드는 중첩된 배열을 연결하고 참조 유지를 설명합니다.

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// 결과는 [[1], 2, [3]]

// num1의 첫 번째 요소를 수정합니다.
num1[0].push(4);

console.log(numbers);
// 결과는 [[1, 4], 2, [3]]
```

### Symbol.isConcatSpreadable을 이용하여 유사 배열 객체 연결

`concat`은 기본적으로 모든 유사 배열 객체를 배열로 취급하지 않으며, `Symbol.isConcatSpreadable`이 참인 값(예: `true`)으로 설정된 경우에만 배열로 취급합니다.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### 희소 배열에 concat() 사용

소스 배열 중 하나라도 희소 배열이 있으면, 결과 배열도 희소 배열이 됩니다.

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### 배열이 아닌 객체에 concat() 사용

`this` 값이 배열이 아닌 경우, `this`를 객체로 변환된 다음 `concat()`의 인자와 동일한 방식으로 처리합니다. 이 경우 반환 값은 항상 중첩이 없는 새 배열입니다.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // length가 2이므로 concat()에서 무시됨
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`Symbol.isConcatSpreadable` 지원과 같은 최신 동작을 수정하고 구현한 `core-js`의 `Array.prototype.concat` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
