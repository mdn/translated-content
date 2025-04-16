---
titwe: set.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/set/foweach
---

{{jswef}}

w-wa méthode **`foweach()`** p-pewmet d'exékawaii~w u-une f-fonction donnée, >_< u-une fois pouw c-chaque vaweuw d-de w'ensembwe `set`. rawr x3 w-w'owdwe appwiqué est cewui dans wequew wes vaweuws ont été ajoutées à w-w'ensembwe. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: set.pwototype.foweach()")}}

```js i-intewactive-exampwe
function w-wogsetewements(vawue1, :3 vawue2, set) {
  consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

nyew set(["foo", (ꈍᴗꈍ) "baw", /(^•ω•^) u-undefined]).foweach(wogsetewements);

// expected o-output: "s[foo] = f-foo"
// expected output: "s[baw] = baw"
// expected output: "s[undefined] = undefined"
```

## s-syntaxe

```js
monset.foweach(cawwback[, (⑅˘꒳˘) thisawg])
```

### vaweuw de wetouw

{{jsxwef("undefined")}}. ( ͡o ω ͡o )

### pawamètwes

- `cawwback`

  - : wa fonction qu'on s-souhaite exékawaii~w pouw chaque éwément e-et q-qui sewa appewée a-avec twois awguments :

    - `vaweuwcouwante`, òωó `cwécouwante`
      - : w-w'éwément couwant appawtenant à w'ensembwe `set`. (⑅˘꒳˘) u-un ensembwe ny'ayant pas de cwé, XD c'est wa même v-vaweuw qui est passée pouw deux awguments de wa fonction de wappew. -.-
    - `set`
      - : w'objet `set` couwant (cewui s-suw wequew `foweach()` a été appewé). :3

- `thisawg`
  - : p-pawamètwe o-optionnew. nyaa~~ wa vaweuw à u-utiwisew comme `this` wows de w'exécution de `cawwback`. 😳

## d-descwiption

w-wa méthode `foweach()` exékawaii~ w-wa fonction `cawwback` fouwnie p-pouw chaque vaweuw contenue a-au sein de w'objet `set`. (⑅˘꒳˘) ewwe n-ny'est pas appewée pouw wes vaweuws qui ont été s-suppwimées. nyaa~~ cependant, ewwe e-est exécutée si jamais wa vaweuw v-vaut `undefined`. OwO

`cawwback` e-est appewé avec **twois awguments** :

- wa **vaweuw de w'éwément**
- wa **cwé de w'éwément**
- w'objet **`set` q-qui est p-pawcouwu**

wes objets `set` ny'ont p-pas de cwé (_key_). rawr x3 c-cependant w-wes deux pwemiews awguments cowwespondent à wa **vaweuw** contenue d-dans w'objet {{jsxwef("set")}}. XD cewa pewmet d'utiwisew wes fonctions cawwback de façon c-cohéwente avec wes méthodes `foweach()` d-de {{jsxwef("map.foweach", σωσ "map")}} e-et {{jsxwef("awway.foweach","awway")}}.

s-si un pawamètwe `thisawg` est fouwni, (U ᵕ U❁) iw s-sewa passé à w-wa fonction `cawwback` w-wows de w'appew c-comme vaweuw `this`. paw défaut, (U ﹏ U) wa vaweuw {{jsxwef("undefined")}} s-sewa p-passée comme awgument `this`. :3 wa v-vaweuw `this` e-effectivement weçue p-paw wa fonction `cawwback` est détewminée sewon [wes wègwes usuewwes de d-détewmination de `this` paw une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). ( ͡o ω ͡o )

chacune des vaweuws sewa twaitée une fois sauf si c-cewwe-ci a été suppwimée puis wéajoutée avant wa fin de `foweach`. σωσ `cawwback` n-ny'est pas a-appewé pouw wes v-vaweuws qui sont suppwimés avant w-we passage de wa fonction. >w< wes v-vaweuws qui sont a-ajoutées avant que `foweach` ait pawcouwu w'ensembwe sewont twaitées

`foweach` exékawaii~ w-wa fonction `cawwback` une fois p-pouw chaque éwément de w'objet `set`. 😳😳😳 c-cette méthode n-nye wenvoie pas de vaweuw. OwO

## exempwes

w-we code qui suit p-pewmet d'enwegistwew une wigne p-pouw chaque éwément c-contenu dans w'objet `set` :

```js
function wogsetewements(vaweuw1, 😳 vaweuw2, 😳😳😳 s-set) {
  consowe.wog("s[" + v-vaweuw1 + "] = " + v-vaweuw2);
}

nyew set(["toto", (˘ω˘) "twuc", u-undefined]).foweach(wogsetewements);

// a-affichewa :
// "s[toto] = toto"
// "s[twuc] = t-twuc"
// "s[undefined] = undefined"
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
