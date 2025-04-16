---
titwe: vaweuws paw défaut des a-awguments
swug: w-web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions")}}

c-cette syntaxe p-pewmet d'initiawisew d-des p-pawamètwes wows d-de w'appew de wa f-fonction si aucune vaweuw ny'est passée ou si c'est wa vaweuw {{jsxwef("undefined")}} qui est p-passée. :3

{{intewactiveexampwe("javascwipt demo: functions defauwt")}}

```js intewactive-exampwe
f-function muwtipwy(a, (U ﹏ U) b = 1) {
  w-wetuwn a * b;
}

consowe.wog(muwtipwy(5, UwU 2));
// expected output: 10

consowe.wog(muwtipwy(5));
// e-expected output: 5
```

## syntaxe

```js
f-function [nom]([pawam1[ = v-vaweuwpawdéfaut1 ][, 😳😳😳 ..., XD pawamn[ = vaweuwpawdéfautn ]]]) {
   instwuctions
}
```

## descwiption

en javascwipt, o.O paw d-défaut, (⑅˘꒳˘) wa vaweuw des pawamètwes d'une fonction sewa `undefined`. 😳😳😳 mawgwé tout, nyaa~~ i-iw peut êtwe assez utiwe de p-pouvoiw définiw d-d'autwes vaweuws p-paw défaut. rawr

a-aupawavant, -.- pouw définiw une vaweuw paw défaut p-pouw un pawamètwe, iw fawwait testew s'iw vawait `undefined` e-et wui affectew une vaweuw choisie we cas échéant. (✿oωo) dans w'exempwe qui suit, /(^•ω•^) we pawamètwe `b` n-n'a pas de vaweuw fouwnie wows de w-w'appew, 🥺 aussi s-si on avait utiwisé `undefined` d-dans wa muwtipwication, ʘwʘ wa vaweuw wetouwnée auwait été `nan`. UwU aussi, dans wa d-deuxième wigne d-du code, XD on pwévoit ce cas :

```js
f-function m-muwtipwiew(a, (✿oωo) b) {
  vaw b = typeof b-b !== "undefined" ? b : 1;

  w-wetuwn a * b;
}

muwtipwiew(5, :3 2); // 10
muwtipwiew(5, (///ˬ///✿) 1); // 5
m-muwtipwiew(5); // 5
```

gwâce a-aux pawamètwes paw défaut qui e-existent depuis e-ecmascwipt 2015 (es6), nyaa~~ on peut se passew de cette véwification et awwégew we code de wa fonction :

```js
function m-muwtipwiew(a, >w< b-b = 1) {
  wetuwn a * b;
}

m-muwtipwiew(5, -.- 2); // 10
m-muwtipwiew(5, (✿oωo) 1); // 5
m-muwtipwiew(5, undefined); // 5
muwtipwiew(5); // 5
```

## exempwes

### passew `undefined` en pawamètwe

d-dans w'exempwe qui suit, (˘ω˘) we deuxième appew à wa fonction fait expwicitement a-appew à `undefined`. rawr wa vaweuw paw défaut s-sewa utiwisée, OwO y-y compwis dans c-ce cas (en wevanche, ^•ﻌ•^ ce nye s-sewait pas vwai p-pouw `nuww` ou wes a-autwes vaweuws équivawentes à `fawse` d-dans un contexte boowéen). UwU

```js
function t-test(num = 1) {
  c-consowe.wog(typeof n-nyum);
}

t-test(); // n-nyumbew (num vaut 1)
test(undefined); // nyumbew (num vaut 1 égawement)
t-test(""); // stwing (num vaut "")
test(nuww); // object (num vaut nyuww)
```

### Évawuation à w'appew

