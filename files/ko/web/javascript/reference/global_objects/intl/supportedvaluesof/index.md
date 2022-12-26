---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
---

{{JSRef}}

**`Intl.supportedValueOf()`** 메서드는 구현에서 지원되는 달력, 대조, 통화, 번호 체계 또는 단위 값을 포함하는 배열을 반환합니다.

중복 항목이 생략되고 배열이 알파벳 오름차순으로 정렬됩니다 (또는 더 정확하게, `undefined` 비교 함수와 함께 {{jsxref("Array/sort", "Array.prototype.sort()")}}를 사용합니다)

이 메서드를 사용하여 특정 구현에서 값이 지원되는지 여부를 feature-test하고 필요한 경우에만 폴리필을 다운로드 할 수 있습니다.
또한 사용자가 선호하는 지역화된 값을 선택할 수 있는 UI를 만드는 데 사용할 수도 있습니다, 예를 들어 UI가 WebGL 또는 server-side에서 생성된 경우입니다.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 구문

```js-nolint
Intl.supportedValuesOf(key)
```

### 매개변수

- `key`
  - : 반환할 값의 범주를 나타내는 키 문자열.
    `"calendar"`, `"collation"`, `"currency"`,`"numberingSystem"`, `"timeZone"`, `"unit"` 중 하나입니다.

### 반환 값

지정된 키에 대한 구현에서 지원하는 값을 나타내는 고유 문자열 값의 정렬된 배열입니다.

### 예외

- `RangeError`
  - : 지원되지 않는 키가 매개 변수로 전달되었습니다.

## 예제

### 기능 테스팅

`undefined`와 비교하여 메서드가 지원되는지 확인할 수 있습니다.

```js
if (typeof Intl.supportedValuesOf !== 'undefined') {
  // method is supported
}
```

### 키에 대한 모든 값 구하기

달력에 지원되는 값을 구하려면 `"calendar"` 키를 사용하여 메소드를 호출합니다.
그런 다음 반환된 배열을 통해 아래와 같이 순회할 수 있습니다.

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> **참고:** 달력 값에 대해 반환되는 배열에는 항상 "gregory" (그레고리안력) 값이 포함됩니다.

다른 값은 모두 같은 방식으로 얻어집니다.

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "big5han", "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### 유효하지 않은 키는 RangeError를 발생시킵니다

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Global_Objects/Intl", "Intl")}}
- [A polyfill of `Intl.supportedValuesOf` in FormatJS](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
