---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---

{{JSRef}}

**`some()`** 메서드는 형식화 배열 내 일부 요소가 제공되는 함수에 의해 구현되는 테스트를 통과하는지 여부를 테스트합니다. 이 메서드는 {{jsxref("Array.prototype.some()")}}과 같은 알고리즘입니다. *TypedArray*는 여기 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 중 하나입니다.

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## 구문

```js
typedarray.some(callback[, thisArg])
```

### 매개변수

- `callback`
  - : 각 요소에 대해 테스트하는 함수, 다음 인수 셋을 취하는:_ `currentValue`
    _ : 형식화 배열에서 현재 처리 중인 요소.
    - `index`
      - : 형식화 배열에서 현재 처리 중인 요소의 인덱스.
    - `array`
      - : `some`이 호출한 형식화 배열.
- `thisArg`
  - : 선택 사항. `callback`을 실행할 때 `this`로서 사용하는 값.

## 설명

`some` 메서드는 `callback`이 true 값을 반환하는 요소를 찾을 때까지 형식화 배열에 있는 각 요소에 대해 한 번 `callback` 함수를 실행합니다. 그런 요소가 발견된 경우, `some`은 즉시 `true`를 반환합니다. 그렇지 않으면, `some`은 `false`를 반환합니다.

`callback`은 세 인수와 함께 호출됩니다: 요소값, 요소 인덱스 및 순회(traverse)되는 배열 객체.

`thisArg` 매개변수가 `some`에 제공되는 경우, 호출될 때 `callback`에 전달됩니다, 그 `this` 값으로 사용하기 위해. 그렇지 않으면, `undefined` 값이 그 `this` 값으로 사용하기 위해 전달됩니다. `callback`에 의해 결국 관찰할 수 있는 `this` 값은 [함수에 의해 보이는 `this`를 결정하는 평소 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다.

`some`은 호출된 형식화 배열을 변화시키지(mutate) 않습니다.

## 예제

### 모든 형식화 배열 요소의 크기 테스트

다음 예는 형식화 배열의 모든 요소가 10보다 더 큰지 테스트합니다.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

### 화살표 함수를 사용하여 형식화 배열 요소 테스트

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션)는 같은 테스트에 대해 더 짧은 구문을 제공합니다.

```js
new Uint8Array([2, 5, 8, 1, 4]).some((elem) => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some((elem) => elem > 10); // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
