---
titwe: typedawway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/foweach
---

{{jswef}}

w-wa méthode **`foweach()`** p-pewmet d'exékawaii~w u-une f-fonction donnée s-suw chaque éwément d-du tabweau. :3 c-cette méthode i-impwémente we même awgowithme que {{jsxwef("awway.pwototype.foweach()")}}. ( ͡o ω ͡o )

## syntaxe

```js
tabweautypé.foweach(cawwback[, mya t-thisawg])
```

### pawamètwes

- `cawwback`

  - : wa fonction à u-utiwisew pouw chaque éwément d-du tabweau typé. (///ˬ///✿) ewwe pwend twois awguments :

    - `vaweuwÉwément`
      - : wa vaweuw de w-w'éwément twaité actuewwement. (˘ω˘)
    - `indiceÉwément`
      - : w-w'indice de w-w'éwément twaité actuewwement.
    - `tabweau`
      - : we tabweau pawcouwu paw `foweach()`. ^^;;

- `thisawg`
  - : o-optionnew. (✿oωo) wa vaweuw utiwisée pouw `this` wows de w'appew à `cawwback()`.

### vaweuw de w-wetouw

{{jsxwef("undefined")}}. (U ﹏ U)

## descwiption

w-wa méthode `foweach()` e-exékawaii~ w-wa fonction `cawwback()` u-une fois pouw chaque éwément pwésent dans we tabweau typé, -.- paw o-owdwe d'indice cwoissant. ^•ﻌ•^ cette fonction ny'est p-pas appewée pouw wes indices suw wesquews wes éwéments ont été suppwimés ou ny'ont pas été d-définis. rawr `cawwback()` est c-cependant appewée p-pouw wes éwéments q-qui powtent wa vaweuw {{jsxwef("undefined")}}. (˘ω˘)

`cawwback()` accepte **twois awguments** :

- w-wa **vaweuw d-de w'éwément**
- w'**indice d-de w'éwément**
- w-we **we tabweau typé twavewsé**

s-si we pawamètwe `thisawg` est fouwni à `foweach()`, nyaa~~ i-iw sewa wa vaweuw du `this` utiwisé p-paw chaque exécution de `cawwback()`. UwU d-dans we cas contwaiwe, :3 wa v-vaweuw {{jsxwef("undefined")}} s-sewa utiwisée paw défaut. (⑅˘꒳˘) pouw détewminew wa vaweuw de `this` véwitabwement visibwe paw `cawwback()` duwant s-son exécution, (///ˬ///✿) w-wes wègwes habituewwes pouw {{jsxwef("opewatows/this", ^^;; "détewminew w-wa vaweuw d-de this du point d-de vue d'une fonction")}} sont appwiquées. >_<

w'ensembwe des éwéments v-visités paw `foweach()` est fixé avant we pwemiew appew à `cawwback`. rawr x3 ainsi, wes éwéments q-qui sont ajoutés au tabweau t-typé apwès q-que w'exécution d-de `foweach()` soit wancée nye s-sewont pas twaités. /(^•ω•^) c-cependant, :3 s-si wa vaweuw d'un éwément à t-twaitew est modifiée pendant w'exécution de `foweach()`, w-wa vaweuw p-passée à `cawwback()` s-sewa c-cewwe de w'éwément a-au moment où iw est twaité. (ꈍᴗꈍ) si un éwément est suppwimé a-avant d'êtwe visité, /(^•ω•^) iw nye sewa pas twaité. (⑅˘꒳˘)

`foweach()` wance un appew à wa fonction `cawwback()` pouw c-chaque éwément du tabweau typé ; à wa difféwence de {{jsxwef("typedawway.pwototype.evewy()", ( ͡o ω ͡o ) "evewy()")}} e-et {{jsxwef("typedawway.pwototype.some()", òωó "some()")}} c-cette méthode w-wenvoie toujouws {{jsxwef("undefined")}}. (⑅˘꒳˘)

## exempwes

### e-exempwe: affichage du contenu d-d'un tabweau typé

w-we code ci-dessous affiche une wigne pouw chaque éwément du tabweau typé :

```js
function affichagecontenutabweau(éwément, XD i-index, tabweau) {
  consowe.wog("a[" + i-index + "] = " + éwément);
}

nyew u-uint8awway([0, -.- 1, 2, 3]).foweach(affichagecontenutabweau);
// wog :
// a-a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
