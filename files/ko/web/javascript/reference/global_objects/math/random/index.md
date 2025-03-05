---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: aff96926e4be5cfd33572f17e96d770deee13caa
---

{{JSRef}}

**`Math.random()`** 정적 메서드는 0보다 크거나 1보다 작은 부동 소수점 의사 난수를 반환하며, 해당 범위에서 거의 균일한 분포를 가지므로 원하는 범위로 확장할 수 있습니다. 구현체는 난수 생성 알고리즘의 초기 시드를 선택하며, 사용자가 선택하거나 재설정할 수 없습니다.

> **참고:** `Math.random()`은 암호학적으로 안전한 난수를 제공하지 않습니다. 보안과 관련된 용도로 사용하지 마세요. 대신 Web Crypto API, 더 정확하게는 {{domxref("Crypto/getRandomValues", "window.crypto.getRandomValues()")}} 메서드를 사용하시기 바랍니다.

{{InteractiveExample("JavaScript Demo: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```

## 문법

```js-nolint
Math.random()
```

### 매개변수

없음.

### 반환 값

0 이상 1 미만의 부동소숫점 의사 난수.

## 예제

JavaScript의 숫자(number)는 가까운 짝수로 반올림되는(round-to-nearest-even behavior) IEEE 754 부동 소수점 숫자이므로, 아래 함수(`Math.random()` 자체의 범위 제외)에 대해 명시된 범위는 정확하지 않습니다. 매우 큰 범위를 선택하면 극히 드물게 일반적으로 제외되는 최대값에 도달할 수 있습니다.

### 0 이상 1 미만의 난수 생성하기

```js
function getRandom() {
  return Math.random();
}
```

### 두 값 사이의 난수 생성하기

이 예제는 지정된 값 사이의 임의의 정수를 반환합니다. 이 값은 `min`(또는 `min`이 정수가 아닌 경우 `min`보다 큰 다음 정수) 보다 작고 `max`보다 작지만 같지 않은 값입니다.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 두 값 사이의 정수 난수 생성하기

이 예제는 주어진 두 값 사이의 정수인 난수를 생성합니다. 반환값은 `min`(단, `min`이 정수가 아니면 `min`보다 큰 최소의 정수)보다 크거나 같으며, `max`보다 작습니다.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
}
```

> [!NOTE]
> 이 예제에서 [`Math.round()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/round)를 사용하고 싶을 수 있지만, 이렇게 하면 난수가 고르게 분포하지 않게 되므로 필요에 맞지 않을 수 있습니다.

### 두 수를 포함하는 두 수 사이의 정수 난수 생성하기

위의 `getRandomInt()` 함수는 최솟값을 포함하지만, 최댓값은 포함하지 않습니다. 최솟값과 최댓값을 모두 포함하는 결과가 필요할 경우, 아래의 `getRandomIntInclusive()` 함수를 사용할 수 있습니다.

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Crypto/getRandomValues", "window.crypto.getRandomValues()")}}
