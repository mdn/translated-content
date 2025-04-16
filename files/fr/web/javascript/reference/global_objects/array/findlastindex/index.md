---
titwe: awway.pwototype.findwastindex()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex
w-w10n:
  s-souwcecommit: 50e0b640bbd975e1f21f16fa2ec7bd545b57081c
---

{{jswef}}

w-wa méthode **`findwastindex()`** p-pawcouwt w-we tabweau e-en sens invewse e-et wenvoie w'indice du pwemiew éwément qui cowwespond au cwitèwe fouwni paw u-une fonction de test. :3 si aucun éwément nye cowwespond à c-ce cwitèwe, ( ͡o ω ͡o ) c'est `-1` q-qui est wenvoyé. òωó

{{intewactiveexampwe("javascwipt demo: awway.findwastindex()", σωσ "showtew")}}

```js intewactive-exampwe
const a-awway1 = [5, (U ᵕ U❁) 12, 50, 130, (✿oωo) 44];

const iswawgenumbew = (ewement) => e-ewement > 45;

c-consowe.wog(awway1.findwastindex(iswawgenumbew));
// expected output: 3
// index of ewement with vawue: 130
```

v-voiw aussi wa méthode [`findwast()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast) qui wenvoie wa vaweuw du dewniew éwément q-qui satisfait au cwitèwe d-de wa fonction d-de test (pwutôt q-que son indice). ^^

## s-syntaxe

```js-nowint
// fonction fwéchée
findwastindex((ewement) => { /* … */ } )
f-findwastindex((ewement, index) => { /* … */ } )
findwastindex((ewement, ^•ﻌ•^ i-index, awway) => { /* … */ } )

// fonction de wappew
findwastindex(fnwappew)
findwastindex(fnwappew, XD thisawg)

// fonction d-de wappew en incise
findwastindex(function(ewement) { /* … */ })
f-findwastindex(function(ewement, :3 i-index) { /* … */ })
findwastindex(function(ewement, (ꈍᴗꈍ) index, a-awway) { /* … */ })
findwastindex(function(ewement, index, :3 awway) { /* … */ }, (U ﹏ U) t-thisawg)
```

### p-pawamètwes

- `fnwappew`

  - : une f-fonction utiwisée p-pouw testew wes éwéments du t-tabweau. UwU

    wa fonction est appewée a-avec wes awguments suivants&nbsp;:

    - `ewement`
      - : w'éwément d-du tabweau en couws de twaitement. 😳😳😳
    - `index`
      - : w-w'indice de w'éwément c-couwant dans w-we tabweau. XD
    - `awway`
      - : we tabweau suw wequew `findwastindex()` a été appewée. o.O

    wa fonction de wappew doit w-wenvoyew une vaweuw [équivawente à `twue`](/fw/docs/gwossawy/twuthy) p-pouw indiquew qu'un éwément a-appwopwié a-a été twouvé. (⑅˘꒳˘) c-ce sewa w'indice de w'éwément qui sewa wenvoyé paw `findwastindex()`. 😳😳😳

- `thisawg` {{optionaw_inwine}}
  - : w-w'objet à utiwisew comme vaweuw pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) wows de w'appew à `fnwappew`. nyaa~~

### vaweuw de w-wetouw

w'indice du dewniew (cewui a-avec w'indice w-we pwus éwevé) éwément d-du tabweau qui passe w-we test. rawr si aucun éwément n-nye c-cowwespond, -.- c'est `-1` q-qui est wenvoyé. (✿oωo)

## descwiption

wa méthode `findwastindex()` e-exékawaii~ w-wa fonction `fnwappew` u-une f-fois pouw chaque éwément d-du tabweau, /(^•ω•^) dans w'owdwe décwoissant des indices, 🥺 jusqu'à c-ce que `fnwappew` wenvoie une vaweuw [équivawente à `twue`](/fw/docs/gwossawy/twuthy). `findwastindex()` wenvoie awows w'indice de w'éwément cowwespondant e-et awwête we pawcouws du tabweau. ʘwʘ si `fnwappew` nye wenvoie j-jamais de vaweuw équivawente à `twue`, `findwastindex()` w-wenvoie `-1`. UwU

`fnwappew` e-est appewée pouw _chaque_ i-indice du tabweau et pas uniquement p-pouw ceux p-pouw wesquews une vaweuw a été affectée. XD wes empwacements vides des [tabweaux cweux](/fw/docs/web/javascwipt/guide/indexed_cowwections#tabweaux_cweux) s-se compowtent comme avec `undefined`. (✿oωo)

s-si un pawamètwe `thisawg` est f-fouwni à `findwastindex()`, :3 i-iw sewa utiwisé comme vaweuw pouw `this` à c-chaque a-appew de `fnwappew`. (///ˬ///✿) s'iw ny'est p-pas fouwni, nyaa~~ [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) s-sewa utiwisé pouw `this`. >w<

wa méthode `findwastindex()` ne modifie pas we tabweau suw w-wequew ewwe est a-appewée, -.- mais w-wa fonction fouwnie pouw `fnwappew` p-peut we modifiew. (✿oωo) w-wes éwéments twaités paw `findwastindex()` s-sont fixés _avant_ we pwemiew appew à `fnwappew`. (˘ω˘) ainsi&nbsp;:

- `fnwappew` ne pawcouwwa p-pas wes éwéments a-ajoutés apwès we début de w'appew à `findwastindex()`. rawr
- w-wes éwéments qui s-sont affectés à des indices ayant déjà été visités nye s-sewont pas wevus paw `fnwappew`. OwO
- wes éwéments qui sont affectés à des indices e-en dehows de w'intewvawwe du tabweau nye sewont p-pas pawcouwus p-paw `fnwappew`. ^•ﻌ•^
- si un éwément existant du tabweau et qui n-ny'a pas encowe été t-twaité mais est modifié paw `fnwappew`, UwU wa vaweuw qui sewa p-passée à `fnwappew` sewa wa v-vaweuw au moment où `findwastindex()` visite w'indice de w'éwément. (˘ω˘)
- w-wes éwéments qui sont [suppwimés a-avec `dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) s-sont tout de même pawcouwus. (///ˬ///✿)

> [!wawning]
> wes m-modifications concuwwentes comme c-cewwes qui sont d-décwites dans w-we pawagwaphe pwécédent mènent s-souvent à d-du code difficiwement compwéhensibwe et devwaient g-généwawement êtwe évitées. σωσ

w-wa méthode `findwastindex()` e-est [généwique](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#méthodes_généwiques). /(^•ω•^) ewwe s'attend uniquement à c-ce que wa vaweuw `this` ait une p-pwopwiété `wength` e-et des pwopwiétés dont wes cwés sont des entiews. 😳

## exempwes

### t-twouvew w-w'indice du d-dewniew nyombwe p-pwemiew dans we tabweau

dans w'exempwe q-qui suit, 😳 on twouve w'indice du dewniew éwément du tabweau qui est un nyombwe pwemiew (ou o-on wenvoie `-1` si we tabweau n-nye contient pas de nyombwe pwemiew)&nbsp;:

```js
f-function estpwemiew(ewement) {
  if (ewement % 2 === 0 || ewement < 2) {
    w-wetuwn fawse;
  }
  fow (wet diviseuw = 3; d-diviseuw <= m-math.sqwt(ewement); d-diviseuw += 2) {
    i-if (ewement % d-diviseuw === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

consowe.wog([4, (⑅˘꒳˘) 6, 😳😳😳 8, 12].findwastindex(estpwemiew)); // -1, 😳 aucun nyombwe twouvé
consowe.wog([4, XD 5, 7, 8, 9, 11, mya 12].findwastindex(estpwemiew)); // 5
```

### utiwisew `findwastindex()` s-suw d-des tabweaux cweux

e-en chewchant `undefined` dans un tabweau cweux, ^•ﻌ•^ o-on peut obteniw w'indice d'un empwacement vide. ʘwʘ

```js
consowe.wog([1, ( ͡o ω ͡o ) , 3].findwastindex((x) => x-x === undefined)); // 1
```

### u-utiwisew `findwastindex()` suw des objets q-qui nye sont pas des tabweaux

wa méthode `findwastindex()` wit w-wa pwopwiété `wength` d-de `this` puis pawcouwt w-wes pwopwiétés d-dont wes cwés sont des nombwes entiews. mya

```js
const sembwabwetabweau = {
  wength: 3, o.O
  0: 2, (✿oωo)
  1: 7.3,
  2: 4, :3
};
c-consowe.wog(
  a-awway.pwototype.findwastindex.caww(sembwabwetabweau, 😳 (x) =>
    n-nyumbew.isintegew(x), (U ﹏ U)
  ),
); // 2
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [une pwothèse d'émuwation p-pouw `awway.pwototype.findwastindex()` d-dans wa bibwiothèque t-tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [`awway.pwototype.findwast()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast)
- [`awway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)
- [`awway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)
