---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
---

{{JSRef}}

**`Intl.Locale.prototype.language`** 속성은 locale과 관련된 언어를 반환하는 접근자 속성입니다.

## Description

언어는 locale의 핵심 기능 중 하나입니다. 유니 코드 사양은 locale의 언어 식별자를 언어와 지역으로 함께 취급합니다 (예를 들어 영국 영어와 미국 영어 등의 방언과 변형을 구별하기 위해). {{jsxref("Locale", "Locale")}}의 language 속성은 로캘의 언어 하위 태그를 엄격하게 반환합니다.

## Examples

### locale 식별자 문자열 인수에서 언어 설정

유효한 유니 코드 locale 식별자가 되려면 문자열이 언어 하위 태그로 시작해야합니다. {{jsxref("Locale", "Locale")}} 생성자에 대한 주요 인수는 유효한 유니 코드 locale 식별자여야하므로 생성자가 사용될 때마다 언어 하위 태그가있는 식별자를 전달해야합니다.

```js
let langStr = new Intl.Locale("en-Latn-US");

console.log(langStr.language); // Prints "en"
```

### configuration 객체로 언어 오버라이딩 하기

언어 하위 태그를 지정해야하지만 {{jsxref("Locale", "Locale")}} 생성자는 언어 하위 태그를 재정의 할 수있는 구성 개체를 사용합니다.

```js
let langObj = new Intl.Locale("en-Latn-US", { language: "es" });

console.log(langObj.language); // Prints "es"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Locale", "Locale")}}
- [Unicode language subtag specification](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)
