---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Intl.NumberFormat`** 은 언어에 맞는 숫자 서식을 지원하는 객체의 생성자입니다.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"
```

## 생성자

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : 새로운 `NumberFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 주어진 로케일 목록 중, 런타임이 지원하는 항목을 배열로 반환합니다.

## 인스턴스 속성

아래 속성은 `Intl.NumberFormat.prototype`에 정의되어 있으며 모든 `Intl.NumberFormat`이 이 속성을 공유됩니다.

- {{jsxref("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Intl.NumberFormat` 인스턴스의 경우, 초기 값은 {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}} 생성자입니다.
- `Intl.NumberFormat.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기값인 문자열 `"Intl.NumberFormat"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 인스턴스 메서드

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  -: 이 {{jsxref("Intl.NumberFormat")}} 객체의 로케일과 형식 옵션에 따라 숫자를 형식화하는 접근자 함수입니다.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : 메서드가 호출된 이 {{jsxref("Intl.NumberFormat")}} 객체의 로케일과 형식 옵션에 따라 범위를 형식화하는 접근자 함수입니다.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : 사용자 지정 로케일 인식 형식 지정에 사용할 수 있는 숫자 문자열의 범위를 부분적으로 나타내는 객체의 {{jsxref("Array")}}를 반환합니다.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : 사용자 지정 로케일 인식 형식 지정에 사용할 수 있는 숫자 문자열을 부분적으로 나타내는 객체의 {{jsxref("Array")}}를 반환합니다.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : 객체를 초기화하는 동안 계산된 로케일 및 데이터 정렬 옵션을 반영하는 속성이 포함된 새 객체를 반환합니다.

## 예제

### 기본적인 사용 방법

로케일을 지정하지 않고 사용하면 기본 로케일 및 기본 옵션 서식을 적용한 문자열을 반환합니다.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → 한국 로케일의 경우 '3,500' 표시
```

### `locales` 사용하기

다음 예제는 지역화된 숫자 서식의 예시를 보입니다. 어플리케이션의 사용자 인터페이스 언어에 맞는 서식을 적용하려면 `locales` 매개변수로 적절한 언어(와, 필요한 경우 대체 언어)를 제공하는걸 잊지 마세요.

```js
const number = 123456.789;

// 독일은 소수점 구분자로 쉼표를 사용하고 천 단위 구분자로 마침표를 사용
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// 대부분의 아랍어 사용 국가에서는 실제 아라비아 숫자를 사용
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// 인도는 천, 라크(십만), 크로르(천만) 단위에 구분자 사용
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// nu 확장 키로 기수법 지정 (아래 예시는 중국식 숫자 표기)
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// 발리어와 같이 지원되지 않을 수도 있는 언어를 지정할 때는
// 다음과 같이 대체 언어를 지정할 수 있음. 아래의 경우 대체 언어는 인도어
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### `options` 사용

`options` 매개변수를 지정해 결과를 원하는 형태로 바꿀 수 있습니다.

```js
const number = 123456.789;

// 통화 서식
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// 한국 원화는 보조 통화 단위를 사용하지 않음
console.log(
  new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(
    number,
  ),
);
// ₩123,457

// 유효숫자를 세 개로 제한
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// 단위에 따라 형식 지정
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl")}}
- [A polyfill of `Intl.NumberFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat)
