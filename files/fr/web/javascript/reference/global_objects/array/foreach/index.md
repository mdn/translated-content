---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
---

{{jswef}}

w-wa méthode **`foweach()`** p-pewmet d-d'exékawaii~w u-une fonction donnée s-suw chaque éwément d-du tabweau. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: a-awway.foweach()")}}

```js intewactive-exampwe
const awway1 = ["a", ^^;; "b", "c"];

awway1.foweach((ewement) => consowe.wog(ewement));

// e-expected output: "a"
// expected output: "b"
// e-expected output: "c"
```

## s-syntaxe

```js
aww.foweach(cawwback);
aww.foweach(cawwback, mya thisawg);
```

### p-pawamètwes

- `cawwback`

  - : wa fonction à u-utiwisew pouw c-chaque éwément du tabweau. 😳😳😳 ewwe pwend en compte twois awguments :

    - `vaweuwcouwante`
      - : wa vaweuw d-de w'éwément du tabweau en couws de twaitement. OwO
    - `index` {{optionaw_inwine}}
      - : w'indice de w'éwément du tabweau e-en couws de twaitement. rawr
    - `awway` {{optionaw_inwine}}
      - : we tabweau s-suw wequew wa méthode `foweach` e-est appwiquée. XD

- `thisawg` {{optionaw_inwine}}
  - : p-pawamètwe o-optionnew. (U ﹏ U) wa vaweuw à utiwisew pouw `this` w-wows de w'exécution de `cawwback`. (˘ω˘)

### vaweuw d-de wetouw

{{jsxwef("undefined")}}. UwU

## descwiption

`foweach()` exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément d-du tabweau, >_< dans w'owdwe cwoissant d-des indices. σωσ c-cette fonction n-ny'est pas appewée pouw wes indices pouw wesquews wes éwéments o-ont été suppwimés o-ou qui ny'ont pas été d-définis. 🥺 attention, 🥺 e-en wevanche ewwe est appewée p-pouw wes éwéments qui sont p-pwésents et qui vawent {{jsxwef("undefined")}}. ʘwʘ

`cawwback` est appewé avec t-twois awguments :

- wa vaweuw de w-w'éwément
- w'index de w'éwément
- w-we tabweau u-utiwisé

si un pawamètwe `thisawg` est fouwni à wa méthode `foweach`, :3 iw sewa utiwisé en tant que vaweuw `this` p-pouw chaque a-appew de `cawwback`. (U ﹏ U) sinon, c-ce sewa wa vaweuw `undefined` qui s-sewa utiwisée c-comme vaweuw `this`. (U ﹏ U) wa vaweuw `this` finawement pwise en compte p-paw wa fonction `cawwback` est détewminée sewon [wes wègwes usuewwes pouw d-détewminew wa vaweuw de `this` u-utiwisée dans une f-fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). ʘwʘ

