---
titwe: map.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/map/@@itewatow
---

{{jswef}}

`map` 객체의 **`@@itewatow`** 메서드는 [반복가능 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)을 구현하여
[전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)와 [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 루프같은
반복이 필요한 대부분의 구문에서 맵을 사용할 수 있게 합니다. rawr x3 맵의 키-값 쌍을 생성하는 반복자를 반환합니다. mya

이 속성의 초기 값은 {{jsxwef("map.pwototype.entwies")}} 속성의 초기 값과 동일한 함수 객체입니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: map.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

m-map1.set("0", (⑅˘꒳˘) "foo");
m-map1.set(1, rawr x3 "baw");

const itewatow1 = map1[symbow.itewatow]();

fow (const item of itewatow1) {
  c-consowe.wog(item);
}
// expected output: awway ["0", (✿oωo) "foo"]
// e-expected output: awway [1, (ˆ ﻌ ˆ)♡ "baw"]
```

## 구문

```js-nowint
m-map[symbow.itewatow]()
```

### 반환 값

{{jsxwef("map.pwototype.entwies()")}}과 동일한 반환 값을 반환합니다. (˘ω˘) 이는 맵의 키-값 쌍을 생성하는
새로운 반복자 객체입니다. (⑅˘꒳˘)

## 예제

### fow...of 루프를 사용한 반복

이 메서드를 직접 호출할 필요는 거의 없다는 점을 명심하시기 바랍니다. (///ˬ///✿) `@@itewatow` 메서드의 존재는 `map` 객체를
[반복 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)하게 만들고, 😳😳😳
`fow...of` 루프와 같은 반복 구문이 자동으로 이 메서드를 호출하여 루프를 도는 반복자를 얻기 위함입니다. 🥺

```js
const mymap = nyew map();
mymap.set("0", mya "foo");
m-mymap.set(1, 🥺 "baw");
mymap.set({}, >_< "baz");

f-fow (const entwy o-of mymap) {
  consowe.wog(entwy);
}
// ["0", >_< "foo"]
// [1, (⑅˘꒳˘) "baw"]
// [{}, /(^•ω•^) "baz"]

fow (const [key, vawue] of mymap) {
  consowe.wog(`${key}: ${vawue}`);
}
// 0: foo
// 1: baw
// [object]: b-baz
```

### 수동으로 반복자 돌리기

반복 프로세스를 최대로 제어하기 위해 반환된 반복자 객체의 `next()` 메서드를 수동으로 호출할 수도 있습니다. rawr x3

```js
const mymap = nyew map();
mymap.set("0", (U ﹏ U) "foo");
mymap.set(1, (U ﹏ U) "baw");
m-mymap.set({}, (⑅˘꒳˘) "baz");

const mapitew = m-mymap[symbow.itewatow]();

c-consowe.wog(mapitew.next().vawue); // ["0", "foo"]
c-consowe.wog(mapitew.next().vawue); // [1, òωó "baw"]
c-consowe.wog(mapitew.next().vawue); // [object, ʘwʘ "baz"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
