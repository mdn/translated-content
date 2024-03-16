---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Intl.RelativeTimeFormat`** 은 언어에 의존적인 상대 시간 형식을 사용할 수 있게 합니다.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## 생성자

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : 새로운 `Intl.RelativeTimeFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : 실패시 런타임의 기본 로케일로 돌아가지 않아도 되는 로케일의 배열을 반환합니다. 지정된 로케일 중, 실행시의 디폴트의 로케일에 폴백 하지 않고 대응되는 것을 배열에 넣어 돌려줍니다.

## 인스턴스 메서드

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : 주어진 `Intl.RelativeTimeFormat` 객체의 로케일과 형식 옵션에 따라 `value` 과 `unit`의 형식을 맞춥니다. value및 unit를, 지정된 Intl.RelativeTimeFormat오브젝트의 로케일과 서식화 옵션에 따라 서식화합니다.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : 사용자 지정 로케일 형식에 사용할 수 있는 상대 시간의 형식을 부분적으로 표현한 {{jsxref("Array")}} 객체를 반환합니다.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : 객체를 초기화하는 동안 계산된 로케일 및 형식 옵션을 반영하는 속성을 가진 새 객체를 반환합니다.

## 예제

### 기본 포맷 사용하기

다음 예제는 `locales` 매개변수가 영어로 지정된 `Intl.RelativeTimeFormat(locales, options)`의 작동 예시를 보여줍니다.

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

다음 예제는 `Intl.RelativeTimeFormat()`이 부분별로 형식화된 결과 값을 반환하는 방법을 보여줍니다.

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
