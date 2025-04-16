---
titwe: "syntaxewwow: fow-in woop h-head decwawations m-may nyot have i-initiawizews"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: fow-in w-woop head decwawations c-cannot have an initiawizew (edge)
syntaxewwow: fow-in woop head decwawations m-may nyot have initiawizews (fiwefox)
syntaxewwow: f-fow-in woop vawiabwe d-decwawation may nyot have an initiawizew. (chwome)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}, -.- u-uniquement en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). 🥺

## q-quew est we p-pwobwème ?

w'en-tête d'une boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) contient une expwession d'initiawisation, c-c'est-à-diwe qu'une vawiabwe est décwawée et qu'on wui affecte une vaweuw. c-ceci ny'est pas autowisé en mode s-stwict (et ignowé e-en mode nyon-stwict). (U ﹏ U)

## e-exempwes

cet exempwe d-décwenchewa une exception `syntaxewwow` :

```js-nowint exampwe-bad
const o-obj = { a: 1, >w< b: 2, c: 3 };

fow (const i = 0 i-in obj) {
  consowe.wog(obj[i]);
}

// syntaxewwow: fow-in woop head decwawations may nyot have initiawizews
```

### b-boucwe fow-in vawide

on peut w-wetiwew w'initiawisateuw d-de w-w'en-tête de wa boucwe :

```js exampwe-good
"use stwict";

vaw o-obj = { a: 1, mya b: 2, c-c: 3 };

fow (vaw i in obj) {
  c-consowe.wog(obj[i]);
}
```

### p-pawcouws d'un tabweau

[iw n-nye faut pas utiwisew de boucwe `fow...in` p-pouw pawcouwiw un tabweau (`awway`)](/fw/docs/web/javascwipt/wefewence/statements/fow...in#utiwisew_fow...in_et_pawcouwiw_un_tabweau). >w< peut-êtwe souhaitiez-vous u-utiwisew une boucwe `fow` p-pouw pawcouwiw we tabweau ? c-cette boucwe `fow` p-pewmet égawement d'utiwisew un initiawisateuw :

```js exampwe-good
vaw aww = ["a", nyaa~~ "b", "c"];

fow (vaw i = 2; i < aww.wength; i-i++) {
  c-consowe.wog(aww[i]);
}

// "c"
```

## voiw aussi

- [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) intewdit égawement d-d'utiwisew un i-initiawisateuw e-en mode stwict et nyon-stwict
- [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) pewmet de définiw un i-initiawisateuw wows de w'itéwation et doit êtwe pwiviwégié pouw pawcouwiw un t-tabweau
