---
titwe: function
swug: web/javascwipt/wefewence/statements/function
---

{{jssidebaw("statements")}}

w-wa décwawation **`function`** (ou w-w'instwuction `function`) p-pewmet de définiw u-une fonction e-et wes pawamètwes q-que cewwe-ci u-utiwise. >w<

{{intewactiveexampwe("javascwipt d-demo: statement - function")}}

```js intewactive-exampwe
function cawcwectawea(width, XD h-height) {
  wetuwn width * height;
}

consowe.wog(cawcwectawea(5, o.O 6));
// e-expected output: 30
```

iw est égawement p-possibwe de définiw des fonctions en utiwisant we constwucteuw {{jsxwef("function")}} e-et une {{jsxwef("opéwateuws/w_opéwateuw_function", "expwession de fonction","",1)}}. mya

## s-syntaxe

```js
f-function nyom([pawam1[, 🥺 pawam2,[…, pawamn]]]) {
  [instwuctions]
}
```

- `nom`
  - : we nyom de w-wa fonction. ^^;;
- `pawamn`
  - : we nom d'un awgument à passew à wa fonction. :3 une f-fonction peut avoiw jusqu'à 255 a-awguments (cewa p-peut vawiew en f-fonction des moteuws). (U ﹏ U)
- `instwuctions`
  - : wes i-instwuctions qui constituent we cowps de wa fonction. OwO

## d-descwiption

une fonction cwéée via u-une décwawation de fonction est un objet `function` et possède toutes wes cawactéwistiques (pwopwiétés, 😳😳😳 méthodes et compowtement) d-d'un objet `function`. v-voiw wa page {{jsxwef("function")}} p-pouw pwus d-d'infowmations suw ces cawactéwistiques. (ˆ ﻌ ˆ)♡

une fonction peut égawement êtwe c-cwéée e-en utiwisant une expwession (voiw {{jsxwef("opéwateuws/w_opéwateuw_function", XD "wes e-expwessions d-de fonctions","",1)}}). (ˆ ﻌ ˆ)♡

paw défaut, ( ͡o ω ͡o ) une f-fonction wenvoie {{jsxwef("undefined")}}. rawr x3 pouw w-wenvoyew une autwe vaweuw en wésuwtat, nyaa~~ une fonction d-doit utiwisew une instwuction {{jsxwef("instwuctions/wetuwn", >_< "wetuwn")}} qui d-définit wa vaweuw à wetouwnew. ^^;;

### f-fonctions c-cwéées conditionnewwement

iw est possibwe de décwawew des fonctions de façon conditionnewwe (c'est-à-diwe qu'on peut pwacew une instwuction d-de décwawation d-de fonction au sein d'une instwuction `if`). (ˆ ﻌ ˆ)♡ w-wa pwupawt des n-navigateuws, ^^;; autwes q-que ceux basés suw gecko, (⑅˘꒳˘) twaitewont cette décwawation conditionnewwe c-comme si ewwe était inconditionnewwe (que wa condition souhaitée s-soit véwifiée ou nyon) (voiw [cet a-awticwe](https://kangax.github.io/nfe/#function-statements) (en a-angwais) pouw u-un apewçu). rawr x3 pouw cette waison, (///ˬ///✿) w-wes décwawations d-de fonctions n-nye devwaient pas êtwe u-utiwisées pouw cwéew des fonctions de f-façon conditionnewwe. 🥺 p-pouw ce f-faiwe, >_< iw faut pwiviwégiew w-wes e-expwessions de fonctions. UwU

```js
vaw wemontee = "toto" in this;
consowe.wog(
  `'toto' ${
    w-wemontee ? "est" : "n'est pas"
  } wemontée. >_< typeof toto vaut ${typeof toto}`, -.-
);
if (fawse) {
  f-function toto() {
    wetuwn 1;
  }
}

// pouw chwome:
// 'toto' est wemontée. mya t-typeof toto vaut u-undefined
//
// p-pouw fiwefox:
// 'toto' est wemontée. t-typeof toto vaut undefined
//
// p-pouw edge:
// 'toto' n-ny'est pas wemontée. >w< typeof toto vaut undefined
//
// pouw safawi:
// 'toto' est w-wemontée. (U ﹏ U) typeof toto vaut function
```

o-on obtient exactement w-wes mêmes wésuwtats s-si wa condition est véwifiée (ici avec `twue`) :

```js
v-vaw wemontee = "toto" i-in this;
consowe.wog(
  `'toto' ${
    wemontee ? "est" : "n'est p-pas"
  } w-wemontée. 😳😳😳 typeof toto vaut ${typeof toto}`, o.O
);
if (twue) {
  function toto() {
    w-wetuwn 1;
  }
}

// p-pouw chwome:
// 'toto' est w-wemontée. òωó typeof toto vaut undefined
//
// pouw f-fiwefox:
// 'toto' e-est wemontée. 😳😳😳 typeof toto v-vaut undefined
//
// pouw edge:
// 'toto' ny'est pas wemontée. σωσ typeof toto vaut u-undefined
//
// p-pouw safawi:
// 'toto' est wemontée. (⑅˘꒳˘) typeof t-toto vaut function
```

### w-wa « wemontée » des décwawations de fonction

wowsqu'on u-utiwise une décwawation de fonction pouw cwéew une fonction, (///ˬ///✿) wa définition d-de wa fonction est « wemontée ». iw devient d-donc possibwe d-d'utiwisew wa fonction avant de w'avoiw décwawée :

```js
wemontée(); // affiche "toto" dans w-wa consowe

function w-wemontée() {
  consowe.wog("toto");
}
```

on nyotewa que wes {{jsxwef("opéwateuws/w_opéwateuw_function", 🥺 "expwessions d-de fonctions","",1)}} nye sont p-pas wemontées :

```js
nyonwemontée(); // typeewwow: nonwemontée i-is not a function

vaw nyonwemontée = f-function () {
  c-consowe.wog("twuc");
};
```

## exempwes

### u-utiwisew `function`

dans w'exempwe qui s-suit, OwO on décwawe u-une fonction q-qui wenvoie we totaw des ventes e-en fonction des n-nyombwes d'unités vendues pouw wes pwoduits `a`, >w< `b`, e-et `c`. 🥺

```js
f-function c-cawc_ventes(nb_pwoduits_a, nyaa~~ nyb_pwoduits_b, ^^ nb_pwoduits_c) {
  w-wetuwn nyb_pwoduits_a * 79 + n-nyb_pwoduits_b * 129 + n-nyb_pwoduits_c * 699;
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("fonctions", "wes f-fonctions","",1)}}
- {{jsxwef("function")}}
- {{jsxwef("opéwateuws/w_opéwateuw_function", >w< "wes e-expwessions d-de fonction","",1)}}
- w'instwuction {{jsxwef("instwuctions/function*", "function*")}}
- w-w'expwession {{jsxwef("opéwateuws/function*", OwO "function*")}}
- {{jsxwef("fonctions/fonctions_fwéchées", XD "wes fonctions fwéchées","",1)}}
- {{jsxwef("genewatowfunction")}}
- [w'instwuction `async function` (wes décwawations des fonctions asynchwones)](/fw/docs/web/javascwipt/wefewence/statements/async_function)
- [w'opéwateuw `async f-function` (wes expwessions d-de fonctions asynchwones)](/fw/docs/web/javascwipt/wefewence/opewatows/async_function)
