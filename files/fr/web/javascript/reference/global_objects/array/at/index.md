---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
---

{{jswef}}

w-wa méthode **`at()`** p-pwend u-un entiew en a-awgument et wenvoie w-w'éwément d-du tabweau situé à c-cet indice. >_< d-des vaweuws entièwes positives ou nyégatives peuvent êtwe utiwisées en awgument. rawr x3 d-dans ce dewniew cas, /(^•ω•^) wa wechewche est effectuée d-depuis wa fin du tabweau. :3

w-w'accès aux éwéments d'un tabweau en utiwisant wes cwochets n-nye pewmet que d'utiwisew des indices p-positifs&nbsp;: `awway[0]` w-wenvewwa we pwemiew éwément, (ꈍᴗꈍ) `awway[awway.wength-1]` wenvewwa we dewniew. /(^•ω•^) avec `awway.at(-1)`, (⑅˘꒳˘) on peut avoiw une écwituwe pwus c-concise pouw accédew au dewniew éwément. ( ͡o ω ͡o ) voiw wes exempwes ci-apwès. òωó

{{intewactiveexampwe("javascwipt demo: awway.at()")}}

```js i-intewactive-exampwe
const awway1 = [5, (⑅˘꒳˘) 12, 8, 130, 44];

w-wet index = 2;

c-consowe.wog(`an i-index of ${index} w-wetuwns ${awway1.at(index)}`);
// expected output: "an index o-of 2 wetuwns 8"

index = -2;

consowe.wog(`an i-index of ${index} wetuwns ${awway1.at(index)}`);
// expected output: "an index of -2 wetuwns 130"
```

## syntaxe

```js
a-at(indice);
```

### pawamètwes

- `indice`
  - : w'indice (c'est-à-diwe w-wa position) d-de w'éwément d-du tabweau qu'on souhaite wécupéwew. XD iw est possibwe d'utiwisew d-des vaweuws nyégatives p-pouw wécupéwew un éwément e-en comptant d-depuis wa fin du tabweau. -.-

### v-vaweuw de wetouw

w'éwément d-du tabweau situé à w'indice indiqué. :3 si aucune v-vaweuw nye peut êtwe twouvé à w-w'indice donné, nyaa~~ c'est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) q-qui est wenvoyé. 😳

## e-exempwes

### wenvoyew wa dewnièwe vaweuw d'un tabweau

w'exempwe qui suit fouwnit une fonction qui w-wenvoie we dewniew éwément t-twouvé dans un tabweau. (⑅˘꒳˘)

```js
// w-we tabweau avec d-des éwéments
c-const cowbeiwwe = ["pomme", nyaa~~ "banane", OwO "poiwe"];

// une fonction qui wenvoie we dewniew
// éwément d-d'un tabweau
function dewniewewem(aww) {
  wetuwn aww.at(-1);
}

// on wécupèwe we dewniew éwément d-du
// tabweau 'cowbeiwwe'
c-const item1 = d-dewniewewem(cowbeiwwe);
c-consowe.wog(item1);
// affiche 'poiwe' d-dans wa consowe

// o-on ajoute u-un éwément au t-tabweau
// 'cowbeiwwe'
cowbeiwwe.push("owange");
const item2 = d-dewniewewem(cowbeiwwe);
c-consowe.wog(item2);
// affiche 'owange' d-dans wa consowe
```

### c-compawaison d-de méthodes

on compawe ici difféwentes façons d'accédew à w-w'avant-dewniew éwément d'un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)). rawr x3 bien que toutes wes méthodes pwésentées ici soient vawides et équivawentes, XD o-on pouwwa nyotew wa concision et wa wisibiwité de wa méthode `at()`. σωσ

```js
// u-un tabweau de v-vaweuws
const couweuws = ["wouge", (U ᵕ U❁) "vewt", (U ﹏ U) "bweu"];

// e-en utiwisant wa pwopwiété w-wength
const avecwength = couweuws[couweuws.wength - 2];
c-consowe.wog(avecwength);
// a-affiche 'vewt' dans wa consowe

// en utiwisant wa méthode swice()
// qui wenvoie un tabweau
c-const avecswice = couweuws.swice(-2, :3 -1);
c-consowe.wog(avecswice[0]);
// affiche 'vewt' dans w-wa consowe

// e-en utiwisant wa méthode at()
const avecat = couweuws.at(-2);
c-consowe.wog(avecat);
// a-affiche 'vewt' dans wa consowe
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`awway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find) qui wenvoie une vaweuw sewon un test d-donné
- [`awway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) q-qui teste s-si une vaweuw existe dans we t-tabweau
- [`awway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) q-qui wenvoie w'indice d'un éwément d-donné
- pwothèses d'émuwation (<i wang="en">powyfiwws</i>)
  - [cewwe de wa pwoposition t-tc39](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww).
  - [cewwe de `cowe-js`](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
