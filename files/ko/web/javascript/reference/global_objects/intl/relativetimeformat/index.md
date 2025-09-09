---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Intl.RelativeTimeFormat`** 은 언어에 의존적인 상대 시간 형식을 사용할 수 있게 합니다.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
// Expected output: "pasado mañana"
```

## 생성자

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : 새로운 `Intl.RelativeTimeFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : 실패시 런타임의 기본 로케일로 돌아가지 않아도 되는 로케일의 배열을 반환합니다. 지정된 로케일 중, 실행시의 디폴트의 로케일에 폴백 하지 않고 대응되는 것을 배열에 넣어 돌려줍니다.

## 인스턴스 속성

아래 속성은 `Intl.RelativeTimeFormat.prototype`에 정의되어 있으며 모든 `Intl.RelativeTimeFormat` 인스턴스가 공유합니다.

- {{jsxref("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Intl.RelativeTimeFormat` 인스턴스의 경우, 초기 값은 {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} 생성자입니다.
- `Intl.RelativeTimeFormat.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Intl.RelativeTimeFormat"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : 주어진 `Intl.RelativeTimeFormat` 객체의 로케일과 형식 옵션에 따라 `value` 과 `unit`의 형식을 맞춥니다.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : 사용자 지정 로케일 형식에 사용할 수 있는 상대 시간의 형식을 부분적으로 표현한 {{jsxref("Array")}} 객체를 반환합니다.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : 객체를 초기화하는 동안 계산된 로케일 및 형식 옵션을 반영하는 속성을 가진 새 객체를 반환합니다.

## 예제

### 기본 포맷 사용하기

다음 예제는 영어를 사용한 상대 시간 형식을 변환하는 객체를 보여줍니다.

```js
// 상대 시간 형식을 변환하는 객체를 명시적인 기본 값과 함께 만듭니다.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // 또 다른 값: "lookup"
  numeric: "always", // 또 다른 값: "auto"
  style: "long", // 또 다른 값: "short" or "narrow"
});

// 음수 값(-1)을 사용한 상대 시간 형식
rtf.format(-1, "day"); // "1 day ago"

// 양수 값(1)을 사용한 상대 시간 형식
rtf.format(1, "day"); // "in 1 day"
```

### formatToParts 사용하기

다음 예제는 요소 형식으로 반환하는 상대 시간 형식을 변환하는 객체를 보여줍니다.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
// day 단위를 사용한 상대 시간 형식 변환

rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl")}}
- [The Intl.RelativeTimeFormat API](https://v8.dev/features/intl-relativetimeformat)
- [A polyfill of `Intl.RelativeTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-relativetimeformat/)
