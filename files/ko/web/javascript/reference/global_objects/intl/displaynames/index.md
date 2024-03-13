---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
l10n:
  sourceCommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{JSRef}}

**`Intl.DisplayNames`** 객체를 사용하면 언어, 지역 그리고 문자 체계 표시 이름을 일관되게 번역할 수 있습니다.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## 생성자

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : 새 `Intl.DisplayNames` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : 런타임의 기본 로케일로 대체되지 않고, 제공된 로케일 중 지원되는 로케일을 포함한 배열을 반환합니다.

## 인스턴스 속성

이 속성은 `Intl.DisplayNames.prototype`에서 정의되며 모든 `Intl.DisplayNames` 인스턴스에서 공유됩니다.

- {{jsxref("Object/constructor", "Intl.DisplayNames.prototype.constructor")}}
  - : 인스턴스 객체를 만든 생성자 함수입니다. `Intl.DisplayNames` 인스턴스의 경우 초기 값은 {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames")}} 생성자입니다.
- `Intl.DisplayNames.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Intl.DisplayNames"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : 이 메서드는 `code`를 받고 `Intl.DisplayNames` 인스턴스를 만들때 제공받은 로케일과 옵션에 따라 문자열을 반환합니다.
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : 객체 초기화 중에 계산된 로케일과 서식 옵션을 반영한 속성이 있는 새 객체를 반환합니다.

## 예제

### 지역 코드 표시 이름

로케일에 대한 `Intl.DisplayNames`를 생성하고, 지역 코드에 대한 표시 이름을 가져옵니다.

```js
// 영어로 지역 표시 이름을 가져옵니다.
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
regionNames.of("419"); // "Latin America"
regionNames.of("BZ"); // "Belize"
regionNames.of("US"); // "United States"
regionNames.of("BA"); // "Bosnia & Herzegovina"
regionNames.of("MM"); // "Myanmar (Burma)"

// 한국어로 지역 표시 이름을 가져옵니다.
regionNames = new Intl.DisplayNames(["ko"], { type: "region" });
regionNames.of("419"); // "라틴 아메리카"
regionNames.of("BZ"); // "벨리즈"
regionNames.of("US"); // "미국"
regionNames.of("BA"); // "보스니아 헤르체고비나"
regionNames.of("MM"); // "미얀마"
```

### 언어 표시 이름

로케일에 대한 `Intl.DisplayNames`를 생성하고, 언어-문자 체계-지역 시퀀스의 표시 이름을 가져옵니다.

```js
// 영어로 언어 표시 이름을 가져옵니다.
let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"
languageNames.of("de"); // "German"
languageNames.of("fr-CA"); // "Canadian French"
languageNames.of("ko"); // "Traditional Chinese"
languageNames.of("en-US"); // "American English"
languageNames.of("zh-TW"); // "Chinese (Taiwan)"]

// 한국어로 언어 표시 이름을 가져옵니다.
languageNames = new Intl.DisplayNames(["ko"], { type: "language" });
languageNames.of("fr"); // "프랑스어"
languageNames.of("zh"); // "중국어"
languageNames.of("de"); // "독일어"
```

### 문자 코드 표시 이름

로케일에 대한 `Intl.DisplayNames`를 생성하고 문자 코드의 표시 이름을 가져옵니다.

```js
// 영어로 문자 체계 표시 이름을 가져옵니다.
let scriptNames = new Intl.DisplayNames(["en"], { type: "script" });
// Get script names
scriptNames.of("Latn"); // "Latin"
scriptNames.of("Arab"); // "Arabic"
scriptNames.of("Kana"); // "Katakana"

// 한국어로 문자 체계 이름을 가져옵니다.
scriptNames = new Intl.DisplayNames(["ko"], { type: "script" });
scriptNames.of("Latn"); // "로마자"
scriptNames.of("Arab"); // "아랍 문자"
scriptNames.of("Kana"); // "가타카나"
```

### 통화 코드 표시 이름

로케일에 대한 `Intl.DisplayNames`를 생성하고 통화 코드의 표시 이름을 가져옵니다.

```js
// 영어로 통화 코드의 이름을 가져옵니다.
let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
// 통화 이름 가져오기
currencyNames.of("USD"); // "US Dollar"
currencyNames.of("EUR"); // "Euro"
currencyNames.of("TWD"); // "New Taiwan Dollar"
currencyNames.of("CNY"); // "Chinese Yuan"

// 한국어로 통화 코드의 이름을 가져옵니다.
currencyNames = new Intl.DisplayNames(["ko"], { type: "currency" });
currencyNames.of("USD"); // "미국 달러"
currencyNames.of("EUR"); // "유로"
currencyNames.of("TWD"); // "신 타이완 달러"
currencyNames.of("CNY"); // "중국 위안화"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl")}}
