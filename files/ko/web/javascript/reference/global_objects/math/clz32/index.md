---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{JSRef}}

**`Math.clz32()`** 정적 메서드는 숫자의 32비트 이진 표현에서 선행 0 비트의 갯수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// Expected output: 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// Expected output: 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// Expected output: 22
```

## 구문

```js-nolint
Math.clz32(x)
```

### 매개변수

- `x`
  - : 숫자입니다.

### 반환 값

32비트 이진 표현에서 `x` 의 선행 0 비트 수를 반환합니다.

## 설명

`clz32` 는 **C**ount**L**eading**Z**eros**32** 의 약자입니다.

만일 `x` 가 숫자가 아니라면, 이는 가장 먼저 숫자로 변환이 되고 그 다음 32비트의 기호가 없는 정수로 변환됩니다.

변환된 32비트의 기호 없는 정수가 `0` 이라면 `32` 가 반환됩니다. 왜냐하면 모든 비트는 `0` 이기 때문입니다. 만일 (숫자가 2<sup>31</sup> 보다 크거나 같은 경우처럼) 가장 큰 비트가 `1` 이라면 `0` 이 반환됩니다.

이 함수는 [Emscripten](https://emscripten.org/) 처럼 JS로 컴파일되는 체계에 특히 더 유용하게 사용됩니다.

## 예제

### Math.clz32() 사용하기

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

### 선행 비트 연산과 그 이상

현재는 선행 비트 연산("clo" 가 아니라 "clon" 이라고 부르는데, 이는 "clo" 와 "clz" 가 영어를 사용하지 않는 사람들에게 매우 유사하게 느껴질 수 있기 때문입니다.)을 위한 `Math.clon` 함수는 없습니다. 하지만 `clon` 함수는 쉽게 비트를 숫자로 연산하어 `Math.clz32` 의 결괏값으로 전달됩니다. 이는 1의 반대가 0이고 그 반대도 마찬가지이기 때문에 작동합니다. 따라서 비트를 반전시키면 0의 측정된 수량( `Math.clz32` 에서)이 반전되어 `Math.clz32` 가 0 대신 1의 개수를 세게 됩니다.

다음 32비트 예제를 살펴보세요.

```js
const a = 32776; // 00000000000000001000000000001000 (16개의 선행 0이 있음)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 반전, 0개의 선행 0이 있음)
Math.clz32(b); // 0 (이는 a에서 얼마나 많은 선행 값이 있는지와 동일한 값입니다.)
```

이 로직을 사용하면 `clon` 함수는 다음과 같이 생성됩니다.

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

더 나아가, 이 기술은 아래와 같이 점프가 없는 "후행 0 세기" 함수를 만드는 데에 확장하여 사용할 수 있습니다. `ctrz` 함수는 정수와 그 2의 보수의 비트 AND 연산을 수행합니다. 2의 보수가 작동하는 방식에 따라, 모든 후행 제로는 1로 변환되고, 1을 더할 때 (원래는 `1`이었던) 첫번째 `0` 에 도달할 때까지 올림이 발생합니다. 이 비트보다 높은 모든 비트는 동일하게 유지되며 원래 정수 비트의 역수입니다. 따라서 원래 정수와 비트 AND 연산을 할 때, 더 높은 모든 비트는 `0` 이 되며, 이는 `clz` 로 카운트될 수 있습니다. 후행 제로의 수와 처음 `1` 비트, 그리고 `clz` 로 세어진 선행 비트의 합은 32가 됩니다.

```js
function ctrz(integer) {
  integer >>>= 0; // Uint32로 변환
  if (integer === 0) {
    // 이 구문을 스킵하면 -1이 반환될 수 있습니다.
    return 32;
  }
  integer &= -integer; // 다음 연산과 동일합니다. `int = int & (~int + 1)`
  return 31 - clz(integer);
}
```

"후행 0 세기" 함수는 다음처럼 동작합니다.

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

이 헬퍼 함수들은 잠재적인 성능 개선을 위해 [asm.js](/ko/docs/Games/Tools/asm.js) 모듈을 만들 수 있습니다.

```js
const countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  const clz = stdlib.Math.clz32;

  // 후행 0 세기
  function ctrz(integer) {
    integer = integer | 0; // 정수로 변환
    if ((integer | 0) == 0) {
      // 이 구문을 스킵하면 -1이 반환될 수 있습니다.
      return 32;
    }
    // Note: asm.js는 &=와 같은 복합 할당 연산자를 가지고 있지 않습니다.
    integer = integer & -integer; // 다음 연산과 동일합니다. `int = int & (~int + 1)`
    return (31 - clz(integer)) | 0;
  }

  // 후행 갯수 세기
  function ctron(integer) {
    integer = integer | 0; // 정수로 변환
    return ctrz(~integer) | 0;
  }

  // asm.js는 순수 객체를 필요로 합니다.
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = countTrailsMethods;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js` 의 `Math.clz32` 폴리필](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
