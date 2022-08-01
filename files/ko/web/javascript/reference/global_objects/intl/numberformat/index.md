---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - NumberFormat
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---
{{JSRef}}

**`Intl.NumberFormat`**은 언어에 맞는 숫자 서식을 지원하는 객체의 생성자입니다.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## 생성자

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Creates a new `NumberFormat` object.

## 정적 메서드

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 주어진 로케일 목록 중, 런타임이 지원하는 항목을 배열로 반환합니다.

## 인스턴스 메서드

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Getter function that formats a number according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the number string in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Getter function that formats a range of numbers according to the locale and formatting options of the {{jsxref("Intl.NumberFormat")}} object from which the method is called.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the range of number strings in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

## 예제

### 기본적인 사용 방법

로케일을 지정하지 않고 사용하면 기본 로케일 및 기본 옵션 서식을 적용한 문자열을 반환합니다.

```js
var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → 한국 로케일의 경우 '3,500' 표시
```

### `locales` 사용하기

다음 예제는 지역화된 숫자 서식의 예시를 보입니다. 어플리케이션의 사용자 인터페이스 언어에 맞는 서식을 적용하려면 `locales` 매개변수로 적절한 언어(와, 필요한 경우 대체 언어)를 제공하는걸 잊지 마세요.

```js
var number = 123456.789;

// 독일은 소수점 구분자로 쉼표를 사용하고 천 단위 구분자로 마침표를 사용
console.log(new Intl.NumberFormat('de-DE').format(number));
// → 123.456,789

// 대부분의 아랍어 사용 국가에서는 실제 아라비아 숫자를 사용
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// 인도는 천, 라크(십만), 크로르(천만) 단위에 구분자 사용
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// nu 확장 키로 기수법 지정 (아래 예시는 중국식 숫자 표기)
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

// 발리어와 같이 지원되지 않을 수도 있는 언어를 지정할 때는
// 다음과 같이 대체 언어를 지정할 수 있음. 아래의 경우 대체 언어는 인도어
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
```

### `options` 사용

`options` 매개변수를 지정해 결과를 원하는 형태로 바꿀 수 있습니다.

```js
var number = 123456.789;

// 통화 서식
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// 한국 원화는 보조 통화 단위를 사용하지 않음
console.log(new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number));
// → ₩123,457

// 유효숫자를 세 개로 제한
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl")}}
- [A polyfill of `Intl.NumberFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat)
