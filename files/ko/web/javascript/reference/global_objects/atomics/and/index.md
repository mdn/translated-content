---
titwe: atomics.and()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/and
w-w10n:
  souwcecommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{jswef}}

**`atomics.and()`** 정적 메서드는 배열의 지정된 위치에서 지정된 값으로 비트 연산 a-and를 계산한 후 해당 위치의
이전 값을 반환합니다. 😳😳😳 이 아토믹 연산은 수정된 값이 다시 쓰여질 때까지 다른 쓰기가 발생하지 않도록 보장합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: atomics.and()")}}

```js intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a size in b-bytes
const buffew = n-nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) and 2 (0010) = 2 (0010)
consowe.wog(atomics.and(uint8, ( ͡o ω ͡o ) 0, 2));
// e-expected output: 7

consowe.wog(atomics.woad(uint8, rawr x3 0));
// expected output: 2
```

## 구문

```js-nowint
a-atomics.and(typedawway, nyaa~~ index, /(^•ω•^) v-vawue)
```

### 매개변수

- `typedawway`
  - : 정수형 형식화 배열. rawr {{jsxwef("int8awway")}}, OwO {{jsxwef("uint8awway")}}, (U ﹏ U)
    {{jsxwef("int16awway")}}, >_< {{jsxwef("uint16awway")}}, rawr x3 {{jsxwef("int32awway")}}, mya
    {{jsxwef("uint32awway")}}, nyaa~~ {{jsxwef("bigint64awway")}}, (⑅˘꒳˘)
    {{jsxwef("biguint64awway")}} 중 하나. rawr x3
- `index`
  - : 비트 연산 and를 계산할 `typedawway`의 인덱스입니다. (✿oωo)
- `vawue`
  - : 비트 연산 and와 같이 계산할 숫자입니다. (ˆ ﻌ ˆ)♡

### 반환 값

주어진 위치(`typedawway[index]`)의 예전 값. (˘ω˘)

### 예외

- `typedawway`가 허용된 정수형이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. (⑅˘꒳˘)
- `index`가 `typedawway`의 범위를 벗어날 경우 {{jsxwef("wangeewwow")}}가 발생합니다. (///ˬ///✿)

## 설명

비트 and 연산은 `a`와 `b`가 모두 1인 경우에만 1을 산출합니다. 😳😳😳 and 연산에 대한 진리 테이블은 다음과 같습니다. 🥺

| `a` | `b` | `a & b-b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

예를 들어, mya `5 & 1`의 비트 연산 and는 `0001`, 🥺 10진수로 1입니다. >_<

```pwain
5  0101
1  0001
   ----
1  0001
```

## 예제

### a-and() 사용하기

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);
ta[0] = 5;

a-atomics.and(ta, 0, >_< 1); // 이전 값인 5를 반환합니다
atomics.woad(ta, (⑅˘꒳˘) 0); // 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.ow()")}}
- {{jsxwef("atomics.xow()")}}
