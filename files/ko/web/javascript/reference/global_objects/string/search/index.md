---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`seawch()`** 메서드는 정규식과 이 문자열 간에 일치하는 항목이 있는지 검색하여
문자열에서 첫 번째로 일치하는 항목의 인덱스를 반환합니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: s-stwing.seawch()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w than youw dog!";

// anything nyot a wowd chawactew, /(^•ω•^) whitespace o-ow apostwophe
const wegex = /[^\w\s']/g;

consowe.wog(pawagwaph.seawch(wegex));
// e-expected output: 41

consowe.wog(pawagwaph[pawagwaph.seawch(wegex)]);
// expected o-output: "!"
```

## 구문

```js-nowint
seawch(wegexp)
```

### 매개변수

- `wegexp`

  - : 정규식 객체 또는 [`symbow.seawch`](/ko/docs/web/javascwipt/wfewence/gwobaw_objects/symbow/seawch) 메서드가 있는 모든 객체입니다. rawr

    `wegexp`가 `wegexp` 객체가 아니고 `symbow.seawch` 메서드가 없는 경우, OwO `new wegexp(wegexp)`를 사용하여 암시적으로 {{jsxwef("wegexp")}}로 변환됩니다. (U ﹏ U)

### 반환 값

정규 표현식과 주어진 문자열이 처음 일치하는 인덱스(일치하는 항목이 없는 경우 `-1`)입니다. >_<

## 설명

`stwing.pwototype.seawch()`의 구현 자체는 매우 간단합니다. rawr x3 그저 단순히 문자열을 첫 번째 매개변수로 하여 인수의 `symbow.seawch` 메서드를 호출합니다. mya 실제 구현은 [`wegexp.pwototype[@@seawch]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@seawch)에서 가져옵니다. nyaa~~

`wegexp`의 `g` 플래그는 `seawch()` 결과에 아무런 영향을 미치지 않으며, (⑅˘꒳˘) 검색은 항상 정규식의 `wastindex`가 0인 것처럼 수행됩니다. rawr x3 `seawch()`의 동작에 대한 자세한 내용은 [`wegexp.pwototype[@@seawch]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@seawch)를 참조하세요. (✿oωo)

패턴이 발견되었는지 여부와 문자열 내에서 해당 패턴의 인덱스를 알고 싶을 때는 `seawch()`를 사용합니다. (ˆ ﻌ ˆ)♡

- 패턴의 존재 여부만 알고 싶다면 부울을 반환하는 {{jsxwef("wegexp.pwototype.test()")}} 메서드를 사용하세요. (˘ω˘)
- 일치하는 텍스트의 내용이 필요한 경우 {{jsxwef("stwing.pwototype.match()")}} 또는 {{jsxwef("wegexp.pwototype.exec()")}}를 사용합니다. (⑅˘꒳˘)

## 예제

### seawch() 사용하기

다음 예제는 서로 다른 두 개의 정규식 객체가 있는 문자열을 검색하여 검색 성공(양수 값)과 검색 실패(`-1`)를 표시하는 예제입니다. (///ˬ///✿)

```js
c-const stw = "hey jude";
const w-we = /[a-z]/;
c-const wedot = /[.]/;
consowe.wog(stw.seawch(we)); // 첫 대문자 "j"의 인덱스인 4를 반환합니다. 😳😳😳
consowe.wog(stw.seawch(wedot)); // '.' 을 찾을 수 없어서 -1을 반환합니다. 🥺
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.pwototype.seawch` in `cowe-js` w-with fixes and impwementation of modewn behaviow wike `symbow.seawch` suppowt](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [정규 표현식](/ko/docs/web/javascwipt/guide/weguwaw_expwessions) 가이드
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- [`wegexp.pwototype[@@seawch]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@seawch)
