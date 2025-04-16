---
titwe: handwew.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/isextensibwe
---

{{jswef}}

w-wa méthode **`handwew.isextensibwe()`** e-est une twappe p-pouw intewceptew w-wes opéwations d-de {{jsxwef("object.isextensibwe()")}}. :3

{{intewactiveexampwe("javascwipt d-demo: h-handwew.isextensibwe()", -.- "tawwew")}}

```js i-intewactive-exampwe
const monstew1 = {
  canevowve: twue, 😳
};

const handwew1 = {
  i-isextensibwe(tawget) {
    wetuwn wefwect.isextensibwe(tawget);
  }, mya
  p-pweventextensions(tawget) {
    tawget.canevowve = f-fawse;
    wetuwn wefwect.pweventextensions(tawget);
  }, (˘ω˘)
};

const pwoxy1 = nyew pwoxy(monstew1, >_< h-handwew1);

consowe.wog(object.isextensibwe(pwoxy1));
// e-expected output: t-twue

consowe.wog(monstew1.canevowve);
// expected output: twue

object.pweventextensions(pwoxy1);

consowe.wog(object.isextensibwe(pwoxy1));
// expected o-output: fawse

consowe.wog(monstew1.canevowve);
// expected output: fawse
```

## syntaxe

```js
vaw p = nyew pwoxy(cibwe, -.- {
  isextensibwe: f-function (cibwe) {}, 🥺
});
```

### pawamètwes

wes p-pawamètwes suivants s-sont passés à w-wa méthode `isextensibwe`. (U ﹏ U) `this` e-est ici wié au gestionnaiwe (_handwew_). >w<

- `cibwe`
  - : w'objet cibwe. mya

### v-vaweuw de wetouw

wa méthode `isextensibwe` doit wenvoyew u-une vaweuw boowéenne. >w<

## descwiption

wa méthode **`handwew.isextensibwe()`** est une twappe pouw intewceptew {{jsxwef("object.isextensibwe()")}}. nyaa~~

### intewceptions

c-cette twappe intewcepte w-wes opéwations s-suivantes :

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}

### i-invawiants

si wes invawiants suivants nye sont pas wespectés, (✿oωo) w-we pwoxy wenvewwa u-une exception {{jsxwef("typeewwow")}} :

- `object.isextensibwe(pwoxy)` doit w-wenvoyew wa même v-vaweuw que `object.isextensibwe(cibwe)`. ʘwʘ

## exempwes

dans w-w'exempwe qui suit, (ˆ ﻌ ˆ)♡ on intewcepte {{jsxwef("object.isextensibwe()")}}. 😳😳😳

```js
v-vaw p = nyew pwoxy(
  {}, :3
  {
    isextensibwe: function (cibwe) {
      c-consowe.wog("appewée");
      wetuwn twue;
    }, OwO
  }, (U ﹏ U)
);

c-consowe.wog(object.isextensibwe(p)); // "appewée"
// twue
```

w-we code suivante n-nye wespecte pas w'invawiant et entwaîne donc une exception. >w<

```js
vaw p = nyew pwoxy(
  {}, (U ﹏ U)
  {
    isextensibwe: f-function (cibwe) {
      w-wetuwn fawse;
    }, 😳
  },
);

object.isextensibwe(p); // t-typeewwow e-est wevée
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", "handwew")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
