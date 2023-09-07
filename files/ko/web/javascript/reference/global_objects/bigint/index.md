---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
---

{{JSRef}}

**`BigInt`** 는 {{jsxref("Number")}} 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.

## 설명

`BigInt`는 정수 리터럴의 뒤에 `n`을 붙이거나(`10n`) 함수 `BigInt()`를 호출해 생성할 수 있습니다.

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
```

`BigInt`와 {{jsxref("Number")}}는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다. 예컨대 `BigInt`는 내장 {{jsxref("Math")}} 객체의 메서드와 함께 사용할 수 없고, 연산에서 `Number`와 혼합해 사용할 수 없습니다. 따라서 먼저 같은 자료형으로 변환해야 합니다. 그러나, `BigInt`가 `Number`로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다.

### 자료형 정보

`BigInt`의 `typeof` 판별 결과는 `"bigint"`입니다.

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

{{jsxref("Object")}}로 감싼 `BigInt`는 일반적인 `object` 자료형으로 취급합니다.

```js
typeof Object(1n) === "object"; // true
```

### 연산자

`+`, `*`, `-`, `**`, `%` 연산자를 `BigInt`나 객체로 감싼 `BigInt`에서 사용할 수 있습니다. [비트 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)도 사용할 수 있으나, 모든 `BigInt`는 부호를 가져야 하므로 `>>>` (부호 버림 오른쪽 시프트)는 사용할 수 없습니다. [asm.js에서 문제를 일으키지 않도록](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs), 단항 `+` 연산자도 지원하지 않습니다.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

`/` 연산자도 정수 연산에서 예상할 수 있는 결과를 동일하게 도출합니다. 그러나 `BigInt`는 `BigDecimal`이 아니므로, 연산의 결과는 언제나 소수점 이하를 버립니다. 즉, 정수가 아닌 결과는 나오지 않습니다.

> **경고:** 소수점 결과를 포함하는 연산을 `BigInt`와 사용하면 소수점 이하는 사라집니다.

```js
const expected = 4n / 2n;
// ↪ 2n

const rounded = 5n / 2n;
// ↪ 2.5n이 아니라 2n
```

### 비교

`BigInt`는 {{jsxref("Number")}}와 일치하지 않지만 동등합니다.

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

`Number`와 `BigInt`는 일반적인 방법으로 비교할 수 있습니다.

```js
1n < 2;
// ↪ true

2n > 1;
// ↪ true

2 > 2;
// ↪ false

2n > 2;
// ↪ false

2n >= 2;
// ↪ true
```

배열의 요소로 함께 사용했을 땐 정렬도 가능합니다.

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

{{jsxref("Object")}}로 감싼 `BigInt`의 경우 다른 객체와 마찬가지로 자기 자신과 비교했을 때만 일치합니다.

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### 조건

`BigInt`는 다음의 상황에서는 {{jsxref("Number")}}처럼 행동합니다.

- {{jsxref("Boolean")}} 함수를 사용해 Boolean 객체로 변환
- [논리 연산자](</ko/docs/Web/JavaScript/Reference/Operators/%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90(Logical_Operators)>) `||`, `&&`, `!`와 함께 사용
- {{jsxref("Statements/if...else", "if")}}문 등 조건 판별 시

```js
if (0n) {
  console.log("if에서 안녕!");
} else {
  console.log("else에서 안녕!");
}

// ↪ "else에서 안녕!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

Boolean(0n);
// ↪ false

Boolean(12n);
// ↪ true

!12n;
// ↪ false

!0n;
// ↪ true
```

## 생성자

- {{jsxref("BigInt.BigInt", "BigInt()")}}
  - : `BigInt` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("BigInt.asIntN()")}}
  - : 주어진 `BigInt`를 `-2^(width - 1)`과 `2^(width - 1) - 1`의 범위로 자릅니다.
- {{jsxref("BigInt.asUintN()")}}
  - : 주어진 `BigInt`를 `0`과 `2^width - 1`의 범위로 자릅니다.

## 인스턴스 메서드

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : BigInt를 주어진 언어에 적합한 형태를 가진 문자열로 변환해 반환합니다. {{jsxref("Object.prototype.toLocaleString()")}} 메서드를 재정의합니다.
- {{jsxref("BigInt.prototype.toString()")}}
  - : `BigInt`의 값을 주어진 진수로 표현한 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : `BigInt` 객체의 원시 값 표현을 반환합니다. {{jsxref("Object.prototype.valueOf()")}} 메서드를 재정의합니다.

## 권장사항

### 변환

`BigInt`를 {{jsxref("Number")}}로 변환하는 과정에서 정확도를 유실할 수 있으므로, 2^53보다 큰 값을 예상할 수 있는 경우 `BigInt`만 사용하는 것이 좋습니다.

### 암호화

`BigInt`가 지원하는 연산의 소요시간은 상수 시간이 아니기 때문에 [암호화에 적합하지 않습니다](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).

### JSON과 함께 사용하기

`BigInt`는 직렬화할 수 없기 때문에, {{jsxref("JSON.stringify()")}}에 `BigInt`를 포함한 값을 전달한다면 `TypeError`가 발생합니다. 대신, 필요한 경우 자신만의 `toJSON` 메서드를 만들 수 있습니다.

```js
BigInt.prototype.toJSON = function () {
  return this.toString();
};
```

이제 아래 코드가 오류를 던지지 않고 문자열을 반환합니다.

```js
JSON.stringify(BigInt(1));
// '"1"'
```

## 예제

### 소수 구하기

```js
// 주어진 BigInt가 소수이면 true 반환
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// BigInt를 받아, n번째 소수를 BigInt로 반환
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth -= 1n;
      prime = maybePrime;
    }
    maybePrime += 1n;
  }

  return prime;
}

nthPrime(20n);
// ↪ 73n
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number")}}
