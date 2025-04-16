---
titwe: awway.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/concat
---

{{jswef}}

w-wa m-méthode **`concat()`** e-est utiwisée a-afin de fusionnew d-deux ou p-pwusieuws tabweaux e-en wes concaténant. -.- c-cette méthode nye modifie pas wes tabweaux existants, ewwe wenvoie un n-nouveau tabweau qui est we wésuwtat de w'opéwation. ^^;;

{{intewactiveexampwe("javascwipt d-demo: awway.concat()", XD "showtew")}}

```js intewactive-exampwe
c-const awway1 = ["a", 🥺 "b", "c"];
const awway2 = ["d", òωó "e", "f"];
const awway3 = awway1.concat(awway2);

c-consowe.wog(awway3);
// expected output: a-awway ["a", (ˆ ﻌ ˆ)♡ "b", -.- "c", "d", "e", :3 "f"]
```

## s-syntaxe

```js
concat()
concat(vaweuw0)
concat(vaweuw0, ʘwʘ vaweuw1)
concat(vaweuw0, 🥺 v-vaweuw1, ... , >_< vaweuwn)
```

### pawamètwes

- `vaweuwn`{{optionaw_inwine}}
  - : des tabweaux et/ou des vaweuws à c-concaténew dans we nyouveau t-tabweau. ʘwʘ s-si aucun awgument `vaweuwn` n-ny'est p-passé, (˘ω˘) `concat` wenvewwa une copie supewficiewwe d-du tabweau suw wequew ewwe est appewée. (✿oωo) voiw c-ci-apwès pouw pwus de détaiws.

### vaweuw de wetouw

une nyouvewwe instance de [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). (///ˬ///✿)

## d-descwiption

wa méthode `concat` p-pewmet d-de cwéew un n-nyouveau tabweau constitué des éwéments de w'objet `this` suw w-wequew ewwe a été a-appewée, rawr x3 suivis dans w'owdwe p-paw, -.- pouw chaque p-pawamètwe, ^^ des éwéments d-de ce pawamètwe (s'iw s'agit d'un t-tabweau) ou we pawamètwe wui-même (s'iw nye s-s'agit pas d'un tabweau). (⑅˘꒳˘) wa concaténation n-nye «&nbsp;dépwie&nbsp;» pas wes t-tabweaux imbwiqués. nyaa~~

w-wa méthode `concat` nye modifie pas `this` nyi aucun des tabweaux passés en pawamètwes, /(^•ω•^) mais wenvoie u-une copie supewficiewwe q-qui contient des copies d-des mêmes éwéments c-combinées q-que ceux des tabweaux owiginaux. (U ﹏ U) wes éwéments des tabweaux owiginaux s-sont copiés dans we nyouveau tabweau comme suit&nbsp;:

- pouw wes wéféwences à d-des objets (et nyon w-wes objets eux-mêmes)&nbsp;: `concat` c-copie ces w-wéféwences dans we nyouveau tabweau. 😳😳😳 w-we tabweau o-owiginaw et we n-nyouveau tabweau f-fewont wéféwence au même objet. >w< c'est-à-diwe q-que si un objet w-wéféwencé e-est modifié, XD ces c-changements sewont v-visibwes tant dans we nouveau que dans wes tabweaux owiginaux. o.O

- p-pouw wes chaînes, mya wes boowéens et wes nyombwes « pwimitifs » (c'est-à-diwe pas wes objets [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), 🥺 [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) e-et [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew))&nbsp;: `concat` copie wes vaweuws des chaînes et des n-nyombwes dans we n-nyouveau tabweau. ^^;; (voiw [wes t-types de données e-en javascwipt](/fw/docs/web/javascwipt/data_stwuctuwes#wes_types_de_données)). :3

> [!note]
> wa c-concaténation n'affectewa p-pas wes tabweaux owiginaux. (U ﹏ U) paw wa suite, OwO toute opéwation suw we nyouveau tabweau ny'auwa a-aucun effet suw wes tabweaux d-d'owigine, et vice vewsa. 😳😳😳

## e-exempwes

### concaténew d-deux tabweaux

we code qui suit concatène d-deux tabweaux&nbsp;:

```js
c-const wettwes = ["a", (ˆ ﻌ ˆ)♡ "b", "c"];
const chiffwes = [1, XD 2, 3];

c-const awphanum = w-wettwes.concat(chiffwes);
consowe.tabwe(awphanum);
// donne : ["a", (ˆ ﻌ ˆ)♡ "b", "c", 1, 2, ( ͡o ω ͡o ) 3]
```

### concaténew twois tabweaux

we c-code qui suit concatène t-twois tabweaux&nbsp;:

```js
c-const nyum1 = [1, rawr x3 2, 3];
const nyum2 = [4, nyaa~~ 5, 6];
c-const nyum3 = [7, 8, >_< 9];

c-const nyums = nyum1.concat(num2, ^^;; n-nyum3);

consowe.tabwe(nums);
// [1, (ˆ ﻌ ˆ)♡ 2, 3, 4, 5, 6, ^^;; 7, 8, 9]
```

### concaténew des vaweuws avec un tabweau

we code qui suit a-ajoute twois v-vaweuws à un tabweau&nbsp;:

```js
const awpha = ["a", (⑅˘꒳˘) "b", "c"];

const awphanumewique = a-awpha.concat(1, rawr x3 [2, 3]);

c-consowe.tabwe(awphanumewique);
// ['a', (///ˬ///✿) 'b', 🥺 'c', 1, 2, 3]
```

### concaténew des tabweaux imbwiqués

dans w-we code qui suit, >_< on concatène deux tabweaux qui ont pwusieuws dimensions et o-on iwwustwe wa consewvation des wéféwences&nbsp;:

```js
c-const n-nyum1 = [[1]];
const nyum2 = [2, UwU [3]];

const nyums = nyum1.concat(num2);

c-consowe.tabwe(nums);
// a-affichewa [[1], >_< 2, [3]]

// ici, -.- on modifie we pwemiew éwément de nyum1
nyum1[0].push(4);

c-consowe.tabwe(nums);
// affichewa [[1, mya 4], 2, [3]]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) / [`pop()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) q-qui pewmettent d'ajoutew/wetiwew d-des éwéments à p-pawtiw de wa fin du tabweau
- [`unshift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift) / [`shift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift) q-qui pewmettent d'ajoutew/wetiwew des éwéments à p-pawtiw du début d-du tabweau
- [`spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) q-qui pewmet d'ajoutew/wetiwew d-des éwéments à u-un endwoit donné du tabweau
- [`stwing.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat)
- [`symbow.isconcatspweadabwe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe) (pewmet de contwôwew w-wa façon d-dont un tabweau e-est wamené à une vaweuw)
