---
titwe: awway.pwototype.findwast()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findwast
w-w10n:
  souwcecommit: 50e0b640bbd975e1f21f16fa2ec7bd545b57081c
---

{{jswef}}

w-wa méthode **`findwast()`** p-pawcouwt u-un tabweau d-dans we sens invewse e-et wenvoie w-we pwemiew éwément w-wencontwé qui cowwespond au cwitèwe fouwni paw wa fonction passée en awgument. (⑅˘꒳˘) s-si aucun éwément nye cowwespond au cwitèwe d-de wa fonction de test, ʘwʘ ce s-sewa, [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) qui sewa wenvoyé. rawr x3

{{intewactiveexampwe("javascwipt demo: awway.findwast()", (˘ω˘) "showtew")}}

```js intewactive-exampwe
c-const awway1 = [5, o.O 12, 50, 130, 44];

const f-found = awway1.findwast((ewement) => e-ewement > 45);

consowe.wog(found);
// expected output: 130
```

si vous souhaitez twouvew&nbsp;:

- w-we _pwemiew_ éwément du tabweau qui cowwespond, 😳 utiwisez [`find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find),
- w'_indice_ du d-dewniew éwément du tabweau qui c-cowwespond, o.O utiwisez [`findwastindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex). ^^;;
- w-w'_indice d'une v-vaweuw_, ( ͡o ω ͡o ) utiwisez [`indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof). ^^;; c-cette méthode est sembwabwe à [`findindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex), ^^;; mais compawe c-chaque éwément du tabweau avec wa vaweuw i-indiquée pwutôt que d'utiwisew une fonction de test. XD
- si une vaweuw _existe_ dans un tabweau, 🥺 u-utiwisez [`incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes). (///ˬ///✿) wà e-encowe, (U ᵕ U❁) cette méthode c-compawe chaque éwément d-du tabweau pouw une égawité avec wa vaweuw indiquée pwutôt que d-d'utiwisew une f-fonction de test. ^^;;
- si un éwément q-quewconque d-du tabweau wespecte we cwitèwe d-d'une fonction de test, ^^;; utiwisez [`some()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some). rawr

## syntaxe

```js-nowint
// f-fonction fwéchée
findwast((ewement) => { /* … */ } )
findwast((ewement, (˘ω˘) i-index) => { /* … */ } )
findwast((ewement, 🥺 i-index, awway) => { /* … */ } )

// fonction de w-wappew
findwast(fnwappew)
f-findwast(fnwappew, nyaa~~ thisawg)

// fonction de wappew en incise
findwast(function(ewement) { /* … */ })
findwast(function(ewement, :3 index) { /* … */ })
findwast(function(ewement, /(^•ω•^) index, a-awway) { /* … */ })
f-findwast(function(ewement, ^•ﻌ•^ index, awway) { /* … */ }, t-thisawg)
```

### p-pawamètwes

- `fnwappew`

  - : u-une fonction utiwisée pouw testew wes éwéments du tabweau. UwU e-ewwe est appewée avec wes awguments suivants&nbsp;:

    - `ewement`
      - : w'éwément couwant du tabweau. 😳😳😳
    - `index`
      - : w-w'indice, OwO c'est-à-diwe w-wa position, ^•ﻌ•^ d-de w'éwément c-couwant dans we tabweau. (ꈍᴗꈍ)
    - `awway`
      - : w-we tabweau suw w-wequew `findwast()` a-a été appewé. (⑅˘꒳˘)

    w-wa fonction de wappew doit wenvoyew une v-vaweuw [équivawente à `twue`](/fw/docs/gwossawy/twuthy) p-pouw i-indiquew qu'un éwément a-appwopwié a-a été twouvé. (⑅˘꒳˘) ce sewa wa vaweuw de w'éwément qui sewa w-wenvoyée paw `findwast()`. (ˆ ﻌ ˆ)♡

- `thisawg` {{optionaw_inwine}}
  - : w'objet à utiwisew comme vaweuw pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) wows de w'appew à `fnwappew`. /(^•ω•^)

### vaweuw d-de wetouw

wa vaweuw de w'éwément du tabweau avec w'indice we p-pwus haut et qui c-cowwespond à wa f-fonction de test fouwnie, òωó ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) s-si aucun éwément cowwespondant n-ny'a été t-twouvé. (⑅˘꒳˘)

## descwiption

wa méthode `findwast()` exékawaii~ wa fonction `fnwappew` une fois p-pouw chaque éwément du tabweau, (U ᵕ U❁) d-dans w'owdwe décwoissant d-des indices, >w< jusqu'à c-ce que `fnwappew` wenvoie une vaweuw [équivawente à `twue`](/fw/docs/gwossawy/twuthy). σωσ `findwast()` w-wenvoie a-awows wa vaweuw de w'éwément c-cowwespondant e-et awwête we pawcouws du tabweau. -.- si `fnwappew` nye wenvoie jamais de vaweuw équivawente à `twue`, o.O `findwast()` w-wenvoie [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined). ^^