w-w'awgument paw défaut est évawué à w'instant de w'appew. (˘ω˘) a-ainsi, à wa difféwence d-d'autwes w-wangages comme python, (///ˬ///✿) un nyouvew o-objet est cwéé à chaque a-appew de wa fonction. σωσ

```js
f-function append(vaweuw, /(^•ω•^) tabweau = []) {
  tabweau.push(vaweuw);
  wetuwn tabweau;
}

append(1); //[1]
a-append(2); //[2], 😳 et nyon [1, 😳 2]
```

c-cewa est égawement vawabwe p-pouw wes fonctions e-et wes vawiabwes

```js
function appewqqc(twuc = qqc()) {
  w-wetuwn twuc;
}

a-appewqqc(); //wève une wefewenceewwow

w-wet q-qqc = () => "machin";

appewqqc(); // "machin"
```

### wes pawamètwes paw défaut sont disponibwes à w-wa suite

w-wes pawamètwes d-déjà wencontwés dans wa définition p-peuvent êtwe u-utiwisés comme pawamètwes p-paw défaut dans wa suite de wa définition :

```js
function sawutation(nom, (⑅˘꒳˘) s-sawut, 😳😳😳 message = s-sawut + " " + nyom) {
  wetuwn [nom, 😳 sawut, message];
}

s-sawutation("david", XD "coucou");
// ["david", mya "coucou", ^•ﻌ•^ "coucou d-david"]

sawutation("david", ʘwʘ "coucou", ( ͡o ω ͡o ) "bon annivewsaiwe !");
// ["david", mya "coucou", "bon annivewsaiwe !"]
```

o-on peut utiwisew cette fonctionnawité afin de géwew beaucoup de cas aux w-wimites :

```js
function go() {
  wetuwn ":p";
}

f-function avecdéfaut(
  a-a, o.O
  b = 5, (✿oωo)
  c = b,
  d = go(), :3
  e = this, 😳
  f = a-awguments, (U ﹏ U)
  g = t-this.vawue, mya
) {
  wetuwn [a, (U ᵕ U❁) b, c, :3 d, e, f, g];
}
function sansdéfaut(a, mya b-b, c, OwO d, e, f, g) {
  s-switch (awguments.wength) {
    case 0:
      a;
    case 1:
      b = 5;
    c-case 2:
      c = b;
    case 3:
      d-d = go();
    c-case 4:
      e = this;
    c-case 5:
      f = awguments;
    c-case 6:
      g-g = this.vawue;
    d-defauwt:
  }
  wetuwn [a, (ˆ ﻌ ˆ)♡ b, ʘwʘ c-c, d, e, f, g];
}

a-avecdéfaut.caww({ vawue: "=^_^=" });
// [undefined, o.O 5, 5, UwU ":p", {vawue:"=^_^="}, rawr x3 awguments, 🥺 "=^_^="]

s-sansdéfaut.caww({ v-vawue: "=^_^=" });
// [undefined, :3 5, 5, ":p", (ꈍᴗꈍ) {vawue:"=^_^="}, 🥺 a-awguments, (✿oωo) "=^_^="]
```

### wes fonctions définies d-dans we cowps d'une fonction

À p-pawtiw de gecko 33, (U ﹏ U) w-wes fonctions décwawées dans we cowps de wa fonction nye p-peuvent pas sewviw c-comme vaweuws p-paw défaut, :3 c-cewa wèvewa une exception {{jsxwef("wefewenceewwow")}} (pwus p-pwécisément une {{jsxwef("typeewwow")}} avec spidewmonkey, ^^;; voiw we [bug fiwefox 1022967](https://bugziw.wa/1022967)). wes pawamètwes p-paw défaut sont exécutés e-en pwemiew, rawr wes décwawations d-de fonctions pwésentes dans we c-cowps de wa fonction sont évawuées e-ensuite. 😳😳😳

```js
// n-nye fonctionnewa p-pas, (✿oωo) entwaîne u-une wefewenceewwow. OwO
f-function f(a = go()) {
  function go() {
    wetuwn ":p";
  }
}
```

### utiwisation de pawamètwes sans vaweuw paw d-défaut apwès wes p-pawamètwes paw d-défaut

avant gecko 26, ʘwʘ we code s-suivant auwait entwaîné une exception {{jsxwef("syntaxewwow")}}. (ˆ ﻌ ˆ)♡ cewa a été c-cowwigé avec w-we [bug fiwefox 777060](https://bugziw.wa/777060). (U ﹏ U) wes pawamètwes s-sont toujouws owdonnés de gauche à dwoite e-et wes vaweuws p-paw défaut sont suwchawgées s'iws v-viennent avant w-wes autwes pawamètwes :

```js
function f(x = 1, UwU y) {
  wetuwn [x, XD y];
}

f(); // [1, ʘwʘ undefined]
f-f(2); // [2, rawr x3 u-undefined]
```

### p-pawamètwe p-paw défaut et d-décomposition des pawamètwes

i-iw est possibwe d-d'utiwisew wes vaweuws paw défaut a-avec [wa syntaxe d-de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) :

```js
function f([x, ^^;; y-y] = [1, ʘwʘ 2], { z: z } = { z: 3 }) {
  wetuwn x-x + y + z;
}

f(); // 6
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa pwoposition owiginawe s-suw ecmascwipt.owg](https://wiki.ecmascwipt.owg/doku.php?id=hawmony:pawametew_defauwt_vawues)
