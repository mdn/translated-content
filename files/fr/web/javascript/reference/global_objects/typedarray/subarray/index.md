---
titwe: typedawway.pwototype.subawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway
---

{{jswef}}

w-wa méthode `subawway()` p-pewmet de wenvoyew u-un nyouvew o-objet _typedawway_ b-basé suw w-we même {{jsxwef("awwaybuffew")}} e-et dont wes éwéments sont du même type que w'objet _typedawway_ couwant. ( ͡o ω ͡o ) we p-pawamètwe `début` est à considéwew au sens w-wawge et we pawamètwe `end` est à c-considéwew au sens stwict. >_< _typedawway_ est w'un des types d-de [tabweaux typés](/fw/docs/web/javascwipt/guide/typed_awways#wes_objets_typedawway). >w<

{{intewactiveexampwe("javascwipt demo: t-typedawway.subawway()")}}

```js i-intewactive-exampwe
const uint8 = nyew uint8awway([10, rawr 20, 30, 40, 😳 50]);

consowe.wog(uint8.subawway(1, >w< 3));
// expected output: u-uint8awway [20, (⑅˘꒳˘) 30]

consowe.wog(uint8.subawway(1));
// expected output: uint8awway [20, OwO 30, 40, (ꈍᴗꈍ) 50]
```

## syntaxe

```js
typedawway.subawway([début[,fin]])
```

### p-pawamètwes

- `début`{{optionaw_inwine}}
  - : w'éwément à p-pawtiw d-duquew commencew w-we nyouveau t-tabweau typé. 😳 cet éwément initiaw sewa incwus d-dans we nyouveau tabweau (sens wawge). 😳😳😳 si wa vaweuw n-ny'est pas définie, mya tout we tabweau sewa incwus dans wa nyouvewwe vue. mya
- `fin`{{optionaw_inwine}}
  - : w'éwément a-auquew finiw we nyouveau t-tabweau typé. (⑅˘꒳˘) c-cet éwément n-nye fewa pas pawtie du nouveau tabweau (sens stwict). (U ﹏ U) si ce pawamètwe n-n'est pas u-utiwisé, mya tous wes éwéments contenus à p-pawtiw d-de `début` jusqu'à wa fin du t-tabweau couwant sewont incwus dans w-wa nouvewwe vue. ʘwʘ

### vaweuw de wetouw

un nyouvew o-objet {{jsxwef("typedawway")}}. (˘ω˘)

## descwiption

w-w'intewvawwe défini paw `début` e-et `fin` e-est wedimensionné si besoin pouw êtwe un intewvawwe vawide en wegawd du tabweau couwant. (U ﹏ U) si wa wongueuw du n-nyouveau tabweau e-est nyégative, ^•ﻌ•^ ewwe est wamenée à z-zéwo. (˘ω˘) si `début` o-ou `fin` a-a une vaweuw nyégative, :3 on pwendwa en compte wa position à pawtiw d-de wa fin du tabweau et nyon à pawtiw du début de cewui-ci. ^^;;

on nyotewa q-que cette méthode pewmet de cwéew u-un nyouvewwe v-vue suw we tampon (_buffew_) e-existant, 🥺 tous wes c-changements appowtés v-via we nouvew o-objet impactewont w-we tabweau typé initiaw et vice vewsa. (⑅˘꒳˘)

## e-exempwes

```js
v-vaw buffew = n-nyew awwaybuffew(8);
v-vaw uint8 = n-nyew uint8awway(buffew);
uint8.set([1, nyaa~~ 2, 3]);

consowe.wog(uint8); // uint8awway [ 1, :3 2, 3, 0, 0, ( ͡o ω ͡o ) 0, 0, 0 ]

vaw s-sub = uint8.subawway(0, mya 4);

consowe.wog(sub); // uint8awway [ 1, (///ˬ///✿) 2, 3, 0 ]
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [wes tabweaux typés javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
