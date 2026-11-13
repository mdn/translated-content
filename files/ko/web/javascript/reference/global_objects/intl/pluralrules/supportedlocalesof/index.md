---
title: Intl.PluralRules.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`Intl.PluralRules.supportedLocalesOf()`** 정적 메서드는 런타임의 기본 로케일로 돌아갈 필요 없이 복수 규칙에서 지원되는 제공된 로케일들 중 해당하는 로케일들을 포함하는 배열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.supportedLocalesOf", "shorter")}}

```js interactive-example
const locales = ["en-US", "ban", "ar-OM", "de-DE"];
const options = { localeMatcher: "lookup" };

console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// Expected output: Array ["en-US", "ar-OM", "de-DE"]
```

## 구문

```js-nolint
Intl.PluralRules.supportedLocalesOf(locales)
Intl.PluralRules.supportedLocalesOf(locales, options)
```

### 매개변수

- `locales`
  - : BCP 47 언어 태그가 포함된 문자열 또는 이러한 로케일 식별자의 배열입니다. `locales` 인수의 일반적인 형식과 해석에 대해서는 [`Intl` 메인 페이지의 매개변수 설명](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)을 참조하세요.
- `options` {{optional_inline}}
  - : 다음의 속성을 가질 수 있는 객체
    - `localeMatcher`
      - : 사용할 로케일 일치 알고리즘입니다. 가능한 값은 `"lookup"` 및 `"best fit"`이며, 기본값은 `"best fit"`입니다. 이 옵션에 대해 더 알고 싶으시다면 {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} 페이지를 참고하시기 바랍니다.

### 반환 값

런타임의 기본 로케일로 돌아길 필요 없이 복수 규칙에서 지원되는 주어진 로케일 태그들의 부분 집합을 나타내는 문자열 배열을 반환합니다.

## 예제

### supportedLocalesOf() 사용하기

인도네시아어와 독일어는 지원하지만 발리의 복수 규칙을 지원하지 않는 런타임을 가정해보겠습니다. `supportedLocalesOf`는 인도네시아어와 독일어 언어 태그를 변경 없이 반환하지만 `pinyin` 콜레이션은 숫자 서식과 관련이 없거나 인도네시아어와 함께 사용되지 않으며 인도네시아에 특화된 독일어는 지원되지 않을 가능성이 높습니다. 여기서 `"lookup"` 알고리즘의 명세에 유의하세요. 대부분의 발리어 사용자도 인도네시아어를 이해하므로 `"best fit"` 일치기는 발리어가 인도네시아어와 적절히 일치한다고 판단하여 발리어어 태그도 반환할 수 있습니다.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.PluralRules")}}
