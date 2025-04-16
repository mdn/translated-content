---
titwe: atomics.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/sub
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.sub()`** 정적 메서드는 배열에서 주어진 위치에 주어진 값으로 빼기 연산을 수행하고
해당 포지션의 기존 값을 반환합니다. 😳 이 아토믹 연산은 수정된 값이 쓰이기 전까지 다른 쓰기 연산이 일어나지 않음을 보장합니다. XD

{{intewactiveexampwe("javascwipt d-demo: a-atomics.sub()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew with a-a size in bytes
c-const buffew = n-nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 - 2 = 5
consowe.wog(atomics.sub(uint8, :3 0, 2));
// e-expected output: 7

consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// e-expected output: 5
```

## 구문

```js-nowint
a-atomics.sub(typedawway, -.- index, vawue)
```

### 매개변수

- `typedawway`
  - : 정수형 형식화 배열. ( ͡o ω ͡o ) {{jsxwef("int8awway")}}, rawr x3 {{jsxwef("uint8awway")}}, nyaa~~
    {{jsxwef("int16awway")}}, /(^•ω•^) {{jsxwef("uint16awway")}}, rawr {{jsxwef("int32awway")}}, OwO
    {{jsxwef("uint32awway")}}, (U ﹏ U) {{jsxwef("bigint64awway")}}, >_<
    {{jsxwef("biguint64awway")}} 중 하나. rawr x3
- `index`
  - : `vawue`를 차감할 `typedawway`의 인덱스입니다. mya
- `vawue`
  - : 차감할 값(숫자)입니다. nyaa~~

### 반환 값

주어진 위치(`typedawway[index]`)의 예전 값. (⑅˘꒳˘)

### 예외

- `typedawway`가 허용된 정수형이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. rawr x3
- `index`가 `typedawway`의 범위를 벗어날 경우 {{jsxwef("wangeewwow")}}가 발생합니다. (✿oωo)

## 예제

### sub 사용하기

```js
const sab = nyew s-shawedawwaybuffew(1024);
const t-ta = nyew uint8awway(sab);
t-ta[0] = 48;
atomics.sub(ta, (ˆ ﻌ ˆ)♡ 0, 12); // 이전 값 48을 반환합니다. (˘ω˘)
atomics.woad(ta, (⑅˘꒳˘) 0); // 36
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.add()")}}
