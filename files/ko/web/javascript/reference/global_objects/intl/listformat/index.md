---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Intl.ListFormat`** 객체는 언어별 목록 서식을 가능하게 합니다.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## 생성자

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : `Intl.ListFormat` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : 런타임의 기본 로케일로 돌아가지 않고 지원되는 제공된 로케일이 포함된 배열을 반환합니다.

## 인스턴스 속성

다음 속성은 `Intl.ListFormat.prototype`에 정의되어 있으며, 모든 `Intl.ListFormat` 인스턴스에 공유됩니다.

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Intl.ListFormat` 인스턴스의 경우, 초기 값은 {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}} 생성자입니다.
- `Intl.ListFormat.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Intl.ListFormat"` 입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 인스턴스 메서드

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : 목록의 요소를 표현하는 언어별 형식의 문자열을 반환합니다.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : 로케일 인식 방식으로 값 목록의 형식을 맞추는 데 사용할 수 있는 컴포넌트를 의미하는 객체 배열을 반환합니다.
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : 현재 {{jsxref("Intl.ListFormat")}} 객체를 구성하는 동안 계산된 로케일 및 스타일 서식 지정 옵션을 반영하는 속성을 가진 새 객체를 반환합니다.

## 예제

### format 사용하기

다음 예제는 영어를 사용하여 목록 형식기를 만드는 방법을 보여줍니다.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

### formatToParts 사용하기

다음 예제는 형식이 맞춰진 부분을 반환하는 목록 형식기를 만드는 방법을 보여줍니다.

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [FormatJS에서 `Intl.ListFormat`의 폴리필](https://formatjs.io/docs/polyfills/intl-listformat/)
- {{jsxref("Intl")}}
