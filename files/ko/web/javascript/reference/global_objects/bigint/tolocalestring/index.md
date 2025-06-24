---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{JSRef}}

{{jsxref("BigInt")}} 값의 **`toLocaleString()`** 메서드는 이 BigInt의 언어별 표현이 포함된 문자열을 반환합니다. [`Intl.NumberFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)를 지원하는 구현체에서 이 메서드는 단순히 `Intl.NumberFormat`을 호출합니다.

`toLocaleString`이 호출될 때마다 방대한 현지화 문자열 데이터베이스에서 검색을 수행해야 하므로 비효율적일 수 있습니다. 메서드가 동일한 인수를 사용하여 여러 번 호출되는 경우 `NumberFormat` 객체가 전달된 인수를 기억하고 데이터베이스의 일부를 캐시하기로 결정할 수 있으므로 {{jsxref("Intl/NumberFormat/format", "format()")}} 메서드를 사용하는 것이 더 좋습니다. 향후 `format` 호출이 보다 제한된 컨텍스트 내에서 현지화 문자열을 검색할 수 있으므로 {{jsxref("Intl.NumberFormat")}} 객체를 생성하고 그 {{jsxref("Intl/NumberFormat/format", "format()")}} 메서드를 사용하는 것이 더 좋습니다.

{{InteractiveExample("JavaScript Demo: BigInt.toLocaleString()")}}

```js interactive-example
const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString("de-DE"));
// Expected output: "123.456.789.123.456.789"

// Request a currency format
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "123.456.789.123.456.789,00 €"
```

## 구문

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 매개변수

`locales` and `options` 매개변수는 함수의 동작을 사용자 정의하고 애플리케이션에서 형식 지정 규칙을 사용할 언어를 지정할 수 있도록 합니다.

[`Intl.NumberFormat` API](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)를 지원하는 구현체에서 이러한 매개변수는 [`Intl.NumberFormat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 생성자 매개변수와 정확히 대응합니다. `Intl.NumberFormat`을 지원하지 않는 구현체에서는 두 매개변수를 모두 무시하도록 요청되므로 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 구현에 따라 달라집니다.

- `locales` {{optional_inline}}
  - : BCP 47 언어 태그가 있는 문자열 또는 이러한 문자열의 배열입니다. `Intl.NumberFormat()` 생성자의 [`locales`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 매개변수에 해당합니다.

    `Intl.NumberFormat`을 지원하지 않는 구현체에서는 이 매개변수가 무시되고 일반적으로 호스트의 로케일이 사용됩니다.

- `options` {{optional_inline}}
  - : 출력 형식을 조정하는 객체입니다. `Intl.NumberFormat()` 생성자의 [`options`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 매개변수에 해당합니다.

    `Intl.NumberFormat`을 지원하지 않은 구현체에서는 이 매개변수가 무시됩니다.

이 매개변수에 대한 상세 정보와 사용법을 좀 더 알아보려면 [`Intl.NumberFormat()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)을 참고하시기 바랍니다.

### 반환 값

언어별 규칙에 맞게 주어진 BigInt를 표현한 문자열입니다.

`Intl.NumberFormat`를 구현한 구현체에서는 이는 `new Intl.NumberFormat(locales, options).format(number)`과 동일합니다.

> [!NOTE]
> 대부분의 경우 `toLocaleString()`이 반환하는 형식은 일관적입니다. 그러나 출력은 시간, 언어 및 구현에 따라 달라질 수 있으며, 출력 변형은 명세서에 의해 설계되고 허용됩니다. `toLocaleString()`의 결과를 정적 값과 비교해서는 안 됩니다.

## 예제

### toLocaleString() 사용하기

`locale`을 지정하지 않고 이 메서드를 사용하면 기본 로케일과 기본 옵션으로 형식이 지정된 문자열이 반환됩니다.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" U.S English 로케일의 경우
```

### locales 및 options 매개변수 지원 여부 확인

`locales` 및 `locales` 매개변수는 국제화 API 지원이 선택 사항이고 일부 시스템에는 필요한 데이터가 없을 수 있기 때문에 모든 구현체에서 지원되지 않을 수 있습니다. 국제화를 지원하지 않는 구현의 경우 `toLocaleString()`은 항상 시스템의 로케일을 사용하기 때문에 원하는 로케일이 아닐 수도 있습니다. `locales` 및 `options` 매개변수를 지원하는 모든 구현은 반드시 {{jsxref("Intl")}}을 지원해야 하므로, 다음의 코드로 지원 여부를 확인할 수 있습니다.

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### locales 사용하기

이 예는 현지화된 숫자 형식의 몇 가지 변형을 보여줍니다. 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 형식을 가져오려면 `locales` 인수를 사용하여 해당 언어(및 일부 대체 언어)를 지정해야 합니다.

```js
const bigint = 123456789123456789n;

// 독일어는 천 단위에 마침표를 사용합니다.
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// 대부분의 아랍어권 국가에서의 아랍어는 동아랍어 숫자를 사용합니다.
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// 인도는 천 단위/lakh/crore 구분 기호를 사용합니다.
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// nu 확장 키는 숫자 체계를 요청합니다.(예: 중국어 10진수)
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// 발리어와 같이 지원되지 않을 수 있는 언어를 요청할 때는 대체 언어(이 경우 인도네시아어)를 포함하세요.
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

### options 사용하기

`toLocaleString()`의 결과는 `options` 매개변수를 사용함으로서 사용자 지정할 수 있습니다.

```js
const bigint = 123456789123456789n;

// 통화 형식을 요청합니다
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// 일본 엔화는 소수점을 사용하지 않습니다
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// 구분점을 3자리로 제한
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("BigInt.prototype.toString()")}}
