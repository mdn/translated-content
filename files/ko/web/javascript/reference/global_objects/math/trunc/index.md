---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Math.trunc()`** 정적 메서드는 숫자의 소수 부분을 제거한 숫자의 정수 부분을 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.trunc()")}}

```js interactive-example
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0
```

## 구문

```js-nolint
Math.trunc(x)
```

### 매개변수

- `x`
  - : 숫자

### 반환 값

`x`의 정수 부분

## 설명

다른 세 가지 `Math` 메서드인 {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} 및 {{jsxref("Math.round()")}}와 달리, `Math.trunc()`의 작동 방식은 매우 간단합니다. 이 메서드는 인수가 양수이든 음수이든 상관없이 소수점과 그 오른쪽의 숫자들을 절단합니다(잘라냅니다).

`trunc()`는 `Math`의 정적 메서드이기 때문에, 생성한 `Math` 객체의 메서드로 사용하는 것이 아니라 항상 `Math.trunc()`로 사용합니다 (`Math`는 생성자가 아닙니다).

## 예제

### Math.trunc() 사용하기

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

### 비트 연산 no-ops을 사용하여 숫자 잘라내기

> [!WARNING]
> 무시할 수 없는 경계 조건 때문에 `Math.trunc()`의 폴리필이 아닙니다.

비트 연산은 피연산자를 32비트 정수로 변환하는데, 이를 이용해 역사적으로 부동소수점 숫자를 절단하는 데 활용해 왔습니다. 일반적인 기술들은 다음과 같습니다.

```js
const original = 3.14;
const truncated1 = ~~original; // 이중 부정
const truncated2 = original & -1; // -1과의 AND 비트 연산
const truncated3 = original | 0; // 0과의 OR 비트 연산
const truncated4 = original ^ 0; // 0과의 XOR 비트 연산
const truncated5 = original >> 0; // 0만큼 비트 시프트
```

주의할 점은 이는 본질적으로 `toInt32`와 같지만 `Math.trunc`와 같지 않디는 점입니다. 값이 -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value `< 2147483648) 범위를 벗어날 경우, 변환 시 오버플로우가 발생할 수 있습니다.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

`~~`를 `Math.trunc()` 대신 사용할 때는 입력 범위가 32비트 정수의 범위 내에 있다고 확신할 때만 사용하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Math.trunc` 폴리필](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
