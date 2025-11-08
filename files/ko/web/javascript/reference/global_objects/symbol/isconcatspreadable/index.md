---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{JSRef}}

**`Symbol.isConcatSpreadable`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@isConcatSpreadable`을 나타냅니다.
{{jsxref("Array.prototype.concat()")}} 메서드는 연결된 각 객체에서 이 심볼을 찾아 유사 배열과 객체로 취급하고
해당 배열 요소로 평탄화해야 하는지 여부를 결정합니다.

{{InteractiveExample("JavaScript Demo: Symbol.isConcatSpreadable")}}

```js interactive-example
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", 1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", Array [1, 2, 3]]
```

## 값

잘 알려진 심볼 `@@isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## 설명

`@@isConcatSpreadable` 심볼(`Symbol.isConcatSpreadable`)은 자체 또는 상속된 속성으로
정의할 수 있으며, 그 값은 불리언입니다. 아래와 같이 배열 및 배열 유사 객체에 대한 동작을 제어할 수 있습니다.

- 배열 객체의 경우 기본 동작은 요소를 펼치는(평평하게 하는) 것입니다.
  `Symbol.isConcatSpreadable`은 이러한 경우 평탄화를 피할 수 있습니다.
- 배열과 유사한 객체의 경우 기본 동작은 펼치거나 평평하게 하지 않는 것입니다.
  `Symbol.isConcatSpreadable`은 이러한 경우 평탄화를 강제할 수 있습니다.

## 예제

### 배열

기본적으로 {{jsxref("Array.prototype.concat()")}}는 여러 배열을 하나의 결과로 펼칩니다(평평하게 만듭니다).

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 결과: ['a', 'b', 'c', 1, 2, 3]
```

`Symbol.isConcatSpreadable`을 `false`로 설정하면 기본 동작을 비활성화할 수 있습니다.

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### 유사 배열 객체

유사 배열 객체에서는 기본 동작이 평탄화시키지 않는 것입니다.
배열을 평탄화시키고 싶다면 `Symbol.isConcatSpreadable`을 `true`로 설정할 필요가 있습니다.

```js
const x = [1, 2, 3];

const fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> [!NOTE]
> `length` 속성은 추가할 객체 속성의 수를 제어하는 데 사용됩니다.
> 위의 예제에서 `length:2`는 2개의 속성이 추가되었다는 것을 가리킵니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
