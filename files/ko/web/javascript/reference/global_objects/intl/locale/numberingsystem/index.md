---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`numberingSystem`** 접근자 속성은 이 로케일에 대한 [숫자 체계](https://en.wikipedia.org/wiki/Numeral_system)를 반환합니다.

## 설명

숫자 체계는 숫자를 표현하는 체계입니다. `numberingSystem` 속성의 값은 로케일 식별자의 `nu` 키 또는 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자의 `numberingSystem` 옵션을 통해 구성 시 설정됩니다. 둘 다 존재하면 후자가 우선권을 가지며, 둘 다 존재하지 않으면 속성의 값은 `undefined`가 됩니다.

지원하는 숫자 체계의 유형 목록은 [`Intl.Locale.prototype.getNumberingSystems()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types)을 참고하시기 바랍니다.

## 예제

다른 로케일 하위 태그와 마찬가지로 숫자 체계 유형은 로케일 문자열 또는 생성자에 대한 구성 객체 인수를 통해 {{jsxref("Intl.Locale")}} 객체에 추가할 수 있습니다.

### 로케일 문자열을 통한 숫자 체계 추가하기

[유니코드 로케일 문자열 명세](https://www.unicode.org/reports/tr35/)에서 숫자 체계 유형은 로케일 키 "확장 하위 태그"입니다. 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, `-u` 확장자를 사용하여 로케일 식별자에 추가됩니다. 따라서 숫자 체계 유형은 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. 숫자 체계 유형을 추가하려면 먼저 문자열에 `-u` 확장 키를 추가합니다. 그런 다음 `-nu` 확장자를 추가하여 숫자 체계를 추가하고 있음을 나타냅니다. 마지막으로 문자열에 숫자 체계 유형을 추가합니다.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### 설정 객체 인수를 통한 숫자 체계 추가하기

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에는 숫자 체계 유형을 비롯한 여러 확장 유형 중 하나를 포함할 수 있는 선택적 구성 객체 인수가 있습니다. 구성 객체의 `numberingSystem` 속성을 원하는 숫자 체계 유형으로 설정한 다음, 생성자에 전달합니다.

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getNumberingSystems()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems)
- [표준 유니코드 숫자 체계의 상세 내용](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
