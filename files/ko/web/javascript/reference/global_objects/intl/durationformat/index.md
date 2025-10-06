---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.DurationFormat`** 은 언어에 맞는 지속 시간 서식을 지원하는 객체입니다.

## 생성자

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : 새로운 `Intl.DurationFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : 주어진 로케일 목록 중, 런타임이 지원하는 항목을 배열로 반환합니다.

## 인스턴스 속성

아래의 속성은 `Intl.DurationFormat.prototype`에서 정의되어 있으며 모든 `Intl.DurationFormat` 인스턴스에서 공유됩니다.

- {{jsxref("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : 인스턴스 객체를 만든 생성자 함수입니다. `Intl.DurationFormat` 인스턴스의 경우 초기 값은 {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}} 생성자입니다.
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Intl.DurationFormat"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : `DurationFormat` 객체의 로케일과 서식 옵션에 맞춰 지속 시간을 서식화해 반환합니다.
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : 서식화된 지속 시간을 각 부분 단위로 분해하여 표현하는 객체의 {{jsxref("Array")}}를 반환합니다.
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : 객체 초기화 중에 계산된 로케일과 서식 옵션을 반영한 속성이 있는 새 객체를 반환합니다.

## 예제

### `Intl.DurationFormat` 사용하기

아래의 예제들은 다양한 로케일과 서식 옵션을 사용하여 `Intl.DurationFormat` 객체로 지속 시간 객체를 형식화하는 방법을 보여줍니다.

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// 서식 옵션을 "long"으로 설정하고, 로케일을 "fr-FR"로 설정
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// 서식 옵션을 "short"으로 설정하고, 로케일을 "en"로 설정
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// 서식 옵션을 "narrow"으로 설정하고, 로케일을 "pt"로 설정
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46 min 40s"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [FormatJS의 `Intl.DurationFormat` 폴리필](https://formatjs.github.io/docs/polyfills/intl-durationformat/)
- {{jsxref("Intl")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
