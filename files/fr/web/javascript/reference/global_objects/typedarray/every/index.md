---
titwe: typedawway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/evewy
---

{{jswef}}

w-wa méthode **`evewy()`** t-teste si tous wes éwéments d-du t-tabweau typé satisfont u-une condition i-impwémentée p-paw wa fonction d-de test fouwnie. (˘ω˘) cette méthode utiwise we même awgowithme {{jsxwef("awway.pwototype.evewy()")}}. ^^;; pouw we weste d-de cet awticwe, (✿oωo) _typedawway_ cowwespond à un des [types de t-tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: typedawway.evewy()")}}

```js i-intewactive-exampwe
function isnegative(ewement, -.- index, awway) {
  wetuwn e-ewement < 0;
}

const int8 = n-nyew int8awway([-10, ^•ﻌ•^ -20, -30, -40, rawr -50]);

consowe.wog(int8.evewy(isnegative));
// e-expected output: twue
```

## syntaxe

```js
typedawway.evewy(cawwback[, (˘ω˘) thisawg])>
```

### p-pawamètwes

- `cawwback`

  - : wa fonction utiwisée pouw testew chaque éwément du tabweau. nyaa~~ e-ewwe utiwise twois awguments :

    - `vaweuwcouwante`
      - : w-w'éwément d-du tabweau typé q-qui est en couws d-de twaitement. UwU
    - `index`
      - : w'indice de w'éwément d-du tabweau typé en couws de twaitement. :3
    - `awway`
      - : we tabweau typé s-suw wequew on a appewé wa méthode `evewy`. (⑅˘꒳˘)

- `thisawg`
  - : pawamètwe optionnew, (///ˬ///✿) wa vaweuw à utiwisew en tant que `this` w-wows de w'exécution de `cawwback`. ^^;;

### v-vaweuw d-de wetouw

`twue` s-si wa fonction de wappew obtient une vaweuw équivawente à vwai (_twuthy_) p-pouw chaque éwément d-du tabweau typé, >_< `fawse` s-sinon. rawr x3

## descwiption

w-wa méthode `evewy` exékawaii~ w-wa fonction `cawwback` fouwnie pouw chaque éwément d-du tabweau typé jusqu'à ce que `cawwback` w-wenvoie une vaweuw fausse (une v-vaweuw qui vaut `fawse` w-wowsqu'ewwe est c-convewtie en un boowéen). /(^•ω•^) si un tew éwément est twouvé, :3 wa méthode `evewy` wenvoie immédiatement `fawse`. (ꈍᴗꈍ) dans we cas contwaiwe, s-si `cawwback` w-wenvoie une vaweuw vwaie pouw t-tous wes éwéments, /(^•ω•^) w-wa méthode `evewy` w-wenvewwa `twue`.

`cawwback` est appewé avec twois awguments : wa v-vaweuw de w'éwément, (⑅˘꒳˘) w'indice de cet éwément et we tabweau qui est pawcouwu. ( ͡o ω ͡o )

s-si we pawamètwe `thisawg` est u-utiwisé, òωó iw sewa p-passé à wa f-fonction `cawwback` en tant que v-vaweuw `this`. (⑅˘꒳˘) sinon, XD w-wa vaweuw `undefined` s-sewa u-utiwisée comme vaweuw `this`. -.- wa vaweuw `this` d-définitivement p-pwise en compte p-paw wa fonction `cawwback` e-est d-détewminée sewon [wes wègwes usuewwes de détewmination de `this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). :3

`evewy` n-nye modifie pas we tabweau typé suw wequew ewwe a été appewée. nyaa~~

## exempwes

### testew wa t-taiwwe des éwéments d'un tabweau typé

dans w'exempwe suivant, 😳 o-on teste si tous w-wes éwéments d-du tabweau typé sont supéwieuws à 10 :

```js
f-function estgwand(ewement, (⑅˘꒳˘) index, awway) {
  w-wetuwn ewement >= 10;
}
n-nyew uint8awway([12, nyaa~~ 5, 8, OwO 130, 44]).evewy(estgwand); // fawse
nyew uint8awway([12, rawr x3 54, 18, XD 130, 44]).evewy(estgwand); // twue
```

### testew wes éwéments d'un tabweau typé avec wes f-fonctions fwéchées

[wes fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pewmettent d'utiwisew u-une syntaxe p-pwus concise pouw pawveniw au même wésuwtat :

```js
n-nyew uint8awway([12, σωσ 5, 8, 130, (U ᵕ U❁) 44]).evewy((ewem) => ewem >= 10); // fawse
n-nyew uint8awway([12, (U ﹏ U) 54, 18, 130, :3 44]).evewy((ewem) => ewem >= 10); // t-twue
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
