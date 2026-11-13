---
title: Intl.DisplayNames() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

**`Intl.DisplayNames()`** 생성자는 {{jsxref("Intl.DisplayNames")}} 객체를 생성합니다.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## 구문

```js-nolint
new Intl.DisplayNames(locales, options)
```

> [!NOTE]
> `Intl.DisplayNames()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

- `locales`
  - : BCP 47 언어 태그가 포함된 문자열 또는 {{jsxref("Intl.Locale")}} 인스턴스 또는 이러한 로케일 식별자의 배열입니다. `undefined`이 전달되거나 명시된 로케일 식별자가 지원되지 않는 경우 런타임의 기본 로케일이 사용됩니다. `locales` 인수의 일반적인 형식과 해석에 대해서는 [`Intl` 메인 페이지의 매개변수 설명](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)을 참고하세요.
- `options`
  - : 검색되는 순서대로 다음 속성을 포함하는 객체입니다.
    - `localeMatcher` {{optional_inline}}
      - : 사용할 로케일 일치 알고리즘입니다. 가능한 값은 `"lookup"` 및 `"best fit"`이며, 기본값은 `"best fit"`입니다. 이 옵션에 대해 더 알고 싶으시다면 [로케일 식별 및 협상](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)을 참고하시기 바랍니다.
    - `style` {{optional_inline}}
      - : 사용할 서식 스타일. 가능한 값은 `"narrow"`, `"short"`, 그리고 `"long"`입니다. 기본 값은 `"long"`입니다..
    - `type`
      - : [`of()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of)로 부터 반환된 출력 이름의 유형입니다. 가능한 값은 `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"`, 그리고 `"dateTimeField"`입니다..
    - `fallback` {{optional_inline}}
      - : 입력이 구조적으로 유효하지만 일치하는 표시 이름이 없는 경우 `of()`에서 반환할 값입니다. 가능한 값은 아래와 같습니다.
        - `"code"` (기본)
          - : 입력 코드 자체를 반환합니다.
        - `"none"`
          - : `undefined`을 반환합니다.
    - `languageDisplay` {{optional_inline}}
      - : 언어가 표시되어야 할 방법입니다. `type: "language"`와 함께 할때만 사용 가능합니다. 가능한 값은 다음과 같습니다.
        - `"dialect"` (default)
          - : 특수 지역 방언은 고유한 이름을 사용하여 표시합니다. 예: `"nl-BE"`는 `"플랑드르어"`로 표시됩니다.
        - `"standard"`
          - : 표준 형식을 사용하여 모든 언어를 표시합니다. 예: `"nl-BE"`는 `"네덜란드어(벨기에)"`로 표시됩니다.

### 예외

- {{jsxref("TypeError")}}
  - : `options.type`이 없을 경우 발생합니다.
- {{jsxref("RangeError")}}
  - : `locales` 혹은 `options`에 유효하지 않은 값이 포함될 경우 발생합니다.

## 예제

### 기본 사용법

어떠한 로케일 명시 없이 사용하는 기본 예제에서는 기본 로케일, 기본 옵션으로
형식이 맞춰진 문자열이 반환됩니다.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### `dateTimeField` type 사용하기

`dateTimeField`를 type 옵션으로 사용하는 예제는 지역화된 날짜 시간 이름 문자열을 반환합니다.

```js
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### `calendar` type 사용하기

`calendar`을 type 옵션으로 사용하는 예제는 지역화 달력 이름 문자열을 반환합니다.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### `languageDisplay`와 함께 `language` type 사용하기

`languageDisplay` 옵션과 함께 `language`를 type으로 사용하는 예제입니다.

```js
// `dialect` 옵션 사용
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// `standard` 옵션 사용
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
