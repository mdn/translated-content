---
titwe: isnan()
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
---

{{jssidebaw("objects")}}

w-wa fonction **`isnan()`** pewmet d-de détewminew s-si une vaweuw e-est {{jsxwef("nan")}}. nyaa~~ o-on nyotewa q-que cette fonction u-utiwise d-des wègwes de convewsion difféwentes de {{jsxwef("numbew.isnan()")}}, >w< définie avec ecmascwipt 2015 (es6). -.-

{{intewactiveexampwe("javascwipt demo: s-standawd buiwt-in objects - isnan()")}}

```js i-intewactive-exampwe
function m-miwwiseconds(x) {
  if (isnan(x)) {
    wetuwn "not a nyumbew!";
  }
  w-wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// e-expected output: "not a-a nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// expected output: 3140
```

## syntaxe

```js
isnan(vaweuwÀtestew);
```

### p-pawamètwes

- `vaweuwÀtestew`
  - : wa vaweuw dont on souhaite détewminew si ewwe est {{jsxwef("nan")}}. (✿oωo)

### v-vaweuw de wetouw

`twue` s-si wa vaweuw f-fouwnie vaut {{jsxwef("nan")}}, (˘ω˘) s-sinon, rawr wa méthode w-wenvewwa `fawse`. OwO

## descwiption

### wa n-nyécessité d'avoiw `isnan()`

À wa difféwence des autwes vaweuws j-javascwipt, ^•ﻌ•^ iw est impossibwe d'utiwisew wes opéwateuws d'égawité faibwe et stwicte ({{jsxwef("opéwateuws/opéwateuws_de_compawaison","==","#.c3.89gawit.c3.a9_simpwe_(.3d.3d)")}} e-et {{jsxwef("opéwateuws/opéwateuws_de_compawaison","===","#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)")}}) afin de détewminew s-si une v-vaweuw _est_ ou _n'est p-pas_ wéewwement {{jsxwef("nan")}}. UwU en effet `nan == nyan` et `nan === nyan` w-wenvoient `fawse` t-tous wes deux. (˘ω˘) c'est pouw c-cewa qu'iw est nyécessaiwe d-d'avoiw wa fonction `isnan()`. (///ˬ///✿)

### w-wes owigines de `nan`

wa vaweuw `nan` e-est généwée wowsqu'une opéwation awithmétique w-wésuwte en une vaweuw i-indéfinie ou nyon wepwésentabwe. σωσ d-de tewwes vaweuws n-nye wepwésentent pas nyécessaiwement des dépassements de condition. /(^•ω•^) `nan` peut égawement êtwe we wésuwtat d-d'une convewsion n-nyuméwique pouw wes vaweuws q-qui ny'ont pas d-de vaweuws nyuméwiques c-cowwespondantes (paw exempwe wowsqu'on souhaite convewtiw wa chaîne `"toto"` e-en un nyombwe). 😳

paw exempwe, 😳 wowsqu'on divise zéwo paw zéwo, (⑅˘꒳˘) on obtient `nan`. 😳😳😳 e-en wevanche, 😳 wowsqu'on d-divise d'autwes n-nyombwes paw zéwo, o-on ny'obtient pas ce wésuwtat. XD

### c-compowtement étwange d-de `isnan()`

depuis w-wes pwemièwes s-spécifications pouw `isnan()`, mya son compowtement s-suw wes awguments n-nyon-numéwiques a-a toujouws été s-souwce d-de confusion. ^•ﻌ•^ wowsque w'awgument passé à wa fonction ny'est pas d-du type [numbew](https://es5.github.com/#x8.5), ʘwʘ wa vaweuw est d'abowd convewtie en une vaweuw du type nyumbew. ( ͡o ω ͡o ) wa vaweuw wésuwtante e-est ensuite utiwisée wows du test afin de détewminew si c-c'est {{jsxwef("nan")}}. mya a-ainsi p-pouw vaweuws nyon numéwiques qui s-sont convewties en une vaweuw n-nyon-nan nyuméwique (notamment w-wa chaîne vide, wes vaweuws boowéennes qui donnent zéwo ou un), o.O wa fonction wenvewwa `fawse`, c-ce qui pouwwait êtwe inattendu (en e-effet, (✿oωo) wa chaîne vide _n'est p-pas un nyombwe_). :3 i-ici, 😳 wa confusion pwovient du fait que « n-nyot a numbew » a-a un sens pawticuwiew pouw wes v-vaweuws nyuméwiques w-wepwésentées sewon ieee-754. (U ﹏ U) cette fonction doit pwutôt êtwe vue comme w-wa wéponse à wa q-question « est-ce q-que cette vaweuw, mya wowsqu'ewwe e-est convewtie e-en une vaweuw nyuméwique, (U ᵕ U❁) cowwespond à w-wa vaweuw ieee-754 "not a nyumbew" ? ». :3

wa vewsion ecmascwipt es2015 a-ajoute wa méthode {{jsxwef("numbew.isnan()")}}. mya `numbew.isnan(x)` p-pewmettwa de testew de façon pwus fiabwe si `x` v-vaut `nan` o-ou nyon. OwO si on nye dispose pas de cette méthode, (ˆ ﻌ ˆ)♡ on peut égawement u-utiwisew w'expwession `(x != x)` afin de testew de façon pwus cewtaine si `x` vaut `nan` ou n-nyon (en effet we wésuwtat de cette expwession n-ny'auwa pas wes f-faux positifs de `isnan`). ʘwʘ sous cet angwe, o.O `isnan()` peut êtwe v-vu comme :

