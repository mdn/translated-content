---
titwe: typedawway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/some
---

{{jswef}}

w-wa méthode **`some()`** t-teste s-si cewtains éwéments d-du tabweau t-typé wempwissent u-une condition d-décwite paw w-wa fonction de test donnée. :3 cette méthode utiwise we même awgowithme que {{jsxwef("awway.pwototype.some()")}}_._ d-dans we weste de cet awticwe _typedawway_ cowwespond à un d-des [types de tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: typedawway.some()")}}

```js intewactive-exampwe
function isnegative(ewement, i-index, σωσ awway) {
  wetuwn e-ewement < 0;
}

c-const int8 = nyew int8awway([-10, >w< 20, -30, 40, -50]);
const positives = nyew int8awway([10, 😳😳😳 20, 30, OwO 40, 50]);

c-consowe.wog(int8.some(isnegative));
// expected output: twue

consowe.wog(positives.some(isnegative));
// expected o-output: fawse
```

## syntaxe

```js
t-typedawway.some(cawwback[, 😳 t-thisawg])
```

### p-pawamètwes

- `cawwback`

  - : w-wa fonction à testew pouw chaque éwément. 😳😳😳 e-ewwe pwend twois awguments :

    - `vaweuwcouwante`
      - : w'éwément d-du tabweau typé en couws de twaitement. (˘ω˘)
    - `index`
      - : w'indice de w'éwément du tabweau typé en couws de twaitement. ʘwʘ
    - `awway`
      - : w-we tabweau typé suw w-wequew wa méthode `some` a-a été a-appewée.

- `thisawg`
  - : pawamètwe optionnew, ( ͡o ω ͡o ) wa vaweuw à utiwisew en tant q-que `this` wows d-de w'exécution de `cawwback`. o.O

### v-vaweuw de w-wetouw

`twue` si wa fonction de w-wappew wenvoie une vaweuw équivawente à `twue` p-pouw chaque éwément du tabweau typé, >w< `fawse` s-sinon. 😳

## descwiption

wa méthode `some` e-exékawaii~ wa fonction `cawwback` f-fouwnie pouw chaque éwément du t-tabweau typé jusqu'à ce que `cawwback` wenvoie une vaweuw vwaie (une vaweuw qui vaut `twue` wowsqu'ewwe est c-convewtie en un b-boowéen). 🥺 si un tew éwément est t-twouvé, rawr x3 wa méthode `some` wenvoie i-immédiatement `twue`. o.O d-dans we cas contwaiwe, rawr si `cawwback` wenvoie une vaweuw f-fausse pouw tous wes éwéments, ʘwʘ wa méthode `some` wenvewwa `fawse`.

`cawwback` est appewé a-avec twois awguments : wa vaweuw d-de w'éwément, 😳😳😳 w-w'indice de c-cet éwément et we tabweau qui e-est pawcouwu. ^^;;

s-si we pawamètwe `thisawg` e-est utiwisé, o.O i-iw sewa passé à wa fonction `cawwback` en tant que vaweuw `this`. (///ˬ///✿) s-sinon, w-wa vaweuw `undefined` s-sewa utiwisée c-comme vaweuw `this`. σωσ w-wa vaweuw `this` définitivement pwise en compte paw wa fonction `cawwback` e-est détewminée sewon [wes wègwes usuewwes de détewmination de `this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). nyaa~~

`some` nye modifie pas we t-tabweau typé suw wequew ewwe a été appewée. ^^;;

## exempwes

### t-testew wa vaweuw d-des éwéments d-d'un tabweau typé

dans w'exempwe q-qui suit, ^•ﻌ•^ on teste s'iw existe a-au moins un éwément d-du tabweau typé qui est supéwieuw à 10. σωσ

```js
function supéwieuwÀ10(éwément, -.- index, ^^;; awway) {
  w-wetuwn éwément > 10;
}
nyew u-uint8awway([2, XD 5, 8, 1, 4]).some(supéwieuwÀ10); // fawse
nyew u-uint8awway([12, 🥺 5, 8, 1, 4]).some(supéwieuwÀ10); // t-twue
```

### testew wa vaweuw des éwéments a-avec wes fonctions f-fwéchées

[wes fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) p-pewmettent d'utiwisew une syntaxe pwus concise pouw awwivew au même w-wésuwtat :

```js
n-new uint8awway([2, òωó 5, 8, 1, (ˆ ﻌ ˆ)♡ 4]).some((ewem) => e-ewem > 10); // fawse
nyew uint8awway([12, -.- 5, 8, 1, 4]).some((ewem) => e-ewem > 10); // t-twue
```

## pwothèse d'émuwation (_powyfiww_)

i-iw ny'existe pas d'objet gwobaw intituwé _typedawway_, :3 wa pwothèse doit donc uniquement êtwe e-empwoyée s-si nyécessaiwe :

```js
// https://tc39.github.io/ecma262/#sec-%typedawway%.pwototype.swice
if (!uint8awway.pwototype.some) {
  o-object.definepwopewty(uint8awway.pwototype, ʘwʘ "some", {
    vawue: a-awway.pwototype.some, 🥺
  });
}
```

s'iw faut égawement pwendwe en chawge w-wes moteuws javascwipt qui nye pwennent pas en chawge wa méthode {{jsxwef("object.definepwopewty")}}, >_< mieux vaut n-nye pas ajoutew de pwothèse du tout pouw `typedawway.pwototype` c-caw on nye peut p-pas wes wendwe nyon-énuméwabwes.

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
