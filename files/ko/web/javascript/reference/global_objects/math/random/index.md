---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef}}

**`Math.random()`** 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환하며, 이 값은 사용자가 원하는 범위로 변형할 수 있다. 난수 생성 알고리즘에 사용되는 초기값은 구현체가 선택하며, 사용자가 선택하거나 초기화할 수 없다.

> **참고:** `Math.random()`은 암호학적으로 안전한 난수를 **제공하지 않으므로**, 보안과 관련된 어떤 것에도 이 함수를 사용해서는 안 된다. 그 대신 Web Crypto API의 {{domxref("RandomSource.getRandomValues()", "window.crypto.getRandomValues()")}} 메소드를 이용하여야 한다.

## 문법

```js
Math.random();
```

### 반환 값

0 이상 1 미만의 부동소숫점 의사 난수.

## 예제

### `Math.random()` 사용

JavaScript의 수(number)는 가까운 짝수로 반올림되는(round-to-nearest-even behavior) IEEE 754 부동소수점 실수이므로, 아래 함수들(`Math.random()` 자체에 대한 사항은 제외)에 명시된 범위는 정확하지 않음을 유의하라. 지나치게 큰 범위(2^53 이상)를 선택할 경우, _매우_ 드문 경우 원래 포함되어서는 안 될 최댓값이 포함되는 경우가 있다.

### 0 이상 1 미만의 난수 생성하기

```js
function getRandom() {
  return Math.random();
}
```

### 두 값 사이의 난수 생성하기

이 예제는 주어진 두 값 사이의 난수를 생성한다. 함수의 반환값은 `min`보다 크거나 같으며, `max`보다 작다.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 두 값 사이의 정수 난수 생성하기

이 예제는 주어진 두 값 사이의 **정수인** 난수를 생성한다. 반환값은 `min`(단, `min`이 정수가 아니면 `min`보다 큰 최소의 정수)보다 크거나 같으며, `max`보다 작다.

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
```

> **참고:** 이 예제에서 `Math.round()`를 대신 사용하려고 할 수 있으나, 이렇게 하면 난수가 고르게 분포하지 않게 된다.

### 최댓값을 포함하는 정수 난수 생성하기

위의`getRandomInt()` 함수는 최솟값을 포함하지만, 최댓값은 포함하지 않는다. 최솟값과 최댓값을 모두 포함하는 결과가 필요할 경우, 아래의 `getRandomIntInclusive()` 함수를 사용할 수 있다.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
