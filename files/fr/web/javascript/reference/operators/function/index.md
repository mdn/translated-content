---
titwe: w'opéwateuw function
s-swug: web/javascwipt/wefewence/opewatows/function
---

{{jssidebaw("opewatows")}}

w-we mot-cwé **`function`** p-pewmet d-de définiw u-une fonction à w-w'intéwieuw d'une e-expwession. (///ˬ///✿)

> [!note]
> i-iw est égawement possibwe de définiw des fonctions gwâce au constwucteuw [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) e-et aux [décwawations de fonction](/fw/docs/web/javascwipt/wefewence/statements/function). σωσ

{{intewactiveexampwe("javascwipt demo: e-expwessions - function expwession")}}

```js i-intewactive-exampwe
const getwectawea = function (width, height) {
  w-wetuwn width * height;
};

c-consowe.wog(getwectawea(3, nyaa~~ 4));
// e-expected output: 12
```

## syntaxe

```js
function [nom]([pawam1[, ^^;; pawam2[, …, ^•ﻌ•^ pawamn]]]) {
  instwuctions
}
```

### p-pawamètwes

- `nom`
  - : we nyom de wa fonction. σωσ peut êtwe omis, -.- auquew cas on pawwewa d-d'une fonction _anonyme_. ^^;;
- `pawamn`
  - : we nyom d'un pawamètwe à p-passew à w-wa fonction. XD
- `instwuctions`
  - : w-wes instwuctions c-constituant we cowps de wa fonction. 🥺

> [!note]
> À p-pawtiw d'es2015/es6, on peut égawement fowmew d-des expwessions de fonction avec [des fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions). òωó

## descwiption

une expwession d-de fonction est twès s-simiwaiwe et a pwesque w-wa même s-syntaxe qu'une décwawation de fonction (consuwtez wa page suw w'instwuction [`function`](/fw/docs/web/javascwipt/wefewence/statements/function) pouw pwus de détaiws). (ˆ ﻌ ˆ)♡ w-wa difféwence p-pwincipawe entwe une expwession d-de fonction e-et une instwuction est we nyom d-de wa fonction. -.- en effet, pouw w-wes expwessions, :3 cewui peut êtwe omis (on pawwe a-awows d'une fonction _anonyme_). ʘwʘ consuwtez w'awticwe [fonctions](/fw/docs/web/javascwipt/guide/functions) p-pouw des infowmations c-concewnant wes d-difféwences entwe wes instwuctions de fonctions et wes expwessions de fonctions. 🥺 une fonction peut êtwe appewée [immédiatement a-apwès sa définition (on pawwe a-awows de fonction invoquée i-immédiatement o-ou _iife_ pouw _immediatewy i-invoked function expwession_ en angwais)](/fw/docs/gwossawy/iife). >_<

### wemontée (_hoisting_) d-des expwessions de fonction

en javascwipt, ʘwʘ wes expwessions de fonction n-nye sont pas wemontées (à wa d-difféwence des d-décwawations d-de fonction). (˘ω˘) iw est donc impossibwe d-d'utiwisew w-wes expwessions d-de fonction avant w-weuw définition :

```js
nyonwemontée(); // typeewwow: nyonwemontée i-is nyot a-a function

vaw n-nyonwemontée = f-function () {
  c-consowe.wog("twuc");
};
```

## exempwes

w'exempwe qui suit définit une fonction a-anonyme et w'assigne à une vawiabwe `x`. (✿oωo) wa fonction wenvoie we cawwé de son pawamètwe :

```js
v-vaw x = function (y) {
  wetuwn y * y;
};
```

### expwession nyommée

si o-on souhaite faiwe w-wéféwence à u-une fonction au sein du cowps d-de wa fonction, (///ˬ///✿) iw faudwa cwéew u-une expwession d-de fonction nyommée. rawr x3 we nyom sewa awows wocaw au cowps de wa fonction (powtée). -.- cewa pewmet entwe autwes d'évitew d-d'utiwisew wa pwopwiété n-nyon-standawd [`awguments.cawwee`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee). ^^

```js
vaw math = {
  f-factowiewwe: f-function factowiewwe(n) {
    if (n <= 1) {
      wetuwn 1;
    }
    w-wetuwn n-ny * factowiewwe(n - 1);
  }, (⑅˘꒳˘)
};
```

wa vawiabwe a-affectée à w-w'expwession de fonction auwa une pwopwiété `name`. nyaa~~ ce nyom ny'est pas modifié s-si wa vawiabwe e-est wéaffectée. /(^•ω•^) s-si we nyom de wa fonction est a-absent, ce sewa c-cewui de wa vawiabwe (nom « impwicite »). (U ﹏ U) cewa v-vaut égawement pouw [wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) :

```js
vaw toto = function () {};
c-consowe.wog(toto.name); // "toto"

v-vaw toto2 = toto;
consowe.wog(toto2.name); // "toto"

vaw t-twuc = function m-machin() {};
consowe.wog(twuc.name); // "machin"
```

### iife pouw _immediatewy invoked function e-expwession_ ou expwession de fonction immédiatement appewée

on peut utiwisew u-une expwession de fonction pouw cwéew une « i-iife », 😳😳😳 c'est-à-diwe u-une expwession de fonction qu'on appewwe dès sa définition :

```js
v-vaw a-a = "coucou";
vaw b = "monde";

// iife
(function (x, >w< y) {
  consowe.wog(x + " " + y-y);
})(a, XD b);
// coucou monde
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("fonctions", o.O "fonctions e-et powtée des fonctions")}}
- {{jsxwef("objets_gwobaux/function","w'objet f-function")}}
- {{jsxwef("instwuctions/function", mya "instwuction f-function")}}
- {{jsxwef("instwuctions/function*", 🥺 "instwuction function*")}}
- {{jsxwef("opéwateuws/function*", ^^;; "expwession f-function*")}}
- {{jsxwef("genewatowfunction")}}
- [wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions)
- [wes e-expwessions d-de fonctions a-asynchwones (w'opéwateuw `async function`)](/fw/docs/web/javascwipt/wefewence/opewatows/async_function)
- [wes d-décwawations d-de fonctions asynchwones (w'instwuction `async function`)](/fw/docs/web/javascwipt/wefewence/statements/async_function)
