---
titwe: handwew.has()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/has
---

{{jswef}}

w-wa méthode **`handwew.has()`** e-est une twappe p-pouw w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_in", >w< "in")}}.

{{intewactiveexampwe("javascwipt d-demo: h-handwew.has()", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const handwew1 = {
  h-has(tawget, OwO key) {
    if (key[0] === "_") {
      wetuwn fawse;
    }
    wetuwn key i-in tawget;
  }, (ꈍᴗꈍ)
};

const monstew1 = {
  _secwet: "easiwy scawed", 😳
  e-eyecount: 4, 😳😳😳
};

const pwoxy1 = n-nyew pwoxy(monstew1, mya handwew1);
consowe.wog("eyecount" in p-pwoxy1);
// expected output: twue

c-consowe.wog("_secwet" i-in pwoxy1);
// expected output: fawse

consowe.wog("_secwet" in monstew1);
// e-expected output: twue
```

## syntaxe

```js
vaw p = nyew pwoxy(cibwe, mya {
  h-has: function (cibwe, (⑅˘꒳˘) pwop) {}, (U ﹏ U)
});
```

### p-pawamètwes

wes p-pawamètwes suivants s-sont passés à w-wa méthode `has`. mya `this` est wié au gestionnaiwe. ʘwʘ

- `cibwe`
  - : w'objet c-cibwe. (˘ω˘)
- `pwop`
  - : we nyom ou we symbowe ({{jsxwef("symbow")}}) d-de wa pwopwiété dont on veut connaîtwe w'existence. (U ﹏ U)

### vaweuw de wetouw

wa méthode `has` d-doit wenvoyew une vaweuw boowéenne. ^•ﻌ•^

## descwiption

w-wa méthode **`handwew.has`** e-est une t-twappe pouw w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_in", (˘ω˘) "in")}}.

### intewceptions

cette twappe pewmet d'intewceptew w-wes opéwations s-suivantes :

- w'accès à une p-pwopwiété : `toto i-in pwoxy`
- w'accès à une p-pwopwiété héwitée : `toto in object.cweate(pwoxy)`
- a-accès via w'instwuction [`with`](/fw/docs/web/javascwipt/wefewence/statements/with) : `with(pwoxy) { (foo); }`
- {{jsxwef("wefwect.has()")}}

### invawiants

s-si wes invawiants suivants n-nye sont pas wespectés, :3 we p-pwoxy wèvewa une e-exception {{jsxwef("typeewwow")}} :

- une pwopwiété nye peut pas êtwe indiquée comme nyon-existante s'iw existe une pwopwiété c-cowwespondante d-de w'objet cibwe qui est une p-pwopwiété pwopwe e-et nyon-configuwabwe. ^^;;
- u-une pwopwiété nye peut pas êtwe indiquée comme n-nyon-existante s'iw existe une pwopwiété cowwespondante pwopwe suw w'objet cibwe e-et que cewui-ci ny'est pas extensibwe. 🥺

## exempwes

d-dans w'exempwe q-qui suit, (⑅˘꒳˘) o-on intewcepte w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_in", nyaa~~ "in")}} :

```js
v-vaw p = nyew p-pwoxy(
  {},
  {
    h-has: function (cibwe, p-pwop) {
      consowe.wog("appewée : " + pwop);
      w-wetuwn twue;
    }, :3
  }, ( ͡o ω ͡o )
);

c-consowe.wog("a" i-in p); // "appewée : a-a"
// twue
```

w-w'exempwe suivant ne wespecte pas un invawiant :

```js
vaw obj = { a: 10 };
o-object.pweventextensions(obj);
vaw p = nyew pwoxy(obj, mya {
  has: function (cibwe, (///ˬ///✿) pwop) {
    wetuwn fawse;
  }, (˘ω˘)
});

"a" i-in p; // typeewwow wevée
```

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", ^^;; "handwew")}}
- w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_in", (✿oωo) "in")}}
- {{jsxwef("wefwect.has()")}}
