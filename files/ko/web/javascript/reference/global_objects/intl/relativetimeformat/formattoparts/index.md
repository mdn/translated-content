---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Intl.RelativeTimeFormat")}} 인스턴스의 **`formatToParts()`** 메서드는 사용자 지정 로케일 인식 형식에 사용할 수 있는 부분의 상대 시간 형식을 나타내는 객체의 {{jsxref("Array")}}를 반환합니다.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.formatToParts")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const parts = rtf1.formatToParts(10, "seconds");

console.log(parts[0].value);
// Expected output: "in "

console.log(parts[1].value);
// Expected output: "10"

console.log(parts[2].value);
// Expected output: " seconds"
```

## 구문

```js-nolint
formatToParts(value, unit)
```

### 매개변수

- `value`
  - : 국제화된 상대 시간 메시지에 사용할 숫자 값입니다.
- `unit`
  - : 상대 시간 국제화 메시지에 사용할 단위입니다. `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"` 값이 가능합니다. 복수형도 허용됩니다.

### 반환 값

파트별로 형식화된 상대시간이 포함된 {{jsxref("Array")}} 객체.

## 설명

`Intl.RelativeTimeFormat.prototype.formatToParts` 메서드는 형식화 된 숫자를 구성 부분과 주변의 다른 텍스트와 분리하여 객체의 "parts"을 나타내는 객체 배열을 반환하는 형식화 메서드의 또 다른 버전입니다. 이러한 객체에는 두 가지 속성이 있습니다. `NumberFormat` formatToParts 유형과 출력의 구성 요소인 문자열 값입니다. "part"가 `NumberFormat`에서 온 경우 형식화되는 단위를 나타내는 단위 속성을 가지며, 더 큰 프레임의 일부인 리터럴은 이 속성을 갖지 않습니다.

## 예제

### formatToParts 사용하기

```js
const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

// 일 단위를 사용한 상대 시간 형식
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "어제"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: "일 후" }
// ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.RelativeTimeFormat")}}
