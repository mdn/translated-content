---
title: Array.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`with()`** 메서드는 주어진 인덱스의 값을 변경하기 위해 [대괄호 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)을 사용하는 것의 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) 버전입니다. 이 함수는 지정된 인덱스의 요소가 지정된 값으로 대체된 새 배열을 반환합니다.

## 구문

```js-nolint
array.with(index, value)
```

### 매개변수

- `index`
  - : 배열을 변경할 0 기반 인덱스이며 [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)되는 값입니다.
    - 음수 인덱스는 배열의 끝부터 역산합니다 — `index < 0`인 경우 `index + array.length`가 사용됩니다.
    - 정규화 후 인덱스가 범위를 벗어나면, {{jsxref("RangeError")}}가 발생합니다.
- `value`
  - : 주어진 인덱스에 할당할 값입니다.

### 반환 값

`index`의 요소 값이 `value`로 대체된 새로운 배열.

### 예외

- {{jsxref("RangeError")}}
  - : `index > array.length` 혹은 `index < -array.length` 일때 발생합니다.

## 설명

`with()` 메서드는 배열에서 주어진 인덱스의 값을 변경하여, 주어진 인덱스에 있는 요소가 주어진 값으로 대체된 새 배열을 반환합니다. 원래 배열은 수정되지 않습니다. 이를 통해 조작을 수행하는 동안 배열 메서드를 연속으로 이어서 호출 할 수 있습니다.

`with()` 메서드는 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소배열)을 생성하지 않습니다. 만약 원래 배열이 희소 배열인 경우 빈 슬롯은 새로운 배열에서 `undefined`으로 대체됩니다.

`with()` 메서드는 [제네릭](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods) 메서드입니다. 이 메서드는 `this` 값에 `length` 속성과 정수 키 속성 만을 필요로 합니다.

## 예제

### 하나의 요소만 변경한채로 새로운 배열을 만들기

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### 배열 메서드 연속하여 연결하기

`with()` 메서드를 사용하면 배열의 단일 요소를 업데이트한 후 다른 배열 메서드를 적용할 수 있습니다.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### 희소 배열에서 with() 사용하기

`with()` 메서드는 언제나 밀집 배열을 생성합니다.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### 배열이 아닌 객체에서 with() 호출하기

`with()` 메서드는 `this`의 `length` 속성을 읽습니다. 그리고 `this`의 정수 키 속성을 읽어서 새 배열에 쓰고,
`value`는 주어진 `index`에 씁니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("TypedArray.prototype.with()")}}
