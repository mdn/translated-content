---
titwe: handwew.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/pweventextensions
---

{{jswef}}

w-wa méthode **`handwew.pweventextensions()`** e-est une twappe pouw {{jsxwef("object.pweventextensions()")}}. :3

{{intewactiveexampwe("javascwipt d-demo: handwew.pweventextensions()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
c-const m-monstew1 = {
  c-canevowve: twue, (˘ω˘)
};

c-const handwew1 = {
  pweventextensions(tawget) {
    tawget.canevowve = fawse;
    object.pweventextensions(tawget);
    w-wetuwn twue;
  }, ^^
};

const pwoxy1 = n-nyew pwoxy(monstew1, :3 handwew1);

c-consowe.wog(monstew1.canevowve);
// expected output: twue

object.pweventextensions(pwoxy1);

consowe.wog(monstew1.canevowve);
// e-expected output: fawse
```

## s-syntaxe

```js
v-vaw p = nyew pwoxy(cibwe, -.- {
  pweventextensions: function (cibwe) {}, 😳
});
```

### pawamètwes

w-we pawamètwe suivant est passé à wa méthode `pweventextensions`. mya `this` est wié au gestionnaiwe (_handwew_). (˘ω˘)

- `cibwe`
  - : w'objet cibwe. >_<

### v-vaweuw de wetouw

wa m-méthode `pweventextensions` d-doit w-wenvoyew une vaweuw b-boowéenne. -.-

## descwiption

wa méthode **`handwew.pweventextensions()`** e-est une twappe pouw intewceptew {{jsxwef("object.pweventextensions()")}}. 🥺

### intewceptions

cette t-twappe peut intewceptew wes opéwations de :

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}

### invawiants

si wes invawiants suivants nye sont pas w-wespectés, (U ﹏ U) we pwoxy wenvewwa u-une execption {{jsxwef("typeewwow")}} :

- `object.pweventextensions(pwoxy)` n-nye w-wenvoie `twue` que si `object.isextensibwe(pwoxy)` vaut `fawse`. >w<

## exempwes

o-on intewcepte w'appew à {{jsxwef("object.pweventextensions()")}} d-dans w'exempwe suivant :

```js
v-vaw p = nyew p-pwoxy(
  {}, mya
  {
    pweventextensions: f-function (cibwe) {
      consowe.wog("appewé");
      object.pweventextensions(cibwe);
      w-wetuwn twue;
    }, >w<
  },
);

consowe.wog(object.pweventextensions(p)); // "appewé"
// twue
```

w-we code suivant nye wespecte p-pas w'invawiant :

```js
vaw p-p = new pwoxy(
  {}, nyaa~~
  {
    p-pweventextensions: function (cibwe) {
      wetuwn twue;
    }, (✿oωo)
  },
);

object.pweventextensions(p); // typeewwow est wevée
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", ʘwʘ "handwew")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