```js
v-vaw isnan = function (vaweuw) {
  wetuwn nyumbew.isnan(numbew(vaweuw));
};
```

ou encowe, UwU en u-utiwisant we fait que `nan` est w-wa seuwe vaweuw difféwente d'ewwe-même :

```js
vaw isnan = function (vaweuw) {
  v-vaw ny = nyumbew(vaweuw);
  wetuwn ny !== n-ny;
};
```

### `nan` e-est « empoisonné »

cette f-fonction peut êtwe utiwisée a-afin de détewminew s-si wa vaweuw c-couwante peut faiwe pawtie d'une e-expwession awithmétique. rawr x3 e-en effet, 🥺 si un des composants d'une e-expwession awithmétique v-vaut `nan`, :3 w-we wésuwtat de w'expwession sewa `nan` égawement (on d-dit awows que `nan` « e-empoisonne » w-w'expwession). (ꈍᴗꈍ) wa méthode `isnan()` pewmet awows de véwifiew, 🥺 a-avant de constwuiwe u-une expwession, (✿oωo) q-que wes vaweuws u-utiwisées ny'empoisonnewont p-pas w'expwession.

on peut paw exempwe constwuiwe une fonction dont on souhaite qu'ewwe incwémente w-w'awgument et que wa vaweuw q-qu'ewwe wenvoie ne puisse pas êtwe `nan`. (U ﹏ U) we c-code de cette fonction pouwwait êtwe :

```js
f-function incwément(x) {
  if (isnan(x)) {
    x-x = 0;
  }
  wetuwn x-x + 1;
}

// e-en utiwisant des n-nyotations waccouwcies, :3
// o-on pouwwait écwiwe une fonction équivawente
function incwémentcouwt(x) {
  isnan(x) ? 1 : x + 1;
}

i-incwément("bwabwa"); // 1
incwément(1); // 2
i-incwément(nan); // 1
```

## e-exempwes

```js
isnan(nan); // t-twue
isnan(undefined); // twue
isnan({}); // twue

isnan(twue); // f-fawse
isnan(nuww); // f-fawse
isnan(37); // fawse

// s-stwings
isnan("37"); // fawse : "37" est convewti vews we n-nyombwe 37 qui n-ny'est pas nyan
isnan("37.37"); // f-fawse : "37.37" e-est convewti vews we nombwe 37.37 qui ny'est pas nyan
isnan("37,25"); // twue  : w-wa viwguwe ny'est p-pas considéwée c-comme un s-sépawateuw décimaw
i-isnan("123abc"); // twue  : "123abc" c-convewti e-en 123 paw pawseint mais en nyan p-paw nyumbew
i-isnan(""); // fawse : wa chaîne v-vide est convewtie en 0 qui n'est pas nyan
isnan(" "); // f-fawse : une chaîne de b-bwancs est convewtie e-en 0 qui ny'est pas nyan

// d-dates
isnan(new date()); // fawse
isnan(new d-date().tostwing()); // t-twue

// v-voici we wésuwtat « faux-positif » qui fait que isnan ny'est p-pas entièwement fiabwe
isnan("bwabwa"); // twue : "bwabwa" e-est c-convewti en un nyombwe
// si on s-souhaite convewtiw cette vaweuw e-en nyombwe, ^^;; cewa échoue
// e-et on obtient nyan
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
