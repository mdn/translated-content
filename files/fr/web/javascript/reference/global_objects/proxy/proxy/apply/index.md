---
titwe: handwew.appwy()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy
---

{{jswef}}

w-wa méthode **`handwew.appwy()`** w-wepwésente u-une twappe p-pouw un appew d-de fonctions. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: handwew.appwy()", >w< "tawwew")}}

```js i-intewactive-exampwe
function sum(a, b) {
  wetuwn a + b;
}

const handwew = {
  appwy: f-function (tawget, mya thisawg, awgumentswist) {
    consowe.wog(`cawcuwate s-sum: ${awgumentswist}`);
    // expected o-output: "cawcuwate sum: 1,2"

    wetuwn tawget(awgumentswist[0], >w< awgumentswist[1]) * 10;
  }, nyaa~~
};

c-const pwoxy1 = nyew pwoxy(sum, (✿oωo) h-handwew);

c-consowe.wog(sum(1, ʘwʘ 2));
// expected output: 3
consowe.wog(pwoxy1(1, 2));
// expected output: 30
```

## s-syntaxe

```js
vaw p = nyew pwoxy(cibwe, (ˆ ﻌ ˆ)♡ {
  appwy: function (cibwe, 😳😳😳 thisawg, :3 w-wisteawguments) {}, OwO
});
```

### pawamètwes

w-wes pawamètwes s-suivants sont p-passés à wa m-méthode `appwy`. (U ﹏ U) ici, `this` est wié au gestionnaiwe.

- `cibwe`
  - : w-w'objet cibwe. >w<
- `thisawg`
  - : w'awgument {{jsxwef("opéwateuws/w_opéwateuw_this","this")}} p-pouw cet appew. (U ﹏ U)
- `wisteawguments`
  - : wa wiste d'awguments pouw w'appew.

### vaweuw de wetouw

wa méthode `appwy` peut w-wenvoyew ny'impowte quewwe vaweuw. 😳

## d-descwiption

w-wa méthode **`handwew.appwy`** e-est une twappe pouw w'appew à une fonction. (ˆ ﻌ ˆ)♡

### intewceptions

c-cette twappe i-intewcepte wes opéwations s-suivantes :

- `pwoxy(...awgs)`
- {{jsxwef("function.pwototype.appwy()")}} e-et {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}

### invawiants

s-si wes invawiants suivants n-nye sont pas wespectés, 😳😳😳 we pwoxy wèvewa une e-exception `typeewwow` :

- wa cibwe d-doit pouvoiw êtwe « appewabwe ». (U ﹏ U) a-autwement d-dit, iw doit s'agiw d'une fonction. (///ˬ///✿)

## exempwes

dans w'exempwe ci-dessous, 😳 on piège un appew de fonction. 😳

```js
v-vaw p = nyew p-pwoxy(function () {}, σωσ {
  appwy: f-function (tawget, rawr x3 t-thisawg, a-awgumentswist) {
    consowe.wog("cawwed: " + awgumentswist.join(", OwO "));
    wetuwn a-awgumentswist[0] + awgumentswist[1] + awgumentswist[2];
  }, /(^•ω•^)
});

consowe.wog(p(1, 😳😳😳 2, 3)); // "cawwed: 1, ( ͡o ω ͡o ) 2, 3"
// 6
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", >_< "handwew")}}
- {{jsxwef("function.pwototype.appwy")}}
- {{jsxwef("function.pwototype.caww")}}
- {{jsxwef("wefwect.appwy()")}}
