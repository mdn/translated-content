---
title: Array.prototype.toSpliced()
short-title: toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

{{jsxref("Array")}}의 **`toSpliced()`** 메서드는 {{jsxref("Array/splice", "splice()")}}에 대응되는 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) 메서드입니다. 이 메서드는 주어진 인덱스에서 일부 요소가 제거되거나 교체된 새로운 배열을 반환합니다.

## 구문

```js-nolint
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)
```

### 매개변수

- `start`
  - : 배열은 0부터 시작하는 인덱스로 변경되며, [정수로 변환됩니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - 음수 인덱스는 배열의 끝에서부터 카운트됩니다. 만약 `start < 0` 인 경우, `start + array.length`가 적용됩니다.
    - `start < -array.length`이거나 `start`가 생략된 경우, `0`이 적용됩니다.
    - `start >= array.length`인 경우 요소는 삭제되지 않지만, 메서드는 요소를 추가하는 추가 함수처럼 작동합니다.

- `deleteCount` {{optional_inline}}
  - : `start`에서부터 제거할 배열의 요소의 개수를 나타내는 수입니다.

    만약 `deleteCount`가 생략되거나, `deleteCount`가 `start` 인덱스 뒤의 요소의 개수보다 크거나 같으면 배열의 시작부터 끝까지 모든 요소가 삭제됩니다. 그러나 `itemN` 매개변수를 전달하려면 `Infinity`를 `deleteCount`로 전달하여 `start` 인덱스 뒤의 모든 요소를 삭제해야 합니다. 왜냐하면 `undefined`는 0으로 [변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)되기 때문입니다.

    `deleteCount`가 `0`이거나 음수라면, 요소가 제거되지 않습니다. 이 경우 새 요소를 하나 이상 지정해야 합니다. (아래 참조).

- `item1`, …, `itemN` {{optional_inline}}
  - : `start` 부터 시작하여 배열에 추가할 요소입니다.

    만약 명확한 요소를 지정하지 않으면, `toSpliced()`는 배열에서 요소만 제거합니다.

### 반환 값

`start` 전의 모든 요소, `item1`, `item2`, …, `itemN` 및 `start + deleteCount` 이후 모든 요소로 구성된 새로운 배열입니다.

## 설명

`splice()`와 비슷한 `toSpliced()`메서드는 여러 작업을 한 번에 수행합니다. 지정한 인덱스에서 시작하여 배열에서 지정한 수의 요소를 제거한 다음 동일한 인덱스에 지정된 요소를 삽입합니다. 그러나 원래 배열을 수정하는 대신 새로운 배열을 반환합니다. 따라서 삭제된 요소는 이 메서드에서 반환되지 않습니다.

`toSpliced()` 메서드는 절대 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)을 생성하지 않습니다. 만약 배열이 비어있다면 빈 슬롯은 새로운 배열에서 `undefined`로 대체됩니다.

`toSpliced()`메서드는 [제네릭](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `this`값에는 `length`속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예시

### 요소의 삭제, 추가 및 교체하기

`toSpliced()`를 사용하면 배열의 요소를 삭제, 추가 및 교체할 수 있으며, `slice()` 나 `concat()`를 사용하는 것 보다 더 효율적으로 새 배열을 만들 수 있습니다.

```js
const months = ["Jan", "Mar", "Apr", "May"];

// 인덱스 1에 요소 추가
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 인덱스 2부터 2개의 요소 삭제
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 인덱스 1의 한 요소를 두 개의 새로운 요소로 교체
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 원래 배열은 수정되지 않음
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### 희소 배열에서 toSpliced() 사용하기

`toSpliced()`메서드는 항상 밀집 배열을 생성합니다.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### 배열이 아닌 객체에서 toSpliced() 호출하기

`toSpliced()`메서드는 `this`속성의 `length`를 읽습니다. 그런 다음 필요한 정수 키 속성을 읽고 이를 새로운 배열에 작성합니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.toSpliced` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
