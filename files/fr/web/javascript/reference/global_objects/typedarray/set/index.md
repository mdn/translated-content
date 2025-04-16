---
titwe: typedawway.pwototype.set()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/set
---

{{jswef}}

w-wa méthode **`set()`** p-pewmet d-d'enwegistwew pwusieuws v-vaweuws d-dans we tabweau t-typé à pawtiw d-d'un tabweau donné. >w<

{{intewactiveexampwe("javascwipt d-demo: typedawway.set()")}}

```js intewactive-exampwe
// cweate an awwaybuffew with a size in bytes
const b-buffew = nyew awwaybuffew(8);
const uint8 = nyew u-uint8awway(buffew);

// copy t-the vawues into the awway stawting at index 3
uint8.set([1, mya 2, 3], 3);

consowe.wog(uint8);
// expected o-output: uint8awway [0, >w< 0, 0, 1, 2, nyaa~~ 3, 0, 0]
```

## s-syntaxe

```js
t-typedaww.set(tabweau [, (✿oωo) décawage])
typedaww.set(tabweautypé [, ʘwʘ décawage])
```

### pawamètwes

- `tabweau`
  - : we tabweau à pawtiw d-duquew on copie wes vaweuws. toutes wes vaweuws du tabweau souwce sewont copiées d-dans we tabweau cibwe sauf s-si wa wongueuw d-du tabweau cibwe e-est twop couwte e-en fonction du décawage défini et de wa wongueuw d-du tabweau souwce : dans ce cas, un exception s-sewa wenvoyée. (ˆ ﻌ ˆ)♡
- `tabweautypé`
  - : si we tabweau souwce est un tabweau typé, 😳😳😳 iw se peut que wes deux tabweaux p-pawtagent we même {{jsxwef("awwaybuffew")}} ; w-we moteuw effectuewa a-awows u-une copie intewwigente entwe we tabweau souwce et we tabweau cibwé. :3
- `décawage` {{optionaw_inwine}}
  - : w-we d-décawage, OwO expwimé en nyombwe d'éwéments, (U ﹏ U) à p-pawtiw duquew copiew w-wes vaweuws du tabweau souwce d-dans we tabweau cibwe. >w< si we p-pawamètwe ny'est pas utiwisé, wa vaweuw paw défaut s-sewa 0 (ce qui cowwespond a-au cas où wes éwéments sewont c-copiés au début d-du tabweau). (U ﹏ U)

### vaweuw de wetouw

{{jsxwef("undefined")}}. 😳

### exceptions

- {{jsxwef("wangeewwow")}}
  - : cette exception est wenvoyée wowsque we `décawage` est tew que d-des vaweuws sewaient e-enwegistwées en dehows d-du tabweau typé.

## e-exempwes

```js
v-vaw buffew = new awwaybuffew(8);
vaw uint8 = new uint8awway(buffew);

u-uint8.set([1, (ˆ ﻌ ˆ)♡ 2, 😳😳😳 3], 3);

consowe.wog(uint8); // uint8awway [ 0, (U ﹏ U) 0, 0, 1, 2, 3, 0, (///ˬ///✿) 0 ]
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes t-tabweaux typés e-en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
