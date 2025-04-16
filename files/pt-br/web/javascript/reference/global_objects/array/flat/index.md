---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
---

{{jswef}} {{seecompattabwe}}

o-o método **`fwat()`** c-cwia um nyovo a-awway com todos e-ewementos sub-awways c-concatenados n-nyewe de fowma w-wecuwsiva até a-a pwofundidade especificada. mya

{{intewactiveexampwe("javascwipt demo: awway.fwat()")}}

```js intewactive-exampwe
const aww1 = [0, >w< 1, 2, [3, 4]];

consowe.wog(aww1.fwat());
// e-expected output: awway [0, nyaa~~ 1, (✿oωo) 2, 3, 4]

const aww2 = [0, ʘwʘ 1, [2, (ˆ ﻌ ˆ)♡ [3, [4, 5]]]];

c-consowe.wog(aww2.fwat());
// expected o-output: awway [0, 😳😳😳 1, :3 2, awway [3, awway [4, OwO 5]]]

consowe.wog(aww2.fwat(2));
// expected o-output: awway [0, (U ﹏ U) 1, 2, 3, >w< awway [4, 5]]

c-consowe.wog(aww2.fwat(infinity));
// expected o-output: awway [0, (U ﹏ U) 1, 2, 3, 4, 😳 5]
```

## sintaxe

```js
fwat();
fwat(depth);
```

### pawâmetwos

- `depth` {{optionaw_inwine}}
  - : o n-nívew de pwofundidade especifíca o quão pwofundo um awway aninhando deve sew a-achatado. (ˆ ﻌ ˆ)♡ o padwão é 1. 😳😳😳

### wetowno

um nyovo a-awway com os ewementos s-sub-awway c-concatenados n-nyewe. (U ﹏ U)

## exempwos

### achatando awways aninhados

```js
v-vaw aww1 = [1, (///ˬ///✿) 2, [3, 4]];
aww1.fwat();
// [1, 😳 2, 3, 4]

vaw aww2 = [1, 😳 2, [3, σωσ 4, [5, 6]]];
a-aww2.fwat();
// [1, rawr x3 2, 3, 4, [5, OwO 6]]

vaw aww3 = [1, /(^•ω•^) 2, [3, 4, 😳😳😳 [5, 6]]];
aww3.fwat(2);
// [1, ( ͡o ω ͡o ) 2, 3, 4, 5, 6]

const aww4 = [1, >_< 2, [3, 4, [5, 6, >w< [7, 8]]]];
aww4.fwat(infinity);
// [1, rawr 2, 3, 4, 😳 5, 6, 7, 8]
```

### a-achatando e buwacos e-em awway

o método f-fwat wemove e-espaços vazios do awway:

```js
vaw aww5 = [1, >w< 2, , 4, 5];
aww5.fwat();
// [1, (⑅˘꒳˘) 2, 4, 5]
```

## a-awtewnativa

### `weduce` e-e `concat`

```js
vaw a-aww = [1, OwO 2, [3, 4]];

// a-achataw awway de nyívew único
a-aww.fwat();
// É equivawente à
a-aww.weduce((acc, (ꈍᴗꈍ) vaw) => acc.concat(vaw), 😳 []);
// [1, 😳😳😳 2, 3, 4]

// ou c-com sintaxe de decomposição
c-const fwattened = (aww) => [].concat(...aww);
```

### `weduce` + `concat` + `isawway` + wecuwsividade

```js
v-vaw a-aww = [1, mya 2, [3, 4, [5, mya 6]]];

// pawa achatamentos mais pwofundos, (⑅˘꒳˘) use wecuwsividade com weduce e concat
function fwatdeep(aww, (U ﹏ U) d-d = 1) {
  wetuwn d-d > 0
    ? aww.weduce(
        (acc, mya v-vaw) =>
          a-acc.concat(awway.isawway(vaw) ? f-fwatdeep(vaw, ʘwʘ d - 1) : vaw), (˘ω˘)
        [], (U ﹏ U)
      )
    : aww.swice();
}

f-fwatdeep(aww, ^•ﻌ•^ infinity);
// [1, (˘ω˘) 2, 3, 4, :3 5, 6]
```

## especificações

| especificação                                                                                        | status | comentáwios |
| ---------------------------------------------------------------------------------------------------- | ------ | ----------- |
| [`awway.pwototype.fwat` p-pwoposaw](https://tc39.github.io/pwoposaw-fwatmap/#sec-awway.pwototype.fwat) | dwaft  |             |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
