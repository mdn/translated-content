---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toLocaleString()`** 메서드는 {{jsxref("Number")}} 값의 언어에 맞춘 문자열 표현을 반환합니다. 이 메서드는 [`Intl.NumberFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)를 지원하는 구현에서 `Intl.NumberFormat`을 활용합니다.

매번 `toLocaleString`이 호출될 때마다 방대한 지역화된 문자의 데이터베이스에서 검색을 수행해야 하므로 잠재적으로 비효율적일 수 있습니다. 동일한 인수로 여러 번 호출해야 하는 경우, {{jsxref("Intl.NumberFormat")}} 객체를 생성한 후 {{jsxref("Intl/NumberFormat/format", "format()")}} 메서드를 사용하는 것이 더 효율적입니다. `NumberFormat` 객체는 전달된 인수를 기억하고 데이터베이스의 일부를 캐싱할 수 있으므로, 이후 `format`을 호출 할 때보다 한정된 범위 내에서 지역화된 문자를 검색할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Number.prototype.toLocaleString()")}}

```js interactive-example
function eArabic(x) {
  return x.toLocaleString("ar-EG");
}

console.log(eArabic(123456.789));
// 예상 결과 값: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic("123456.789"));
// 예상 결과 값: "123456.789"

console.log(eArabic(NaN));
// 예상 결과 값: "ليس رقم"
```

## 구문

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 매개변수

`locales`와 `options` 매개변수는 함수 동작을 조정하여 애플리케이션이 특정 언어의 서식 규칙을 사용할 수 있도록 설정합니다.

[`Intl.NumberFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)를 지원하는 구현에서, 이러한 매개변수는 [`Intl.NumberFormat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 생성자의 매개변수와 정확히 일치합니다. `Intl.NumberFormat`을 지원하지 않는 구현에서는 두 매개변수를 무시해야 하며, 이에 따라 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 해당 구현에 의해 결정됩니다.

- `locales` {{optional_inline}}
  - : BCP 47 언어 태그 문자열 또는 문자열 배열로, `Intl.NumberFormat()` 생성자의 [`locales`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 매개변수에 해당합니다.

    `Intl.NumberFormat`을 지원하지 않는 구현에서 이 매개변수는 무시되며, 일반적으로 호스트의 로케일로 사용됩니다.

- `options` {{optional_inline}}
  - : 출력 형식을 조정하는 객체로, `Intl.NumberFormat()` 생성자의 [`options`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 매개변수에 해당합니다.

    `Intl.NumberFormat`을 지원하지 않는 구현에서 이 매개변수는 무시됩니다.

[`Intl.NumberFormat()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)에서 이 매개변수의 세부 정보와 사용 방법을 확인하세요.

### 반환 값

주어진 숫자를 특정 언어의 관례에 따라 표현된 문자열.

`Intl.NumberFormat` 구현에서 `new Intl.NumberFormat(locales, options).format(number)`와 동일한 결과를 반환합니다.

> [!NOTE]
> 대부분의 경우 `toLocaleString()`이 반환하는 형식은 일관성을 유지합니다. 그러나, 동일한 로케일에 내에서도 구현에 따라 출력이 달라질 수 있습니다. 이러한 변동은 설계된 것이며 명세에 의해 허용됩니다. 따라서 기대한 결과와 다를 수도 있습니다. 예를 들어, 문자열에 끊기지 않는 공백이 포함될 수 있고 양방향 제어 문자로 둘러싸일 수도 있습니다. `toLocaleString()`의 결과를 하드코딩된 상수와 비교하는 것은 권장되지 않습니다.

## 예제

### toLocaleString() 사용

`locale`을 지정하지 않고 이 메서드를 기본적으로 사용하면, 기본 로케일과 옵션이 적용된 형식화된 문자열 형태로 반환됩니다.

```js
const number = 3500;

console.log(number.toLocaleString()); // 미국 로케일에서는 "3,500"
```

### 로케일 및 옵션 매개변수 지원 여부 확인

`locales`와 `options` 매개변수는 모든 구현에서 지원되지 않을 수 있습니다. 이는 국제화 API 지원이 선택 사항이며, 일부 시스템에서는 필요한 데이터를 갖추지 않을 수 있기 때문입니다. 국제화 지원이 없는 구현에서는, `toLocaleString()`이 항상 시스템의 로케일을 사용하므로, 원하는 로케일과 다를 수 있습니다. `locales`와 `options` 매개변수를 지원하는 모든 구현은 {{jsxref("Intl")}} API를 지원해야 하기 때문입니다. 문자 지원 유무를 다음과 같이 확인할 수 있습니다.

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### 로케일 사용

이번 예제는 지역화된 숫자 형식의 다양한 변형을 보여줍니다. 애플리케이션의
사용자 인터페이스에서 사용되는 언어 형식을 올바르게 적용하려면,
`locales` 인수를 사용하여 해당 언어 및 대체 언어를 명시해야 합니다.

```js
const number = 123456.789;

// 독일은 소수점 구분자로 쉼표를 사용하고 천 단위 구분자로 마침표를 사용합니다
console.log(number.toLocaleString("de-DE"));
// 123.456,789

// 대부분의 아랍어 사용 국가에서는 동부 아랍 숫자를 사용합니다
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// 인도는 천/락(십만)/크로어(천만) 단위 구분자를 사용합니다
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// nu 확장 키는 특정 숫자 체계를 지정합니다. 예: 중국어 십진법
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// 지원되지 않을 가능성이 있는 언어를 요청할 때,
// 발리 언어 같은 경우, 인도네시아어를 대체 언어로 포함하세요.
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### 옵션 사용

`toLocaleString()`의 결과는 `options` 매개변수를 사용하여 지정할 수 있습니다.

```js
const number = 123456.789;

// 통화 형식을 요청합니다
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// 일본 엔은 소수점 이하 단위를 사용하지 않습니다.
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// 유효 숫자를 세 자리로 제한합니다
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// 호스트의 기본 언어를 사용하여 숫자 형식을 지정합니다
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// 영국을 기본 언어로 설정 시 "30,000.65"
// 독일을 기본 언어로 설정 시 "30.000,65"
// 프랑스를 기본 언어로 설정 시 "30 000.65"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
