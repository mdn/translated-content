---
title: Array.prototype.copyWithin()
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 6e8ca9ecc4bfd14ea5c46d4817f189eecacb8296
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`copyWithin()`** 메서드는 배열의 일부를 같은 배열의 다른 위치로 얕게 복사하며, 배열의 길이를 수정하지 않고 해당 배열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.copyWithin()")}}

```js interactive-example
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

## 구문

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 매개변수

- `target`
  - : 시퀀스를 복사할 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. 이는 `start`에 있는 요소가 복사될 위치에 해당하며, `start`과 `end` 사이의 모든 요소는 후속 인덱스에 복사됩니다.
    - 음수 인덱스는 배열의 끝부터 셉니다. `-array.length <= target < 0`이라면, `target + array.length`이 사용됩니다.
    - `target < -array.length`이면, `0`이 사용됩니다.
    - `target >= array.length`이면, 아무것도 복사되지 않습니다.
    - 정수 변환 후 `target`이 `start` 보다 뒤에 위치하면, `array.length`의 끝부분까지만 복사가 수행됩니다(즉, `copyWithin()`은 배열을 확장하지 않습니다).
- `start`
  - : 요소 복사를 시작할 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다.
    - 음수 인덱스는 배열의 끝부터 셉니다. `-array.length <= start < 0`이라면, `target + array.length`이 사용됩니다.
    - `target < -array.length`이면, `0`이 사용됩니다.
    - `target >= array.length`이면, 아무것도 복사되지 않습니다.
- `end` {{optional_inline}}
  - : 요소 복사를 끝낼 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. `copyWithin()`은 `end`를 포함하지 않고 `end`전 까지 복사합니다.
    - 음수 인덱스는 배열의 끝부터 셉니다. `-array.length <= end < 0`이라면, `target + array.length`이 사용됩니다.
    - `target < -array.length`이면, `0`이 사용됩니다.
    - `end >= array.length` 이거나 `end`가 생략되면, `array.length`가 사용됩니다. 이는 끝까지 모든 요소를 복사하는 것이 됩니다.
    - `end`가 `start`가 암시하는 위치나 그 앞의 위치를 암시하는 경우 아무것도 복사되지 않습니다.

### 반환 값

변경된 배열입니다.

## 설명

`copyWithin()` 메서드는 C와 C++의 `memmove`처럼 작동하며, {{jsxref("Array")}}의 데이터를 이동하는 고성능 메서드입니다. 이는 특히 같은 이름의 메서드를 가진 {{jsxref("TypedArray/copyWithin", "TypedArray")}}에서도 적용됩니다. 시퀀스는 하나의 작업으로 복사와 붙여넣기가 이루어집니다. 복사 붙여넣기 영역이 겹치더라도 붙여넣은 시퀀스는 복사된 값을 갖습니다.

`undefined`를 정수로 변환하면 `0`이 되므로, `start` 매개변수를 생략하면 `0`을 전달하여 전체 배열을 target 위치로 복사하는 것과 동일한 효과가 있습니다. 이는 오른쪽 경계가 잘리고 왼쪽 경계가 복제되는 오른쪽 시프트와 같습니다. 이 동작은 코드를 읽는 사람에게 혼란을 줄 수 있으므로 명시적으로 `0`을 `start`로 전달하는것이 좋습니다.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; 모든 요소를 오른쪽으로 2칸 이동합니다.
```

`copyWithin()` 메서드는 [변경 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드)입니다. `this`의 길이를 변경하진 않지만, 필요한 경우 `this`의 내용을 변경하고, 새 속성을 만들거나 기존 속성을 삭제합니다.

`copyWithin()` 메서드는 빈 슬롯을 보존합니다. 복사할 영역이 [희소](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)인 경우, 빈 슬롯의 해당 새 인덱스에 있는 항목은 [삭제](/ko/docs/Web/JavaScript/Reference/Operators/delete)되고 빈 슬롯이 됩니다.

`copyWithin()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에 `length` 속성과 정수 키 속성 만을 기대합니다. 문자열도 유사 배열이지만, 문자열은 불변이므로 이 메서드를 적용하기에는 적합하지 않습니다.

## 예제

### copyWithin() 사용하기

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### 희소 배열에서 copyWithin() 사용하기

`copyWithin()`은 빈 슬롯을 전파합니다.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### copyWithin()을 배열이 아닌 객체에 적용하기

`copyWithin()` 메서드는 `this`의 `length` 속성을 읽은 다음 관련된 정수 인덱스를 변경합니다.

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// 복사된 소스가 빈 슬롯이므로 '3' 속성이 삭제됩니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.copyWithin` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
