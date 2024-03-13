---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
---

{{JSRef}}

**`Intl.supportedValuesOf()`** 메서드는 지원되는 역법(calendar), 콜레이터, 통화, 수 체계 또는 구현시 지원되는 단위 값을 포함하는 배열을 반환합니다.

중복 값들은 제거되며, 배열은 알파벳 오름차순으로 정렬(정확하게는 {{jsxref("Array/sort", "Array.prototype.sort()")}})에 `undefined` 비교 함수를 사용하여 정렬)됩니다.

이 메서드는 특정 기능 구현시에 값이 지원되는지 여부를 테스트하고, 필요한 경우에만 폴리필을 다운로드받는데 사용할 수 있습니다.
또한 사용자가 선호하는 지역화된 값을 선택할 수 있게 하는 UI(예를 들어 UI가 WebGL 또는 서버사이드로 구현되었을 때)를 만드는 데에도 사용됩니다.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## 구문

```js-nolint
Intl.supportedValuesOf(key)
```

### 매개변수

- `key`
  - : 반환할 값의 범주를 나타내는 키 문자열로,
    `"calendar"`, `"collation"`, `"currency"`,`"numberingSystem"`, `"timeZone"`, `"unit"` 중의 하나입니다.

### 반환 값

지정된 Key에 대해 구현시 지원하는 값을 나타내는 고유한 문자열 값의 정렬된 배열입니다.

### 예외

- `RangeError`
  - : 지원되지 않는 Key가 인자로 전달되었을 때

## 예제

### 기능 테스트

메서드가 지원되는지 여부를 `undefined`과 비교하여 확인할 수 있습니다.

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // 메서드가 지원됩니다.
}
```

### Key의 모든 값 가져오기

달력에 지원되는 값을 확인하기 위해서는 `"calendar"` 키로 메서드를 실행합니다.
아래와 같이 반환된 배열을 반복 탐색합니다.

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", 등.
});
```

> **참고:** calendar 값으로 반환된 배열은 항상 "gregory" (그레고리력)을 포함합니다.

다른 값도 동일한 방식으로 확인할 수 있습니다.

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "big5han", "compat", "dict", "emoji", 등.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", 등.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", 등.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", 등.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", 등.
});
```

### 유효하지 않은 Key 사용시 RangeError 발생

```js
try {
  Intl.supportedValuesOf("유효하지 않은 키");
} catch (err) {
  //Error: RangeError: invalid key: "유효하지 않은 키"
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Global_Objects/Intl", "Intl")}}
- [A polyfill of `Intl.supportedValuesOf` in FormatJS](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
