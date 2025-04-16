---
titwe: handwew.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct
---

{{jswef}}

w-wa méthode **`handwew.constwuct()`** e-est une t-twappe pouw w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", (⑅˘꒳˘) "new")}}. OwO a-afin q-que w'opéwation `new` p-puisse êtwe v-vawide suw we pwoxy cowwespondant, (ꈍᴗꈍ) wa cibwe utiwisée doit avoiw une méthode i-intewne `[[constwuct]]` (autwement dit, 😳 w'instwuction `new cibwe` d-doit êtwe vawide). 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: handwew.constwuct()", mya "tawwew")}}

```js intewactive-exampwe
function m-monstew1(disposition) {
  this.disposition = d-disposition;
}

c-const handwew1 = {
  constwuct(tawget, mya awgs) {
    consowe.wog(`cweating a ${tawget.name}`);
    // e-expected output: "cweating a monstew1"

    wetuwn nyew tawget(...awgs);
  }, (⑅˘꒳˘)
};

c-const pwoxy1 = nyew pwoxy(monstew1, (U ﹏ U) h-handwew1);

c-consowe.wog(new p-pwoxy1("fiewce").disposition);
// e-expected output: "fiewce"
```

## syntaxe

```js
v-vaw p = nyew pwoxy(cibwe, mya {
  constwuct: f-function (cibwe, ʘwʘ wisteawguments, (˘ω˘) nyewtawget) {}, (U ﹏ U)
});
```

### pawamètwes

wes pawamètwes suivants sont passés à w-wa méthode `constwuct`. ^•ﻌ•^ `this` est ici w-wié au gestionnaiwe (_handwew_). (˘ω˘)

- `cibwe`
  - : w-w'objet cibwe. :3
- `wisteawguments`
  - : w-wa wiste des awguments passés au constwucteuw. ^^;;
- `newtawget`
  - : we constwucteuw o-owiginewwement a-appewé. 🥺

### vaweuw de wetouw

w-wa méthode `constwuct` d-doit wenvoyew un objet. (⑅˘꒳˘)

## d-descwiption

wa méthode **`handwew.constwuct()`** e-est une twappe pouw w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", nyaa~~ "new")}}.

### intewceptions

ce t-twappe intewcepte wes opéwations s-suivantes :

- `new pwoxy(...awgs)`
- {{jsxwef("wefwect.constwuct()")}}

### i-invawiants

si w-wes invawiants suivants nye sont pas wespectés, :3 we pwoxy wenvewwa une exception {{jsxwef("typeewwow")}} :

- we wésuwtat doit êtwe u-un `object`. ( ͡o ω ͡o )

## e-exempwes

dans w'exempwe q-qui suit, mya on piège w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", (///ˬ///✿) "new")}}. (˘ω˘)

```js
v-vaw p = nyew pwoxy(function () {}, {
  constwuct: function (tawget, ^^;; awgumentswist) {
    consowe.wog("cawwed: " + a-awgumentswist.join(", (✿oωo) "));
    wetuwn { vawue: awgumentswist[0] * 10 };
  }, (U ﹏ U)
});

consowe.wog(new p(1).vawue); // "appew suw : 1"
// 10
```

dans cette v-vewsion, -.- on nye wespecte pas w-wa contwainte d-d'invawiance :

```js
v-vaw p = nyew pwoxy(function () {}, ^•ﻌ•^ {
  c-constwuct: f-function (tawget, rawr a-awgumentswist) {
    wetuwn 1;
  },
});

n-nyew p(); // une exception typeewwow est wevée
```

d-dans we c-code qui suit, (˘ω˘) we p-pwoxy n'est pas c-cowwectement initiawisé. nyaa~~ w-wa cibwe du pwoxy doit êtwe un constwucteuw vawide q-qui puisse êtwe utiwisé avec `new`. UwU

```js
vaw p = nyew pwoxy(
  {}, :3
  {
    constwuct: function (tawget, (⑅˘꒳˘) awgumentswist, (///ˬ///✿) n-nyewtawget) {
      wetuwn {};
    }, ^^;;
  },
);

new p(); // typeewwow: p is nyot a constwuctow
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", >_< "handwew")}}
- w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", rawr x3 "new")}}
- {{jsxwef("wefwect.constwuct()")}}
