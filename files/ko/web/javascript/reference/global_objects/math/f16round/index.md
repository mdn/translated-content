---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

**`Math.f16round()`** 정적 메서드는 숫자의 가장 가까운 [16비트 반정밀도 부동소수점](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) 표현을 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.f16round()")}}

```js interactive-example
console.log(Math.f16round(5.5));
// Expected output: 5.5

console.log(Math.f16round(5.05));
// Expected output: 5.05078125

console.log(Math.f16round(5));
// Expected output: 5

console.log(Math.f16round(-5.05));
// Expected output: -5.05078125
```

## 구문

```js-nolint
Math.f16round(doubleFloat)
```

### 매개변수

- `doubleFloat`
  - : 숫자.

### 반환 값

`doubleFloat`의 가장 가까운 [16비트 반정밀도](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) 부동소수점 표현.

## 설명

`Math.f16round`는 {{jsxref("Math.fround()")}}의 16비트 버전입니다. 이는 {{jsxref("Float16Array")}}에서 읽을 때와 같이 float16 숫자와 상호 작용할 때 발생하는 일부 문제점을 해결하기 위한 것입니다. 내부적으로 JavaScript는 여전히 숫자를 64비트 부동소수점으로 취급하지만, 가수의 10번째 비트에서 "짝수로 반올림"을 수행하고 이후의 모든 가수 비트를 `0`으로 설정합니다. 숫자가 16비트 부동소수점의 범위를 벗어나면 {{jsxref("Infinity")}} 또는 `-Infinity`가 반환됩니다.

`f16round()`는 `Math`의 정적 메서드이므로, 생성한 `Math` 객체의 메서드로 사용하는 것이 아니라 항상 `Math.f16round()`로 사용합니다(`Math`는 생성자가 아닙니다).

## 예제

### Math.f16round() 사용하기

숫자 1.5는 이진 숫자 시스템에서 정확하게 표현될 수 있으며, 16비트와 64비트에서 동일합니다.

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

그러나 숫자 1.337은 이진 숫자 시스템에서 정확하게 표현될 수 없기 때문에 16비트와 64비트에서 다릅니다.

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000은 16비트 부동소수점에 비해 너무 크므로 `Infinity`가 반환됩니다:

```js
Math.f16round(100000); // Infinity
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Math.f16round` 폴리필](https://github.com/zloirock/core-js#float16-methods)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
