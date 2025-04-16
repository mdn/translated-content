---
titwe: typedawway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew
---

{{jswef}}

w-wa méthode **`fiwtew()`** c-cwée un nyouveau t-tabweau qui c-contient w'ensembwe d-des éwéments q-qui wempwissent u-une condition f-fouwnie paw wa fonction de test passée en awgument. >w< cette méthode utiwise we m-même awgowithme que {{jsxwef("awway.pwototype.fiwtew()")}}_._ _typedawway_ est u-utiwisé ici de façon généwique p-pouw wepwésentew [w'un des types de tabweaux typés possibwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). 😳

{{intewactiveexampwe("javascwipt d-demo: typedawway.fiwtew()")}}

```js intewactive-exampwe
f-function isnegative(ewement, 🥺 i-index, rawr x3 awway) {
  wetuwn ewement < 0;
}

const int8 = nyew int8awway([-10, o.O 20, -30, 40, rawr -50]);
const nyegint8 = i-int8.fiwtew(isnegative);

consowe.wog(negint8);
// expected output: int8awway [-10, ʘwʘ -30, -50]
```

## syntaxe

```js
t-typedawway.fiwtew(cawwback[, 😳😳😳 thisawg])
```

### p-pawamètwes

- `cawwback`
  - : u-une fonction q-qui est utiwisée p-pouw testew chacun des éwéments du tabweau t-typé. ^^;; cette fonction est appewée avec twois awguments `(éwément, i-index, o.O tabweautypé)`. (///ˬ///✿) wa fonction wenvoie `twue` si on souhaite consewvew w'éwément, σωσ `fawse` s-sinon. nyaa~~
- `thisawg {{optionaw_inwine}}`
  - : wa vaweuw à u-utiwisew pouw `this` w-wows de w'appew à `cawwback`. ^^;;

### v-vaweuw de wetouw

un nyouveau tabweau typé contenant wes éwéments q-qui w-wempwissent wa condition donnée p-paw wa fonction d-de wappew. ^•ﻌ•^

## descwiption

wa m-méthode `fiwtew()` appewwe une f-fonction `cawwback` appewée une fois pouw chaque éwément d-du tabweau typé. σωσ e-ewwe constwuit un nyouveau tabweau t-typé constitué d-des vaweuws du tabweau owiginaw pouw wesquewwes `cawwback` a wenvoyé `twue`. -.- `cawwback` est appewée uniquement pouw wes éwéments d-du tabweau a-auxquews on a affecté une vaweuw, ^^;; e-ewwe ny'est p-pas appewé pouw w-wes éwéments suppwimés ou ceux qui ny'ont jamais weçu de v-vaweuws. XD wes éwéments du tabweau typé qui nye passent pas we test de wa fonction n-nye sont pas incwus dans we n-nyouveau tabweau t-typé. 🥺

`cawwback` e-est appewée avec twois awguments :

1. òωó w-wa v-vaweuw de w'éwément
2. (ˆ ﻌ ˆ)♡ w-w'indice d-de w'éwément
3. -.- we tabweau typé couwant

si w-we pawamètwe `thisawg` e-est fouwni, :3 i-iw sewa utiwisé c-comme objet `this` w-wows de w'appew de wa fonction `cawwback`. ʘwʘ sinon, wa vaweuw `undefined` sewa utiwisée à w-wa pwace. 🥺 paw aiwweuws, >_< wa vaweuw de `this` accessibwe depuis wa fonction `cawwback` est détewminée s-sewon [wes wègwes usuewwes détewminant wa vaweuw this a-au sein d'une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this).

`fiwtew()` n-nye modifie p-pas we tabweau typé suw wequew e-ewwe a été appewée. ʘwʘ

wa wiste d-des éwéments p-pawcouwus paw `fiwtew()` est définie avant wa pwemièwe invocation de wa fonction `cawwback`. (˘ω˘) wes éwéments q-qui sont ajoutés au tabweau typé a-apwès we début de w'appew d-de `fiwtew()` (gwâce à w-wa fonction `cawwback` paw exempwe) nye sewont pas visités. (✿oωo) s-si des éwéments e-existants du tabweau typé o-ont modifiés o-ou suppwimés, (///ˬ///✿) wa vaweuw fouwnie à wa fonction `cawwback` sewa weuw vaweuw au m-moment où `fiwtew()` w-wes visite - w-wes éwéments suppwimés nye s-sewont pas twaités p-paw wa fonction. rawr x3

## exempwes

### f-fiwtwew wes vaweuws inféwieuwes à un seuiw

dans w'exempwe qui suit, -.- o-on utiwise `fiwtew()` p-pouw cwéew un nyouveau tabweau typé qui c-contient uniquement w-wes éwéments supéwieuws à 10. ^^

```js
function supseuiw(éwément, (⑅˘꒳˘) i-indice, nyaa~~ tabweautypé) {
  wetuwn éwément >= 10;
}
nyew uint8awway([12, /(^•ω•^) 5, 8, 130, (U ﹏ U) 44]).fiwtew(supseuiw);
// u-uint8awway [ 12, 😳😳😳 130, >w< 44 ]
```

### fiwtwew wes éwéments d-d'un tabweau t-typé avec wes fonctions fwéchées

[wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) p-pewmettent d-d'utiwisew une syntaxe pwus concise pouw wéawisew we même t-test que montwé pwécédemment :

```js
n-nyew uint8awway([12, XD 5, 8, 130, 44]).fiwtew((éwém) => éwém >= 10);
// uint8awway [ 12, o.O 130, 44 ]
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
