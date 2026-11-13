---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`map()`** 메서드는 호출하는 형식화 배열의 모든 요소에 제공된 함수의 호출 결과로 채워진 새로운 형식화 배열을 생성합니다. 이 메서드는 {{jsxref("Array.prototype.map()")}}와 동일한 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.map()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([25, 36, 49]);
const roots = uint8.map(Math.sqrt);

console.log(roots);
// Expected output: Uint8Array [5, 6, 7]
```

## 구문

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 매개변수

- `callback`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `map()`이 호출된 형식화 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하시기 바랍니다.

### 반환 값

각 요소가 콜백 함수의 결과인 새로운 형식화 배열입니다.

## 설명

보다 자세한 내용은 {{jsxref("Array.prototype.map()")}}을 참고하시기 바랍니다. 이 메서드는 범용적이지 않으며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 형식화 배열을 입력된 제곱근 형식화 배열에 매핑하기

다음 코드는 형식화 배열을 받아서 첫 번째 형식화 배열에 있는 숫자의
제곱근 값을 포함하는 새로운 형식화 배열을 생성합니다.

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots는 이제 Uint8Array [1, 2, 3] 값이 되며
// numbers는 여전히 Uint8Array [1, 4, 9] 입니다.
```

### 인수가 포함된 함수를 사용하여 숫자로 된 형식화 배열 매핑하기

다음 코드는 `map()`이 하나의 인수를 필요로 하는 함수와 함께 사용될 때
어떻게 작동하는지 보여줍니다. 인수는 `map()`이 원래 입력된 배열을 반복할 때
입력된 배열의 각 요소에 자동으로 할당됩니다.

```js
const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map((num) => num * 2);
// doubles 은 이제 Uint8Array [2, 8, 18] 이며
// numbers 여전히 Uint8Array [1, 4, 9] 입니다
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.map` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Map")}}
