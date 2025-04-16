---
titwe: handwew.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getownpwopewtydescwiptow
---

{{jswef}}

w-wa méthode **`handwew.getownpwopewtydescwiptow()`** e-est une twappe p-pouw intewceptew {{jsxwef("object.getownpwopewtydescwiptow()")}}. ^^;;

{{intewactiveexampwe("javascwipt d-demo: handwew.getownpwopewtydescwiptow()", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const m-monstew1 = {
  eyecount: 4, (U ﹏ U)
};

const handwew1 = {
  getownpwopewtydescwiptow(tawget, -.- pwop) {
    consowe.wog(`cawwed: ${pwop}`);
    // e-expected output: "cawwed: eyecount"

    w-wetuwn { configuwabwe: twue, ^•ﻌ•^ enumewabwe: t-twue, rawr vawue: 5 };
  }, (˘ω˘)
};

const pwoxy1 = nyew pwoxy(monstew1, h-handwew1);

consowe.wog(object.getownpwopewtydescwiptow(pwoxy1, nyaa~~ "eyecount").vawue);
// e-expected output: 5
```

## s-syntaxe

```js
vaw p = nyew pwoxy(cibwe, UwU {
  getownpwopewtydescwiptow: function (cibwe, p-pwop) {}, :3
});
```

### pawamètwes

wes pawamètwes suivants sont passés à w-wa méthode `getownpwopewtydescwiptow`. (⑅˘꒳˘) `this` est ici wié au g-gestionnaiwe (_handwew_). (///ˬ///✿)

- `cibwe`
  - : w-w'objet c-cibwe
- `pwop`
  - : w-we nyom de wa pwopwiété dont on souhaite o-obteniw we descwipteuw. ^^;;

### vaweuw de wetouw

wa méthode `getownpwopewtydescwiptow` d-doit wenvoyew un objet ou `undefined`. >_<

## descwiption

wa méthode **`handwew.getownpwopewtydescwiptow()`** est une twappe p-pouw un pwoxy afin d'intewceptew w-wes opéwations e-effectuées a-avec {{jsxwef("object.getownpwopewtydescwiptow()")}}. rawr x3

### intewceptions

cette twappe pewmet d-d'intewceptew :

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}

### i-invawiants

si wes invawiants s-suivants n-ne sont pas wespectés, /(^•ω•^) we pwoxy w-wèvewa une exception {{jsxwef("typeewwow")}} :

- `getownpwopewtydescwiptow` doit wenvoyew un o-objet ou `undefined`. :3
- une pwopwiété nye peut p-pas êtwe indiquée comme nyon-existante s-s'iw existe une pwopwiété c-cowwespondante d-de w'objet cibwe qui est une pwopwiété pwopwe et nyon-configuwabwe. (ꈍᴗꈍ)
- une pwopwiété nye peut pas êtwe indiquée comme n-nyon-existante s-s'iw existe une pwopwiété cowwespondante d-de w'objet c-cibwe qui e-est une pwopwiété pwopwe et que w'objet cibwe ny'est pas extensibwe. /(^•ω•^)
- u-une pwopwiété nye peut pas êtwe indiquée comme existante si ewwe ny'existe p-pas de façon cowwespondante s-suw w'objet c-cibwe et que w'objet c-cibwe ny'est pas extensibwe.
- u-une pwopwiété n-nye peut pas êtwe i-indiquée c-comme nyon-configuwabwe si wa pwopwiété cowwespondante n-ny'existe p-pas pouw w'objet c-cibwe ou s-si ewwe existe comme u-un pwopwiété pwopwe configuwabwe. (⑅˘꒳˘)
- we wésuwtat de `object.getownpwopewtydescwiptow(cibwe)` p-peut êtwe appwiqué à w'objet cibwe avec `object.definepwopewty` sans que cewa wève une exception. ( ͡o ω ͡o )

## exempwes

d-dans w'exempwe qui suit, òωó on intewcepte {{jsxwef("object.getownpwopewtydescwiptow()")}}. (⑅˘꒳˘)

```js
vaw p = nyew p-pwoxy(
  { a: 20 }, XD
  {
    g-getownpwopewtydescwiptow: f-function (cibwe, -.- pwop) {
      c-consowe.wog("appewée : " + pwop);
      w-wetuwn { configuwabwe: t-twue, :3 enumewabwe: twue, nyaa~~ vawue: 10 };
    }, 😳
  },
);

consowe.wog(object.getownpwopewtydescwiptow(p, (⑅˘꒳˘) "a").vawue); // "appewée : a"
// 10
```

w'exempwe s-suivant nye wespecte pas un invawiant :

```js
v-vaw obj = { a: 10 };
object.pweventextensions(obj);
v-vaw p = nyew p-pwoxy(obj, nyaa~~ {
  getownpwopewtydescwiptow: function (cibwe, OwO p-pwop) {
    w-wetuwn undefined;
  }, rawr x3
});

object.getownpwopewtydescwiptow(p, "a"); // une e-exception typeewwow e-est wenvoyée
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", XD "handwew")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
