---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: de0a002dfe7b125c2c94e5d2e89e2c5e3a7f969b
---

{{JSRef}}

**`Intl.Locale`** 객체는 유니코드 로케일 식별자를 나타내는 Intl 객체의 표준 내장 속성입니다.

{{InteractiveExample("JavaScript Demo: Intl.Locale")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## 설명

**`Intl.Locale`** 객체는 유니코드 로케일을 더 쉽게 조작할 수 있도록 하기 위해 탄생했습니다. 유니코드는 "로케일 식별자"라는 문자열로 로케일을 나타냅니다. 로케일 식별자는 "언어 식별자"와 "확장 태그"로 구성됩니다. 언어 식별자는 로케일의 핵심으로 언어, 스크립트 및 지역 하위 태그로 구성됩니다. 로케일에 대한 추가 정보는 선택 사항인 확장 태그에 저장됩니다. 확장 태그에는 달력 유형, 시계 유형, 숫자 체계 유형과 같은 로케일 측면에 대한 정보가 저장됩니다.

전통적으로 Intl API는 유니코드와 마찬가지로 문자열을 사용하여 로케일을 표현했습니다. 이는 간단하고 가벼운 솔루션으로 잘 작동합니다. 하지만 로케일 클래스를 추가하면 언어, 스크립트, 지역, 확장 태그의 구문 분석 및 조작이 더 쉬워집니다. `Intl.Locale`의 다음 속성은 유니코드 로케일 식별자 하위 태그에 해당합니다.

| 하위 태그와                                                  | 대응되는 속성                  |
| ------------------------------------------------------------ | ------------------------------ |
| {{jsxref("Intl/Locale/language", "language")}}               | `language` (첫 번째 부분)      |
| {{jsxref("Intl/Locale/script", "script")}}                   | `script` (두 번째 부분)        |
| {{jsxref("Intl/Locale/region", "region")}}                   | `region` (두 번째/세번째 부분) |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` (확장)                    |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (확장)                    |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` (확장)                    |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (확장)                    |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (확장)                    |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` (확장)                    |

위 정보는 외부 데이터베이스를 참조하지 않고 `Locale` 객체가 생성될 때 그대로 제공됩니다. `Intl.Locale` 객체는 사용 가능한 달력, 정렬 방식(collations) 및 숫자 체계와 같은 로케일의 실제 정보에 대한 정보를 반환하는 몇 가지 메서드를 추가로 제공합니다.

## 생성자

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : 새로운 `Locale` 객체를 생성합니다.

## 인스턴스 속성

아래 속성은 `Intl.Locale.prototype`에 정의되어 있으며 모든 `Intl.Locale` 객체가 이를 공유합니다.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : 전체 데이터 문자열의 하위 문자열 형태로 `Locale`에 대한 기본 핵심 정보를 반환합니다.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : 로케일의 달력 시대를 가리키는 `Locale`의 부분을 반환합니다.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : 로케일의 데이터 정렬 규칙에 대/소문자를 고려할지 여부를 반환합니다.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : 로케일의 규칙에 따라 문자열을 정렬하는 데 사용되는 `Locale`에 대한 콜레이션 타입을 반환합니다.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Intl.Locale` 인스턴스의 경우 초기 값은 {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} 생성자입니다.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : 로케일에서 사용하는 시간 유지 형식 규칙을 반환합니다.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : 로케일과 연관된 언어를 반환합니다.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : 로케일에서 사용하는 숫자 체계를 반환합니다.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : 로케일에 숫자 문자에 대한 특수 콜레이션 처리 기능이 있는지 여부를 반환합니다.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : 로케일과 관련된 세상의 지역(보통 국가)를 반환합니다.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : 로케일에서 사용되는 특정 언어를 작성하기 위해 사용되는 스크립트를 반환합니다.
- `Intl.Locale.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기값은 문자열 `"Intl.Locale"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다..

## 인스턴스 메서드

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : 로케일 규칙에 따라 이용 가능한 달력 식별자 배열을 반환합니다.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : `Locale`에 대한 데이터 정렬 유형의 {{jsxref("Array")}}을 반환합니다.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : 12시간 시계("h12"), 일본식 12시간 시계("h11"), 24시간 시계("h23") 또는 사용되지 않는 형식 "h24"를 나타내는 시간 주기 식별자의 {{jsxref("Array")}}를 반환합니다.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : 로케일의 규칙에 따른 가능한 숫자 체계 식별자의 {{jsxref("Array")}}를 반환합니다.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : 문자 `ltr`(왼쪽에서 오른쪽) 또는 `rtl`(오른쪽에서 왼쪽)의 순서를 나타내는 부분을 반환합니다.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : `Locale`과 연관된 시간대 식별자의 {{jsxref("Array")}}을 반환합니다.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : 로케일 규칙에 따라 [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements)를 반환합니다.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : 기존 값을 기반으로 로케일의 언어, 스크립트 및 지역에 대해 가장 가능성이 높은 값을 가져옵니다.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : {{jsxref("Intl/Locale/maximize", "maximize()")}}을 호출하여 추가될 로케일에 대한 정보 제거를 시도합니다.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Locale의 완전한 로케일 식별자 문자열을 반환합니다.

## 예제

### 기본적인 사용법

가장 간단한 방법으로는 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자가 로케일 식별자를 인수로 받습니다.

```js
const us = new Intl.Locale("en-US");
```

### options 객체와 함께 Locale 생성자를 사용

생성자는 또한 선택적으로 구성 객체 인수를 받을 수 있으며, 이 객체에는 여러 확장 유형 중의 하나가 포함될 수 있습니다. 예를 들어, 구성 객체의 {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} 속성을 원하는 시간 주기 유형으로 설정한 다음 생성자에 전달합니다.

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [정규 유니코드 로케일 식별자](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in the Unicode locale data markup language spec
