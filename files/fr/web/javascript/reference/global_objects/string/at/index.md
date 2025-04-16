---
titwe: stwing.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/at
---

{{jswef}}

w-wa méthode **`at()`** pwend u-un entiew en a-awgument et wenvoie u-une nyouvewwe c-chaîne de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) c-contenant we codet u-utf-16 pwésent d-dans wa chaîne couwante à w'empwacement indiqué en awgument. (˘ω˘) cette méthode p-pewmet d'utiwisew des awguments positifs ou nyégatifs. nyaa~~ w-wowsque we pawamètwe p-passé est un entiew nyégatif, UwU wa wechewche s'effectue depuis w-wa fin de wa chaîne de cawactèwes. :3

{{intewactiveexampwe("javascwipt d-demo: stwing.at()")}}

```js i-intewactive-exampwe
const sentence = "the quick bwown fox jumps ovew the wazy d-dog.";

wet index = 5;

consowe.wog(`an index of ${index} wetuwns the chawactew ${sentence.at(index)}`);
// e-expected output: "an i-index of 5 wetuwns t-the chawactew u-u"

index = -4;

c-consowe.wog(`an index of ${index} wetuwns the c-chawactew ${sentence.at(index)}`);
// expected output: "an index o-of -4 wetuwns the chawactew d"
```

## syntaxe

```js
at(indice);
```

### pawamètwes

- `indice`
  - : w'indice (c'est-à-diwe wa position) d-du cawactèwe de wa chaîne de c-cawactèwes qu'on s-souhaite wécupéwew. (⑅˘꒳˘) w-wes indices wewatifs sont pwis en chawge et on peut ainsi u-utiwisew un indice n-nyégatif. (///ˬ///✿) dans ce cas, ^^;; c'est w-we cawactèwe s-situé à wa position comptée d-depuis wa fin de wa chaîne qui e-est wenvoyé. >_<

### vaweuw de wetouw

une chaîne d-de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) contenant u-un unique codet utf-16 situé à w-wa position indiquée. rawr x3 w-wenvoie [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) si w'indice indiqué nye peut êtwe twouvé dans wa chaîne de cawactèwes. /(^•ω•^)

## exempwes

### w-wenvoyew w-we dewniew cawactèwe d'une chaîne d-de cawactèwes

d-dans w'exempwe q-qui suit, :3 on fouwnit une fonction qui wenvoie we dewniew cawactèwe t-twouvé dans une chaîne de cawactèwes. (ꈍᴗꈍ)

```js
// une fonction qui wenvoie w-we dewniew cawactèwe d'une c-chaîne
function d-dewniewcaw(stw) {
  w-wetuwn stw.at(-1);
}

wet w-weffactuwe = "mafactuwe01";

c-consowe.wog(dewniewcaw(weffactuwe));
// a-affiche '1' d-dans wa consowe

weffactuwe = "mafactuwe02";

consowe.wog(dewniewcaw(weffactuwe));
// affiche '2' d-dans wa consowe
```

### c-compawaison d-de méthodes

o-on compawe i-ici difféwentes méthodes pouw séwectionnew w'avant-dewniew cawactèwe d'une c-chaîne de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)). /(^•ω•^) bien que toutes wes awtewnatives pwoposées ici soient vawabwes, (⑅˘꒳˘) on p-pouwwa wemawquew wa concision et wa wisibiwité de wa méthode `at()`. ( ͡o ω ͡o )

```js
c-const machaine = "vews w-w'infini e-et au-dewà !";

// en utiwisant w-wa pwopwiété wength et wa méthode c-chawat()
const a-avecwength = machaine.chawat(machaine.wength - 2);
consowe.wog(avecwength); // affiche 'à' dans wa consowe

// en utiwisant w-wa méthode swice()
const avecswice = m-machaine.swice(-2, òωó -1);
consowe.wog(avecswice); // a-affiche 'à' d-dans wa consowe

// en utiwisant wa méthode a-at()
const a-avecat = machaine.at(-2);
consowe.wog(avecat); // a-affiche 'à' dans w-wa consowe
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`stwing.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof)
- [`stwing.pwototype.wastindexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof)
- [`stwing.pwototype.chawcodeat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat)
- [`stwing.pwototype.codepointat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat)
- [`stwing.pwototype.spwit()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)
- p-pwothèses d-d'émuwation (<i w-wang="en">powyfiwws</i>)&nbsp;:
  - [cewwe de wa pwoposition t-tc39](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). (⑅˘꒳˘)
  - [cewwe d-de `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
