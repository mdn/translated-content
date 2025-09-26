---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef}}

**`toLocaleLowerCase()`** 메서드는 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: String.toLocaleLowerCase()")}}

```js interactive-example
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "istanbul"
```

## 구문

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### 매개변수

- `locales` {{optional_inline}}
  - : BCP 47 언어 태그가 있는 문자열 또는 이런 문자열을 가진 배열. 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환하는데 사용된 지역을 나타냅니다. 일반 양식과 `locales` 인수의 설명에 대해서 [Locale identification and negotiation](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)를 참조하세요.

### 반환 값

어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열을 나타낸 새 문자열.

### 예외

- `locale` 인수가 올바른 언어 태그가 아닌 경우 {{jsxref("RangeError")}} ("잘못된 언어 태그: xx_yy")가 발생합니다.
- 배열 요소가 문자열 유형이 아닌 경우 {{jsxref("TypeError")}} ("지역 인수에 있는 잘못된 요소")가 발생합니다.

## 설명

`theLocaleLowerCase()` 메서드는 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다. `toLocaleUpperCase()`는 문자열 자체 값에 영향을 미치지 않습니다. 대부분의 경우, {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}와 같은 결과를 제공하지만 터키와 같은 일부 지역에서는 대/소문자 매핑이 유니코드의 기존 대/소문자 매핑을 따르지 않아 다른 결과가 있을 수 있습니다.

## 예제

### toLocaleLowerCase() 사용

```js
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
