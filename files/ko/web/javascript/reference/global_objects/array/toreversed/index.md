---
title: Array.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`toReversed()`** 메서드는 {{jsxref("Array/reverse", "reverse()")}}에 대응되는 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) 메서드입니다. 이 메서드는 요소들을 반대로 뒤집은 새로운 배열을 반환합니다.

## 구문

```js-nolint
toReversed()
```

### 매개변수

없음.

### 반환 값

역순으로 정렬된 새로운 배열을 반환합니다.

## 설명

`toReversed()` 메서드는 호출한 배열 객체의 요소를 반대로 변경하고 새로운 배열을 반환합니다.

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)에서 사용할 때, `toReversed()` 메서드는 빈 슬롯을 `undefined` 값으로 간주하고 반복합니다.

`toReversed()` 메서드는 [범용적](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값이 `length` 속성과 정수로 키가 지정된 속성을 가지고 있다고 기대합니다.

## 예제

### 배열의 요소를 반대로 뒤집기

다음 예제는 세 개의 요소를 가진 `items` 배열을 생성하고, 이를 반대로 뒤집은 새로운 배열을 생성합니다. `items` 배열은 변경되지 않습니다.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### 희소 배열에서 toReversed() 사용하기

`toReversed()`의 반환 값은 절대 희소 배열이 아닙니다. 빈 슬롯은 반환된 배열에서 `undefined`가 됩니다.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### 배열이 아닌 객체에서 toReversed() 호출하기

`toReversed()` 메서드는 `this`의 `length` 속성을 읽습니다. 그런 다음 `length - 1`과 `0` 사이의 각 인덱스를 내림차순으로 방문하고, 원래 배열의 해당 인덱스의 값을 새 배열의 해당 인덱스에 추가합니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// '0'번과 '1'번 인덱스가 없기 때문에 undefined가 됩니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.prototype.toReversed` 폴리필](https://github.com/zloirock/core-js#change-array-by-copy)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
