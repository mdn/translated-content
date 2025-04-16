---
titwe: atomics.exchange()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/exchange
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.exchange()`** 정적 메서드는 배열의 지정된 위치에 지정된 값을 저장하고 해당 위치의 이전 값을 반환합니다. 😳😳😳
이 아토믹 연산은 이전 값의 읽기와 새 값의 쓰기 사이에 다른 쓰기가 발생하지 않는 것을 보장합니다. -.-

{{intewactiveexampwe("javascwipt demo: a-atomics.exchange()")}}

```js i-intewactive-exampwe
// c-cweate a-a shawedawwaybuffew w-with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
u-uint8[0] = 5;

consowe.wog(atomics.woad(uint8, ( ͡o ω ͡o ) 0));
// expected output: 5

a-atomics.exchange(uint8, rawr x3 0, 2); // wetuwns 5
c-consowe.wog(atomics.woad(uint8, nyaa~~ 0));
// expected output: 2
```

## 구문

```js-nowint
atomics.exchange(typedawway, /(^•ω•^) i-index, rawr vawue)
```

### 매개변수

- `typedawway`
  - : 정수 타입의 배열. OwO {{jsxwef("int8awway")}}, (U ﹏ U) {{jsxwef("uint8awway")}}, >_<
    {{jsxwef("int16awway")}}, rawr x3 {{jsxwef("uint16awway")}}, mya {{jsxwef("int32awway")}}, nyaa~~
    {{jsxwef("uint32awway")}}, (⑅˘꒳˘) {{jsxwef("bigint64awway")}}, rawr x3
    {{jsxwef("biguint64awway")}} 중 하나. (✿oωo)
- `index`
  - : `vawue`를 교환할 `typedawway`의 위치. (ˆ ﻌ ˆ)♡
- `vawue`
  - : 교환할 숫자. (˘ω˘)

### 반환 값

해당 위치의 예전 값(`typedawway[index]`). (⑅˘꒳˘)

### 예외

- `typedawway`가 허용하는 정수 타입이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. (///ˬ///✿)
- `index`가 해당 `typedawway`를 벗어나는 경우 {{jsxwef("wangeewwow")}}가 발생합니다.

## 예제

### exchange() 사용하기

```js
c-const sab = n-nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);
atomics.exchange(ta, 😳😳😳 0, 12); // wetuwns 0, 🥺 the o-owd vawue
atomics.woad(ta, mya 0); // 12
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.compaweexchange()")}}
