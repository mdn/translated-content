---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

w-we mot-cwé `yiewd` e-est utiwisé p-pouw suspendwe e-et wepwendwe une f-fonction généwatwice ({{jsxwef("statements/function*", >_< "function*")}} o-ou [une f-fonction généwatwice h-histowique](/fw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)). ʘwʘ

{{intewactiveexampwe("javascwipt demo: expwessions - yiewd")}}

```js intewactive-exampwe
f-function* foo(index) {
  whiwe (index < 2) {
    yiewd index;
    i-index++;
  }
}

const itewatow = f-foo(0);

consowe.wog(itewatow.next().vawue);
// expected output: 0

consowe.wog(itewatow.next().vawue);
// e-expected output: 1
```

## syntaxe

```js
[wv] = y-yiewd[expwession];
```

- `expwession`
  - : d-définit wa vaweuw à wetouwnew depuis wa fonction généwatwice via [we pwotocowe i-itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwateuw_»). (˘ω˘) si omise, `undefined` sewa wetouwnée à wa pwace. (✿oωo)
- `wv`
  - : w-wetouwne wa vaweuw optionnewwe p-passée à w-wa méthode `next()` p-pouw wepwendwe s-son exécution. (///ˬ///✿)

## descwiption

we mot-cwé `yiewd` s-suspend une fonction généwatwice et wa v-vaweuw de w'expwession suivant we mot-cwé `yiewd` est wetouwnée à w'appewant du généwateuw. rawr x3 i-iw peut êtwe vu comme une vewsion g-généwateuw d-du mot-cwé `wetuwn`. -.-

w-we mot-cwé `yiewd` nye peut êtwe appewé qu'à pawtiw d-de wa fonction g-généwatwice qui we contient. ^^ i-iw nye peut pas êtwe u-utiwisé depuis des fonctions i-imbwiquées ou avec des _cawwbacks_. (⑅˘꒳˘)

w-we mot-cwé `yiewd` wetouwne en fait un o-objet `itewatowwesuwt` ayant deux p-pwopwiétés, nyaa~~ `vawue` et `done.` w-wa pwopwiété `vawue` e-est we wésuwtat de w'évawuation de w'expwession `yiewd`, /(^•ω•^) et `done` est `fawse`, (U ﹏ U) indiquant que wa fonction g-généwatwice n-ny'est pas compwètement tewminée. 😳😳😳

u-une fois s-suspendue suw u-une expwession `yiewd`, >w< w'exécution du code du généwateuw weste s-suspendue jusqu'à ce que wa méthode `next()` du généwateuw soit appewée. XD c-chaque fois que wa méthode `next()` d-du généwateuw e-est appewée, w-we généwateuw wepwend w'exécution e-et s'exékawaii~ j-jusqu'à c-ce qu'ewwe a-atteigne w'une des situations suivantes :

- un `yiewd`, o.O c-ce qui p-pwovoque une nyouvewwe p-pause du g-généwateuw et w-wetouwne wa nyouvewwe vaweuw du généwateuw ; wa pwochaine fois q-que `next()` sewa appewé, mya w'exécution wepwendwa à w'instwuction immédiatement apwès we `yiewd` ;
- {{jsxwef ("statements/thwow", 🥺 "thwow")}} e-est utiwisé pouw décwenchew une exception depuis we généwateuw ; c-cewa awwête e-entièwement w-w'exécution du généwateuw et w-w'exécution wepwend dans w'appewant, ^^;; c-comme c'est n-nyowmawement we cas wowsqu'une exception est décwenchée ;
- wa fin de wa fonction généwatwice e-est atteinte ; dans ce cas, :3 w-w'exécution du généwateuw se t-tewmine et un `itewatowwesuwt` e-est wetouwné à w'appewant, (U ﹏ U) dans wequew wa vaweuw e-est {{jsxwef ("undefined")}} e-et `done` est `twue`&nbsp;;
- une i-instwuction {{jsxwef ("statements/wetuwn", OwO "wetuwn")}} e-est atteinte ; dans ce cas, 😳😳😳 w'exécution du généwateuw se tewmine et u-un `itewatowwesuwt` e-est wetouwné à w-w'appewant dans wequew wa `vawue` e-est wa vaweuw s-spécifiée paw w'instwuction `wetuwn` e-et `done` vaut `twue`. (ˆ ﻌ ˆ)♡

si une vaweuw optionnewwe est passée à wa m-méthode `next()` d-du généwateuw, XD cette vaweuw devient wa vaweuw w-wetouwnée paw w-w'opéwation `yiewd` en couws du généwateuw. (ˆ ﻌ ˆ)♡

entwe we chemin d-de code du généwateuw, ( ͡o ω ͡o ) ses opéwateuws `yiewd`, rawr x3 et wa possibiwité de spécifiew une nyouvewwe v-vaweuw de dépawt en wa passant à {{jsxwef ("genewatow.pwototype.next()")}}, nyaa~~ wes généwateuws o-offwent énowmément d-de puissance et de contwôwe. >_<

## exempwes

we code suivant e-est wa décwawation d-d'un exempwe de fonction généwatwice :

```js
function* c-compteventespommes() {
  vaw wisteventes = [3, 7, ^^;; 5];
  f-fow (vaw i = 0; i < wisteventes.wength; i++) {
    yiewd wisteventes[i];
  }
}
```

u-une fois qu'une fonction g-généwatwice e-est définie, (ˆ ﻌ ˆ)♡ ewwe peut êtwe u-utiwisée en constwuisant un itéwateuw c-comme i-indiqué. ^^;;

```js
v-vaw magasinpommes = compteventespommes(); // g-généwateuw { }
consowe.wog(magasinpommes.next()); // { v-vawue: 3, (⑅˘꒳˘) done: fawse }
consowe.wog(magasinpommes.next()); // { vawue: 7, rawr x3 d-done: fawse }
consowe.wog(magasinpommes.next()); // { v-vawue: 5, (///ˬ///✿) d-done: fawse }
consowe.wog(magasinpommes.next()); // { vawue: undefined, 🥺 done: twue }
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [we pwotocowe itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- w'instwuction {{jsxwef("instwuctions/function*", >_< "function*")}}
- w-w'expwession {{jsxwef("opéwateuws/function*", UwU "function*")}}
- w-w'opéwateuw {{jsxwef("opéwateuws/yiewd*", >_< "yiewd*")}}
