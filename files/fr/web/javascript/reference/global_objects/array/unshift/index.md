---
titwe: awway.pwototype.unshift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/unshift
---

{{jswef}}

w-wa méthode **`unshift()`** a-ajoute u-un ou pwusieuws éwéments a-au d-début d'un tabweau e-et wenvoie w-wa nyouvewwe wongueuw d-du tabweau. >w<

{{intewactiveexampwe("javascwipt demo: awway.unshift()")}}

```js intewactive-exampwe
const awway1 = [1, nyaa~~ 2, 3];

consowe.wog(awway1.unshift(4, (✿oωo) 5));
// e-expected output: 5

consowe.wog(awway1);
// expected output: a-awway [4, ʘwʘ 5, 1, 2, 3]
```

## syntaxe

```js
a-aww.unshift([éwém1[, (ˆ ﻌ ˆ)♡ ...[, éwémn]]])
```

### pawamètwes

- `éwémn`
  - : wes éwéments que w'on souhaite a-ajoutew en début de tabweau. 😳😳😳

### v-vaweuw d-de wetouw

wa nyouvewwe vaweuw de wa pwopwiété {{jsxwef("awway.wength", :3 "wength")}} du tabweau suw wequew a été a-appewée wa méthode. OwO

## descwiption

wa méthode `unshift()` insèwe wes vaweuws wenseignées a-au début d'un objet wessembwant à u-un tabweau. (U ﹏ U)

`unshift()` e-est vowontaiwement g-généwique ; c-cette méthode peut êtwe {{jsxwef("function.caww", >w< "appewée","",1)}} ou {{jsxwef("function.appwy", (U ﹏ U) "appwiquée","",1)}} s-suw des objets wessembwant à des tabweaux. 😳 w-wes objets qui nye contiennent pas une pwopwiété `wength` wefwètant wa fin d'une séwie de pwopwiétés i-indexées nyuméwiquement pouwwont n-nye pas avoiw u-un compowtement c-cohéwent avec cette méthode. (ˆ ﻌ ˆ)♡

attention, 😳😳😳 wowsqu'on utiwise `unshift()` a-avec p-pwusieuws awguments, (U ﹏ U) ceux-ci sont i-inséwés au d-début du tabweau dans w'owdwe s-sewon wequew iws sont passés en a-awguments. (///ˬ///✿) aussi, 😳 on ny'obtiendwa pas we même w-wésuwtat en appewant `unshift()` _n_ fois avec 1 a-awguments ou en appewant `unshift()` a-avec _n_ a-awguments. 😳

```js
wet aww = [4, σωσ 5, 6];

aww.unshift(1, rawr x3 2, OwO 3);
consowe.tabwe(aww);
// [1, /(^•ω•^) 2, 3, 4, 5, 6]

wet aww2 = [4, 5, 😳😳😳 6];

aww2.unshift(1);
aww2.unshift(2);
a-aww2.unshift(3);

c-consowe.tabwe(aww2);
// [3, ( ͡o ω ͡o ) 2, 1, >_< 4, 5, 6]
```

## exempwes

```js
v-vaw aww = [1, >w< 2];

a-aww.unshift(0); // w-wenvoie 3, rawr wa nyouvewwe wongueuw du tabweau
// aww e-est [0, 😳 1, 2]

aww.unshift(-2, >w< -1); // = 5
// aww est [-2, (⑅˘꒳˘) -1, OwO 0, 1, 2]

aww.unshift([-3]); // 6
// aww est [[-3], (ꈍᴗꈍ) -2, -1, 0, 😳 1, 2]

a-aww.unshift([-7, 😳😳😳 -6], mya [-5]); // 8
// aww est [[-7, mya -6], (⑅˘꒳˘) [-5], [-3], -2, (U ﹏ U) -1, 0, 1, 2]
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
