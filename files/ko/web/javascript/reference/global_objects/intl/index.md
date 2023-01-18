---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
---
{{JSRef}}

**`Intl`** 객체는 각 언어에 맞는 문자비교, 숫자, 시간, 날짜비교를 제공하는, ECMAScript 국제화 API를 위한 이름공간입니다. {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, {{jsxref("DateTimeFormat")}}는 `Intl` 객체의 속성을 위한 생성자입니다. 이 페이지는 일반적인 국제화의 기능을 수행하는 객체의 생성자들과 언어를 구분하는 함수들 뿐만 아니라 이러한 속성들에 대해서도 다루고 있습니다.

## 속성

- {{jsxref("Collator", "Intl.Collator")}}
  - : 콜레이터 생성자입니다. 콜레이터 객체는 각 언어에 맞는 문자열 비교를 가능하게 해줍니다.
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - : 각 언어에 맞는 시간과 날짜 서식을 적용할 수 있는 객체의 생성자입니다.
- {{jsxref("ListFormat", "Intl.ListFormat")}}
  - : 각 언어에 맞는 목록 서식을 적용할 수 있는 객체의 생성자입니다.
- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
  - : 각 언어에 맞는 숫자 서식을 적용할 수 있는 객체의 생성자입니다.
- {{jsxref("PluralRules", "Intl.PluralRules")}}
  - : 각 언어에 맞는 복수형 규칙 및 단수 복수 구분 서식을 적용할 수 있는 객체의 생성자입니다.
- {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
  - : 각 언어에 맞는 상대 시간 서식을 적용할 수 있는 객체의 생성자입니다.

## 메서드

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : 표준 로케일 이름 목록을 반환합니다.

## 로케일 식별과 조정

The internationalization constructors as well as several language sensitive methods of other constructors (listed under [See also](#see_also)) use a common pattern for identifying locales and determing the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### `locales` 매개변수

The `locales` argument must be either a string holding a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such language tags. If the `locales` argument is not provided or is undefined, the runtime's default locale is used.

A BCP 47 language tag identifies a language or locale (the difference between the two is fuzzy). In their most common form it can contain, in this order: a language code, a script code, and a country code, all separated by hyphens. Examples:

- `"hi"`: Hindi.
- `"de-AT"`: German as used in Austria.
- `"zh-Hans-CN"`: Chinese written in simplified characters as used in China.

The subtags identifying languages, scripts, countries (regions), and (rarely used) variants in BCP 47 language tags can be found in the [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry).

BCP 47 also allows for extensions, and one of them matters to the JavaScript internationalization functions: the `"u"` (Unicode) extension. It can be used to request a customization of the locale-specific behavior of a {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, or {{jsxref("DateTimeFormat")}} object. Examples:

- `"de-DE-u-co-phonebk"`: Use the phonebook variant of the German sort order, which expands umlauted vowels to character pairs: ä → ae, ö → oe, ü → ue.
- `"th-TH-u-nu-thai"`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
- `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.

### 로케일 조정

The `locales` argument, after stripping off all Unicode extensions, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47](http://tools.ietf.org/html/rfc4647#section-3.4); the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected language tag had a Unicode extension substring, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the language tag. For example, the `"co"` key (collation) is only supported by {{jsxref("Collator")}}, and its `"phonebk"` value is only supported for German.

### `options` 매개변수

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described above.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 소개글: [The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- 생성자

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("ListFormat", "Intl.ListFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}
  - {{jsxref("PluralRules", "Intl.PluralRules")}}
  - {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}

- 메서드

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
