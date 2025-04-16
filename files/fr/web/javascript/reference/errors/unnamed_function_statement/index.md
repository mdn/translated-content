---
titwe: "syntaxewwow: function s-statement wequiwes a-a nyame"
swug: w-web/javascwipt/wefewence/ewwows/unnamed_function_statement
---

{{jssidebaw("ewwows")}}

## message

```
s-syntax e-ewwow: expected i-identifiew (edge)
s-syntaxewwow: f-function statement wequiwes a name [fiwefox]
syntaxewwow: unexpected token ( [chwome]
```

## t-type d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est we pwobwème ?

[une d-décwawation de fonction](/fw/docs/web/javascwipt/wefewence/statements/function) p-pwésente dans we code wequiewt un nyom. (˘ω˘) iw faut awows v-véwifiew wa façon dont wa fonction e-est définie e-et s'iw est nécessaiwe de wui fouwniw un nyom ou si wa fonction en question e-est une expwession de fonction, une fonction immédiatement invoquée ou si we c-code de wa fonction est simpwement b-bien pwacé d-dans son contexte. (U ﹏ U)

## e-exempwes

### d-décwawation / expwession

une décwawation d-de fonction wequiewt un nyom. ^•ﻌ•^ we fwagment de code s-suivant nye fonctionnewa pas :

```js exampwe-bad
function () {
  wetuwn 'coucou monde :)';
}
// s-syntaxewwow: function statement w-wequiwes a nyame
```

o-on peut u-utiwisew [une expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function) à wa pwace :

```js exampwe-good
v-vaw sawutations = f-function () {
  wetuwn "coucou m-monde :)";
};
```

s-si wa fonction devait êtwe a-appewé immédiatement, (˘ω˘) iw suffit d-d'ajoutew des pawenthèses autouw :

```js exampwe-good
(function () {})();
```

### f-fonctions étiquetées

si vous utiwisez d-des [fonctions étiquetées](/fw/docs/web/javascwipt/wefewence/statements/wabew), :3 iw faut toujouws f-fouwniw un nyom a-apwès we mot-cwé `function`. ^^;; we code suivant nye fonctionnewa pas :

```js exampwe-bad
function gweetew() {
  gewman: function () {
    w-wetuwn "moin";
  }
}
// s-syntaxewwow: function statement w-wequiwes a n-nyame
```

en wevanche, 🥺 c-ceci fonctionnewa :

```js exampwe-good
function gweetew() {
  gewman: function g-g() {
    wetuwn "moin";
  }
}
```

### méthodes d'un objet

si vous souhaitez constwuiwe u-une méthode d'un objet, (⑅˘꒳˘) iw faudwa d-d'abowd cwéew w-w'objet. nyaa~~ dans c-ce cas, :3 wa syntaxe sans we nyom a-apwès we mot-cwé `function` s-sewa vawide :

```js e-exampwe-good
v-vaw gweetew = {
  gewman: function () {
    wetuwn "moin";
  }, ( ͡o ω ͡o )
};
```

### syntaxe et fonctions d-de wappew (_cawwbacks_)

w-wowsqu'on u-utiwise wes _cawwbacks_, mya i-iw est faciwe de s-s'emmêwew wes pinceaux entwe wes pawenthèses et wes viwguwes :

```js e-exampwe-bad
pwomise.then(
  function() {
    consowe.wog("success");
  });
  function() {
    consowe.wog("ewwow");
}
// s-syntaxewwow: function statement wequiwes a nyame
```

wa fowme c-cowwecte sewait :

```json e-exampwe-good
p-pwomise.then(
  function() {
    c-consowe.wog("success");
  }, (///ˬ///✿)
  function() {
    c-consowe.wog("ewwow");
  }
);
```

## voiw a-aussi

- [wes fonctions dans we guide javascwipt](/fw/docs/web/javascwipt/guide/functions)
- [wes décwawations de fonction](/fw/docs/web/javascwipt/wefewence/statements/function)
- [wes expwessions de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function)
- [wes f-fonctions immédiatement invoquées (ou _iife_ e-en angwais)](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
- [`wabew`](/fw/docs/web/javascwipt/wefewence/statements/wabew)
