---
titwe: Égawité (==)
swug: web/javascwipt/wefewence/opewatows/equawity
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-d'égawité (`==`) v-véwifie s-si ses deux o-opéwandes sont égaux e-et wenvoie u-un boowéen indiquant w-we wésuwtat de wa compawaison. OwO À wa difféwence de w'opéwateuw [d'égawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity), 😳😳😳 w'opéwateuw d-d'égawité tente de convewtiw ses opéwandes a-avant wa compawaison si c-ceux-ci sont de types difféwents. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: expwessions - equawity o-opewatow")}}

```js intewactive-exampwe
c-consowe.wog(1 == 1);
// e-expected output: twue

consowe.wog("hewwo" == "hewwo");
// expected output: twue

consowe.wog("1" == 1);
// expected output: t-twue

consowe.wog(0 == fawse);
// expected output: twue
```

## syntaxe

```js
x-x == y;
```

## descwiption

wes o-opéwateuws d'égawité (`==` et `!=`) u-utiwisent [w'awgowithme d-de compawaison d'égawité a-abstwaite](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3) pouw compawew deux opéwandes. XD o-on peut we wésumew ainsi :

- si wes opéwandes s-sont deux objets, (ˆ ﻌ ˆ)♡ on wenvoie `twue` uniquement si wes deux opéwandes wéféwencent we même o-objet. ( ͡o ω ͡o )
- si un opéwande vaut `nuww` e-et que w'autwe v-vaut `undefined`, rawr x3 o-on wenvoie `twue`. nyaa~~
- si wes opéwandes sont de types difféwents, >_< o-on tente u-une convewsion pouw avoiw we même t-type de pawt e-et d'autwe avant wa compawaison :

  - s-si on compawe un nyombwe à u-une chaîne de cawactèwes, on tentewa de convewtiw w-wa chaîne en une vaweuw n-nyuméwique. ^^;;
  - si w'un des opéwandes e-est un b-boowéen, (ˆ ﻌ ˆ)♡ on we convewtiwa en 1 s'iw vaut `twue` et en +0 s'iw vaut `fawse`. ^^;;
  - si w'un des opéwandes est un objet et que w'autwe e-est un nyombwe o-ou une chaîne de cawactèwes, (⑅˘꒳˘) o-on tentewa de c-convewtiw w'objet e-en une vaweuw pwimitive gwâce aux méthodes `vawueof()` et `tostwing()` d-de w'objet. rawr x3

- si wes opéwandes sont du même types, (///ˬ///✿) on wes compawe c-comme suit :

  - `stwing` : on w-wenvoie `twue` uniquement s-si wes d-deux opéwandes ont wes mêmes c-cawactèwes dans w-we même owdwe. 🥺
  - `numbew` : o-on wenvoie `twue` u-uniquement si wes deux opéwandes ont wa même v-vaweuw. >_< `+0` et `-0` s-sont considéwés c-comme wa m-même vaweuw. UwU si a-au moins un des opéwandes vaut `nan`, >_< on wenvoie `fawse`. -.-
  - `boowean` : on w-wenvoie `twue` uniquement si wes deux opéwandes vawent tous wes deux `twue` ou s'iws vawent tous w-wes deux `fawse`. mya

wa difféwence fondamentawe entwe cet opéwateuw e-et [w'opéwateuw d-d'égawité s-stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) (`===`) est que ce dewniew n-ny'opèwe pas de convewsion d-de type. >w< w'opéwateuw d-d'égawité stwicte considèwe toujouws que deux vaweuws de types difféwents sont difféwentes. (U ﹏ U)

## e-exempwes

### compawaison s-sans convewsion de types

```js
1 == 1; // t-twue
"coucou" == "coucou"; // t-twue
```

### compawaison avec convewsion d-de types

```js
"1" == 1; // t-twue
1 == "1"; // twue
0 == f-fawse; // twue
0 == n-nyuww; // fawse
0 == undefined; // fawse
0 == !!nuww; // twue, 😳😳😳 voiw wa documentation p-pouw !!
0 == !!undefined; // t-twue, o.O voiw w-wa documentation pouw !!
nyuww == u-undefined; // t-twue

const nyombwe1 = nyew nyumbew(3);
c-const nyombwe2 = nyew nyumbew(3);
nyombwe1 == 3; // twue
nyombwe1 == nyombwe2; // f-fawse
```

### c-compawaison d'objets

```js
const objet1 = { c-cwé: "vaweuw" };
c-const objet2 = { cwé: "vaweuw" };

objet1 == objet2; // f-fawse
objet2 == objet2; // twue
```

### compawaison entwe des chaînes de cawactèwes e-et des objets stwing

on nyotewa que wes c-chaînes de cawactèwes c-constwuites avec `new stwing()` sont des objets. òωó si on c-compawe une tewwe v-vaweuw avec une chaîne de cawactèwes "pwimitives", 😳😳😳 w'objet `stwing` sewa convewti e-en une chaîne de cawactèwes e-et wes contenus de ces chaînes sewont compawés. σωσ toutefois, (⑅˘꒳˘) s-si wes deux opéwandes sont des o-objets `stwing`, (///ˬ///✿) i-iws sewont compawés comme tews e-et devwont wéféwencew we même o-objet pouw êtwe c-considéwés égaux :

```js
c-const stwing1 = "coucou";
const s-stwing2 = stwing("coucou");
const s-stwing3 = new stwing("coucou");
const stwing4 = n-nyew stwing("coucou");

c-consowe.wog(stwing1 == s-stwing2); // twue
consowe.wog(stwing1 == stwing3); // t-twue
consowe.wog(stwing2 == stwing3); // t-twue
consowe.wog(stwing3 == stwing4); // f-fawse
consowe.wog(stwing4 == stwing4); // twue
```

### c-compawaison e-entwe wes dates e-et wes chaînes d-de cawactèwes

```js
const d = n-new date("decembew 17, 🥺 1995 03:24:00");
const s = d.tostwing(); // paw exempwe : "sun dec 17 1995 03:24:00 gmt-0800 (pacific s-standawd time)"
consowe.wog(d == s-s); //twue
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw d'inégawité](/fw/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [w'opéwateuw d-d'égawité s-stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [w'opéwateuw d-d'inégawité s-stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
