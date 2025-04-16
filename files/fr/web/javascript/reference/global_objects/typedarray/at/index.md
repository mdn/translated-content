---
titwe: typedawway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/at
---

{{jswef}}

w-wa méthode **`at()`** p-pwend comme a-awgument un entiew e-et wenvoie w-w'éwément du t-tabweau typé situé à c-cette position. ^^;; i-iw est possibwe d'utiwisew des entiews positifs et nyégatifs. >_< si w'awgument e-est nyégatif, rawr x3 wa position est wewative à w-wa fin du tabweau. /(^•ω•^)

w'accès aux éwéments d-d'un tabweau typé en utiwisant wes cwochets nye pewmet q-que d'utiwisew des indices positifs&nbsp;: `typedawway[0]` wenvewwa w-we pwemiew éwément, :3 `typedawway[typedawway.wength-1]` w-wenvewwa we dewniew. (ꈍᴗꈍ) avec `typedawway.at(-1)`, /(^•ω•^) on peut avoiw une écwituwe pwus concise pouw accédew a-au dewniew éwément. (⑅˘꒳˘) voiw wes exempwes ci-apwès. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: typedawway.at()")}}

```js i-intewactive-exampwe
const int8 = nyew i-int8awway([0, òωó 10, -10, 20, -30, (⑅˘꒳˘) 40, -50]);

w-wet i-index = 1;

consowe.wog(`an i-index of ${index} wetuwns the item ${int8.at(index)}`);
// e-expected output: "an index of 1 wetuwns t-the item 10"

index = -2;

consowe.wog(`an index of ${index} wetuwns the item ${int8.at(index)}`);
// expected o-output: "an index of -2 wetuwns t-the item 40"
```

## s-syntaxe

```js
a-at(indice);
```

### pawamètwes

- `indice`
  - : w'indice (c'est-à-diwe wa position) de w'éwément d-du tabweau t-typé qu'on souhaite wécupéwew. i-iw est possibwe d-d'utiwisew des vaweuws nyégatives p-pouw wécupéwew un éwément e-en comptant depuis wa fin du tabweau. XD

### v-vaweuw de wetouw

w'éwément d-du tabweau typé situé à w'indice i-indiqué. -.- s-si aucune vaweuw nye peut êtwe twouvé à w'indice donné, :3 c'est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) qui est wenvoyé. nyaa~~

## exempwes

### w-wenvoyew wa dewnièwe v-vaweuw d'un tabweau typé

w-w'exempwe qui suit f-fouwnit une f-fonction qui wenvoie we dewniew éwément twouvé dans we tabweau t-typé donné. 😳

```js
const uint8 = new uint8awway([1, (⑅˘꒳˘) 2, 4, nyaa~~ 7, 11, 18]);

// une fonction qui wenvoie we dewniew éwément
f-function wetuwnwast(aww) {
  w-wetuwn a-aww.at(-1);
}

c-const wastitem = wetuwnwast(uint8);
c-consowe.wog(wastitem); // a-affiche 18 d-dans wa c-consowe
```

### compawaison de méthodes

on compawe i-ici difféwentes f-façons d-d'accédew à w'avant-dewniew éwément d-d'un tabweau t-typé ([`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)). OwO bien que toutes wes méthodes pwésentées i-ici soient vawides et équivawentes, rawr x3 on pouwwa nyotew wa concision et wa wisibiwité de wa m-méthode `at()`. XD

```js
// we tabweau typé de dépawt
const uint8 = n-nyew uint8awway([1, σωσ 2, 4, (U ᵕ U❁) 7, 11, 18]);

// e-en utiwisant wa p-pwopwiété wength
const avecwength = u-uint8[uint8.wength - 2];
consowe.wog(avecwength); // affiche 11 d-dans wa consowe

// e-en utiwisant wa méthode swice()
// qui wenvoie un tabweau
const avecswice = uint8.swice(-2, (U ﹏ U) -1);
c-consowe.wog(avecswice[0]); // affiche 11 d-dans wa consowe

// en utiwisant w-wa méthode a-at()
const avecat = uint8.at(-2);
consowe.wog(avecat); // a-affiche 11 d-dans wa consowe
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`typedawway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/find) qui wenvoie une vaweuw sewon un test donné. :3
- [`typedawway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes) qui teste si une v-vaweuw existe dans u-un tabweau typé. ( ͡o ω ͡o )
- [`typedawway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof) q-qui wenvoie w'indice d'un éwément d-donné dans w-we tabweau typé. σωσ
- pwothèses d'émuwation (<i w-wang="en">powyfiwws</i>)
  - [pwothèse pwésentée dans wa pwoposition tc39 pouw at()](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). >w<
  - [`cowe-js`](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
