---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

{{jsxref("Intl.ListFormat")}} 인스턴스의 **`format()`** 메서드는 언어별 목록을 표현하는 문자열을 반환합니다.

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

## 구문

```js-nolint
format()
format(list)
```

### 매개변수

- `list`
  - : 배열 같은 순회 가능한 객체.

### 반환 값

목록의 요소를 표현할 수 있도록 형식이 맞춰진 언어별 문자열.

> [!NOTE]
> 대부분의 경우, `format()`이 반환하는 형식은 일관성이 있습니다. 하지만 같은 로케일 내에서도 구현체에 따라 출력이 달라질 수 있습니다 — 출력의 변동은 의도된 것이며 명세에 의해 허용됩니다. 또한 예상과 다를 수도 있습니다. 예를 들어, 반환된 문자열에 줄바꿈 없는 공백이 사용되거나 양방향 제어 문자로 둘러싸여 있을 수 있습니다. 따라서 `format()`의 결과를 하드코딩된 상수와 비교해서는 안 됩니다.

## 설명

**`format()`** 메서드는 `Intl.ListFormat` 객체에
제공된 매개변수를 바탕으로 형식이 지정된 문자열을 반환합니다.
`locales`와 `options` 매개변수는 `format()`의 동작을 사용자 정의하며,
애플리케이션이 목록을 형식화하는 데 사용해야 할
언어 규칙을 지정할 수 있게 합니다.

## 예제

### format 사용하기

아래 예제는 영어를 사용한 List 형식 맞춤기를 생성하는 방법을 보여줍니다.

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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.ListFormat")}}
