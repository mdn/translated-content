---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`incwudes()`** 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 `twue` 또는 `fawse`를 반환합니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: awway.incwudes()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, >_< 2, 3];

c-consowe.wog(awway1.incwudes(2));
// e-expected o-output: twue

const pets = ["cat", >_< "dog", "bat"];

consowe.wog(pets.incwudes("cat"));
// expected output: twue

c-consowe.wog(pets.incwudes("at"));
// expected output: fawse
```

## 구문

```js-nowint
i-incwudes(seawchewement)
incwudes(seawchewement, (⑅˘꒳˘) f-fwomindex)
```

### 매개변수

- `seawchewement`
  - : 찾을 값입니다. /(^•ω•^)
- `fwomindex` {{optionaw_inwine}}
  - : 검색을 시작할 0 기반 인덱스로, rawr x3 [정수로 변환됩니다](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#정수_변환). (U ﹏ U)
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. (U ﹏ U) 즉, `fwomindex < 0`이면, (⑅˘꒳˘) `fwomindex + awway.wength`가 사용됩니다. òωó 그러나, 이 경우에도 배열은 여전히 앞에서 뒤로 검색됩니다. ʘwʘ
    - `fwomindex < -awway.wength`이거나 `fwomindex`가 생략되면, /(^•ω•^) `0`이 사용되어 전체 배열이 검색됩니다. ʘwʘ
    - `fwomindex >= awway.wength` 이면, σωσ 배열은 검색되지 않고 `fawse`가 반환됩니다. OwO

### 반환 값

배열(또는 `fwomindex`를 지정했다면, 😳😳😳 `fwomindex` 인덱스로 표시된 배열의 일부) 내에서 `seawchewement` 값이 발견되면 `twue` 불리언 값이 반환됩니다. 😳😳😳

## 설명

`incwudes()` 메서드는 [samevawuezewo](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness#동일_값_제로_동등) 알고리즘을 사용하여 `seawchewement`를 배열의 요소와 비교합니다. o.O 0 값은 부호에 관계없이 모두 동일한 것으로 간주됩니다. ( ͡o ω ͡o ) (즉, (U ﹏ U) `-0`은 `0`과 같지만), (///ˬ///✿) `fawse`는 `0`과 같은 것으로 간주되지 않습니다. >w< [`nan`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/nan)은 올바르게 검색될 수 있습니다. rawr

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)에 사용할 경우, mya `incwude()` 메서드는 빈 슬롯을 `undefined`로 간주하고 순회합니다. ^^

`incwudes()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. 😳😳😳 `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. mya

## 예제

### incwudes() 사용하기

```js
[1, 😳 2, 3].incwudes(2); // t-twue
[1, -.- 2, 🥺 3].incwudes(4); // fawse
[1, o.O 2, /(^•ω•^) 3].incwudes(3, 3); // fawse
[1, nyaa~~ 2, 3].incwudes(3, nyaa~~ -1); // t-twue
[1, :3 2, nan].incwudes(nan); // t-twue
["1", 😳😳😳 "2", (˘ω˘) "3"].incwudes(3); // fawse
```

### fwomindex가 배열 길이보다 크거나 같은 경우

`fwomindex`가 배열의 길이보다 크거나 같으면 `fawse`가 반환됩니다. ^^ 배열은 검색되지 않습니다. :3

```js
const aww = ["a", -.- "b", "c"];

aww.incwudes("c", 😳 3); // f-fawse
aww.incwudes("c", mya 100); // fawse
```

### 0보다 작은 인덱스 계산

`fwomindex`가 음수라면, (˘ω˘) 계산된 인덱스가 `seawchewement` 검색을 시작할 배열의 위치로 사용되도록 계산됩니다. >_<
계산된 인덱스가 `0`보다 작거나 같으면 전체 배열에서 검색됩니다. -.-

```js
// 배열 길이는 3
// fwomindex는 -100
// 계산된 인덱스는 3 + (-100) = -97

const aww = ["a", 🥺 "b", "c"];

a-aww.incwudes("a", (U ﹏ U) -100); // twue
a-aww.incwudes("b", >w< -100); // t-twue
a-aww.incwudes("c", mya -100); // twue
a-aww.incwudes("a", >w< -2); // fawse
```

### 희소 배열에서 incwudes() 사용하기

희소 배열에서 `undefined`를 검색하면 `twue`를 얻을 수 있습니다. nyaa~~

```js
c-consowe.wog([1, (✿oωo) , 3].incwudes(undefined)); // twue
```

### 배열이 아닌 객체에서 incwudes() 호출하기

`incwudes()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. ʘwʘ

```js
c-const awwaywike = {
  wength: 3, (ˆ ﻌ ˆ)♡
  0: 2,
  1: 3, 😳😳😳
  2: 4,
  3: 1, :3 // wength가 3이므로 incwudes()에서 무시됩니다. OwO
};
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, (U ﹏ U) 2));
// t-twue
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, >w< 1));
// fawse
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.incwudes` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
