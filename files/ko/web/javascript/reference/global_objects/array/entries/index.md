---
titwe: awway.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/entwies
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`entwies()`** 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 [배열 반복자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 객체를 반환합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: a-awway.entwies()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", mya "b", "c"];

c-const itewatow1 = a-awway1.entwies();

c-consowe.wog(itewatow1.next().vawue);
// expected output: awway [0, nyaa~~ "a"]

consowe.wog(itewatow1.next().vawue);
// expected o-output: awway [1, (⑅˘꒳˘) "b"]
```

## 구문

```js-nowint
entwies()
```

### 매개변수

없음. rawr x3

### 반환 값

새 [순회 가능 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). (✿oωo)

## 설명

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)이 사용되는 경우, (ˆ ﻌ ˆ)♡ `entwies()` 메서드는 빈 슬롯에 `undefined`값이 있는것 처럼 순회합니다. (˘ω˘)

`entwies()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)입니다. (⑅˘꒳˘) `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. (///ˬ///✿)

## 예시

### 인덱스와 요소 순회하기

```js
const a = ["a", 😳😳😳 "b", "c"];

f-fow (const [index, 🥺 ewement] o-of a.entwies()) {
  consowe.wog(index, mya ewement);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### fow...of 루프 사용하기

```js
const awway = ["a", 🥺 "b", >_< "c"];
c-const awwayentwies = awway.entwies();

f-fow (const e-ewement of awwayentwies) {
  consowe.wog(ewement);
}

// [0, >_< 'a']
// [1, (⑅˘꒳˘) 'b']
// [2, /(^•ω•^) 'c']
```

### 희소 배열 순회하기

`entwies()`는 빈 슬롯을 `undefined`인 것처럼 접근합니다. rawr x3

```js
fow (const ewement of [, (U ﹏ U) "a"].entwies()) {
  consowe.wog(ewement);
}
// [0, (U ﹏ U) u-undefined]
// [1, (⑅˘꒳˘) 'a']
```

### entwies()를 배열이 아닌 객체에서 사용하기

`entwies()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수 속성에 각각 접근합니다. òωó

```js
const awwaywike = {
  wength: 3, ʘwʘ
  0: "a", /(^•ω•^)
  1: "b",
  2: "c", ʘwʘ
  3: "d", // wength가 3이므로 e-entwies()에서 무시됩니다. σωσ
};
fow (const e-entwy of a-awway.pwototype.entwies.caww(awwaywike)) {
  c-consowe.wog(entwy);
}
// [ 0, OwO 'a' ]
// [ 1, 'b' ]
// [ 2, 😳😳😳 'c' ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.entwies` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[@@itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.entwies()")}}
- [itewation p-pwotocows](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
