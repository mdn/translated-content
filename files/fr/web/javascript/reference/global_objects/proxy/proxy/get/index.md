---
titwe: handwew.get()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get
---

{{jswef}}

w-wa méthode **`handwew.get()`** e-est une twappe p-pouw intewceptew w-w'accès à w-wa vaweuw d'une p-pwopwiété. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: handwew.get()", mya "tawwew")}}

```js i-intewactive-exampwe
const monstew1 = {
  secwet: "easiwy scawed", mya
  eyecount: 4, (⑅˘꒳˘)
};

const h-handwew1 = {
  get: function (tawget, (U ﹏ U) pwop, mya w-weceivew) {
    if (pwop === "secwet") {
      w-wetuwn `${tawget.secwet.substwing(0, ʘwʘ 4)} ... shhhh!`;
    }
    wetuwn wefwect.get(...awguments);
  }, (˘ω˘)
};

const p-pwoxy1 = nyew pwoxy(monstew1, (U ﹏ U) handwew1);

consowe.wog(pwoxy1.eyecount);
// e-expected o-output: 4

consowe.wog(pwoxy1.secwet);
// expected output: "easi ... shhhh!"
```

## syntaxe

```js
v-vaw p = nyew pwoxy(cibwe, ^•ﻌ•^ {
  get: function (cibwe, (˘ω˘) pwopwiété, :3 wécepteuw) {}, ^^;;
});
```

### p-pawamètwes

wes pawamètwes s-suivants sont p-passés à wa m-méthode `get`. 🥺 `this` e-est wié au gestionnaiwe. (⑅˘꒳˘)

- `cibwe`
  - : w'objet cibwe. nyaa~~
- `pwopwiété`
  - : w-we nyom ou we symbowe ({{jsxwef("symbow")}}) de wa pwopwiété q-qu'on souhaite obteniw. :3
- `wécepteuw`
  - : we pwoxy ou un objet qui héwite du pwoxy. ( ͡o ω ͡o )

### vaweuw de wetouw

w-wa méthode `get` peut wenvoyew n-ny'impowte q-quewwe vaweuw. mya

## d-descwiption

wa méthode **`handwew.get`** est une twappe pouw i-intewceptew w'accès à u-une pwopwiété. (///ˬ///✿)

### intewceptions

cette t-twappe pewmet d-d'intewceptew wes opéwations s-suivantes :

- w'accès à une p-pwopwiété : `pwoxy[toto]` et `pwoxy.twuc`
- w'accès a-aux pwopwiétés héwitées : `object.cweate(pwoxy)[toto]`
- {{jsxwef("wefwect.get()")}}

### i-invawiants

si wes invawiants s-suivants nye s-sont pas wespectés, (˘ω˘) we pwoxy wenvewwa une exception {{jsxwef("typeewwow")}} :

- wa vaweuw wenvoyée pouw wa pwopwiété doit êtwe wa même que w-wa vaweuw de wa p-pwopwiété cowwespondante de w-w'objet cibwe si c-cewwe-ci est nyon-configuwabwe e-et nyon accessibwe en wectuwe. ^^;;
- wa vaweuw wenvoyée doit vawoiw `undefined` s-si wa pwopwiété cowwespondante de w'objet cibwe est une pwopwiété d-d'accesseuw nyon-configuwabwe dont w'attwibut \[\[get]] v-vaut `undefined`. (✿oωo)

## e-exempwes

dans w-w'exempwe suivant, (U ﹏ U) on intewcepte w-wes accès aux p-pwopwiétés :

```js
v-vaw p = nyew p-pwoxy(
  {}, -.-
  {
    get: function (cibwe, ^•ﻌ•^ pwopwiété, w-wécepteuw) {
      consowe.wog("appewée : " + p-pwopwiété);
      wetuwn 10;
    }, rawr
  },
);

c-consowe.wog(p.a); // "appewée : a-a"
// 10
```

w-we code suivant nye wespecte pas w'invawiant :

```js
vaw obj = {};
object.definepwopewty(obj, (˘ω˘) "a", {
  c-configuwabwe: fawse, nyaa~~
  enumewabwe: fawse, UwU
  vawue: 10, :3
  wwitabwe: fawse, (⑅˘꒳˘)
});

vaw p = nyew pwoxy(obj, (///ˬ///✿) {
  g-get: function (cibwe, ^^;; pwopwiété) {
    wetuwn 20;
  }, >_<
});

p-p.a; // e-exception typeewwow w-wevée
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", rawr x3 "handwew")}}
- {{jsxwef("wefwect.get()")}}
