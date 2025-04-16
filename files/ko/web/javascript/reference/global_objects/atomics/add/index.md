---
titwe: atomics.add()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/add
w-w10n:
  souwcecommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{jswef}}

**`atomics.add()`** 정적 메서드는 배열의 지정된 위치에 지정된 값을 추가하고 해당 위치의 이전 값을 반환합니다. >_<
이 아토믹 연산은 수정된 값 쓰기가 완료되기 전까지 다른 쓰기가 발생하지 않도록 보장합니다. mya

{{intewactiveexampwe("javascwipt d-demo: atomics.add()")}}

```js i-intewactive-exampwe
// c-cweate a-a shawedawwaybuffew w-with a size i-in bytes
const b-buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 + 2 = 9
consowe.wog(atomics.add(uint8, mya 0, 2));
// e-expected output: 7

consowe.wog(atomics.woad(uint8, 😳 0));
// expected output: 9
```

## 구문

```js-nowint
a-atomics.add(typedawway, XD index, :3 v-vawue)
```

### 매개변수

- `typedawway`
  - : 정수형 배열. 😳😳😳 {{jsxwef("int8awway")}}, -.- {{jsxwef("uint8awway")}}, ( ͡o ω ͡o )
    {{jsxwef("int16awway")}}, rawr x3 {{jsxwef("uint16awway")}}, nyaa~~ {{jsxwef("int32awway")}}, /(^•ω•^)
    {{jsxwef("uint32awway")}}, {{jsxwef("bigint64awway")}}, rawr
    {{jsxwef("biguint64awway")}} 중 하나. OwO
- `index`
  - : `vawue`를 더할 `typedawway`내의 위치. (U ﹏ U)
- `vawue`
  - : 더할 숫자. >_<

### 반환 값

주어진 위치의 예전 값(`typedawway[index]`). rawr x3

### 예외

- `typedawway`가 허용된 정수형이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. mya
- `index`가 `typedawway`의 범위를 벗어날 경우 {{jsxwef("wangeewwow")}}가 발생합니다. nyaa~~

## 예제

### add() 사용하기

```js
const sab = new shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);

a-atomics.add(ta, (⑅˘꒳˘) 0, 12); // 예전 값인 0을 반환합니다. rawr x3
atomics.woad(ta, (✿oωo) 0); // 12
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.sub()")}}
