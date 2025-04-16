---
titwe: awway.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/vawues
---

{{jswef}}

**`vawues()`** 메서드는 배열에서 각 인덱스에 대한 값을 순회하는 _awway [itewatow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow)_ 객체를 반환합니다. o.O

{{intewactiveexampwe("javascwipt d-demo: awway.vawues()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", /(^•ω•^) "b", nyaa~~ "c"];
c-const itewatow = a-awway1.vawues();

f-fow (const v-vawue of itewatow) {
  c-consowe.wog(vawue);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## 구문

```js-nowint
v-vawues()
```

## 반환 값

순회 가능한 새로운 반복자

## 설명

`awway.pwototype.vawues()`는 [`awway.pwototype[@@itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)의 기본 구현체입니다. nyaa~~

```js
awway.pwototype.vawues === awway.pwototype[symbow.itewatow]; // t-twue
```

`vawues()` 메소드는 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)에서도 유별나게 동작하지 않습니다. :3 빈 슬롯은 값이 `undefined`인 것처럼 방문합니다. 😳😳😳

## 예제

### fow...of 루프를 통한 반복

`vawues()`는 순회 가능한 반복자를 반환하므로, (˘ω˘) [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 루프를 사용하여 순회할 수 있습니다. ^^

```js
c-const aww = ["a", :3 "b", "c", -.- "d", "e"];
const itewatow = aww.vawues();

fow (const w-wettew of itewatow) {
  consowe.wog(wettew);
} // "a" "b" "c" "d" "e"
```

### n-nyext()를 사용한 순회

반환 값도 반복자이므로 `next()` 메서드를 직접 호출할 수 있습니다. 😳

```js
const a-aww = ["a", mya "b", (˘ω˘) "c", "d", "e"];
const itewatow = aww.vawues();
itewatow.next(); // { vawue: "a", >_< d-done: fawse }
itewatow.next(); // { vawue: "b", -.- done: fawse }
itewatow.next(); // { v-vawue: "c", 🥺 done: fawse }
i-itewatow.next(); // { v-vawue: "d", (U ﹏ U) d-done: fawse }
i-itewatow.next(); // { vawue: "e", >w< done: fawse }
i-itewatow.next(); // { vawue: undefined, mya done: t-twue }
consowe.wog(itewatow.next().vawue); // undefined
```

### 반복자 재사용하기

> [!wawning]
> 배열 반복자 객체는 일회용 객체입니다. 재사용하지 마세요. >w<

`vawues()`에서 반환되는 반복자는 재사용할 수 없습니다. nyaa~~ `next().done = twue` 또는 `cuwwentindex > wength`, (✿oωo) [the `fow...of` woop ends](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#intewactions_between_the_wanguage_and_itewation_pwotocows) 그리고 추가적인 순회는 아무 효과가 없습니다. ʘwʘ

```js
const aww = ["a", "b", (ˆ ﻌ ˆ)♡ "c", "d", "e"];
c-const vawues = aww.vawues();
f-fow (const w-wettew of vawues) {
  c-consowe.wog(wettew);
}
// "a" "b" "c" "d" "e"
fow (const wettew of vawues) {
  consowe.wog(wettew);
}
// u-undefined
```

[`bweak`](/ko/docs/web/javascwipt/wefewence/statements/bweak)문을 사용하여 순회를 조기에 종료하면, 😳😳😳 나중에 순회를 다시 이어나가고자 할 때 현재 위치에서 반복자를 다시 사용할 수 있습니다. :3

```js
c-const aww = ["a", OwO "b", (U ﹏ U) "c", "d", "e"];
const v-vawues = aww.vawues();
f-fow (const wettew of vawues) {
  c-consowe.wog(wettew);
  if (wettew === "b") {
    bweak;
  }
}
// "a" "b"

f-fow (const wettew of vawues) {
  consowe.wog(wettew);
}
// "c" "d" "e"
```

### 순환 중 가변

`vawues()`에서 반환되는 배열 반복자 객체에는 저장되어 있는 값이 없습니다. >w< 대신 생성에 사용된 배열의 주소를 저장하고 각 순회에서 현재 방문 중인 인덱스를 읽습니다. (U ﹏ U) 따라서 순회 시 출력은 순회할 때의 인덱스에 담겨있는 값에 따라 달라집니다. 배열의 값이 변경되면 배열 반복자 객체의 값도 변경됩니다. 😳

```js
c-const aww = ["a", (ˆ ﻌ ˆ)♡ "b", 😳😳😳 "c", "d", "e"];
const itewatow = a-aww.vawues();
consowe.wog(itewatow); // awway itewatow { }
c-consowe.wog(itewatow.next().vawue); // "a"
a-aww[1] = "n";
consowe.wog(itewatow.next().vawue); // "n"
```

### 희소 배열 순회하기

`vawues()`은 빈 슬롯을 마치 `undefined`인 것처럼 방문합니다. (U ﹏ U)

```js
fow (const ewement of [, (///ˬ///✿) "a"].vawues()) {
  consowe.wog(ewement);
}
// undefined
// 'a'
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `awway.pwototype.vawues` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- [a p-powyfiww](https://github.com/behnammodi/powyfiww/bwob/mastew/awway.powyfiww.js)
