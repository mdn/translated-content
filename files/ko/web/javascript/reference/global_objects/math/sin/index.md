---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef}}

**`Math.sin()`** 함수는 숫자의 사인값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// Expected output: 8.414709848078965

console.log(getCircleY(2, 10));
// Expected output: 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// Expected output: 1.2246467991473533e-15
```

## Syntax

```js
Math.sin(x);
```

### 파라미터

- `x`
  - : 숫자 (라디안으로 주어짐).

### 반환 값

주어진 숫자의 사인 값

## 설명

`Math.sin()` 메소드는 라디안으로 주어진 각도의 사인 값인 -1과 1 사이의 수를 반환합니다.

`sin()` 은 `Math`의 스태틱 메소드이기 때문에, `Math` 오브젝트 의 메소드로 사용하지 말고 항상 `Math.sin()`로 사용해야합니다. (`Math` 는 생성자가 아닙니다).

## 예

### Using `Math.sin()`

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
