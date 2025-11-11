---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`hourCycle`** 접근자 속성은 이 로케일을 위한 시간 주기를 반환합니다.

## 설명

전 세계에서 사용되는 시간 표시 규칙(시계)에는 12시간 시계와 24시간 시계의 두 가지 주요 유형이 있습니다. `hourCycle` 속성 값은 로케일 식별자의 `hc` 키 또는 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자의 `hourCycle` 옵션을 통해 구성 시간에 설정됩니다. 모두 존재하면 후자가 우선권을 가지며, 둘 다 존재하지 않으면 속성의 값은 `undefined`입니다.

지원되는 시간 주기 유형 목록은 [`Intl.Locale.prototype.getHourCycles()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types)을 참고하시기 바랍니다.

`hourCycle`의 설정 접근자는 `undefined`입니다. 이 속성은 직접 변경할 수 없습니다.

## 예제

다른 로케일 하위 태그와 마찬가지로 시간 주기 유형은 로케일 문자열 또는 생성자에 대한 구성 객체 인수를 통해 {{jsxref("Intl.Locale")}} 객체에 추가할 수 있습니다.

### 로케일 문자열을 통한 시간 주기 추가하기

[유니코드 로케일 문자열 사양](https://www.unicode.org/reports/tr35/)에서 시간 주기 유형은 로케일 키 "확장 하위 태그"입니다. 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, `-u` 확장자를 사용하여 로케일 식별자에 추가됩니다. 따라서 시간 주기 유형은 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. 시간 주기 유형을 추가하려면 먼저 문자열에 `-u` 확장 키를 추가합니다. 그런 다음 `-hc` 확장자를 추가하여 시간 주기를 추가하고 있음을 나타냅니다. 마지막으로 문자열에 시간 주기 유형을 추가합니다.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### 구성 객체 인수를 통한 시간 주기 추가하기

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에는 시간 주기 유형을 비롯한 여러 확장 유형 중 하나를 포함할 수 있는 선택적 구성 객체 인수가 있습니다. 구성 객체의 `hourCycle` 속성을 원하는 시간 주기 유형으로 설정한 다음 생성자에 전달합니다.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getHourCycles()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles)
- 유니코드 로케일 마크업 언어 명세에서 [유니코드 시간 주기 식별자](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
