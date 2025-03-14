---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

**`Math.min()`** 정적 메서드는 입력 매개변수로 주어진 숫자 중 가장 작은 수를 반환하거나, 매개변수가 없으면 {{jsxref("Infinity")}}를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.min()")}}

```js interactive-example
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
```

## 구문

```js-nolint
Math.min()
Math.min(value1)
Math.min(value1, value2)
Math.min(value1, value2, /* …, */ valueN)
```

### 매개변수

- `value1`, …, `valueN`
  - : 0 혹은 그 이상의 숫자 중 선택되어 반환될 가장 작은 값

### 반환 값

주어진 숫자 중 가장 작은 값입니다. `NaN`이 있거나 `NaN`으로 변환되는 매개변수가 하나라도 있다면 {{jsxref("NaN")}}을 반환합니다. 매개변수가 아무것도 주어지지 않으면 {{jsxref("Infinity")}}을 반환합니다.

## 설명

`min()`은 `Math`의 정적 메서드이기 때문에, 생성한 `Math` 객체의 메서드 대신 언제나 `Math.min()`으로 사용해야 합니다(`Math`는 생성자가 아닙니다).

[`Math.min.length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 값이 2 인데, 이는 이 메서드가 최소 2개의 매개변수를 받도록 설계되었음을 암시합니다.

## 예제

### Math.min() 사용하기

`x`와 `y` 중 최소 값을 찾고 이를 `z`에 할당합니다.

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Math.min()로 값 제한하기

`Math.min()` 함수는 항상 경계보다 작거나 같은 값으로 제한하는 용도로 사용됩니다. 예를 들어 보겠습니다.

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

위 코드는 다음과 같이 쓸 수 있습니다.

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} 함수 또한 같은 방식으로 값으로 제한하기 위해 사용할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.max()")}}