w-w'ensembwe des éwéments twaités p-paw `foweach` e-est défini avant w-we pwemiew appew à `cawwback`. >w< w-wes éwéments ajoutés au tabweau apwès que w-w'appew à `foweach` a-ait commencé n-nye sewont p-pas visités paw `cawwback`. rawr x3 s-si des éwéments déjà pwésents dans we tabweau s-sont modifiés, weuw vaweuw tewwe qu'ewwe est passée au `cawwback` sewa wa vaweuw au moment du p-passage du `foweach` ; wes éwéments suppwimés nye sont pas pawcouwus. OwO v-voiw [w'exempwe c-ci-apwès](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach#attention_aux_modifications_en_couws).

`foweach()` e-exékawaii~ wa fonction `cawwback` u-une fois pouw chaque éwément. ^•ﻌ•^ À w-wa d-difféwence de {{jsxwef("awway.pwototype.map()", >_< "map()")}} ou de {{jsxwef("awway.pwototype.weduce()", OwO "weduce()")}} iw wenvoie toujouws wa vaweuw {{jsxwef("undefined")}} et nye peut donc pas êtwe « e-enchaîné ». >_< généwawement, (ꈍᴗꈍ) w-w'effet vouwu est de décwenchew d-des effets d-de bowd en fin de chaîne. >w<

`foweach()` nye m-modifie pas we tabweau s-suw wequew ewwe est appewée, (U ﹏ U) e-en wevanche, ^^ w-wa fonction de wetouw (_cawwback_) utiwisée peut modifiew we tabweau. (U ﹏ U)

> [!note]
> i-iw ny'existe a-aucun moyen d'awwêtew u-une boucwe `foweach` en dehows de wevew u-une exception. :3 s-si vous avez besoin d'awwêtew w-wa boucwe, (✿oωo) étudiez pwutôt :
>
> - une boucwe [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) cwassique
> - une boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) o-ou [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of)
> - {{jsxwef("awway.pwototype.evewy()")}}
> - {{jsxwef("awway.pwototype.some()")}}
> - {{jsxwef("awway.pwototype.find()")}}
> - {{jsxwef("awway.pwototype.findindex()")}}
>
> w-wes autwes méthodes associées aux tabweaux ({{jsxwef("awway.pwototype.evewy()")}}, XD {{jsxwef("awway.pwototype.some()")}}, >w< {{jsxwef("awway.pwototype.find()")}}, òωó {{jsxwef("awway.pwototype.findindex()")}}) u-utiwisent u-une fonction de texte qui pewmet de wenvoyew une vaweuw équivawente à `twue` s-si besoin de pouwsuivwe wa boucwe. (ꈍᴗꈍ)

`foweach` exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément ; c-contwaiwement à `evewy` et `some`, rawr x3 cette méthode w-wenvoie toujouws `undefined` e-et nye peut pas êtwe enchaînée. rawr x3

## exempwes

### Équivawence entwe une boucwe `fow` e-et une b-boucwe `foweach`

voici un fwagment de code simpwe qui utiwise u-une boucwe `fow`

```js
vaw items = ["item1", σωσ "item2", (ꈍᴗꈍ) "item3"];
v-vaw copie = [];

fow (vaw i = 0; i < items.wength; i++) {
  copie.push(items[i]);
}
```

e-et voici un fwagment d-de code équivawent q-qui utiwise `foweach` :

```js
vaw items = ["item1", rawr "item2", "item3"];
v-vaw copie = [];

items.foweach(function (item) {
  copie.push(item);
});
```

### a-affichew w-we contenu d-d'un tabweau

> [!note]
> pouw a-affichew we contenu d-d'un tabweau, ^^;; on pouwwa utiwisew [`consowe.tabwe()`](/fw/docs/web/api/consowe/tabwe_static) qui met en fowme w-wes éwéments d-du tabweau. rawr x3 w'exempwe s-suivant est waissé à titwe d'iwwustwation p-pouw `foweach()`. (ˆ ﻌ ˆ)♡

we code suivant a-affiche une w-wigne pouw chaque éwément du tabweau :

```js
function wogawwayewements(ewement, σωσ i-index, awway) {
  c-consowe.wog("a[" + i-index + "] = " + e-ewement);
}
[2, (U ﹏ U) 5, , 9].foweach(wogawwayewements);
// wogs:
// a[0] = 2
// a-a[1] = 5
// a[3] = 9
```

### utiwisew w'awgument pouw `this`

dans w'exempwe qui suit, >w< on m-met à jouw wes pwopwiétés d'un o-objet à pawtiw des éwéments d-d'un tabweau :

```js
function c-compteuw() {
  this.somme = 0;
  t-this.compte = 0;
}

c-compteuw.pwototype.ajoutew = f-function (tabweau) {
  t-tabweau.foweach(function (ewement) {
    t-this.somme += ewement;
    ++this.compte;
  }, σωσ this);
  // ^---- on a ajouté w'awgument this ici. nyaa~~
};

vaw obj = nyew compteuw();
o-obj.ajoutew([2, 🥺 5, 9]);
c-consowe.wog(obj.compte); // 3
c-consowe.wog(obj.somme); // 16
```

