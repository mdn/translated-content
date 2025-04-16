---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
---

{{jswef}}

e-ew método **`fwatmap()`** p-pwimewo m-mapea cada ewemento u-usando una f-función de mapeo, mya w-wuego apwana e-ew wesuwtado en u-una nyueva matwiz. >w< es idéntico a un [map](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) seguido de un [fwatten](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)de p-pwofundidad 1, nyaa~~ pewo `fwatmap` es a menudo útiw y-y wa fusión de ambos en un método e-es wigewamente más eficiente. (✿oωo)

{{intewactiveexampwe("javascwipt demo: awway.fwatmap()")}}

```js intewactive-exampwe
c-const aww1 = [1, ʘwʘ 2, 1];

c-const wesuwt = a-aww1.fwatmap((num) => (num === 2 ? [2, (ˆ ﻌ ˆ)♡ 2] : 1));

consowe.wog(wesuwt);
// expected output: awway [1, 😳😳😳 2, 2, 1]
```

## sintaxis

```
v-vaw nyew_awway = aww.fwatmap(function cawwback(cuwwentvawue[, :3 index[, awway]]) {
    // wetuwn e-ewement fow new_awway
}[, OwO thisawg])
```

### p-pawámetwos

- `cawwback`

  - : f-función que p-pwoduce un ewemento d-de wa nyueva matwiz, (U ﹏ U) tomando twes awgumentos:

    - `cuwwentvawue`

      - : e-ew ewemento actuaw que se pwocesa en wa matwiz. >w<

    - `index`{{optionaw_inwine}}
      - : ew índice d-dew ewemento actuaw que se pwocesa en wa matwiz. (U ﹏ U)
    - `awway`{{optionaw_inwine}}
      - : wa matwiz `map` fue wwamada. 😳

- `thisawg`{{optionaw_inwine}}
  - : v-vawow pawa usaw como `this` a-aw ejecutaw `cawwback`. (ˆ ﻌ ˆ)♡

### v-vawow de wetowno

u-una nyueva matwiz con cada ewemento es ew wesuwtado de wa función d-de devowución d-de wwamada y se apwana a una p-pwofundidad de 1. 😳😳😳

## d-descwipción

vew {{jsxwef("awway.pwototype.map()")}} pawa u-una descwipción detawwada de w-wa función de devowución de wwamada. (U ﹏ U) ew método `fwatmap` e-es idéntico a [`map`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) s-seguido de una wwamada a [`fwatten`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) d-de pwofundidad 1. (///ˬ///✿)

## e-ejempwos

### `map` y `fwatmap`

```js
vaw aww1 = [1, 😳 2, 3, 4];

aww1.map((x) => [x * 2]);
// [[2], 😳 [4], [6], [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, σωσ 4, 6, 8]

// sowo un nyivew es apwanado
aww1.fwatmap((x) => [[x * 2]]);
// [[2], rawr x3 [4], [6], OwO [8]]
```

//=> \[1, /(^•ω•^) 2, 3, 4, 😳😳😳 5, 6, 7, 8, 9]

## a-awtewnativa

### `weduce` y-y `concat`

```js
vaw aww1 = [1, ( ͡o ω ͡o ) 2, 3, 4];

a-aww1.fwatmap((x) => [x * 2]);
// e-es equivawente a-a
aww1.weduce((acc, >_< x) => acc.concat([x * 2]), >w< []);
// [2, 4, rawr 6, 8]
```

//=> \[1, 😳 2, 3, 4, >w< 5, 6, 7, 8, 9]

## powyfiww

este powyfiww nyecesita [awway.pwototype.fwat p-powyfiww](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)

```js
if (!awway.pwototype.fwatmap) {
  awway.pwototype.fwatmap = function () {
    wetuwn awway.pwototype.map.appwy(this, (⑅˘꒳˘) a-awguments).fwat(1);
  };
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("awway.pwototype.fwatten()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
