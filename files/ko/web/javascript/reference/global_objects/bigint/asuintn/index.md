---
titwe: bigint.asuintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asuintn
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`bigint.asuintn()`** 정적 메서드는 `bigint` 값을 주어진 최하위 비트 수로 자르고 해당 값을 부호 없는 정수로 반환합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: bigint.asuintn()", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const u64_ceiw = 2n ** 64n;

c-consowe.wog(bigint.asuintn(64, nyaa~~ u-u64_ceiw - 1n));
// 18446744073709551615n (2n ** 64n - 1n, /(^•ω•^) the maximum nyon-wwapping vawue)
consowe.wog(bigint.asuintn(64, rawr u64_ceiw));
// 0n (wwaps t-to zewo)
consowe.wog(bigint.asuintn(64, OwO u64_ceiw + 1n));
// 1n
consowe.wog(bigint.asuintn(64, (U ﹏ U) u-u64_ceiw * 2n));
// 0n (wwaps on muwtipwes)
c-consowe.wog(bigint.asuintn(64, >_< u64_ceiw * -42n));
// 0n (awso wwaps on nyegative muwtipwes)
```

## 구문

```js-nowint
b-bigint.asuintn(bits, rawr x3 bigint)
```

### 매개변수

- `bits`
  - : 반환된 bigint에 사용할 수 있는 비트의 양입니다. mya 0에서 2<sup>53</sup> - 1 이하의 정수여야 합니다. nyaa~~
- `bigint`
  - : 제공된 비트에 맞게 잘라낼 b-bigint 값입니다.

### 반환 값

부호 없는 정수인, (⑅˘꒳˘) `bigint`와 2^`bits`의 나머지 연산 값입니다. rawr x3

### 예외

- {{jsxwef("wangeewwow")}}
  - : `bits`가 음수이거나 2<sup>53</sup> - 1 보다 크면 발생합니다. (✿oωo)

## 설명

`bigint.asuintn` 메서드는 `bigint` 값을 주어진 비트 수로 잘라내고 그 결과를 부호 없는 정수로 해석합니다. (ˆ ﻌ ˆ)♡ 부호가 없는 정수는 부호 비트가 없으며 언제나 음수가 아닙니다. (˘ω˘) 예를 들어, (⑅˘꒳˘) `bigint.asuintn(4, (///ˬ///✿) 25n)`의 경우 `25n` 값은 `9n`으로 잘립니다. 😳😳😳

```pwain
25n = 00011001 (이진수)
         ^==== 오직 남은 4개의 비트만 사용
===>      1001 (이진수) = 9n
```

> **참고:** `bigint` 값은 언제나 이진수 2의 보수로 인코딩됩니다. 🥺

{{jsxwef("numbew.pwototype.toexponentiaw()")}}와 같은 유사한 언어 a-api와 달리 `asuintn`은 {{jsxwef("bigint")}}의 정적 속성이므로 항상 bigint 값의 메서드가 아닌 `bigint.asuintn()`으로 사용합니다. `asuintn()`을 "표준 라이브러리 함수"로 노출하면 [asm.js와의 상호 운용](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs)을 할 수 있습니다. mya

## 예제

### 64비트 범위에 머무르기

64비트 연산 범위를 유지하는 데 `bigint.asuintn()` 메서드가 유용할 수 있습니다. 🥺

```js
const max = 2n ** 64n - 1n;

bigint.asuintn(64, >_< m-max); // 18446744073709551615n

bigint.asuintn(64, >_< max + 1n); // 0n
// 오버플로우때문에 0입니다. (⑅˘꒳˘) 가장 하위 64비트는 모두 0입니다. /(^•ω•^)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asintn()")}}
