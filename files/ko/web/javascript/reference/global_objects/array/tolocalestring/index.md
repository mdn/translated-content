---
title: Array.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toLocaleString()`** 메서드는 {{jsxref("Array")}} 인스턴스의 배열의 요소를 나타내는
문자열을 반환합니다.
각 요소는 자체 `toLocaleString` 메서드를 사용하여 문자열로 변환되며, 이러한 문자열은 쉼표(",")와 같은 로케일별 구분 문자열로
분리됩니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.toLocaleString()", "shorter")}}

```js interactive-example
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// 예상 결과 값: "1,a,12/21/1997, 2:12:00 PM",
// 이것은 "en" 로케일과 UTC 시간대를 기반으로 합니다. 따라서 결과 값이 다를 수 있습니다.
```

## 구문

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 매개변수

- `locales` {{optional_inline}}
  - : BCP 47 언어 태그를 포함하는 문자열 또는 문자열 배열. `locales` 인자의 일반적인 형식과 해석에 대한 내용은 [`Intl` 매개변수 설명 메인 페이지](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)에서 확인하세요.
- `options` {{optional_inline}}
  - : 구성 속성을 포함하는 객체. 여기에서 전달할 수 있는 값은 변환되는 요소에 따라 다릅니다. 예를 들어, 숫자의 경우 {{jsxref("Number.prototype.toLocaleString()")}}를 참고하세요.

### 반환 값

배열의 요소를 표현하는 문자열.

## 설명

`Array.prototype.toLocaleString` 메서드는 제공된 `locales` 및 `options` 매개변수를 사용하여 각 요소에서 `toLocaleString` 메서드를 호출하면서 요소를 순회합니다. 그리고 쉼표와 같은 구현에 따라 정의된 구분 문자를 사용하여 반환된 문자열을 연결합니다. 이 메서드는 두 개의 매개변수를 직접 사용하지 않으며, 단순히 각 요소의 `toLocaleString()` 메서드로 전달합니다. 구분 문자열의 선택은 `locales` 매개변수가 아닌 호스트의 현재 로케일에 따라 결정됩니다.

요소가 `undefined`, `null`이면, `"null"`이나 `"undefined"` 대신 빈 문자열로 변환됩니다.

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)에서 `toLocaleString()` 메서드는 빈 슬롯을 `undefined` 값을 가지고 있는 것처럼 처리하며 반복합니다.

`toLocaleString()` 메서드는 [제네릭](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `this` 값이 `length` 속성과 정수 키 요소를 가지고 있으면 사용할 수 있습니다.

## 예제

### 로케일과 속성 사용

배열의 요소는 `toLocaleString` 메서드를 사용하여 문자열로 변환됩니다. 예를 들어, 이 코드에서는 `prices` 배열의 문자열과 숫자에 대해 자동으로 {{jsxref("Number.prototype.toLocaleString()")}} 메서드를 호출하여 통화 형식으로 표시합니다.

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### 희소 배열에서 toLocaleString() 사용

`toLocaleString()`은 빈 슬롯을 `undefined`와 동일하게 처리하며 추가적인 구분 문자를 생성합니다.

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### 배열이 아닌 객체에서 toLocaleString() 사용

`toLocaleString()` 메서드는 `this`의 `length` 속성을 확인하고 `length`보다 작은 음수가 아닌 정수를 키로 가진 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // length가 3이므로 toLocaleString()에 의해 무시됩니다
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱싱된 집합](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
