---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Intl.RelativeTimeFormat")}} 인스턴스의 **`format()`** 메서드는 이 `Intl.RelativeTimeFormat` 객체의 로케일 및 형식 옵션에 따라 `value`와 `unit`의 형식을 지정합니다.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.format")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

console.log(rtf1.format(10, "seconds"));
// Expected output: "in 10 sec."
```

## 구문

```js-nolint
format(value, unit)
```

### 매개변수

- `value`
  - : 국제화된 상대 시간 메시지에 사용할 숫자 값입니다.
- `unit`
  - : 상대 시간 국제화 메시지에 사용할 단위입니다. `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"` 값이 가능합니다. 복수형도 허용됩니다.

### 반환 값

주어진 `value`과 `unit`를 나타내는 문자열로, 이 {{jsxref("Intl.RelativeTimeFormat")}} 객체의 로케일 및 형식 옵션에 따라 형식이 지정됩니다.

## 예제

### 기본적인 format 사용법

다음 예제는 영어를 사용하여 상대 시간 형식 지정기를 만드는 방법을 보여줍니다.

```js
// 로케일에 기본값을 명시적으로 전달하여 상대 시간 형식 지정기를 만듭니다.
const rtf = new Intl.RelativeTimeFormat("ko", {
  localeMatcher: "best fit", // 기타 값: "lookup"
  numeric: "always", // 기타 값: "auto"
  style: "long", // 기타 값: "short" or "narrow"
});

// 음수 값(-1)을 사용한 상대 시간 형식 지정
rtf.format(-1, "day"); // "1일 전"

// 양수 값(1)을 사용한 상대 시간 형식 지정
rtf.format(1, "day"); // "1일 후"
```

### auto 옵션 사용하기

`numeric:auto` 옵션을 전달하면 `1일 전`, `0일 후` 또는 `1일 후` 대신 `어제`, `오늘` 또는 `내일` 문자열을 생성합니다. 이렇게 하면 출력에 항상 숫자 값을 사용할 필요는 없습니다.

```js
// 여러분의 로케일과 함께 numeric: "auto" 옵션으로 상대 시간 형식 지정기를 만듭니다.
const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

// 음수 값(-1)을 사용한 상대 시간 형식 지정
rtf.format(-1, "day"); // "어제"

rtf.format(0, "day"); // "오늘"

// 양수 값(1)을 사용한 상대 시간 형식 지정
rtf.format(1, "day"); // "내일"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.RelativeTimeFormat")}}
