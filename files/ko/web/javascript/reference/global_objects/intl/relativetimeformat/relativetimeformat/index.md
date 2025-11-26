---
title: Intl.RelativeTimeFormat() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

**`Intl.RelativeTimeFormat()`** 생성자는 {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} 객체를 생성합니다.

## 구문

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` 생성자는 오직
> [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 사용할 수 있습니다.
> `new` 없이 호출하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `locales` {{optional_inline}}
  - : BCP 47 언어 태그가 포함된 문자열 또는 {{jsxref("Intl.Locale")}} 인스턴스 또는 이러한 로케일 식별자의 배열입니다. `undefined`이 전달되거나 명시된 로케일 식별자가 지원되지 않는 경우 런타임의 기본 로케일이 사용됩니다. `locales` 인수의 일반적인 형식과 해석에 대해서는 [`Intl` 메인 페이지의 매개변수 설명](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)을 참조하세요.

    허용되는 유니코드 확장 키는 아래와 같습니다.
    - `nu`
      - : [`numberingSystem`](#numberingsystem) 를 참고하세요.

    이 키는 아래 나열된 대로 `options`으로 설정할 수도 있습니다. 둘 다 설정된 경우 `options` 속성이 우선합니다.

- `options` {{optional_inline}}
  - : 검색되는 순서대로 다음 속성을 포함하는 객체입니다(모두 선택 사항입니다).
    - `localeMatcher`
      - : 사용할 로케일 일치 알고리즘입니다. 가능한 값은 `"lookup"` 및 `"best fit"`이며, 기본값은 `"best fit"`입니다. 이 옵션에 대해 더 알고 싶으시다면 [로케일 식별 및 협상](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)을 참고하시기 바랍니다.
    - `numberingSystem`
      - : 숫자 형식화에 사용할 `"arab"`, `"hans"`, `"mathsans"` 등의 숫자 체계입니다. 지원되는 숫자 체계 유형 목록은 [`Intl.Locale.prototype.getNumberingSystems()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types)를 참고하시기 바랍니다. 이 옵션은 `nu` 유니코드 확장 키를 통해서도 설정할 수 있으며, 둘 다 제공된 경우 이 `옵션` 속성이 우선합니다.
    - `style`
      - : 형식화된 상대 시간의 스타일입니다. 가능한 값은 다음과 같습니다.
        - `"long"` (default)
          - : 예를 들어, "in 1 month"
        - `"short"`
          - : 예를 들어, "in 1 mo."
        - `"narrow"`
          - : 예를 들어, "in 1 mo.". 좁은 스타일은 일부 로케일의 경우 짧은 스타일과 유사할 수 있습니다.
    - `numeric`
      - : 출력에 숫자 값을 사용할지 여부입니다. 가능한 값은 `"always"` 및 `"auto"`이며, 기본값은 `"always"`입니다. `"auto"`으로 설정하면 출력에 `"1 day ago"`이 아닌 `"yesterday"`와 같은 관용적인 문구가 더 많이 사용될 수 있습니다.

### 예외

- {{jsxref("RangeError")}}
  - : `locales` 또는 `options` 에 유효하지 않은 값이 포함되어 있을 경우 발생합니다.

## 예제

### 기본적인 format 사용

아래 예제는 한국어를 사용하여 상대 시간 형식기를 생성하는 방법을 보여줍니다.

```js
// 기본 값을 넣어서 여러분의 로케일로 상대 시간 형식기를 만듭니다.
const rtf = new Intl.RelativeTimeFormat("ko", {
  localeMatcher: "best fit", // 다른 값: "lookup"
  numeric: "always", // 대른 값: "auto"
  style: "long", // 다른 값: "short" or "narrow"
});

// 음수(-1)을 사용한 상대 시간 형식화
rtf.format(-1, "day"); // "1일 전"

// 양수(1)을 사용한 상대 시간 형식화
rtf.format(1, "day"); // "1일 후"
```

### auto 옵션 사용하기

`numeric:auto` 옵션을 전달하면 `1일 전` 또는 `1일 후` 대신 `어제` 또는 `내일` 문자열을 생성합니다. 이는 출력에 항상 숫자 값을 사용할 필요를 없게 만듭니다.

```js
// numeric: "auto" 옵션을 넣어서 여러분의 로케일로 상대 시간 형식기를 만듭니다.
const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

// 음수(-1)을 사용하여 상대 시간을 형식화합니다.
rtf.format(-1, "day"); // "어제"

// 양수(1)을 사용하여 상대 시간을 형식화합니다.
rtf.format(1, "day"); // "내일"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) on v8.dev (2018)