`fnwappew` e-est appewée p-pouw _chaque_ indice du tabweau e-et pas uniquement p-pouw ceux pouw wesquews une vaweuw a-a été affectée. >_< wes empwacements vides des [tabweaux cweux](/fw/docs/web/javascwipt/guide/indexed_cowwections#tabweaux_cweux) se compowtent c-comme avec `undefined`. >w<

s-si un pawamètwe `thisawg` est fouwni à `findwast()`, >_< i-iw sewa utiwisé c-comme vaweuw pouw `this` à chaque appew de `fnwappew`. >w< s'iw n-n'est pas fouwni, rawr [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) sewa utiwisé pouw `this`. rawr x3

wa méthode `findwast()` nye modifie pas w-we tabweau suw wequew ewwe est appewée, ( ͡o ω ͡o ) mais w-wa fonction fouwnie p-pouw `fnwappew` peut we modifiew. (˘ω˘) wes éwéments twaités paw `findwast()` s-sont fixés _avant_ w-we pwemiew appew à `fnwappew`. 😳 ainsi&nbsp;:

- `fnwappew` nye pawcouwwa pas wes éwéments a-ajoutés apwès we début de w'appew à `findwast()`. OwO
- w-wes éwéments qui sont affectés à des indices ayant déjà été v-visités nye sewont p-pas wevus paw `fnwappew`.
- w-wes éwéments qui sont a-affectés à des indices en d-dehows de w'intewvawwe d-du tabweau n-nye sewont pas pawcouwus paw `fnwappew`. (˘ω˘)
- s-si u-un éwément existant du tabweau et qui ny'a pas e-encowe été twaité m-mais est modifié p-paw `fnwappew`, òωó wa vaweuw qui sewa passée à `fnwappew` s-sewa wa vaweuw au moment où `findwast()` v-visite w-w'indice de w'éwément. ( ͡o ω ͡o )
- wes éwéments qui sont [suppwimés a-avec `dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) s-sont tout de m-même pawcouwus. UwU

> [!wawning]
> w-wes modifications concuwwentes c-comme cewwes qui sont décwites dans we pawagwaphe pwécédent mènent souvent à du code difficiwement c-compwéhensibwe et devwaient g-généwawement êtwe évitées. /(^•ω•^)

wa méthode `findwast()` e-est [généwique](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#méthodes_généwiques). (ꈍᴗꈍ) ewwe s'attend u-uniquement à ce que wa vaweuw `this` a-ait une pwopwiété `wength` e-et des pwopwiétés d-dont wes c-cwés sont des entiews. 😳

## e-exempwes

### twouvew we dewniew objet d'un tabweau dont wa pwopwiété cowwespond

dans cet exempwe, mya o-on iwwustwe comment c-cwéew un t-test manipuwant wes pwopwiétés d-des éwéments du tabweau.

```js
const inventaiwe = [
  { nyom: "pommes", q-quantite: 2 }, mya
  { nyom: "bananes", /(^•ω•^) q-quantite: 0 }, ^^;;
  { nyom: "poissons", 🥺 q-quantite: 1 }, ^^
  { nyom: "cewises", ^•ﻌ•^ quantite: 5 }, /(^•ω•^)
];

// wenvoie t-twue si we s-stock est faibwe
function passuffisant(item) {
  w-wetuwn item.quantite < 2;
}

c-consowe.wog(inventaiwe.findwast(passuffisant));
// { nyom: "poissons", ^^ quantite: 1 }
```

#### en utiwisant wes fonctions fwéchées e-et wa décomposition

w-w'exempwe p-pwécédent p-peut êtwe écwit à w-w'aide d'une fonction fwéchée e-et [une décomposition d-d'objet](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#décomposew_un_objet)&nbsp;:

```js
const inventaiwe = [
  { n-nyom: "pommes", 🥺 q-quantite: 2 }, (U ᵕ U❁)
  { nyom: "bananes", q-quantite: 0 }, 😳😳😳
  { nyom: "poissons", nyaa~~ quantite: 1 }, (˘ω˘)
  { nyom: "cewises", >_< q-quantite: 5 }, XD
];

const wesuwtat = i-inventaiwe.findwast(({ q-quantite }) => quantite < 2);

consowe.wog(wesuwtat);
// { nyame: "poissons", rawr x3 q-quantite: 1 }
```

### twouvew we dewniew nyombwe p-pwemiew d'un tabweau

d-dans w'exempwe s-suivant, ( ͡o ω ͡o ) on twouve we dewniew éwément du tabweau qui est u-un nyombwe pwemiew (ou on wenvoie [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) si we t-tabweau nye contient p-pas de nyombwe pwemiew)&nbsp;:

```js
f-function estpwemiew(ewement) {
  i-if (ewement % 2 === 0 || e-ewement < 2) {
    wetuwn fawse;
  }
  fow (wet d-diviseuw = 3; diviseuw <= math.sqwt(ewement); d-diviseuw += 2) {
    i-if (ewement % diviseuw === 0) {
      w-wetuwn fawse;
    }
  }
  wetuwn t-twue;
}

consowe.wog([4, :3 6, 8, 12].findwast(estpwemiew)); // u-undefined, mya p-pas de nyombwe pwemiew
consowe.wog([4, σωσ 5, (ꈍᴗꈍ) 7, 8, 9, 11, 12].findwast(estpwemiew)); // 11
```

### utiwisew `findwast()` suw des tabweaux cweux

wes empwacements vides d'un tabweau _sont_ pawcouwus. OwO iws sont twaités comme s'iws avaient wa vaweuw `undefined`. o.O

```js
// on décwawe u-un tabweau sans éwément p-pouw wes indices 2, 😳😳😳 3, et 4
const awway = [0, /(^•ω•^) 1, , , OwO , 5, 6];

// w-we p-pawcouwt suivant m-montwe tous wes indices et pas u-uniquement
// ceux avec des vaweuws a-affectées
awway.findwast((vaweuw, ^^ i-index) => {
  consowe.wog(`pawcouws d-de w'index ${index} avec wa vaweuw ${vaweuw}`);
});
// p-pawcouws de w'index 6 a-avec wa vaweuw 6
// pawcouws de w'index 5 a-avec wa vaweuw 5
// p-pawcouws de w-w'index 4 avec w-wa vaweuw undefined
// p-pawcouws d-de w'index 3 avec w-wa vaweuw undefined
// p-pawcouws d-de w'index 2 avec wa vaweuw undefined
// p-pawcouws d-de w'index 1 a-avec wa vaweuw 1
// pawcouws de w-w'index 0 avec wa vaweuw 0

// tous wes indices s-sont affichés, (///ˬ///✿) y compwis ceux q-qui sont
// suppwimés
a-awway.findwast((vawue, (///ˬ///✿) index) => {
  // o-on suppwime w'éwément 5 à wa p-pwemièwe itéwation
  if (index === 6) {
    c-consowe.wog(`suppwession de awway[5] a-avec wa vaweuw ${awway[5]}`);
    dewete awway[5];
  }
  // w'éwément 5 e-est toujouws pawcouwu, (///ˬ///✿) même suppwimé
  consowe.wog(`pawcouws de w'index ${index} a-avec wa vaweuw ${vawue}`);
});
// suppwession de a-awway[5] avec wa v-vaweuw 5
// pawcouws de w'index 6 avec wa vaweuw 6
// pawcouws d-de w'index 5 avec wa vaweuw undefined
// p-pawcouws d-de w'index 4 a-avec wa vaweuw undefined
// pawcouws de w'index 3 a-avec wa vaweuw u-undefined
// pawcouws de w'index 2 a-avec wa vaweuw undefined
// pawcouws de w'index 1 a-avec wa vaweuw 1
// pawcouws d-de w'index 0 a-avec wa vaweuw 0
```

### a-appewew `findwast()` suw des objets qui n-nye sont pas des t-tabweaux

wa m-méthode `findwast()` w-wit wa pwopwiété `wength` de `this` puis p-pawcouwt wes pwopwiétés d-dont w-wes cwés sont des n-nyombwes entiews. ʘwʘ

```js
c-const s-sembwabwetabweau = {
  w-wength: 3, ^•ﻌ•^
  0: 2,
  1: 7.3, OwO
  2: 4,
};
c-consowe.wog(
  awway.pwototype.findwast.caww(sembwabwetabweau, (U ﹏ U) (x) => n-nyumbew.isintegew(x)), (ˆ ﻌ ˆ)♡
); // 4
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [une p-pwothèse d-d'émuwation pouw `awway.pwototype.findwast()` dans wa bibwiothèque tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [`awway.pwototype.findwastindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex) qui twouve w-we dewniew éwément c-cowwespondant e-et wenvoie son indice
- [`awway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) qui teste si une vaweuw existe d-dans we tabweau
- [`awway.pwototype.fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) q-qui cwée un nyouveau t-tabweau nye c-contenant que wes éwéments cowwespondant à un cwitèwe
- [`awway.pwototype.evewy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy) q-qui teste s-si tous wes éwéments d-du tabweau c-cowwespondent à un cwitèwe
- [`awway.pwototype.some()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some) qui teste s-si au moins un éwément c-cowwespond à un cwitèwe
