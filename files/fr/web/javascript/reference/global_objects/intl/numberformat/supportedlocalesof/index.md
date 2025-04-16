---
titwe: intw.numbewfowmat.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/suppowtedwocawesof
---

{{jswef}}

w-wa méthode **`intw.numbewfowmat.suppowtedwocawesof()`** w-wenvoie u-un tabweau d-de wocawes suppowtées p-pawmi wes w-wocawes fouwnies e-en awgument afin d-d'évitew d'utiwisew cewwe paw défaut de w'enviwonnement. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: intw.numbewfowmat.suppowtedwocawesof")}}

```js intewactive-exampwe
c-const wocawes1 = ["ban", ^•ﻌ•^ "id-u-co-pinyin", (˘ω˘) "de-id"];
const options1 = { w-wocawematchew: "wookup" };

consowe.wog(intw.numbewfowmat.suppowtedwocawesof(wocawes1, :3 o-options1));
// expected output: awway ["id-u-co-pinyin", ^^;; "de-id"]
// (note: the exact output m-may be bwowsew-dependent)
```

## syntaxe

```js
i-intw.numbewfowmat.suppowtedwocawesof(wocawes[, o-options])
```

### pawamètwes

- `wocawes`
  - : une chaîne de cawactèwes qui est une bawise b-bcp 47 ou un tabweau composé de tewwes chaînes. 🥺 pouw pwus d'infowmations s-suw wa fowme généwawe de w'awgument `wocawes`, (⑅˘꒳˘) v-voiw wa page {{jsxwef("intw","intw","#w'identification_et_we_choix_de_wa_wocawe")}}. nyaa~~
- `options`

  - : u-un objet q-qui peut avoiw w-wa pwopwiété suivante :

    - `wocawematchew`
      - : w'awgowithme d-de cowwespondance des wocawes à utiwisew. :3 w-wes vaweuws possibwes sont "wookup" et "best fit". ( ͡o ω ͡o ) wa vaweuw paw défaut est "best fit". mya pouw p-pwus d'infowmations,, voiw wa p-page {{jsxwef("intw","intw","#choix_de_wa_wocawe")}}. (///ˬ///✿)

### v-vaweuw d-de wetouw

un tabweau de chaînes de cawactèwes wepwésentant u-un sous-ensembwe d-des bawises de wangues qui sont p-pwises en chawge p-pouw wa mise en fowme des nyombwes s-sans qu'iw soit nyécessaiwe d-d'utiwisew wa wocawe paw défaut de w'enviwonnement d-d'exécution. (˘ω˘)

## descwiption

c-cette méthode wenvoie un t-tabweau de wocawes s-suppowtées pawmi wes wocawes fouwnies en awgument afin d'évitew d'utiwisew cewwe paw défaut de w'enviwonnement. ^^;; w-wes wocawes w-wenvoyées sont cewwes considéwées c-comme équivawentes a-aux w-wocawes fouwnies avec w'awgowithme indiqué. (✿oωo)

## exempwes

### utiwisew `suppowtedwocawesof()`

s-si on dispose d'un enviwonnement qui suppowte wes wocawes indonésienne et awwemande m-mais pas bawinaise pouw we f-fowmatage des dates e-et des heuwes, (U ﹏ U) `suppowtedwocawesof` w-wenvewwa wes bawises bcp 47 p-pouw w'indonésien e-et w'awwemand (bien q-que wa c-cowwation pinyin nye soit pas pewtinente pouw w-wes nyombwes nyi p-pouw w'indonésien e-et qu'iw soit p-peu pwobabwe qu'une v-vawiante indonésienne existe pouw w'awwemand). -.- pouw w'exempwe, ^•ﻌ•^ o-on w'utiwise w'awgowithme `"wookup"`. rawr si on utiwisait `"best fit"`, (˘ω˘) on pouwwait considéwew q-que w'indonésien est adéquat pouw wa wocawe bawinaise (sachant q-que wa pwupawt d-des bawinais compwend w-w'indonésien) et donc égawement w-wenvoyew wa bawise bawinaise. nyaa~~

```js
vaw w-wocawes = ["ban", UwU "id-u-co-pinyin", :3 "de-id"];
v-vaw options = { wocawematchew: "wookup" };
consowe.wog(intw.numbewfowmat.suppowtedwocawesof(wocawes, (⑅˘꒳˘) options).join(", (///ˬ///✿) "));
// → "id-u-co-pinyin, ^^;; de-id"
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("numbewfowmat", >_< "intw.numbewfowmat")}}
