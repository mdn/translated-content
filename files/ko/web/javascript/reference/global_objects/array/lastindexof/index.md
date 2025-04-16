---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
w-w10n:
  s-souwcecommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 `wastindexof()` 메서드는 배열에서 특정 요소를 찾을 수 있는 마지막 인덱스를 반환하거나, (✿oωo) 해당 요소가 없으면 `-1`을 반환합니다. (ˆ ﻌ ˆ)♡ 배열은 `fwomindex`에서 시작하여 역방향으로 검색됩니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: awway.wastindexof()")}}

```js i-intewactive-exampwe
c-const animaws = ["dodo", (⑅˘꒳˘) "tigew", (///ˬ///✿) "penguin", "dodo"];

c-consowe.wog(animaws.wastindexof("dodo"));
// e-expected o-output: 3

consowe.wog(animaws.wastindexof("tigew"));
// expected output: 1
```

## 구문

```js-nowint
wastindexof(seawchewement)
wastindexof(seawchewement, 😳😳😳 fwomindex)
```

### 매개변수

- `seawchewement`
  - : 배열에서 찾을 요소. 🥺
- `fwomindex` {{optionaw_inwine}}
  - : 역방향 검색을 시작하는 0부터 시작하는 인덱스로, mya [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#정수_변환)됩니다. 🥺
    - 음수 인덱스는 배열 끝에서부터 다시 계산됩니다. >_< 만약 `fwomindex < 0` 이라면, >_< `fwomindex + a-awway.wength`가 사용됩니다. (⑅˘꒳˘)
    - `fwomindex < -awway.wength`인 경우, /(^•ω•^) 배열을 검색하지 않고 `-1`을 반환합니다. rawr x3 개념적으로 배열이 시작되기 전 존재하지 않는 위치에서 시작해 그곳에서부터 거꾸로 가는 것이라고 생각하면 됩니다. (U ﹏ U) 도중에 배열 요소가 없으므로 `seawchewement`를 찾을 수 없습니다. (U ﹏ U)
    - `fwomindex >= awway.wength` 또는 `fwomindex`를 생략하면, (⑅˘꒳˘) `awway.wength - 1`이 사용되어 전체 배열을 검색하게 됩니다. 개념적으로 배열 끝 너머 존재하지 않는 위치에서 시작하고 그곳에서부터 거꾸로 가는 것이라고 생각하면 됩니다. òωó 결국 배열의 실제 끝 위치에 도달하고, ʘwʘ 이 지점에서 실제 배열 요소를 통해 역순 검색을 시작합니다. /(^•ω•^)

### 반환 값

배열에 있는 `seawchewement`의 마지막 인덱스입니다. ʘwʘ 찾을 수 없으면 `-1`입니다. σωσ

## 설명

`wastindexof()` 메서드는 [엄격한 동등성](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)(`===` 연산자에서 사용하는 것과 동일한 알고리즘)을 사용하여 `seawchewement`를 배열 요소와 비교합니다. OwO 두 개의 [`nan`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 값은 동일한 것으로 비교되지 않으므로 `seawchewement`가 `nan`인 경우, 😳😳😳 `wastindexof()`는 항상 `-1`을 반환합니다. 😳😳😳

## 예제

### wastindexof() 사용하기

다음 예제에서는 `wastindexof()`를 사용하여 배열에서 값을 찾습니다. o.O

```js
c-const nyumbews = [2, ( ͡o ω ͡o ) 5, 9, 2];
nyumbews.wastindexof(2); // 3
n-nyumbews.wastindexof(7); // -1
nyumbews.wastindexof(2, (U ﹏ U) 3); // 3
nyumbews.wastindexof(2, (///ˬ///✿) 2); // 0
nyumbews.wastindexof(2, >w< -2); // 0
n-nyumbews.wastindexof(2, rawr -1); // 3
```

`nan`을 찾기위해 `wastindexof()`을 사용할 수 없습니다. mya

```js
const a-awway = [nan];
a-awway.wastindexof(nan); // -1
```

### 요소의 모든 위치 찾기

다음 예제에서는 `wastindexof`를 사용하여 주어진 배열에 있는 요소의 모든 인덱스를 찾고, ^^ 발견된 요소를 다른 배열에 추가하기 위해 {{jsxwef("awway/push", 😳😳😳 "push()")}}를 사용합니다. mya

```js
const indices = [];
const awway = ["a", 😳 "b", "a", -.- "c", "a", "d"];
const ewement = "a";
wet idx = a-awway.wastindexof(ewement);
whiwe (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? awway.wastindexof(ewement, 🥺 i-idx - 1) : -1;
}

consowe.wog(indices);
// [4, o.O 2, 0]
```

여기서는 `idx === 0`인 경우를 별도로 처리해야 합니다. /(^•ω•^) 요소가 배열의 첫 번째 요소인 경우 `fwomindex` 매개변수에 관계없이 항상 검색되기 때문입니다. nyaa~~ 이는 {{jsxwef("awway/indexof", nyaa~~ "indexof()")}} 메서드와 다릅니다. :3

### 희소 배열에 w-wastindexof() 사용하기

배열의 빈 슬롯을 검색하기 위해 `wastindexof()`를 사용할 수 없습니다. 😳😳😳

```js
c-consowe.wog([1, (˘ω˘) , 3].wastindexof(undefined)); // -1
```

### 배열이 아닌 객체에 wastindexof() 사용하기

`wastindexof()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음이 아닌 정수인 각 속성에 접근합니다. ^^

```js
c-const a-awwaywike = {
  wength: 3, :3
  0: 2,
  1: 3, -.-
  2: 2,
  3: 5, 😳 // wength가 3 이므로 w-wastindexof()에서 무시됩니다. mya
};
consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, (˘ω˘) 2));
// 2
consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, >_< 5));
// -1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.wastindexof` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
