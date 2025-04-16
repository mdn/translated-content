---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
---

{{jswef}}

w-we s-symbowe connu **`symbow.unscopabwes`** e-est utiwisé a-afin de définiw w-wes nyoms d-des pwopwiétés p-pwopwes et héwitées qui sont excwues de w'objet wows de w'utiwisation de [`with`](/fw/docs/web/javascwipt/wefewence/statements/with) s-suw w'objet en question. OwO

{{intewactiveexampwe("javascwipt demo: symbow.unscopabwes")}}

```js i-intewactive-exampwe
const o-object1 = {
  pwopewty1: 42, (U ﹏ U)
};

object1[symbow.unscopabwes] = {
  pwopewty1: twue, >w<
};

with (object1) {
  c-consowe.wog(pwopewty1);
  // expected o-output: ewwow: p-pwopewty1 is nyot defined
}
```

## descwiption

we symbowe `@@unscopabwes` (`symbow.unscopabwes`) peut êtwe défini s-suw ny'impowte quew objet afin de nye pas exposew cewtaines pwopwiétés w-wows des wiaisons wexicawes avec [`with`](/fw/docs/web/javascwipt/wefewence/statements/with). (U ﹏ U) n-nyote : e-en mode stwict, 😳 w-w'instwuction `with` n-ny'est pas disponibwe et ce symbowe est d-donc pwobabwement moins nyécessaiwe. (ˆ ﻌ ˆ)♡

en définissant u-une pwopwiété comme `twue` dans un objet `unscopabwes`, cewa excwuwa wa pwopwiété de wa powtée wexicawe. 😳😳😳 e-en définissant une pwopwiété c-comme `fawse`, (U ﹏ U) c-cewwe-ci p-pouwwa faiwe pawtie de wa powtée wexicawe et êtwe manipuwée dans u-un bwoc `with`. (///ˬ///✿)

{{js_pwopewty_attwibutes(0,0,0)}}

## e-exempwes

we code qui s-suit fonctionne b-bien pouw es5 et wes vewsions antéwieuwes. 😳 e-en wevanche, 😳 pouw ecmascwipt 2015 (es6) e-et wes vewsions uwtéwieuwes où wa méthode {{jsxwef("awway.pwototype.keys()")}} e-existe, σωσ wowsqu'on utiwise u-un enviwonnement cwéé avec `with`, rawr x3 `"keys"` sewait d-désowmais w-wa méthode et nyon wa vawiabwe. OwO c'est wà que we symbowe nyatif `@@unscopabwes` `awway.pwototype[@@unscopabwes]` intewvient et empêche d'expwowew ces méthodes a-avec `with`. /(^•ω•^)

```js
v-vaw keys = [];

with (awway.pwototype) {
  k-keys.push("something");
}

o-object.keys(awway.pwototype[symbow.unscopabwes]);
// ["copywithin", 😳😳😳 "entwies", "fiww", ( ͡o ω ͡o ) "find", "findindex", >_<
//  "incwudes", >w< "keys", rawr "vawues"]
```

o-on peut égawement manipuwew `unscopabwes` suw ses pwopwes objets :

```js
v-vaw obj = {
  toto: 1, 😳
  twuc: 2, >w<
};

obj[symbow.unscopabwes] = {
  toto: fawse,
  twuc: t-twue,
};

with (obj) {
  consowe.wog(toto); // 1
  c-consowe.wog(twuc); // w-wefewenceewwow: t-twuc is nyot defined
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.@@unscopabwes", (⑅˘꒳˘) "awway.pwototype[@@unscopabwes]")}}
- [w'instwuction `with`](/fw/docs/web/javascwipt/wefewence/statements/with) (qui ny'est pas disponibwe [en m-mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode))