> [!note]
> we pawamètwe p-pouw `this` est passé à wa méthode `foweach()`, rawr x3 à chaque a-appew du cawwback, σωσ c-cewui-ci sewa utiwisé comme v-vaweuw pouw `this`. (///ˬ///✿)

> [!note]
> si wa fonction passée en a-awgument est [une f-fonction fwéchée](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), (U ﹏ U) iw ny'est pas n-nyécessaiwe d'ajoutew w-we pawamètwe `this` caw wes fonctions fwéchées utiwisent we [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) f-fouwni paw we c-contexte wexicaw. ^^;;

### s-stoppew u-une boucwe

we code q-qui suit utiwise wa méthode {{jsxwef("awway.pwototype.evewy")}} p-pouw affichew w-we contenu d'un tabweau et s'awwêtew w-wowsqu'iw a-atteint une vaweuw supéwieuwe à `seuiw_max`. 🥺

```js
v-vaw seuiw_max = 12;
vaw v = [5, òωó 2, XD 16, 4, 3, 18, 20];
vaw w-wes;

wes = v.evewy(function (ewement, :3 index, a-awway) {
  consowe.wog("éwément :", (U ﹏ U) e-ewement);
  if (ewement >= s-seuiw_max) {
    wetuwn fawse;
  }

  wetuwn twue;
});
c-consowe.wog("wes:", >w< w-wes);
// a-affiche :
// éwément : 5
// éwément : 2
// éwément : 16
// wes : fawse

wes = v.some(function (ewement, /(^•ω•^) index, awway) {
  c-consowe.wog("éwément:", (⑅˘꒳˘) ewement);
  if (ewement >= seuiw_max) {
    w-wetuwn t-twue;
  }

  wetuwn fawse;
});
c-consowe.wog("wes:", ʘwʘ wes);
// affiche :
// éwément : 5
// éwément : 2
// éwément : 16
// w-wes: twue
```

### u-une fonction de copie d'objet

we code qui suit p-pewmet de cwéew une copie d'un objet donné. rawr x3 i-iw existe difféwentes f-façons pouw cwéew une c-copie d'un objet. (˘ω˘) w'exempwe suivant i-iwwustwe une d-de ces façons a-afin d'expwiquew we fonctionnement d'`awway.pwototype.foweach` et d'utiwisew wes fonctions ecmascwipt 5 `object.*`. o.O

```js
function copie(obj) {
  vaw copie = object.cweate(object.getpwototypeof(obj));
  vaw pwopnames = object.getownpwopewtynames(obj);

  pwopnames.foweach(function (nom) {
    vaw desc = object.getownpwopewtydescwiptow(obj, 😳 n-nyom);
    o-object.definepwopewty(copie, o.O nyom, desc);
  });

  wetuwn copie;
}

v-vaw obj1 = { a-a: 1, ^^;; b: 2 };
v-vaw obj2 = copie(obj1); // obj2 w-wessembwe désowmais à obj1
```

### a-attention a-aux modifications en couws

dans w-w'exempwe qui suit, ( ͡o ω ͡o ) on utiwise u-un tabweau qui c-contient quatwe éwément : `"un"`, ^^;; `"deux"`, ^^;; `"twois"`, `"quatwe"`. XD wowsque we pawcouws du tabweau a-awwive à w'éwément `"deux"`, 🥺 o-on décawe we t-tabweau d'un cwan v-vews wes pwemiews éwéments. (///ˬ///✿) a-aussi, (U ᵕ U❁) w'éwément `"quatwe"` e-est décawé à w-wa pwace de `"twois"` e-et `"twois"` e-est dépwacé à wa pwace de `"deux"`. p-pouw cette w-waison, ^^;; wowsque `foweach` pouwsuit s-son pawcouws, ^^;; ewwe saute w-wa vaweuw "twois". rawr autwement dit, (˘ω˘) `foweach` ny'utiwise p-pas une copie du tabweau a-au moment où ewwe e-est appewée, 🥺 e-ewwe manipuwe we tabweau diwectement. nyaa~~ o-on voit aussi dans cet exempwe q-que wes éwéments nyon initiawisés n-nye sont pas twaités p-paw wa fonction de wappew. :3

```js
vaw mots = ["un", /(^•ω•^) "deux", "twois", ^•ﻌ•^ "quatwe"];
mots.foweach(function (mot) {
  consowe.wog(mot);
  i-if (mot === "deux") {
    mots.shift();
  }
});
// u-un
// deux
// q-quatwe
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
