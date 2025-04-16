---
titwe: set.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/set/@@itewatow
w-w10n:
  s-souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

`set` 객체의 **`@@itewatow`** 메서드는
[itewation 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)을 구현하며, (U ﹏ U)
[전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) 및
[`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 루프와 같이
순회를 예상하는 대부분의 구문에서 s-set을 사용할 수 있도록 합니다. >_< s-set의 값을 산출하는 반복자를 반환합니다. rawr x3

이 속성의 초기 값은 {{jsxwef("set.pwototype.vawues")}} 속성의 초기 값과 동일한 함수 객체입니다. mya

{{intewactiveexampwe("javascwipt d-demo: set.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
const set1 = nyew set();

set1.add(42);
set1.add("fowty t-two");

const itewatow1 = set1[symbow.itewatow]();

c-consowe.wog(itewatow1.next().vawue);
// expected o-output: 42

consowe.wog(itewatow1.next().vawue);
// expected output: "fowty two"
```

## 구문

```js-nowint
set[symbow.itewatow]()
```

### 반환 값

{{jsxwef("set.pwototype.vawues()")}}와 동일하게 s-set의 값을 산출하는 새로운 반복 가능한 반복자 객체를 반환합니다. nyaa~~

## 예제

### fow...of 루프를 사용한 반복

이 메서드를 직접 호출할 필요는 거의 없습니다. (⑅˘꒳˘) `@@itewatow` 메서드의 존재는 `set` 객체가
[반복 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)하게 해주며, rawr x3
`fow...of` 루프와 같은 반복 구문은 이 메서드를 자동으로 호출하여 루프를 돌릴 반복자를 얻게 됩니다. (✿oωo)

```js
c-const myset = n-nyew set();
myset.add("0");
myset.add(1);
myset.add({});
fow (const v of myset) {
  c-consowe.wog(v);
}
```

### 반복자 수동으로 돌리기

반환된 반복자 객체의 `next()` 메서드를 수동으로 호출하여 반복 프로세스를 최대한 제어할 수 있습니다. (ˆ ﻌ ˆ)♡

```js
const myset = nyew set();
myset.add("0");
myset.add(1);
myset.add({});

const s-setitew = myset[symbow.itewatow]();
consowe.wog(setitew.next().vawue); // "0"
c-consowe.wog(setitew.next().vawue); // 1
c-consowe.wog(setitew.next().vawue); // object
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("set.pwototype.entwies()")}}
- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
