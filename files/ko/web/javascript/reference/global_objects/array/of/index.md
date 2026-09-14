---
title: Array.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`array.of()`** 정적 메서드는 인자의 수나 유형에 관계없이 가변적인 수의 인자로부터 새로운 `Array` 인스턴스를 생성합니다.

{{InteractiveExample("JavaScript Demo: Array.of()", "shorter")}}

```js interactive-example
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []
```

## 구문

```js-nolint
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)
```

### 매개변수

- `element1`, …, `elementN`
  - : 배열을 생성할 때 사용할 요소.

### 반환 값

새로운 {{jsxref("Array")}} 객체.

## 설명

`Array.of()`와 [`Array()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) 생성자의 차이점은 단일 인수를 처리하는 데 있습니다. `Array.of(7)`는 단일 요소 `7`을 가진 배열을 생성하는 반면, `Array(7)`는 `length` 속성이 `7`인 빈 배열을 생성합니다. (이는 실제 {{jsxref("undefined")}} 값을 가진 슬롯이 아닌 7개의 빈 슬롯으로 구성된 배열을 의미합니다.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

`Array.of()` 메서드는 일반 팩토리 메서드입니다. 예를 들어, `Array`의 하위 클래스가 `of()` 메서드를 상속하는 경우, 상속된 `of()` 메서드는 `Array` 인스턴스 대신 하위 클래스의 새 인스턴스를 반환합니다. 실제로 `this` 값은 새 배열의 길이를 나타내는 단일 인수를 받는 생성자 함수가 될 수 있으며, 생성자는 `of()`에 전달된 인자 수로 호출됩니다. 최종 `length`는 모든 요소가 할당되면 다시 설정됩니다. `this` 값이 생성자 함수가 아닌 경우 일반 `Array` 생성자가 대신 사용됩니다.

## 예제

### Array.of() 사용하기

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### 배열이 아닌 생성자에서 of() 호출하기

`of()` 메서드는 새 배열의 길이를 나타내는 단일 인수를 받는 모든 생성자 함수에서 호출할 수 있습니다.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray 길이를 3으로 호출하였습니다.
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

`this` 값이 생성자가 아닐 때, 평범함 `Array` 객체가 생성됩니다.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.of`의 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
